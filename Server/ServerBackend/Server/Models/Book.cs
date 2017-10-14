using System;

namespace Server.Models
{
    public class Book
    {
        public Book(string ISBN, List<string> listingsWithBook)
        {
            ISBN = ISBN;
            ListingsWithBook = listingsWithBook;
        }

        public string ISBN { get; set; }

        public List<string> ListingsWithBook { get; set; }
    }
}