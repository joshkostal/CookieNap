using System;

namespace Server.Models
{
    public class User
    {
        public User CreateUser(string Username, string FirstName, string LastName, string PrimaryEmail, string SecondaryEmail, Password UserPassword)
        {
            Username = Username;
            FirstName = FirstName;
            LastName = LastName;
            PrimaryEmail = PrimaryEmail;
            SecondaryEmail = SecondaryEmail;
            UserPassword = UserPassword;
        }
        public string UserName { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string PrimaryEmail { get; set; }

        public string SecondaryEmail { get; set; }

        public Password UserPassword { get; set; }

        public class Password
        {
            public string HashedPassword { get; set; }
            
            public string Salt { get; set; }

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
                byte hashedPassword = hash.GetBytes(20);

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
