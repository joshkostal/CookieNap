using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Models;

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
        [ValidateAntiForgeryToken]
        public string Create([Bind("UserName,FirstName,LastName,HuskerEmail,CommunicationEmail,Password")] User user)
        {
            if (ModelState.IsValid)
            {
                bool uniqueUsername = _dbc.CheckUniqueUsername(user.UserName);
                bool uniqueHuskerEmail = _dbc.CheckUniqueHuskerEmail(user.HuskerEmail);

                if(!uniqueUsername || !uniqueHuskerEmail)
                {
                    return uniqueUsername ? "UsernameFail" : "EmailFail";
                }

                _dbc.InsertUser(user);
                return _email.SendRegistrationEmail(user);
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
        [ValidateAntiForgeryToken]
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

        // GET: Users/Delete/5
        [HttpGet]
        public User Delete(int id)
        {
            return _dbc.GetUser(id);
        }

        // POST: Users/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public bool DeleteConfirmed(int id)
        {
            _dbc.DeleteUserById(id);
            return true;
        }

        // POST: Users/Login
        [HttpPost, ActionName("Login")]
        public string Login(string username, string password)
        {
            User user = new User();
            return user.UserPassword.VerifyPassword(username, password) ? username : "fail";
        }

        private bool UserExists(int id)
        {
            return _dbc.GetUser(id) == null ? false : true;
        }
    }
}
