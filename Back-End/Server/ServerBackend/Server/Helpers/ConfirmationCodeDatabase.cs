using System;
using Server.Models;


namespace Server.Helpers
{
    public class ConfirmationCodeDatabase
    {
        public static void StoreConfirmationCode(string code, string userName)
        {
            DatabaseConnection databaseIntstance = new DatabaseConnection();
            NewUserConfirmation codeCreationInstance = new NewUserConfirmation(JWTAuthentication.GenerateToken(code), userName);
            databaseIntstance.InsertConfirmationCode(codeCreationInstance);
        }
    }
}
