using System;
using System.Security.Cryptography;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace Server.Helpers
{
    public class JWTAuthentication
    {
        public static void CreateSecretKey(){
            var hmac = new HMACSHA256();
            String secretKey = Convert.ToBase64String(hmac.Key);
        }
        private const string SecretKey = "7fpjm8pneKs3+KT/7aeuRs6+wMGnEy0sLMN1fTlRNFacNQKkxHIMtIuDSnpWhyDrnizO5t+d5hBL6PCX+hj9/A==";

        public static string GenerateToken(string username){
            int expireTime = 60;

            var symmetricKey = Convert.FromBase64String(SecretKey);
            var tokenHandler = new JwtSecurityTokenHandler();

            var now = DateTime.UtcNow;
            var tokenDescriptor = new SecurityTokenDescriptor{

                Subject = new ClaimsIdentity(new[]
                        {
                            new Claim(ClaimTypes.Name, username)
                        }),

                Expires = now.AddMinutes(Convert.ToInt32(expireTime)),

                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(symmetricKey), SecurityAlgorithms.HmacSha256Signature)    
            };

            var stoken = tokenHandler.CreateToken(tokenDescriptor);
            var token = tokenHandler.WriteToken(stoken);

            return token;
        }
    }
}
