using System;
using System.Net;
using System.Net.Mail;
using Server.Models;

namespace Server.Models
{
    public class Email
    {
        public string SendRegistrationEmail(User recipient)
        {
            MailMessage mail = new MailMessage();

            mail.From = new MailAddress("CookieNapServices@gmail.com");
            mail.To.Add(recipient.CommunicationEmail);
            mail.Subject = "Cookie Nap Account Registration";

            string confirmationCode = Guid.NewGuid().ToString("n").Substring(0, 8);
            mail.Body = string.Format("Welcome to Cookie Nap! Here is your confirmation code: {0}", confirmationCode);    //When creating an account, go to window to enter this code after click 'register'
            mail.IsBodyHtml = false;

            SmtpClient smtp = new SmtpClient("smtp.google.com", 587);
            smtp.Credentials = new NetworkCredential("CookieNapServices@gmail.com", "c00kienap");
            smtp.EnableSsl = true;
            smtp.Send(mail);

            return confirmationCode;
        }

        public void UserRequestedInfoEmail(User recipient, Listing listing)
        {
            MailMessage mail = new MailMessage();

            mail.From = new MailAddress("CookieNapServices@gmail.com");
            mail.To.Add(recipient.CommunicationEmail);
            mail.Subject = "A User Has Requested Your Contact Information";

            mail.Body = string.Format("A user has requested your contact information after viewing one of your listings. <a href='url'>Please click here to allow this user to view your email address.</a> Otherwise, you may ignore this message.");  //enter correct url when ready
            mail.IsBodyHtml = true;

            SmtpClient smtp = new SmtpClient("smtp.google.com", 587);
            smtp.Credentials = new NetworkCredential("CookieNapServices@gmail.com", "c00kienap");
            smtp.EnableSsl = true;
            smtp.Send(mail);
        }

        public string ResetPasswordEmail(User recipient)
        {
            MailMessage mail = new MailMessage();

            mail.From = new MailAddress("CookieNapServices@gmail.com");
            mail.To.Add(recipient.CommunicationEmail);
            mail.Subject = "Reset Your Cookie Nap Password";

            mail.Body = "You have requested to have your password reset. <a href='url'>Please click here to reset the password.</a>";   //enter correct url when ready
            mail.IsBodyHtml = true;

            SmtpClient smtp = new SmtpClient("smtp.google.com", 587);
            smtp.Credentials = new NetworkCredential("CookieNapServices@gmail.com", "c00kienap");
            smtp.EnableSsl = true;
            smtp.Send(mail);
        }
    }
}