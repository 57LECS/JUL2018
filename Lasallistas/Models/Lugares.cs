using System;
namespace Lasallistas.Models
{
    public class Lugares
    {
        public TipoUbicacionEnum TipoUbicacion
        {
            get;
            set;
        }

        public long Id_Lugar
        {
            get;
            set;
        }

        public string Nombre
        {
            get;
            set;
     
        }

        public double Lat
        {
            get;
            set;
        }

        public double Long
        {
            get;
            set;
        }

        public string Details
        {
            get;
            set;
        }

        public Lugares(){ }
    }
}
