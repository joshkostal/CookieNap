using System;

namespace Server.Models
{
    public class Book
    {
        public string ISBN { get; set; }

        public List<string> ListingsWithBook { get; set; }
    }
}