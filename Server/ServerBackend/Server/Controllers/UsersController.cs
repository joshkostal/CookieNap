using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Models;

namespace Server.Controllers
{
    public class UsersController : Controller
    {
        private DatabaseConnection _dbc = new DatabaseConnection();

        // GET: Users/Details/5
        public IActionResult Details(int id)
        {
            User user = _dbc.GetUser(id);
            if (user == null)
            {
                return NotFound();
            }

            return View(user);
        }

        // GET: Users/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Users/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create([Bind("UserName,FirstName,LastName,HuskerEmail,CommunicationEmail,Password")] User user)
        {
            if (ModelState.IsValid)
            {
                _dbc.InsertUser(user);
                return RedirectToAction(nameof(ListingsController.Index));
            }
            return View(user);
        }

        // GET: Users/Edit/5
        public IActionResult Edit(int id)
        {
            var user = _dbc.GetUser(id);
            if (user == null)
            {
                return NotFound();
            }
            return View(user);
        }

        // POST: Users/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Edit(string id, [Bind("UserName,FirstName,LastName,HuskerEmail,CommunicationEmail")] User user)
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
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(ListingsController.Index));
            }
            return View(user);
        }

        // GET: Users/Delete/5
        public IActionResult Delete(int id)
        {
            var user = _dbc.GetUser(id);
            if (user == null)
            {
                return NotFound();
            }

            return View(user);
        }

        // POST: Users/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public IActionResult DeleteConfirmed(int id)
        {
            _dbc.DeleteUserById(id);
            return RedirectToAction(nameof(ListingsController.Index));
        }

        private bool UserExists(int id)
        {
            return _dbc.GetUser(id) == null ? false : true;
        }

        // GET: Users/Login
        public IActionResult Login()
        {
            return View();
        }
    }
}
