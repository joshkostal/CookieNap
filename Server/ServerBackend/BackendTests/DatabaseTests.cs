using Microsoft.VisualStudio.TestTools.UnitTesting;
using Server.Models;

namespace BackendTests
{
    [TestClass]
    public class DatabaseTests
    {
        private DatabaseConnection _dbc = new DatabaseConnection();
        private static Book book = new Book("1259446298");
        private static User user = new User("gwashington", "george", "washington", "george.washington@huskers.unl.edu", "gwash@gmail.com");
        private Listing listing = new Listing(5, Listing.ConditionTypes.Good, book, Listing.ListingTypes.Sell, user);

        [TestMethod]
        public void InsertUserTest()
        {

        }

        [TestMethod]
        public void GetUserTest()
        {

        }

        [TestMethod]
        public void UpdateEmailsTest()
        {

        }

        [TestMethod]
        public void DeleteUserByIdTest()
        {

        }

        [TestMethod]
        public void InsertListingTest()
        {
            //Arrange
            user.UserID = 1;

            //Act
            listing = _dbc.InsertListing(listing);

            //Assert
            Listing listing2 = _dbc.GetListing(listing.ListingID);
            Assert.AreEqual(listing, listing2);
        }

        [TestMethod]
        public void UpdateBookPriceTest()
        {

        }

        [TestMethod]
        public void DeleteListingByIDTest()
        {

        }

        [TestMethod]
        public void DeleteListingByDateTest()
        {

        }

        [TestMethod]
        public void DeleteListingsPastDeletionDateTest()
        {

        }

        [TestMethod]
        public void GetListingTest()
        {

        }

        [TestMethod]
        public void GetAllListingsTest()
        {

        }

        [TestMethod]
        public void FindBooksListedTest()
        {

        }

        [TestMethod]
        public void SetListingsForBookTest()
        {

        }

        [TestMethod]
        public void SetListingsForUserTest()
        {

        }

        [TestMethod]
        public void RetrievePasswordTest()
        {

        }

        [TestMethod]
        public void StorePasswordTest()
        {

        }

        [TestMethod]
        public void CheckUniqueUsernameTest()
        {

        }

        [TestMethod]
        public void CheckUniqueHuskerEmailTest()
        {

        }
    }
}
