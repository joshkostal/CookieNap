using System;
namespace Server.Controllers.HttpJson
{
    public class ListingJson
    {
        public int Price { get; set; }
		public string Condition { get; set; }
		public string ISBN { get; set; }
		public string ListingType { get; set; }
		public string ListingCreatorUserName { get; set; }
	}
}
