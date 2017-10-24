using MySql.Data;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;

namespace Server.Models
{
    public class DatabaseConnection
    {
        private string databaseName = "bhage";
        private string userName = "bhage";
        private string password = "qmQ8jq";
        private MySqlConnection connection = null;

        public DatabaseConnection()
        {
            Initialize();
        }

        public MySqlConnection Connection
        {
            get { return connection; }
        }

        public void Initialize()
        {
            string connstring = string.Format("Server=cse.unl.edu; database={0}; UID={1}; password={2}", databaseName, userName, password);
            connection = new MySqlConnection(connstring);
        }

        private bool OpenConnection()
        {
            connection.Open();
            return true;
        }

        private bool CloseConnection()
        {
            connection.Close();
            return true;
        }

        public void InsertUser(User user)
        {
            //We need to protect against SQL injection!! I don't think this method does that.
            string query = string.Format("INSERT INTO User (FirstName, LastName, UserName, PrimaryEmailAddress, SecondaryEmailAddress, HashedPassword) VALUES (@Firstname, @Lastname, @Username, @PrimaryEmail, @SecondaryEmail, @HashedPassword)");
            if(this.OpenConnection)
            {
                MySqlCommand cmd = new MySqlCommand(query, connection);

                cmd.Prepare();
                cmd.Parameters.AddWithValue("@Firstname", user.FirstName);
                cmd.Parameters.AddWithValue("@Lastname", user.LastName);
                cmd.Parameters.AddWithValue("@Username", user.UserName);
                cmd.Parameters.AddWithValue("@PrimaryEmail", user.CommunicationEmail);
                cmd.Parameters.AddWithValue("@SecondaryEmail", user.HuskerEmail);
                cmd.Parameters.AddWithValue("@HashedPassword", user.UserPassword);
                //TODO: did i do this right?

                cmd.ExecuteNonQuery();

                this.CloseConnection();
            }
        }

        public void UpdateEmails(string primaryEmail, string secondaryEmail, string userName) //Should we use the user id or username? --probably doesn't matter, both will be unique
        {
            string query = string.Format("UPDATE User SET PrimaryEmailAddress='{0}', SecondaryEmailAddress='{1}' WHERE UserName='{2}'", primaryEmail, secondaryEmail, userName);
            if(this.OpenConnection)
            {
                MySqlCommand cmd = new MySqlCommand(query, connection);

                cmd.Prepare();
                cmd.ExecuteNonQuery();

                this.CloseConnection();
            }
        }

        public void DeleteUserByUsername(string userName) //deletes by a certain username. Can be modified to delete by other fields
        {
            if(this.OpenConnection)
            {
                string query1 = string.Format("SELECT UserId FROM User WHERE UserName='{0}'", userName);
                MySqlCommand cmd = new MySqlCommand(query, connection);
                cmd.Prepare();
                MySqlDataReader dr = cmd.ExecuteReader();
                string userID = dr[0];

                string query2 = string.Format("DELETE FROM Listing WHERE Listing.User_UserId='{0}'", userID);
                cmd = new MySqlCommand(query2, connection);
                cmd.Prepare();
                cmd.ExecuteNonQuery();

                string query3 = string.Format("DELETE FROM User WHERE UserName='{0}'", userName);
                cmd = new MySqlCommand(query3, connection);
                cmd.Prepare();
                cmd.ExecuteNonQuery();

                this.CloseConnection();
            }
        }
        
        public void DeleteUser(User user)
        {
            deleteUserByUsername(user.UserName);
        }

        public Listing InsertListing(Listing listing)
        {
            //Convert listing type to boolean for the database
            int isSelling = 0;
            if(listing.ListingType == Listing.ListingTypes.Sell)
            {
                isSelling = 1;
            }

            string query = string.Format("INSERT INTO Listing (Price, BookISBN, Condition, IsSelling, User_UserId) VALUES ('{0}', '{1}', '{2}', '{3}', 'SELECT UserId FROM USER WHERE User.UserName = {4}')", listing.price, listing.bookListed.ISBN, listing.Condition.ToString(), isSelling, listing.ListingCreator.Username);
            if (this.OpenConnection)
            {
                MySqlCommand cmd = new MySqlCommand(query, connection);

                cmd.Prepare();
                cmd.ExecuteNonQuery();
                listing.ListingID = cmd.LastInsertedID;
                listing.LastDateEdited = DateTime.Today;

                this.CloseConnection();
            }
            return listing;
        }

        //TODO: Do we need an Update Listing function?
        //Yes, I think we should allow users to update the price
        public Listing UpdateBookPrice(Listing listing)
        {
            string query = string.Format("UPDATE Listing SET Price='{0}' WHERE ListingID='{1}'", listing.Price, listing.ListingID);
            if (this.OpenConnection)
            {
                MySqlCommand cmd = new MySqlCommand(query, connection);

                cmd.Prepare();
                cmd.ExecuteNonQuery();

                this.CloseConnection();
            }
            listing.LastDateEdited = DateTime.Today;
            return listing;
        }

        public void DeleteListingByID(Listing listing) //deletes by a certain username. Can be modified to delete by other fields
        {
            string query = string.Format("DELETE FROM Listing WHERE Listing.ListingId='{0}'", listing.ListingID);
            if (this.OpenConnection)
            {
                MySqlCommand cmd = new MySqlCommand(query, connection);

                cmd.Prepare();
                cmd.ExecuteNonQuery();

                this.CloseConnection();
            }
        }

        public void DeleteListingByDate(DateTime date) //deletes by a certain username. Can be modified to delete by other fields
        {
            string query = string.Format("DELETE FROM Listing WHERE Listing.LastEditedDate='{0}'", date);
            if (this.OpenConnection)
            {
                MySqlCommand cmd = new MySqlCommand(query, connection);

                cmd.Prepare();
                cmd.ExecuteNonQuery();

                this.CloseConnection();
            }
        }

        public void DeleteListingsPastDeletionDate()
        {
            string query = "DELETE FROM Listing WHERE Listing.LastEditedDate >= DATE_SUB(CURDATE(), INTERVAL 45 DAY)";
            if (this.OpenConnection)
            {
                MySqlCommand cmd = new MySqlCommand(query, connection);

                cmd.Prepare();
                cmd.ExecuteNonQuery();

                this.CloseConnection();
            }
        }

        //TODO: Needs to be checked
        public List<Book> FindBooksListed()
        {
            List<Book> booksListed = new List<Book>();
            string query = "SELECT DISTINCT BookISBN FROM Listing";

            if(this.OpenConnection)
            {
                MySqlCommand cmd = new MySqlCommand(query, connection);

                cmd.Prepare();
                MySqlDataReader dr = cmd.ExecuteReader();

                while(dr.Read())
                {
                    Book book = new Book();
                    book = book.QueryISBN(dr[0]);
                    booksListed.Add(book);
                }
                dr.Close();
                this.CloseConnection();
            }
            return booksListed;
        }

        //TODO: Needs to be checked
        public Book SetListingsForBook(Book book)
        {
            string query = string.Format("SELECT Price, Condition, IsSelling FROM Listing WHERE BookISBN='{0}'", book.ISBN);

            if(this.OpenConnection)
            {
                MySqlCommand cmd = new MySqlCommand(query, connection);

                cmd.Prepare();
                MySqlDataReader dr = cmd.ExecuteReader();

                while(dr.Read())
                {
                    Listing listing = new Listing();
                    listing.Price = dr[0];
                    listing.Condition = Listing.ConditionTypes(dr[1]);
                    listing.ListingType = dr[2] == 1 ? Listing.ListingTypes.Sell : Listing.ListingTypes.Buy;
                    listing.BookListed = book;

                    user.ListingsForUser.Add(listing);
                }
                dr.Close();
                this.CloseConnection();
            }
            return user;
        }

        //TODO: Needs to be checked
        public User SetListingsForUser(User user)
        {
            string query = string.Format("SELECT UserId FROM User WHERE User.username='{0}'", user.UserName);

            if(this.OpenConnection)
            {
                MySqlCommand cmd = new MySqlCommand(query, connection);

                cmd.Prepare();
                MySqlDataReader dr = cmd.ExecuteReader();

                string listingID = dr[0];
                query = string.Format("SELECT Price, BookISBN, Condition, IsSelling FROM Listing WHERE Listing.User_UserID='{0}'", listingID);

                cmd = new MySqlCommand(query, connection);

                cmd.Prepare();
                MySqlDataReader rdr = cmd.ExecuteReader();

                while(rdr.Read())
                {
                    Listing listing = new Listing();

                    listing.Price = rdr[0];
                    listing.BookListed = Book.QueryISBN(rdr[1]);
                    listing.Condition = Listing.ConditionTypes(rdr[2]);
                    listing.ListingType = rdr[3] == 1 ? Listing.ListingTypes.Sell : Listing.ListingTypes.Buy;

                    user.ListingsForUser.Add(listing);
                }
                dr.Close();
                rdr.Close();
                this.CloseConnection();
            }
            return user;
        }

        //TODO: Make sure this is right
        public string RetrievePassword(string username)
        {
            string query = string.Format("SELECT Hashedpassword FROM User WHERE User.Username='{0}'", username);

            if(this.OpenConnection)
            {
                MySqlCommand cmd = new MySqlCommand(query, connection);

                cmd.Prepare();
                MySqlDataReader dr = cmd.ExecuteReader();
                string password = dr[0];

                dr.Close();
                this.CloseConnection();
            }
            return password;
        }

        //TODO: Make sure this query is right
        public void StorePassword(string username, string password)
        {
            string query = string.Format("Update USER SET HashedPassword = VALUE '{0}' WHERE User.Username='{1}'", password, username);

            if(this.OpenConnection)
            {
                MySqlCommand cmd = new MySqlCommand(query, connection);

                cmd.Prepare();
                cmd.ExecuteNonQuery();

                this.CloseConnection();
            }
        }

        public bool CheckUniqueUsername(string username)
        {
            bool usernameFound = true;
            string query = string.Format("SELECT COUNT(*) FROM USER WHERE User.Username='{0}'", username);

            if(this.OpenConnection)
            {
                MySqlCommand cmd = new MySqlCommand(query, connection);

                cmd.Prepare();
                object result = cmd.ExecuteScalar();
                if (result != null)
                {
                    int usernamesFound = Convert.ToInt32(result);
                    usernameFound = usernamesFound == 0 ? false : true;
                }
                this.CloseConnection();
            }
            return !usernameFound;
        }

        public bool CheckUniqueHuskerEmail(string huskerEmail)
        {
            bool emailFound = true;
            string query = string.Format("SELECT COUNT(*) FROM USER WHERE User.PrimaryEmailAddress='{0}'", huskerEmail);

            if(this.OpenConnection)
            {
                MySqlCommand cmd = new MySqlCommand(query, connection);

                cmd.Prepare();
                object result = cmd.ExecuteScalar();
                if (result != null)
                {
                    int emailsFound = Convert.ToInt32(result);
                    emailFound = emailsFound == 0 ? false : true;
                }
                this.CloseConnection();
            }
            return !emailFound;
        }
    }
}