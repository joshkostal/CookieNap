using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Server.Models;

namespace CookieNapTests
{
    [TestClass]
    public class DatabaseTests
    {
        private DatabaseConnection _dbc = new DatabaseConnection();
        [TestMethod]
        public void InsertListingTest()
        {
            //Arrange
            Book book = new Book("1111111111");
            User user = new User("usrnm", "fname", "lname", "h.s@hsukers.unl.edu", "fl@gmail.com");
            user.UserID = 1;
            Listing listing = new Listing(5, Listing.ConditionTypes.Good, book, Listing.ListingTypes.Sell, user);

            //Act
            listing =_dbc.InsertListing(listing);

            //Assert
            Listing listing2 = _dbc.GetListing(listing.ListingID);
            Assert.Equals(listing,listing2);
        }
    }
}
