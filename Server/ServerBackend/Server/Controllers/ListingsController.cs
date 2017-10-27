using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Models;
using System.Collections.Generic;

namespace Server.Controllers
{
    public class ListingsController : Controller
    {
        private DatabaseConnection _dbc = new DatabaseConnection();

        // GET: Listings
        public IActionResult Index()
        {
            List<Listing> listings = _dbc.GetAllListings();
            return View(listings);
        }

        public IActionResult Search(string isbn)
        {
            List<Listing> listings = _dbc.SetListingsForBook(isbn);
            return View(listings);
        }

        // GET: Listings/Details/5
        public IActionResult Details(int id)
        {
            var listing = _dbc.GetListing(id);
            if (listing == null)
            {
                return NotFound();
            }

            return View(listing);
        }

        // GET: Listings/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Listings/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create([Bind("Price,Condition,ListingType,ListingCreator")] Listing listing)
        {
            if (ModelState.IsValid)
            {
                _dbc.InsertListing(listing);
                return RedirectToAction(nameof(Index));
            }
            return View(listing);
        }

        // GET: Listings/Edit/5
        public IActionResult Edit(int id)
        {
            var listing = _dbc.GetListing(id);
            if (listing == null)
            {
                return NotFound();
            }
            return View(listing);
        }

        // POST: Listings/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Edit(int id, [Bind("Price,Condition,LastDateEdited,ListingType,ListingID")] Listing listing)
        {
            if (id != listing.ListingID)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _dbc.UpdateBookPrice(listing);
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ListingExists(listing.ListingID))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(listing);
        }

        // GET: Listings/Delete/5
        public IActionResult Delete(int id)
        {
            var listing = _dbc.GetListing(id);
            if (listing == null)
            {
                return NotFound();
            }

            return View(listing);
        }

        // POST: Listings/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public IActionResult DeleteConfirmed(int id)
        {
            _dbc.DeleteListingByID(id);
            return RedirectToAction(nameof(Index));
        }

        // GET: Listings/User/5
        public IActionResult User(int id)
        {
            var user = _dbc.GetUser(id);
            if(user == null)
            {
                return NotFound();
            }

            return View(user);
        }

        private bool ListingExists(int id)
        {
            return _dbc.GetListing(id) == null ? false : true;
        }
    }
}
