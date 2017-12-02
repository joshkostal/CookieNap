namespace Server.Controllers.HttpJson
{
    public class ListingJson
    {
        public int Id { get; set; }
        public int Price { get; set; }
		public string Condition { get; set; }
		public string ISBN { get; set; }
		public string ListingType { get; set; }
		public string ListingCreatorUserName { get; set; }
	}
    public class ListingJsonWithJWT
    {
        public int Id { get; set; }
        public int Price { get; set; }
        public string Condition { get; set; }
        public string ISBN { get; set; }
        public string ListingType { get; set; }
        public string ListingCreatorUserName { get; set; }
        public string JWT { get; set; }
    }
    public class DeleteListingJson
    {
        public int ListingId { get; set; }
        public string JWT { get; set; }
    }
}
