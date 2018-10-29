package mx.edu.delasalle.lasallistasapp.Models;

/**
 * Created by Axel on 24/10/2018
 */
public class Cancha {


    private long Id_Cancha;
    private String Nombre;
    private double Lat;
    private double Long;

    public long getId_Cancha() {
        return Id_Cancha;
    }

    public void setId_Cancha(long id_Cancha) {
        Id_Cancha = id_Cancha;
    }

    public String getNombre() {
        return Nombre;
    }

    public void setNombre(String nombre) {
        Nombre = nombre;
    }

    public double getLat() {
        return Lat;
    }

    public void setLat(double lat) {
        Lat = lat;
    }

    public double getLong() {
        return Long;
    }

    public void setLong(double aLong) {
        Long = aLong;
    }
}
