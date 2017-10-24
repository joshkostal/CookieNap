using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Security.Cryptography;

namespace Server.Models
{
    public class User
    {
        public User(string username, string firstName, string lastName, string huskerEmail, string communicationEmail, Password userPassword)
        {
            UserName = username;
            FirstName = firstName;
            LastName = lastName;
            HuskerEmail = huskerEmail;
            CommunicationEmail = communicationEmail;
            UserPassword = userPassword;
        }
        [Key]
        [Required]
        public string UserName { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        [Required]
        [RegularExpression("^[a-zA-Z0-9]+@huskers.unl.edu$", ErrorMessage = "This is not a Husker email")]
        public string HuskerEmail { get; set; }

        [Required]
        [DataType(DataType.EmailAddress)]
        [EmailAddress]
        public string CommunicationEmail { get; set; }  //Can use DataAnnotationsExtensions if we are using .Net 4.5

        [Required]
        public Password UserPassword { get; set; }

        public List<Listing> ListingsForUser { get; set; }

        public class Password
        {
            public Password(string hashedPassword)
            {
                HashedPassword = hashedPassword;
            }
            [Key]
            public string HashedPassword { get; set; }
            
            public bool VerifyPassword(string inputtedUsername, string inputtedPassword)
            {
                DatabaseConnection dbc = new DatabaseConnection();
                dbc.Initialize();
                string correctPassword = dbc.RetrievePassword(inputtedUsername);

                if(correctPassword != null)
                {
                    byte[] hashBytes = Convert.FromBase64String(correctPassword);
                    byte[] salt = new byte[16];
                    Array.Copy(hashBytes, 0, salt, 0, 16);

                    var hashedAndSaltedPassword = new Rfc2898DeriveBytes(inputtedPassword, salt, 10000);
                    byte[] hash = hashedAndSaltedPassword.GetBytes(20);

                    bool valid = true;
                    for(int i=0; i<20; i++)
                    {
                        if(hashBytes[i+16] != hash[i])
                        {
                            valid = false;
                        }
                    }
                    return valid;
                }
                else
                {
                    return false;
                }
            }

            public void StorePassword(string inputtedUsername, string inputtedPassword)
            {
                byte[] salt;
                new RNGCryptoServiceProvider().GetBytes(salt = new byte[16]);

                var hash = new Rfc2898DeriveBytes(inputtedPassword, salt, 10000);
                byte[] hashedPassword = hash.GetBytes(20);

                var hashedAndSaltedPassword = new byte[36];

                Array.Copy(salt, 0, hashedAndSaltedPassword, 0, 16);
                Array.Copy(hashedPassword, 0, hashedAndSaltedPassword, 16, 20);

                string storedPassword = Convert.ToBase64String(hashedAndSaltedPassword);

                DatabaseConnection dbc = new DatabaseConnection();
                dbc.Initialize();
                dbc.StorePassword(inputtedUsername, storedPassword);
            }
        }
    }
}
