using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Net;
using System.Text.RegularExpressions;
using System;

namespace Server.Models
{
    public class Book
    {
        [Key]
        [Required]
        [RegularExpression("^[0-9]{10,13}$", ErrorMessage = "This is not a valid ISBN format")]
        public string ISBN { get; set; }

        public string Authors { get; set; }

        public string Title { get; set; }

        public string ThumbnailURL { get; set; }

        public int BookId { get; set; }

        public List<Listing> ListingsWithBook { get; set; }

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

                var authors = "";
                var thumbnailURL = "";
                var title = "";
                try
                {
                    var a = data["items"][0]["volumeInfo"]["authors"].ToString();
                    var b = Regex.Unescape(a);
                    authors = b.Replace("[", "").Replace("\n", "").Replace("\r", "").Replace(" ", "").Replace("]", "").Replace("\"", "").Replace(",", ", ");
                }
                catch(NullReferenceException n)
                {
                    authors = "Authors not listed";
                }
                try
                {
                    thumbnailURL = data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"].ToString();
                }
                catch(NullReferenceException n)
                {
                    thumbnailURL = "http://res.freestockphotos.biz/pictures/14/14342-illustration-of-a-book-pv.png";
                }
                try
                {
                    title = data["items"][0]["volumeInfo"]["title"].ToString();
                }
                catch(NullReferenceException n)
                {
                    title = "No title listed";
                }
                book = new Book(ISBN, authors, title, thumbnailURL);
            }
            return book;
        }
    }
}