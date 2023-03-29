using backExamen.Models;
using Microsoft.EntityFrameworkCore;

namespace backExamen.Config
{
    public class FlotaDBContext : DbContext
    {
        public FlotaDBContext(DbContextOptions<FlotaDBContext> options): base(options)
        {        
        }
        public DbSet<VehiculoModel> vehiculos { get; set; }
        public DbSet<TipoVehiculoModel> tipos_vehiculos { get; set; }

    }
}
