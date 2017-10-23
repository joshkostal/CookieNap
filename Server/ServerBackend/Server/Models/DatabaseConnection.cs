using MySql.Data;
using MySql.Data.MySqlClient;
using System;

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
            string query = string.Format("INSERT INTO User (FirstName, LastName, UserName, PrimaryEmailAddress, SecondaryEmailAddress, HashedPassword) VALUES ('{0}', '{1}', '{2}', '{3}', '{4}', '{5}')", user.FirstName, user.LastName, user.UserName, user.CommunicationEmail, user.HuskerEmail, user.UserPassword);
            if(this.OpenConnection)
            {
                MySqlCommand cmd = new MySqlCommand(query, connection);

                cmd.Prepare();
                cmd.ExecuteNonQuery();

                this.CloseConnection();
            }
        }

        public void UpdateEmails(string primaryEmail, string secondaryEmail, string userName) //Should we use the user id or username?
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

        public void deleteUserByUsername(string userName) //deletes by a certain username. Can be modified to delete by other fields
        {
            string query = string.Format("DELETE FROM User WHERE UserName='{0}'", userName);
            if(this.OpenConnection)
            {
                MySqlCommand cmd = new MySqlCommand(query, connection);

                cmd.Prepare();
                cmd.ExecuteNonQuery();

                this.CloseConnection();
            }
        }
        //find more at https://www.codeproject.com/Articles/43438/Connect-C-to-MySQL

        public void InsertListing(Listing listing)
        {
            //Convert listing type to boolean for the database
            int isSelling = 0;
            if(listing.ListingType == "Sell")
            {
                isSelling = 1;
            }

            string query = string.Format("INSERT INTO Listing (Price, BookISBN, Condition, IsSelling, User_UserId) VALUES ('{0}', '{1}', '{2}', '{3}', 'SELECT UserId FROM USER WHERE User.UserName = {4}')", listing.price, listing.bookListed.ISBN, listing.Condition, isSelling, listing.ListingCreator.Username);
            if (this.OpenConnection)
            {
                MySqlCommand cmd = new MySqlCommand(query, connection);

                cmd.Prepare();
                cmd.ExecuteNonQuery();

                this.CloseConnection();
            }
        }

        //TODO: Do we need an Update Listing function?

        public void deleteSpecificListing(Listing listing) //deletes by a certain username. Can be modified to delete by other fields
        {
            string query = string.Format("DELETE FROM Listing WHERE Listing.UserID='{0}' AND Listing.BookISBN = '{1}'", listing.listingCreator.UserName, listing.bookListed.ISBN);
            if (this.OpenConnection)
            {
                MySqlCommand cmd = new MySqlCommand(query, connection);

                cmd.Prepare();
                cmd.ExecuteNonQuery();

                this.CloseConnection();
            }
        }
        //find more at https://www.codeproject.com/Articles/43438/Connect-C-to-MySQL

        public void deleteListingByDate(DateTime date) //deletes by a certain username. Can be modified to delete by other fields
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

        public void DeleteUser(User user)
        {
            deleteUserByUsername(user.UserName);
        }

        public Book SetListingsForBook(Book book)
        {
            string query = string.Format("SELECT HASHEDPASSWORD FROM PASSWORD WHERE USERNAME='{0}'", username);         //This is definitely not right

            if(this.OpenConnection)
            {
                MySqlCommand cmd = new MySqlCommand(query, connection);

                cmd.Prepare();
                MySqlDataReader dr = cmd.ExecuteReader();
                string password = dr["hashedpassword"];

                dr.Close();
                this.CloseConnection();
            }
            //book.ListingsWithBook = ;
            return book;
        }

        public User SetListingsForUser(User user)
        {
            string query = string.Format("SELECT HASHEDPASSWORD FROM PASSWORD WHERE USERNAME='{0}'", username);         //This is definitely not right

            if(this.OpenConnection)
            {
                MySqlCommand cmd = new MySqlCommand(query, connection);

                cmd.Prepare();
                MySqlDataReader dr = cmd.ExecuteReader();
                string password = dr["hashedpassword"];

                dr.Close();
                this.CloseConnection();
            }
            //user.ListingsForUser = ;
            return user;
        }

        public string RetrievePassword(string username)
        {
            string query = string.Format("SELECT HASHEDPASSWORD FROM User WHERE USERNAME='{0}'", username);         //This is probably not right

            if(this.OpenConnection)
            {
                MySqlCommand cmd = new MySqlCommand(query, connection);

                cmd.Prepare();
                MySqlDataReader dr = cmd.ExecuteReader();
                string password = dr["hashedpassword"];

                dr.Close();
                this.CloseConnection();
            }
            return password;
        }

        public void StorePassword(string username, string password)
        {
            string query = string.Format("INSERT INTO PASSWORD (hashedPassword) VALUE '{0}'", password);
            //write query to connect row to the right user

            if(this.OpenConnection)
            {
                MySqlCommand cmd = new MySqlCommand(query, connection);

                cmd.Prepare();
                cmd.ExecuteNonQuery();

                this.CloseConnection();
            }
        }
    }
}