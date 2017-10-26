using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Server.Models;

namespace CookieNapTests
{
    [TestClass]
    public class DatabaseTests
    {
        private DatabaseConnection _dbc = new DatabaseConnection();
        private static Book book = new Book("1259446298");
        private static User user = new User("gwashington", "george", "washington", "george.washington@hsukers.unl.edu", "gwash@gmail.com");
        private Listing listing = new Listing(5, Listing.ConditionTypes.Good, book, Listing.ListingTypes.Sell, user);

        [TestMethod]
        public void InsertListingTest()
        {
            //Arrange
            user.UserID = 1;

            //Act
            listing =_dbc.InsertListing(listing);

            //Assert
            Listing listing2 = _dbc.GetListing(listing.ListingID);
            Assert.AreEqual(listing, listing2);
        }
    }
}
