using System;
using Server.Models;

namespace Server.Models
{
    public class Book
    {
        public Book(string isbn, List<Listing> listingsWithBook)
        {
            ISBN = isbn;
            ListingsWithBook = listingsWithBook;
        }
        [Required]
        public string ISBN { get; set; }

        public List<Listing> ListingsWithBook { get; set; }

        public Book QueryISBN(string isbn)
        {
            //Fill in
        }
    }
}