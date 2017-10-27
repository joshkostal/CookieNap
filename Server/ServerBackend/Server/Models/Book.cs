using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
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

        public Book(string isbn, string authors, string title, string thumbNailURL)
        {
            ISBN = isbn;
            Authors = authors;
            Title = title;
            ThumbnailURL = thumbNailURL;
        }

        [Key]
        [Required]
        [RegularExpression("^[0-9]{10,13}$", ErrorMessage = "This is not a valid ISBN format")]
        public string ISBN { get; set; }

        public string Authors { get; set; }

        public string Title { get; set; }

        public string ThumbnailURL { get; set; }

        public List<Listing> ListingsWithBook { get; set; }

        public Book QueryISBN()
        {
            Book book = null;
            string url = string.Format("https://www.googleapis.com/books/v1/volumes?q=isbn:{0}&key=AIzaSyA0_9-gOBdZSR6Cw5n9cJdBEY_kAsbPmTs", this.ISBN);

            HttpWebRequest httpWebRequest = (HttpWebRequest)WebRequest.Create(url);
            httpWebRequest.Method = WebRequestMethods.Http.Get;
            httpWebRequest.Accept = "application/json";

            using (var sr = new StreamReader(httpWebRequest.GetRequestStream()))
            {
                var json = sr.ToString();
                JObject data = JObject.Parse(json);

                string name = (string)o["Name"];

                book = new Book(this.ISBN, (string)data["authors"], (string)data["title"], (string)data["thumbnail"]);
            }
            return book;
        }
    }
}