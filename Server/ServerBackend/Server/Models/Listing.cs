using System;

namespace Server.Models
{
    public class Listing
    {
        public Listing CreateListing(int price, ConditionTypes condition, DateTime lastDateEdited, string ISBN, ListingTypes listingType)
        {
            Price = price;
            Condition = condition;
            LastDateEdited = lastDateEdited;
            ISBN = ISBN;
            ListingType = listingType;
        }

        public int Price { get; set; }

        public enum ConditionTypes { Great, Good, Okay, Poor}
        public ConditionTypes Condition { get; set; }

        public DateTime LastDateEdited { get; set; }

        public string ISBN { get; set; }

        public enum ListingTypes { Sell, Buy }
        public ListingTypes ListingType { get; set; }
    }
}
