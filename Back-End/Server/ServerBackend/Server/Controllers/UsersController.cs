using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Models;
using Server.Helpers;
using Server.Controllers.HttpJson;
using static Server.Models.User;
using System.Text.RegularExpressions;

namespace Server.Controllers
{
    public class UsersController : Controller
    {
        private DatabaseConnection _dbc = new DatabaseConnection();
        private Email _email = new Email();

        // GET: Users/Details/5
        [HttpGet]
        public User Details(int id)
        {
            return _dbc.GetUser(id);
        }

        // POST: Users/Create
        [HttpPost]
        public string Create([FromBody] UserJson user)
        {
            if (ModelState.IsValid)
            {
                    Password pwdInstance = new Password(user.Password);
                    User userInstance = new User(user.UserName, user.FirstName, user.LastName, user.HuskerEmail, user.CommunicationEmail, pwdInstance);
                    userInstance.UserID = _dbc.InsertUser(userInstance);
                    return JWTAuthentication.GenerateToken(user.UserName);
            }
            return "GeneralFail";
        }

        // GET: Users/Edit/5
        [HttpGet]
        public User Edit(int id)
        {
            return _dbc.GetUser(id);
        }

        // POST: Users/Edit/5
        [HttpPost]
        public bool Edit(string id, [Bind("UserName,FirstName,LastName,HuskerEmail,CommunicationEmail")] User user)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    _dbc.UpdateEmails(user.HuskerEmail, user.CommunicationEmail, user.UserName);
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!UserExists(user.UserID))
                    {
                        return false;
                    }
                    else
                    {
                        throw;
                    }
                }
                return true;
            }
            return false;
        }

        // POST: Users/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public bool DeleteConfirmed(int id)
        {
            _dbc.DeleteUser(id);
            return true;
        }

        // POST: Users/Login
        [HttpPost]
        public string Login([FromBody] UserSignInJson info)
        {
            Password password = new Password(info.Password);
            var result = password.VerifyPassword(info.UserName, info.Password);
            
            if(result == Password.Verification.PasswordFail)
            {
                return "Login Failed";
            }
            else if(result == Password.Verification.UsernameFail)
            {
                return "Login Failed";
            }
            else
            {
                return JWTAuthentication.GenerateToken(info.UserName);
            }
        }

        // Post: Users/SendResetEmail
        [HttpPost]
        public string SendResetEmail([FromBody] UserJson user)
        {
            return _email.ResetPasswordEmail(user.UserName);
        }

        // Post: Users/Reset
        [HttpPost]
        public void Reset([FromBody] UserJson user)
        {
            Password password = new Password();
            password.StorePassword(user.UserName, user.Password);
        }

        // Post: Users/Confirm
        [HttpPost]
        public string Confirm([FromBody] UserJson user)
        {
            return _email.SendRegistrationEmail(user);
        }

        // Post: Users/Validate
        [HttpPost]
        public string Validate([FromBody] UserJson user)
        {
            bool uniqueUsername = _dbc.CheckUniqueUsername(user.UserName);
            bool uniqueHuskerEmail = _dbc.CheckUniqueHuskerEmail(user.HuskerEmail);

            if (!uniqueUsername || !uniqueHuskerEmail)
            {
                return !uniqueUsername ? "UsernameFail" : "EmailFail";
            }
            return "Success";
        }

        private bool UserExists(int id)
        {
            return _dbc.GetUser(id) == null ? false : true;
        }
    }
}
