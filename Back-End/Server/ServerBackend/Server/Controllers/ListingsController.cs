using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Models;
using Server.Helpers;
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
            List<Listing> listingsWithoutDetails = _dbc.GetAllListings();
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
        public bool Create([FromBody] ListingJsonWithJWT listing)
        {
            if (ModelState.IsValid)
            {
                if (JWTAuthentication.ValidateToken(listing.JWT, listing.ListingCreatorUserName)){
                    User owner = _dbc.GetUser(listing.ListingCreatorUserName);
                    Listing newListing = new Listing(listing.Price, listing.Condition, listing.ISBN, listing.ListingType, owner.UserID);
                    _dbc.InsertListing(newListing);
                    return true;
                }else{
                    return false;
                }
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
                    _dbc.UpdateListingPrice(listing);
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
        [HttpPost]
        public string Delete([FromBody] DeleteListingJson listing)
        {
            if (JWTAuthentication.ValidateToken(listing.JWT, _dbc.GetListing(listing.ListingId).ListingCreator.UserName)){
                _dbc.DeleteListing(listing.ListingId);
                return "Success";
            } else {
                return "Not Valid Owner";
            }
        }


        private bool ListingExists(int id)
        {
            return _dbc.GetListing(id) == null ? false : true;
        }
    }
}
