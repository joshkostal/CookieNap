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
        }
    }
}
