namespace backExamen.Models
{
    public class VehiculoModel
    {
        public int Id { get; set; }
        public string Marca { get; set; }
        public int Precio { get; set; }
        
        public TipoVehiculoModel TipoVehiculo { get; set; }
    }
}
