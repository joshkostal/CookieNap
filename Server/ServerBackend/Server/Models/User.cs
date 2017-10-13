using System;

namespace Server.Models
{
    public class User
    {
        public string UserName { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string PrimaryEmail { get; set; }

        public string SecondaryEmail { get; set; }

        public class Password
        {
            public string HashedPassword { get; set; }
            
            public string Salt { get; set; }
        }
    }
}
