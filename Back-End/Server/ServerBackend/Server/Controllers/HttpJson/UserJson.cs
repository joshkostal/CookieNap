using System;
namespace Server.Controllers.HttpJson
{
    public class UserJson
    {
		public string UserName { get; set; }
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public string HuskerEmail { get; set; }
		public string CommunicationEmail { get; set; }
		public string Password { get; set; }

	}
	public class UserSignInJson
	{
		public string UserName { get; set; }
		public string Password { get; set; }

	}
}
