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
            string url = string.Format("https://www.googleapis.com/books/v1/volumes?q=isbn:{0}&key=AIzaSyCCd5PAITD2iYtAaSXLwMR2LLrEDDspHkU", ISBN);

            HttpWebRequest httpWebRequest = (HttpWebRequest)WebRequest.Create(url);
            httpWebRequest.Method = WebRequestMethods.Http.Get;
            httpWebRequest.Accept = "application/json";

            var httpResponse = httpWebRequest.GetResponse() as HttpWebResponse;
            using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
            {
                var result = streamReader.ReadToEnd();
                JObject data = JObject.Parse(result);
                var authors = data["items"][0]["volumeInfo"]["authors"].ToString();
                var author = authors.Remove(0, 9);
                var a = author.Remove(author.Length - 4, 4);
                var thumbnailURL = data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"];
                var title = data["items"][0]["volumeInfo"]["title"].ToString();
                book = new Book(ISBN, title, a, thumbnailURL == null ? "http://res.freestockphotos.biz/pictures/14/14342-illustration-of-a-book-pv.png" : thumbnailURL.ToString());
            }
            return book;
        }
    }
}