using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Models;
using System.Collections.Generic;
using Server.Controllers.HttpJson;

namespace Server.Controllers
{
    public class ListingsController : Controller
    {
        private DatabaseConnection _dbc = new DatabaseConnection();

        // GET: Listings
        [HttpGet]
        public List<Listing> Index()
        {
            return _dbc.GetAllListings();
        }

        // GET: Listings/Search
        [HttpGet]
        public List<Listing> Search(string isbn)
        {
            return _dbc.SetListingsForBook(isbn);
        }

        // GET: Listings/Details/5
        [HttpGet]
        public Listing Details(int id)
        {
            return _dbc.GetListing(id);
        }

        // POST: Listings/Create
        [HttpPost]
        public bool Create([FromBody] ListingJson listing)
        {
            if (ModelState.IsValid)
            {
                User owner = _dbc.GetUserWithUsername(listing.ListingCreatorUserName);
                Listing newListing = new Listing(listing.Price,listing.Condition,listing.ISBN,listing.ListingType,owner.UserID);
                _dbc.InsertListing(newListing);
                return true;
            }
            return false;
        }

        // GET: Listings/Edit/5
        [HttpGet]
        public Listing Edit(int id)
        {
            return _dbc.GetListing(id);
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
        public void Delete(int id)
        {
             _dbc.DeleteListingByID(id); 
        }


        // GET: Listings/Creator/5
        [HttpGet]
        public User Creator(int id)
        {
            return _dbc.GetUser(id);
        }

        private bool ListingExists(int id)
        {
            return _dbc.GetListing(id) == null ? false : true;
        }
    }
}
