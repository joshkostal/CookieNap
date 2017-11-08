using Microsoft.EntityFrameworkCore;

namespace Server.Models
{
    public class ServerContext : DbContext
    {
        public ServerContext (DbContextOptions<ServerContext> options)
            : base(options)
        {
        }

        public DbSet<Server.Models.Listing> Listing { get; set; }

        public DbSet<Server.Models.Book> Book { get; set; }

        public DbSet<Server.Models.User> User { get; set; }
    }
}
