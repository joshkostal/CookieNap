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
            //Is this syntax right?
            string query = string.Format("INSERT INTO User (FirstName, LastName, UserName, PrimaryEmailAddress, SecondaryEmailAddress, HashedPassword) VALUES ('{0}', '{1}', '{2}', '{3}', '{4}', '{5}')", user.FirstName.get, user.LastName.get, user.UserName.get, user.CommunicationEmail.get, user.HuskerEmail.get, user.UserPassword.get);
            if(this.OpenConnection)
            {
                MySqlCommand cmd = new MySqlCommand(query, connection);

                cmd.Prepare();
                cmd.ExecuteNonQuery();

                this.CloseConnection();
            }
        }

        public void SampleUpdate(string value1, string value2, string value3)
        {
            string query = string.Format("UPDATE table-name SET col1='{0}', col2='{1}' WHERE col3='{2}'", value1, value2, value3);
            if(this.OpenConnection)
            {
                MySqlCommand cmd = new MySqlCommand(query, connection);

                cmd.Prepare();
                cmd.ExecuteNonQuery();

                this.CloseConnection();
            }
        }

        public void SampleDelete(string value1)
        {
            string query = string.Format("DELETE FROM table-name WHERE col1='{0}'", value1);
            if(this.OpenConnection)
            {
                MySqlCommand cmd = new MySqlCommand(query, connection);

                cmd.Prepare();
                cmd.ExecuteNonQuery();

                this.CloseConnection();
            }
        }
        //find more at https://www.codeproject.com/Articles/43438/Connect-C-to-MySQL

        public void DeleteListing(Listing listing)
        {

        }

        public void DeleteUser(User user)
        {

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
            string query = string.Format("SELECT HASHEDPASSWORD FROM PASSWORD WHERE USERNAME='{0}'", username);         //This is probably not right

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