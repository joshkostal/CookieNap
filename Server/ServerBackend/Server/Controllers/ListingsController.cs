using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Models;
using System.Collections.Generic;
using System.Linq;

namespace Server.Controllers
{
    public class ListingsController : Controller
    {
        private readonly ServerContext _context;
        DatabaseConnection _dbc = new DatabaseConnection();

        public ListingsController(ServerContext context)
        {
            _context = context;
        }

        // GET: Listings
        public IActionResult Index()
        {
            List<Listing> listings = _dbc.GetAllListings();
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
        public IActionResult Create([Bind("Price,Condition,LastDateEdited,ListingType,ListingID,ListingCreator")] Listing listing)
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

        private bool ListingExists(int id)
        {
            return _context.Listing.Any(e => e.ListingID == id);
        }
    }
}
