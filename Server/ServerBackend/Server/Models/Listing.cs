using System;
using Server.Models;

namespace Server.Models
{
    public class Listing
    {
        public Listing(int price, ConditionTypes condition, DateTime lastDateEdited, Book bookListed, ListingTypes listingType, User listingCreator)
        {
            Price = price;
            Condition = condition;
            LastDateEdited = lastDateEdited;
            BookListed = bookListed;
            ListingType = listingType;
            ListingCreator = listingCreator;
        }
        public enum ConditionTypes { Great, Good, Okay, Poor }
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

        public int ListingID {get; set; }
    }
}
