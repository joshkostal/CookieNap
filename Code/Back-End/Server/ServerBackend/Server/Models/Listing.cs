using System;
using System.ComponentModel.DataAnnotations;

namespace Server.Models
{
    public class Listing
    {
        //Only to be used for info coming from front end, use other constructor in backend
        public Listing(double price, string condition, string isbn, string listingType, int id)
        {
            DatabaseConnection dbc = new DatabaseConnection();

            Price = price;
            Condition = ConvertStringToConditionType(condition);
            BookListed = new Book(isbn);
            ListingType = ConvertStringToListingType(listingType);
            ListingCreator = dbc.GetUser(id);
        }
        public Listing(double price, ConditionTypes condition, Book bookListed, ListingTypes listingType, User listingCreator)
        {
            Price = price;
            Condition = condition;
            BookListed = bookListed;
            ListingType = listingType;
            ListingCreator = listingCreator;
        }
        public Listing() { }
        public enum ConditionTypes { Great, Good, Okay }
        public enum ListingTypes { Sell, Buy }

        [Required]
        public double Price { get; set; }

        [Required]
        public ConditionTypes Condition { get; set; }

        public DateTime LastDateEdited { get; set; }

        [Required]
        public Book BookListed { get; set; }

        [Required]
        public ListingTypes ListingType { get; set; }

        [Required]
        public User ListingCreator { get; set; }

        [Key]
        public int ListingID { get; set; }

        public ListingTypes ConvertStringToListingType(string listingType)
        {
            return listingType == "Buy" ? ListingTypes.Buy : ListingTypes.Sell;
        }

        public ConditionTypes ConvertStringToConditionType(string condition)
        {
            if (condition.Equals("Like-new") || condition.Equals("Great"))
            {
                return ConditionTypes.Great;
            }
            else if (condition.Equals("Good"))
            {
                return ConditionTypes.Good;
            }
            else if (condition.Equals("Usable") || condition.Equals("Okay"))
            {
                return ConditionTypes.Okay;     //defaults to okay
            }else
            {
                return ConditionTypes.Great;
			}
        }
    }
}
