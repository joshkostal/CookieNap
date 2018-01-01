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

        public static string GenerateToken(string data)
        {
            int expireTime = 60;

            var symmetricKey = Convert.FromBase64String(SecretKey);
            var tokenHandler = new JwtSecurityTokenHandler();

            var now = DateTime.UtcNow;
            var tokenDescriptor = new SecurityTokenDescriptor
            {

                Subject = new ClaimsIdentity(new[]
                        {
                            new Claim(ClaimTypes.Name, data)
                        }),

                Expires = now.AddMinutes(Convert.ToInt32(expireTime)),

                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(symmetricKey), SecurityAlgorithms.HmacSha256Signature)
            };

            var stoken = tokenHandler.CreateToken(tokenDescriptor);
            var token = tokenHandler.WriteToken(stoken);

            return token;
        }
        public static bool ValidateToken(string token, string data){

            var tokenHandler = new JwtSecurityTokenHandler();
            var jwtToken = tokenHandler.ReadToken(token) as JwtSecurityToken;

            var symmetricKey = Convert.FromBase64String(SecretKey);
            var validationParameters = new TokenValidationParameters()
            {
                RequireExpirationTime = true,
                ValidateIssuer = false,
                ValidateAudience = false,
                IssuerSigningKey = new SymmetricSecurityKey(symmetricKey)
            };
            SecurityToken securityToken;
            var principal = tokenHandler.ValidateToken(token, validationParameters, out securityToken);
            var identity = principal.Identity as ClaimsIdentity;

            if(identity == null || !identity.IsAuthenticated){
                return false;
            }

            if(identity.Name == data){
                return true;
            }else{
                return false;
            }
        }
    }
}
