using backExamen.Config;
using backExamen.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backExamen.Controllers
{
    [Route("/api/tipo-vehiculo")]
    public class TipoVehiculoController : Controller
    {
        private readonly FlotaDBContext _context;

        public TipoVehiculoController(FlotaDBContext context)
        {
            _context = context;
        }

        [HttpGet("lista-vehiculos-de-este-tipo/{nombreTipo}")]
        public async Task<ActionResult<List<TipoVehiculoModel>>> obtnenerListaDeVehiculosDeUnTipo(string nombreTipo)
        {
            var listaVehiculos = await _context.vehiculos.FirstOrDefaultAsync(e => e.TipoVehiculo.NombreTipo == nombreTipo);
            if (listaVehiculos == null)
            {
                return NotFound();
            }
            
            return Ok(listaVehiculos);
        }
    }
}
