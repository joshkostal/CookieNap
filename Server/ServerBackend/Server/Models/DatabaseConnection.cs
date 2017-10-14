using MySql.Data;
using MySql.Data.MySqlClient;
using System;

namespace Server.Models
{
    public class DatabaseConnection
    {
        private string databaseName = "cse.unl.edu";
        private string userName = "user-name";
        private string password = "fill-in-password";
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
            string connstring = string.Format("Server=localhost; database={0}; UID={1}; password={2}", databaseName, userName, password);
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

        public void SampleInsert(string value1, string value2)
        {
            string query = string.Format("INSERT INTO table-name (col1, col2) VALUES ('{0}', '{1}')", value1, value2);
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
    }
}