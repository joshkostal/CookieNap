using System;
using System.Net;
using System.Net.Mail;

namespace Server.Models
{
    public class Email
    {
        private string emailAccount = "CookieNapServices@gmail.com";
        private string password = "c00kienap";
        private string smtpClient = "smtp.google.com";

        public string SendRegistrationEmail(User recipient)
        {
            string randomChars = Guid.NewGuid().ToString("n").Substring(0, 8);
            string url = string.Format("www.cookienap.com/reset/{0}", randomChars);    //will need to change url after deployment to real url

            MailMessage mail = new MailMessage
            {
                From = new MailAddress(emailAccount),
                Subject = "Cookie Nap Account Registration",
                Body = string.Format("Welcome to Cookie Nap! <a href='{0}'>Please click here to complete your account registration.</a>", url),
                IsBodyHtml = true
            };         
            mail.To.Add(recipient.HuskerEmail);

            SmtpClient smtp = new SmtpClient(smtpClient, 587)
            {
                Credentials = new NetworkCredential(emailAccount, password),
                EnableSsl = true
            };
            smtp.Send(mail);

            return url;
        }

        public string UserRequestedInfoEmail(User recipient, Listing listing)
        {
            string randomChars = Guid.NewGuid().ToString("n").Substring(0, 8);
            string url = string.Format("www.cookienap.com/confirm/{0}", randomChars);    //will need to change url after deployment to real url

            MailMessage mail = new MailMessage
            {
                From = new MailAddress(emailAccount),
                Subject = "A User Has Requested Your Contact Information",
                Body = string.Format("A user has requested your contact information after viewing one of your listings. <a href='{0}'>Please click here to allow this user to view your email address.</a> Otherwise, you may ignore this message.", url),  //enter correct url when ready
                IsBodyHtml = true
            };
            mail.To.Add(recipient.CommunicationEmail);

            SmtpClient smtp = new SmtpClient(smtpClient, 587)
            {
                Credentials = new NetworkCredential(emailAccount, password),
                EnableSsl = true
            };
            smtp.Send(mail);

            return url;
        }

        public string ResetPasswordEmail(User recipient)
        {
            string randomChars = Guid.NewGuid().ToString("n").Substring(0, 8);
            string url = string.Format("www.cookienap.com/reset/{0}", randomChars);    //will need to change url after deployment to real url

            MailMessage mail = new MailMessage
            {
                From = new MailAddress(emailAccount),
                Subject = "Reset Your Cookie Nap Password",
                Body = string.Format("You have requested to have your password reset. <a href='{0}'>Please click here to reset the password.</a>", url),
                IsBodyHtml = true
            };
            mail.To.Add(recipient.CommunicationEmail);

            SmtpClient smtp = new SmtpClient(smtpClient, 587)
            {
                Credentials = new NetworkCredential(emailAccount, password),
                EnableSsl = true
            };
            smtp.Send(mail);

            return url;
        }
    }
}