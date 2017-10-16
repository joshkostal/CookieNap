using System;
using Server.Models;

namespace Server.Models
{
    public class Book
    {
        public Book(string ISBN, List<Listing> listingsWithBook)
        {
            ISBN = ISBN;
            ListingsWithBook = listingsWithBook;
        }

        public string ISBN { get; set; }

        public List<Listing> ListingsWithBook { get; set; }

        public IDictionary<string, string> QueryISBN(string isbn)
        {
            //Fill in
        }
    }
}