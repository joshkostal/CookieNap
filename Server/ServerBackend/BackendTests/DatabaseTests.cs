using Microsoft.VisualStudio.TestTools.UnitTesting;
using Server.Models;
using System;

namespace BackendTests
{
    [TestClass]
    public class DatabaseTests
    {
        private DatabaseConnection _dbc = new DatabaseConnection();
        private static Book book = new Book("1259446298");
        private static User user = new User("gwashington", "george", "washington", "george.washington@huskers.unl.edu", "gwash@gmail.com"); //Create local versions where needed
        private Listing listing = new Listing(5, Listing.ConditionTypes.Good, book, Listing.ListingTypes.Sell, user);   //Create local versions where needed- anywhere listing is altered

        [TestMethod]
        public void InsertGetAndDeleteUserTest()
        {
            //Arrange
            user = _dbc.InsertUser(user);

            //Act
            User returnedUser = _dbc.GetUser(user.UserID);

            //Tear Down
            _dbc.DeleteUser(user);

            //Assert
            Assert.AreEqual(user, returnedUser);
        }

        [TestMethod]
        public void UpdateEmailsTest()
        {
            //Arrange
            user = _dbc.InsertUser(user);

            //Act
            _dbc.UpdateEmails("abe.lincoln@huskers.unl.edu", "abeyLink@gmail.com", user.UserName);
            User returnedUser = _dbc.GetUser(user.UserID);

            //Tear Down
            _dbc.DeleteUser(user);

            //Assert
            Assert.AreEqual(user.CommunicationEmail, returnedUser.CommunicationEmail);
            Assert.AreEqual(user.HuskerEmail, returnedUser.HuskerEmail);
        }

        [TestMethod]
        public void InsertGetAndDeleteBListingTest()
        {
            //Arrange
            user.UserID = 1;
            listing = _dbc.InsertListing(listing);

            //Act
            Listing returnedListing = _dbc.GetListing(listing.ListingID);

            //Tear Down
            _dbc.DeleteListingByID(listing.ListingID);

            //Assert
            Assert.AreEqual(listing, returnedListing);
        }

        [TestMethod]
        public void UpdateBookPriceTest()
        {
            //Arrange
            listing = _dbc.InsertListing(listing);
            listing.Price = 8;

            //Act
            listing = _dbc.UpdateBookPrice(listing);
            Listing updatedListing = _dbc.GetListing(listing.ListingID);

            //Tear Down
            _dbc.DeleteListingByID(listing.ListingID);

            //Assert
            Assert.AreEqual(listing.Price, updatedListing.Price);
        }

        [TestMethod]
        public void DeleteListingByDateTest()
        {
            //Arrange
            listing = _dbc.InsertListing(listing);

            //Act
            _dbc.DeleteListingByDate(DateTime.Today);

            var id = listing.ListingID;
            listing = _dbc.GetListing(id);

            //Tear Down
            _dbc.DeleteListingByID(id);

            //Assert
            Assert.IsNull(listing);
        }

        [TestMethod]
        public void DeleteListingsPastDeletionDateTest()
        {
            //Arrange
            listing.LastDateEdited = new DateTime(2000, 1, 1);
            listing = _dbc.InsertListing(listing);

            //Act
            _dbc.DeleteListingsPastDeletionDate();

            var id = listing.ListingID;
            listing = _dbc.GetListing(id);

            //Tear Down
            _dbc.DeleteListingByID(id);

            //Assert
            Assert.IsNull(listing);
        }

        [TestMethod]
        public void GetAllListingsTest()
        {
            //Arrange

            
            //Act


            //Assert


            //Tear Down
        }

        [TestMethod]
        public void FindBooksListedTest()
        {
            //Arrange


            //Act


            //Assert


            //Tear Down
        }

        [TestMethod]
        public void SetListingsForBookTest()
        {
            //Arrange


            //Act


            //Assert


            //Tear Down
        }

        [TestMethod]
        public void SetListingsForUserTest()
        {
            //Arrange


            //Act


            //Assert


            //Tear Down
        }

        [TestMethod]
        public void RetrievePasswordTest()
        {
            //Arrange


            //Act


            //Assert


            //Tear Down
        }

        [TestMethod]
        public void StorePasswordTest()
        {
            //Arrange


            //Act


            //Assert


            //Tear Down
        }

        [TestMethod]
        public void CheckUniqueUsernameTest()
        {
            //Arrange


            //Act


            //Assert


            //Tear Down
        }

        [TestMethod]
        public void CheckUniqueHuskerEmailTest()
        {
            //Arrange


            //Act


            //Assert


            //Tear Down
        }
    }
}
