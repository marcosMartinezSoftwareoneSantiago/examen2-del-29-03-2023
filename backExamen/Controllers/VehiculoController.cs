using backExamen.Config;
using backExamen.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backExamen.Controllers
{
    [Route("/api/vehiculo")]
    public class VehiculoController : Controller
    {
        private readonly FlotaDBContext _context;

        public VehiculoController(FlotaDBContext context)
        {
            _context = context;
        }

        [HttpPost("intertar")]
        public async Task<ActionResult<List<VehiculoModel>>> add([FromBody] VehiculoModel
vehiculoModel)
        {
            if (vehiculoModel == null)
            {
                return BadRequest("Dont send void fields");
            }
            _context.Add(vehiculoModel);
            await _context.SaveChangesAsync();
            return Ok(vehiculoModel);
        }
    }
}
