using System;
using System.Net;
using System.Net.Mail;
using Server.Models;

namespace Server.Models
{
    public class Email
    {
        private string emailAccount = "CookieNapServices@gmail.com";
        private string password = "c00kienap";
        private string smtpClient = "smtp.google.com";

        public string SendRegistrationEmail(User recipient)
        {
            MailMessage mail = new MailMessage();         //Confirm this is a valid Husker email

            mail.From = new MailAddress(emailAccount);
            mail.To.Add(recipient.HuskerEmail);
            mail.Subject = "Cookie Nap Account Registration";

            string randomChars = Guid.NewGuid().ToString("n").Substring(0, 8);
            string url = string.Format("www.cookienap.com/reset/{0}", randomChars);    //will need to change url after deployment to real url
            
            mail.Body = string.Format("Welcome to Cookie Nap! <a href='{0}'>Please click here to complete your account registration.</a>", url);
            mail.IsBodyHtml = true;

            SmtpClient smtp = new SmtpClient(smtpClient, 587);
            smtp.Credentials = new NetworkCredential(emailAccount, password);
            smtp.EnableSsl = true;
            smtp.Send(mail);

            return url;
        }

        public void UserRequestedInfoEmail(User recipient, Listing listing)
        {
            MailMessage mail = new MailMessage();

            mail.From = new MailAddress(emailAccount);
            mail.To.Add(recipient.CommunicationEmail);
            mail.Subject = "A User Has Requested Your Contact Information";

            mail.Body = string.Format("A user has requested your contact information after viewing one of your listings. <a href='url'>Please click here to allow this user to view your email address.</a> Otherwise, you may ignore this message.");  //enter correct url when ready
            mail.IsBodyHtml = true;

            SmtpClient smtp = new SmtpClient(smtpClient, 587);
            smtp.Credentials = new NetworkCredential(emailAccount, password);
            smtp.EnableSsl = true;
            smtp.Send(mail);
        }

        public string ResetPasswordEmail(User recipient)
        {
            MailMessage mail = new MailMessage();

            mail.From = new MailAddress(emailAccount);
            mail.To.Add(recipient.CommunicationEmail);
            mail.Subject = "Reset Your Cookie Nap Password";

            string randomChars = Guid.NewGuid().ToString("n").Substring(0, 8);
            string url = string.Format("www.cookienap.com/reset/{0}", randomChars);    //will need to change url after deployment to real url

            mail.Body = string.Format("You have requested to have your password reset. <a href='{0}'>Please click here to reset the password.</a>", url);
            mail.IsBodyHtml = true;

            SmtpClient smtp = new SmtpClient(smtpClient, 587);
            smtp.Credentials = new NetworkCredential(emailAccount, password);
            smtp.EnableSsl = true;
            smtp.Send(mail);

            return url;
        }
    }
}