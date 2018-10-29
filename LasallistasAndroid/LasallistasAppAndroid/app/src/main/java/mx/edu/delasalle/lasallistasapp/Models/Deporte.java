package mx.edu.delasalle.lasallistasapp.Models;

/**
 * Created by Axel on 24/10/2018
 */
public class Deporte {
    private long Id_Deporte;
    private String Nombre;
    private int Tiempos;

    public long getId_Deporte() {
        return Id_Deporte;
    }

    public void setId_Deporte(long id_Deporte) {
        Id_Deporte = id_Deporte;
    }

    public String getNombre() {
        return Nombre;
    }

    public void setNombre(String nombre) {
        Nombre = nombre;
    }

    public int getTiempos() {
        return Tiempos;
    }

    public void setTiempos(int tiempos) {
        Tiempos = tiempos;
    }


}
