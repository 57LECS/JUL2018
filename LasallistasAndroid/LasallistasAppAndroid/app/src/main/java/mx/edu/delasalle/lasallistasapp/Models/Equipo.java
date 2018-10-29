package mx.edu.delasalle.lasallistasapp.Models;

/**
 * Created by Axel on 24/10/2018
 */
public class Equipo {
    private long Id_Equipo;
    private Universidad Universidad;
    private Deporte Deporte;
    private Enums.RamasEnum Rama;


    public long getId_Equipo() {
        return Id_Equipo;
    }

    public void setId_Equipo(long id_Equipo) {
        Id_Equipo = id_Equipo;
    }

    public mx.edu.delasalle.lasallistasapp.Models.Universidad getUniversidad() {
        return Universidad;
    }

    public void setUniversidad(mx.edu.delasalle.lasallistasapp.Models.Universidad universidad) {
        Universidad = universidad;
    }

    public mx.edu.delasalle.lasallistasapp.Models.Deporte getDeporte() {
        return Deporte;
    }

    public void setDeporte(mx.edu.delasalle.lasallistasapp.Models.Deporte deporte) {
        Deporte = deporte;
    }

    public Enums.RamasEnum getRama() {
        return Rama;
    }

    public void setRama(Enums.RamasEnum rama) {
        Rama = rama;
    }


}
