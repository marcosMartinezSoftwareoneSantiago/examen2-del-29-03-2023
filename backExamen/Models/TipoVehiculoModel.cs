namespace backExamen.Models
{
    public class TipoVehiculoModel
    {
        public int id { get; set; }
        public string NombreTipo { get; set; }
        
        public List<VehiculoModel> VehiculosDeEsteTipo { get; set; }
    }
}
