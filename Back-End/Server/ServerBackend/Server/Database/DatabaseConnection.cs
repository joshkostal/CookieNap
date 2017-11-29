using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;

namespace Server.Models
{
    public class DatabaseConnection
    {
        #region Connection
        private string databaseName = "bhage";
        private string userName = "bhage";
        private string password = "qmQ8jq";
        private MySqlConnection connection = null;

        public DatabaseConnection()
        {
            Initialize();
        }

        public DatabaseConnection(string testDatabase, string testPassword)
        {
            Initialize(testDatabase, testPassword);
        }

        private void Initialize(string testDatabase, string testPassword)
        {
            string connstring = string.Format("Server=cse.unl.edu; database={0}; UID={1}; password={2}", testDatabase, testDatabase, testPassword);
            connection = new MySqlConnection(connstring);
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
            try
            {
                connection.Open();
            }
            catch(InvalidOperationException e)
            {

            }
            
            return true;
        }

        private bool CloseConnection()
        {
            connection.Close();
            return true;
        }
        #endregion

        #region User
        public int InsertUser(User user)
        {
            //test query: INSERT INTO User (FirstName, LastName, UserName, PrimaryEmailAddress, SecondaryEmailAddress) VALUES ('Test', 'Testerson', 'testguy3', 'fakeemail@huskers.unl.edu', 'anotherfake@gmail.com')
            //string query = string.Format("INSERT INTO User (FirstName, LastName, UserName, PrimaryEmailAddress, SecondaryEmailAddress) VALUES (@Firstname, @Lastname, @Username, @PrimaryEmail, @SecondaryEmail)");
            if (this.OpenConnection())
            {
                MySqlCommand cmd = new MySqlCommand();

                cmd.CommandText = "INSERT INTO User (FirstName, LastName, UserName, PrimaryEmailAddress, SecondaryEmailAddress) VALUES (@Firstname, @Lastname, @Username, @PrimaryEmail, @SecondaryEmail)";
                cmd.Connection = connection;
                cmd.Prepare();

                cmd.Parameters.AddWithValue("@Firstname", user.FirstName);
                cmd.Parameters.AddWithValue("@Lastname", user.LastName);
                cmd.Parameters.AddWithValue("@Username", user.UserName);
                cmd.Parameters.AddWithValue("@PrimaryEmail", user.CommunicationEmail);
                cmd.Parameters.AddWithValue("@SecondaryEmail", user.HuskerEmail);

                cmd.ExecuteNonQuery();
                user.UserID = (int)cmd.LastInsertedId;

                this.CloseConnection();
            }
            user.UserPassword.StorePassword(user.UserName, user.UserPassword.HashedPassword);

            return user.UserID;
        }

        public User GetUser(int id)
        {
            User user = null;

            string query = string.Format("SELECT FirstName, LastName, UserName, PrimaryEmailAddress, SecondaryEmailAddress FROM User WHERE UserId='{0}'", id);

            if (this.OpenConnection())
            {
                MySqlCommand cmd = new MySqlCommand(query, connection);

                cmd.Prepare();
                MySqlDataReader dr = cmd.ExecuteReader();
                dr.Read();
                if (!dr.HasRows)
                {
                    dr.Close();
                    return null;
                }

                user = new User((string)dr[2], (string)dr[0], (string)dr[1], (string)dr[3], (string)dr[4]);

                dr.Close();
                this.CloseConnection();
            }

            return user;
        }

        public User GetUser(string username)
        {
            User user = null;

            string query = string.Format("SELECT FirstName, LastName, PrimaryEmailAddress, SecondaryEmailAddress, UserId FROM User WHERE UserName='{0}'", username);

            if (this.OpenConnection())
            {
                MySqlCommand cmd = new MySqlCommand(query, connection);

                cmd.Prepare();
                MySqlDataReader dr = cmd.ExecuteReader();
                dr.Read();
                if (!dr.HasRows)
                {
                    dr.Close();
                    return null;
                }
                String firstName = (string)dr[0];
                user = new User(username, (string)dr[0], (string)dr[1], (string)dr[3], (string)dr[2], (int)dr[4]);

                dr.Close();
                this.CloseConnection();
            }

            return user;
        }

        public void DeleteUser(int id)
        {
            if (this.OpenConnection())
            {
                string query1 = string.Format("DELETE FROM Listing WHERE Listing.User_UserId='{0}'", id);
                MySqlCommand cmd = new MySqlCommand(query1, connection);

                cmd.Prepare();
                cmd.ExecuteNonQuery();

                string query2 = string.Format("DELETE FROM User WHERE UserId='{0}'", id);
                cmd = new MySqlCommand(query2, connection);
                cmd.Prepare();
                cmd.ExecuteNonQuery();

                this.CloseConnection();
            }
        }

        public void UpdateEmails(string primaryEmail, string secondaryEmail, string userName)
        {
            if (this.OpenConnection())
            {
                MySqlCommand cmd = new MySqlCommand();
                cmd.Connection = connection;

                cmd.CommandText = "UPDATE User SET PrimaryEmailAddress=@PrimaryEmail, SecondaryEmailAddress=@SecondaryEmail WHERE UserName=@Username";

                cmd.Prepare();

                cmd.Parameters.AddWithValue("@Username", userName);
                cmd.Parameters.AddWithValue("@PrimaryEmail", primaryEmail);
                cmd.Parameters.AddWithValue("@SecondaryEmail", secondaryEmail);

                cmd.ExecuteNonQuery();

                this.CloseConnection();
            }
        }

        public List<Listing> SetListingsForUser(User user)
        {
            List<Listing> listings = new List<Listing>();
            //Note: check whether this still works
            string query = string.Format("SELECT Listing.Price, Book.ISBN, Listing.Condition, LIsting.IsSelling FROM Listing JOIN Book ON Book.BookId = Listing.BookId WHERE Listing.User_UserID='{0}'", user.UserID);

            if (this.OpenConnection())
            {
                MySqlCommand cmd = new MySqlCommand(query, connection);

                cmd.Prepare();
                MySqlDataReader rdr = cmd.ExecuteReader();

                while (rdr.Read())
                {
                    Book book = GetBook((string)rdr[1]);

                    Listing listing = new Listing();
                    listing = new Listing(rdr.GetInt32(0), listing.ConvertStringToConditionType((string)rdr[2]), book, rdr.GetInt32(3) == 1 ? Listing.ListingTypes.Sell : Listing.ListingTypes.Buy, user);
                    listings.Add(listing);
                }
                rdr.Close();
                this.CloseConnection();
            }
            return listings;
        }
        #endregion

        #region Listing
        public Listing InsertListing(Listing listing)
        {
            int bookId = InsertBook(listing.BookListed.ISBN);

            //Convert listing type to boolean for the database
            int isSelling = 0;
            if (listing.ListingType == Listing.ListingTypes.Sell)
            {
                isSelling = 1;
            }
            listing.LastDateEdited = DateTime.Today;

            if (this.OpenConnection())
            {
                MySqlCommand cmd = new MySqlCommand();
                cmd.Connection = connection;

                cmd.CommandText = string.Format("INSERT INTO Listing (Price, BookId, Listing.Condition, IsSelling, LastEditedDate, User_UserId) VALUES (@Price, '{1}', @Condition, @isSelling, @LastDateEdited, (Select User.UserId from User where User.UserName = '{0}' group by User.UserName))", listing.ListingCreator.UserName, bookId);

                cmd.Prepare();

                cmd.Parameters.AddWithValue("@Price", listing.Price);
                cmd.Parameters.AddWithValue("@Condition", listing.Condition.ToString());
                cmd.Parameters.AddWithValue("@isSelling", isSelling);
                cmd.Parameters.AddWithValue("@Username", listing.ListingCreator.UserName);
                cmd.Parameters.AddWithValue("@LastDateEdited", listing.LastDateEdited);

                cmd.ExecuteNonQuery();
                listing.ListingID = (int)cmd.LastInsertedId;

                this.CloseConnection();
            }

            DeleteListingsPastDeletionDate();

            return listing;
        }

        //For testing only
        public Listing InsertListingIntoPast(Listing listing)
        {
            //Convert listing type to boolean for the database
            int isSelling = 0;
            if (listing.ListingType == Listing.ListingTypes.Sell)
            {
                isSelling = 1;
            }
            listing.LastDateEdited = new DateTime(2000, 1, 1);

            if (this.OpenConnection())
            {
                MySqlCommand cmd = new MySqlCommand();
                cmd.Connection = connection;

                int bookId = InsertBook(listing.BookListed.ISBN);

                cmd.CommandText = string.Format("INSERT INTO Listing (Price, BookId, Listing.Condition, IsSelling, User_UserId, LastEditedDate) VALUES (@Price, '{1}', @Condition, @isSelling, (Select User.UserId from User where User.UserName = '{0}' order by UserId limit 1), @LastEditedDate)", listing.ListingCreator.UserName, bookId);

                cmd.Prepare();

                cmd.Parameters.AddWithValue("@Price", listing.Price);
                cmd.Parameters.AddWithValue("@Condition", listing.Condition.ToString());
                cmd.Parameters.AddWithValue("@isSelling", isSelling);
                cmd.Parameters.AddWithValue("@Username", listing.ListingCreator.UserName);
                cmd.Parameters.AddWithValue("@LastEditedDate", listing.LastDateEdited);

                cmd.ExecuteNonQuery();
                listing.ListingID = (int)cmd.LastInsertedId;

                this.CloseConnection();
            }
            return listing;
        }

        public Listing GetListing(int listingID)
        {
            Listing listing = new Listing();
            //check whether this works
            string query = string.Format("SELECT Listing.Price, Listing.Condition, Listing.IsSelling, Book.ISBN, Listing.ListingId, Listing.User_UserId FROM Listing JOIN Book ON Listing.BookId = Book.BookId WHERE Listing.ListingId={0}", listingID);

            if (this.OpenConnection())
            {
                MySqlCommand cmd = new MySqlCommand(query, connection);

                cmd.Prepare();
                MySqlDataReader dr = cmd.ExecuteReader();
                dr.Read();
                if (!dr.HasRows)
                {
                    dr.Close();
                    return null;
                }
                double data1 = (double)dr[0];
                string data2 = (string)dr[1];
                sbyte data3 = (sbyte)dr[2];
                string data4 = (string)dr[3];
                int data5 = dr.GetInt32(4);
                int data6 = dr.GetInt32(5);
                dr.Close();

                query = string.Format("SELECT FirstName, LastName, UserName, PrimaryEmailAddress, SecondaryEmailAddress FROM User WHERE UserId='{0}'", data6);
                cmd = new MySqlCommand(query, connection);


                cmd.Prepare();
                MySqlDataReader rdr = cmd.ExecuteReader();
                rdr.Read();

                User user = new User((string)rdr[2], (string)rdr[0], (string)rdr[1], (string)rdr[3], (string)rdr[4]);

                Book book = GetBook(data4);

                listing = new Listing(data1, listing.ConvertStringToConditionType(data2), book, data3 == 1 ? Listing.ListingTypes.Sell : Listing.ListingTypes.Buy, user);
                listing.ListingID = data5;

                rdr.Close();
                this.CloseConnection();
            }

            return listing;
        }

        public List<Listing> GetAllListings()
        {
            List<Listing> listings = new List<Listing>();

            string query = string.Format("SELECT Listing.Price, Listing.Condition, Listing.IsSelling, Book.ISBN, Listing.ListingId, Listing.User_UserId FROM Listing JOIN Book ON Book.BookId = Listing.BookId");

            if (this.OpenConnection())
            {
                MySqlCommand cmd = new MySqlCommand(query, connection);

                cmd.Prepare();
                MySqlDataReader dr = cmd.ExecuteReader();

                while (dr.Read())
                {
                    Listing listing = new Listing();
                    listing = new Listing(dr.GetInt32(0), (string)dr[1], (string)dr[3], dr.GetInt32(2) == 1 ? "Sell" : "Buy", dr.GetInt32(5));
                    listing.ListingID = dr.GetInt32(4);
                    listings.Add(listing);
                }
                dr.Close();
                foreach (Listing listing in listings)
                {
                    query = string.Format("SELECT FirstName, LastName, UserName, PrimaryEmailAddress, SecondaryEmailAddress FROM User WHERE UserId='{0}'", listing.ListingCreator.UserID);
                    cmd.CommandText = query;

                    cmd.Prepare();
                    MySqlDataReader rdr = cmd.ExecuteReader();
                    rdr.Read();
                    if (rdr.HasRows)
                    {
                        User user = new User((string)rdr[2], (string)rdr[0], (string)rdr[1], (string)rdr[3], (string)rdr[4]);
                        listing.ListingCreator = user;
                    }
                    rdr.Close();
                }
                this.CloseConnection();
            }
            return listings;
        }

        public Listing UpdateListingPrice(Listing listing)
        {
            if (this.OpenConnection())
            {
                listing.LastDateEdited = DateTime.Today;

                MySqlCommand cmd = new MySqlCommand();
                cmd.Connection = connection;

                cmd.CommandText = "UPDATE Listing SET Price=@Price, LastEditedDate=@LastDateEdited WHERE ListingID=@ListingID";

                cmd.Prepare();

                cmd.Parameters.AddWithValue("@Price", listing.Price);
                cmd.Parameters.AddWithValue("@ListingID", listing.ListingID);
                cmd.Parameters.AddWithValue("@LastDateEdited", listing.LastDateEdited);

                cmd.ExecuteNonQuery();

                this.CloseConnection();
            }

            listing.LastDateEdited = DateTime.Today;
            return listing;
        }

        public void DeleteListing(int id)
        {
            string query = string.Format("DELETE FROM Listing WHERE Listing.ListingId='{0}'", id);
            if (this.OpenConnection())
            {
                MySqlCommand cmd = new MySqlCommand(query, connection);

                cmd.Prepare();
                cmd.ExecuteNonQuery();

                this.CloseConnection();
            }
        }

        public void DeleteListing(DateTime date)
        {
            string query = string.Format("DELETE FROM Listing WHERE Listing.LastEditedDate='{0}'", date);
            if (this.OpenConnection())
            {
                MySqlCommand cmd = new MySqlCommand(query, connection);

                cmd.Prepare();
                cmd.ExecuteNonQuery();

                this.CloseConnection();
            }
        }

        public void DeleteListingsPastDeletionDate()
        {
            string query = "DELETE FROM Listing WHERE LastEditedDate <= DATE_SUB(CURDATE(), INTERVAL 45 DAY)";
            if (this.OpenConnection())
            {
                MySqlCommand cmd = new MySqlCommand(query, connection);

                cmd.Prepare();
                cmd.ExecuteNonQuery();

                this.CloseConnection();
            }
        }
        #endregion

        #region Book
        public int InsertBook(string isbn)
        {
            string query = string.Format("SELECT BookId FROM Book WHERE ISBN='{0}'", isbn);
            Book book = new Book(isbn);

            if (this.OpenConnection())
            {
                MySqlCommand cmd = new MySqlCommand(query, connection);
                cmd.Prepare();

                MySqlDataReader dr = cmd.ExecuteReader();
                dr.Read();

                if (dr.HasRows)
                {
                    book.BookId = dr.GetInt32(0);
                    dr.Close();
                }
                else
                {
                    dr.Close();
                    book = book.QueryISBN();

                    query = string.Format("INSERT INTO Book (Title, Author, ISBN, ThumbnailUrl) VALUES (\"{0}\", \"{1}\", '{2}', '{3}')", book.Title, book.Authors, book.ISBN, book.ThumbnailURL);

                    cmd.CommandText = query;
                    cmd.Prepare();
                    cmd.ExecuteNonQuery();
                    book.BookId = (int)cmd.LastInsertedId;
                }
                this.CloseConnection();
            }
            return book.BookId;
        }

        public Book GetBook(string isbn)
        {
            string query = string.Format("SELECT BookId, Title, Author, ThumbnailUrl FROM Book WHERE ISBN='{0}'", isbn);
            Book book = new Book(isbn);

            if (this.OpenConnection())
            {
                MySqlCommand cmd = new MySqlCommand(query, connection);
                cmd.Prepare();

                MySqlDataReader dr = cmd.ExecuteReader();
                dr.Read();

                if (!dr.HasRows)
                {
                    this.CloseConnection();
                    dr.Close();
                    return null;
                }
                book.BookId = dr.GetInt32(0);
                book.Title = (string)dr[1];
                book.Authors = (string)dr[2];
                book.ThumbnailURL = (string)dr[3];

                dr.Close();
                this.CloseConnection();
            }
            return book;
        }

        public List<Book> FindBooksListed()
        {
            List<Book> booksListed = new List<Book>();
            string query = "SELECT DISTINCT BookISBN FROM Listing";

            if (this.OpenConnection())
            {
                MySqlCommand cmd = new MySqlCommand(query, connection);

                cmd.Prepare();
                MySqlDataReader dr = cmd.ExecuteReader();

                while (dr.Read())
                {
                    Book book = GetBook((string)dr[0]);
                    booksListed.Add(book);
                }
                dr.Close();
                this.CloseConnection();
            }
            return booksListed;
        }

        public List<Listing> SetListingsForBook(string isbn)
        {
            List<Listing> listings = new List<Listing>();
            string query = string.Format("SELECT Price, Listing.Condition, IsSelling FROM Listing JOIN Book on Listing.BookId = Book.BookId WHERE Book.ISBN='{0}'", isbn);

            if (this.OpenConnection())
            {
                MySqlCommand cmd = new MySqlCommand(query, connection);

                cmd.Prepare();
                MySqlDataReader dr = cmd.ExecuteReader();

                List<int> data0 = new List<int>();
                List<string> data1 = new List<string>();
                List<int> data2 = new List<int>();
                while (dr.Read())
                {
                    data0.Add(dr.GetInt32(0));
                    data1.Add((string)dr[1]);
                    data2.Add(dr.GetInt32(2));
                }
                dr.Close();
                for (int i = 0; i < data0.Count; i++)
                {
                    query = "SELECT FirstName, LastName, UserName, PrimaryEmailAddress, SecondaryEmailAddress FROM User";
                    cmd = new MySqlCommand(query, connection);

                    cmd.Prepare();
                    MySqlDataReader rdr = cmd.ExecuteReader();
                    rdr.Read();
                    User user = new User((string)rdr[2], (string)rdr[0], (string)rdr[1], (string)rdr[3], (string)rdr[4]);

                    Book book = new Book(isbn);
                    book = GetBook(isbn);

                    Listing listing = new Listing();
                    listing = new Listing(data0[i], listing.ConvertStringToConditionType(data1[i]), book, data2[2] == 1 ? Listing.ListingTypes.Sell : Listing.ListingTypes.Buy, user);
                    listings.Add(listing);
                    rdr.Close();
                }
                this.CloseConnection();
            }
            return listings;
        }
        #endregion

        #region Password
        public string RetrievePassword(string username)
        {
            string query = string.Format("SELECT HashedPassword FROM User WHERE User.UserName='{0}'", username);
            string passwordInstance = null;
            if (this.OpenConnection())
            {
                MySqlCommand cmd = new MySqlCommand(query, connection);

                cmd.Prepare();
                MySqlDataReader dr = cmd.ExecuteReader();
                dr.Read();
                if (!dr.HasRows)
                {
                    dr.Close();
                    return null;
                }
                passwordInstance = (string)dr[0];

                dr.Close();
                this.CloseConnection();
            }

            /* if (this.OpenConnection())
             {
                 MySqlCommand cmd = new MySqlCommand();

                 cmd.CommandText = "SELECT HashedPassword FROM User WHERE User.UserName=@Username";

                 cmd.Prepare();

                 cmd.Parameters.AddWithValue("@Username", username);

                 cmd.ExecuteNonQuery();

                 this.CloseConnection();
             }*/

            return passwordInstance;
        }

        public void StorePassword(string username, string password)
        {
            if (this.OpenConnection())
            {
                MySqlCommand cmd = new MySqlCommand();
                cmd.Connection = connection;

                cmd.CommandText = "Update User SET HashedPassword = @password WHERE User.UserName=@Username";

                cmd.Prepare();

                cmd.Parameters.AddWithValue("@Username", username);
                cmd.Parameters.AddWithValue("@password", password);

                cmd.ExecuteNonQuery();

                this.CloseConnection();
            }
        }
        #endregion

        #region Validation
        public bool CheckUniqueUsername(string username)
        {
            bool usernameFound = true;
            string query = string.Format("SELECT COUNT(*) FROM User WHERE User.UserName='{0}'", username);

            if (this.OpenConnection())
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
            string query = string.Format("SELECT COUNT(*) FROM User WHERE User.PrimaryEmailAddress='{0}'", huskerEmail);

            if (this.OpenConnection())
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
    #endregion
}