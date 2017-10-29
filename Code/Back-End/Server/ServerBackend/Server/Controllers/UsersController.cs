﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Models;
using Server.Controllers.HttpJson;
using static Server.Models.User;

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
                bool uniqueUsername = _dbc.CheckUniqueUsername(user.UserName);
                bool uniqueHuskerEmail = _dbc.CheckUniqueHuskerEmail(user.HuskerEmail);

                if(!uniqueUsername || !uniqueHuskerEmail)
                {
                    return uniqueUsername ? "UsernameFail" : "EmailFail";
                }
                Password pwdInstance = new Password(user.Password);
                User userInstance = new User(user.UserName, user.FirstName, user.LastName, user.HuskerEmail, user.CommunicationEmail, pwdInstance);
                _dbc.InsertUser(userInstance);
                return "Success";
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
        [HttpPost]
        public string Login([FromBody] UserSignInJson info)
        {
            User user = new User();
            string returnVal = user.UserPassword.VerifyPassword(info.UserName, info.Password) ? info.UserName : "fail";
            return returnVal;
        }

        private bool UserExists(int id)
        {
            return _dbc.GetUser(id) == null ? false : true;
        }
    }
}
