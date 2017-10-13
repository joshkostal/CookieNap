using System;

namespace Server.Models
{
    public class Listing
    {
        public int Price { get; set; }

        public enum ConditionTypes { Great, Good, Poor}

        public ConditionTypes Condition { get; set; }

        public DateTime LastDateEdited { get; set; }

        public string ISBN { get; set; }

        public enum ListingTypes { Sell, Buy }

        public ListingTypes ListingType { get; set; }
    }
}
