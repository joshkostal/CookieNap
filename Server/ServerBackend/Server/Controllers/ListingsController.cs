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
        [HttpGet]
        public async System.Threading.Tasks.Task<List<Listing>> Index()
        {
            return await _dbc.GetAllListingsAsync();
        }

        // GET: Listings/Search
        [HttpGet]
        public async System.Threading.Tasks.Task<List<Listing>> Search(string isbn)
        {
            return await _dbc.SetListingsForBookAsync(isbn);
        }

        // GET: Listings/Details/5
        [HttpGet]
        public async System.Threading.Tasks.Task<Listing> Details(int id)
        {
            return await _dbc.GetListingAsync(id);
        }

        // POST: Listings/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public bool Create([Bind("Price,Condition,ListingType,ListingCreator")] Listing listing)
        {
            if (ModelState.IsValid)
            {
                _dbc.InsertListing(listing);
                return true;
            }
            return false;
        }

        // GET: Listings/Edit/5
        [HttpGet]
        public async System.Threading.Tasks.Task<Listing> Edit(int id)
        {
            return await _dbc.GetListingAsync(id);
        }

        // POST: Listings/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public bool Edit(int id, [Bind("Price,Condition,LastDateEdited,ListingType,ListingID")] Listing listing)
        {
            if (id != listing.ListingID)
            {
                return false;
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

        // GET: Listings/Delete/5
        [HttpGet]
        public async System.Threading.Tasks.Task<Listing> Delete(int id)
        {
            return await _dbc.GetListingAsync(id);
        }

        // POST: Listings/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public bool DeleteConfirmed(int id)
        {
            _dbc.DeleteListingByID(id);
            return true;
        }

        // GET: Listings/Creator/5
        [HttpGet]
        public User Creator(int id)
        {
            return _dbc.GetUser(id);
        }

        private bool ListingExists(int id)
        {
            return _dbc.GetListingAsync(id) == null ? false : true;
        }
    }
}
