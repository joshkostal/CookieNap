using System;
using System.ComponentModel.DataAnnotations;

namespace Server.Models
{
    public class NewUserConfirmation
    {
        [Key]
        public int NewUserConfirmationId { get; set; }

        [Required]
        public string ConfirmationJwt { get; set; }

        [Required]
        public string UserName { get; set; }

        public NewUserConfirmation(string jwt, string userName)
        {
            ConfirmationJwt = jwt;
            UserName = userName;
        }
    }
}
