using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Net;

namespace Server.Models
{
    public class Book
    {
        public Book(string isbn)
        {
            ISBN = isbn;
        }
        [Required]
        public string ISBN { get; set; }

        public string Authors { get; set; }

        public string Title { get; set; }

        public string Thumbnail { get; set; }

        public List<Listing> ListingsWithBook { get; set; }

        public Book QueryISBN(string isbn)
        {
            Book book = null;
            string url = string.Format("https://books.google.com/ebooks?q=isbn:{0}&key=AIzaSyA0_9-gOBdZSR6Cw5n9cJdBEY_kAsbPmTs");

            HttpWebRequest httpWebRequest = (HttpWebRequest)WebRequest.Create(url);
            httpWebRequest.Method = WebRequestMethods.Http.Get;
            httpWebRequest.Accept = "application/json";

            using (var sr = new StreamReader(httpWebRequest.GetRequestStream()))
            {
                book = JsonConvert.DeserializeObject<Book>(sr.ReadToEnd());
                book.ISBN = isbn;
            }
            return book;
        }
    }
}