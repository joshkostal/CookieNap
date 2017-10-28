using Microsoft.VisualStudio.TestTools.UnitTesting;
using Server.Models;
using System;
using System.Collections.Generic;

namespace BackendTests
{
    [TestClass]
    public class DatabaseTests
    {
        private DatabaseConnection _dbc = new DatabaseConnection();
        private static Book book = new Book("1259446298");
        private static User.Password pswd = new User.Password("1234");
        private static User user = new User("gwashington", "george", "washington", "george.washington@huskers.unl.edu", "gwash@gmail.com", pswd); //Create local versions where needed
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
        public void InsertGetAndDeleteListingTest()
        {
            //Arrange
            User newUser = user;
            newUser.UserID = 1;
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
            listing.Price = 5;

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
            Listing newListing = listing;
            newListing.LastDateEdited = new DateTime(2000, 1, 1);
            newListing = _dbc.InsertListing(newListing);

            //Act
            _dbc.DeleteListingsPastDeletionDate();

            var id = newListing.ListingID;
            newListing = _dbc.GetListing(id);

            //Tear Down
            _dbc.DeleteListingByID(id);

            //Assert
            Assert.IsNull(newListing);
        }

        [TestMethod]
        public void GetAllListingsTest()
        {
            //Arrange
            List<Listing> initialFoundListings = _dbc.GetAllListings();

            List<Listing> listingsListed = new List<Listing>();

            Book book1 = new Book("1111111111");
            Listing listing1 = listing;
            listing1.BookListed = book1;
            listingsListed.Add(listing1);

            Book book2 = new Book("2222222222");
            Listing listing2 = listing;
            listing2.BookListed = book1;
            listingsListed.Add(listing2);

            Book book3 = new Book("3333333333");
            Listing listing3 = listing;
            listing3.BookListed = book3;
            listingsListed.Add(listing3);

            Book book4 = new Book("4444444444");
            Listing listing4 = listing;
            listing4.BookListed = book4;
            listingsListed.Add(listing4);


            //Act
            List<Listing> newFoundListings = _dbc.GetAllListings();

            //Tear Down
            _dbc.DeleteListingByID(listing1.ListingID);
            _dbc.DeleteListingByID(listing2.ListingID);
            _dbc.DeleteListingByID(listing3.ListingID);
            _dbc.DeleteListingByID(listing4.ListingID);

            //Assert
            Assert.AreEqual(newFoundListings.Count - initialFoundListings.Count, 4);


        }

        [TestMethod]
        public void FindBooksListedTest()
        {
            List<Book> initialFoundBooks = _dbc.FindBooksListed();

            //Arrange
            List<Book> booksListed = new List<Book>();

            Book book1 = new Book("1111111111");
            Listing listing1 = listing;
            listing1.BookListed = book1;
            booksListed.Add(book1);

            Book book2 = new Book("2222222222");
            Listing listing2 = listing;
            listing2.BookListed = book2;
            booksListed.Add(book2);

            Book book3 = new Book("3333333333");
            Listing listing3 = listing;
            listing3.BookListed = book3;
            booksListed.Add(book3);

            Book book4 = new Book("4444444444");
            Listing listing4 = listing;
            listing4.BookListed = book4;
            booksListed.Add(book4);

            Listing listing5 = listing;
            listing5.BookListed = book4;
            booksListed.Add(book4);

            Listing listing6 = listing;
            listing6.BookListed = book4;
            booksListed.Add(book4);

            //Act
            listing1 = _dbc.InsertListing(listing1);
            listing2 = _dbc.InsertListing(listing2);
            listing3 = _dbc.InsertListing(listing3);
            listing4 = _dbc.InsertListing(listing4);
            listing5 = _dbc.InsertListing(listing5);
            listing6 = _dbc.InsertListing(listing6);

            List<Book> newFoundBooks = _dbc.FindBooksListed();

            //Tear Down
            _dbc.DeleteListingByID(listing1.ListingID);
            _dbc.DeleteListingByID(listing2.ListingID);
            _dbc.DeleteListingByID(listing3.ListingID);
            _dbc.DeleteListingByID(listing4.ListingID);
            _dbc.DeleteListingByID(listing5.ListingID);
            _dbc.DeleteListingByID(listing6.ListingID);

            //Assert
            Assert.AreEqual(newFoundBooks.Count - initialFoundBooks.Count, 4);
        }

        [TestMethod]
        public void SetListingsForBookTest()
        {
            //Arrange
            List<Listing> listings = new List<Listing>();

            Book book1 = new Book("1111111111");
            Listing listing1 = listing;
            listing1.BookListed = book1;
            listings.Add(listing1);

            Listing listing2 = listing;
            listing2.BookListed = book1;
            listings.Add(listing2);

            Listing listing3 = listing;
            listing3.BookListed = book1;
            listings.Add(listing3);

            //Act
            List<Listing> result = _dbc.SetListingsForBook(book1.ISBN);

            //Tear Down
            _dbc.DeleteListingByID(listing1.ListingID);
            _dbc.DeleteListingByID(listing2.ListingID);
            _dbc.DeleteListingByID(listing3.ListingID);

            //Assert
            Assert.AreEqual(result.Count, listings.Count);
        }

        [TestMethod]
        public void SetListingsForUserTest()
        {
            //Arrange
            List<Listing> listings = new List<Listing>();

            User user1 = new User("gwashington", "george", "washington", "george.washington@huskers.unl.edu", "gwash@gmail.com");
            Listing listing1 = listing;
            listing1.ListingCreator = user1;
            listings.Add(listing1);

            Listing listing2 = listing;
            listing2.ListingCreator = user1;
            listings.Add(listing2);

            Listing listing3 = listing;
            listing3.ListingCreator = user1;
            listings.Add(listing3);

            //Act
            List<Listing> result = _dbc.SetListingsForUser(user1);

            //Tear Down
            _dbc.DeleteListingByID(listing1.ListingID);
            _dbc.DeleteListingByID(listing2.ListingID);
            _dbc.DeleteListingByID(listing3.ListingID);

            //Assert
            Assert.AreEqual(result.Count, listings.Count);
        }

        [TestMethod]
        public void storeRetrievePasswordTest()
        {
            //Arrange


            //Act
            //_dbc.RetrievePassword();

            //Assert


            //Tear Down
        }

        [TestMethod]
        public void CheckUniqueUsernameTest()
        {
            //Arrange


            //Act
            //_dbc.CheckUniqueUsername(username);

            //Assert


            //Tear Down
        }

        [TestMethod]
        public void CheckUniqueHuskerEmailTest()
        {
            //Arrange


            //Act
            _dbc.CheckUniqueHuskerEmail("abc");

            //Assert


            //Tear Down
        }
    }
}
