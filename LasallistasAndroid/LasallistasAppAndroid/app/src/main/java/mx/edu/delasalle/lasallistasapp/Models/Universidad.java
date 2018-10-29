package mx.edu.delasalle.lasallistasapp.Models;

/**
 * Created by Axel on 24/10/2018
 */
public class Universidad {
    private long Id;
    private String Nombre;
    private String Siglas;
    private String Abreviatura;

    public long getId() {
        return Id;
    }

    public void setId(long id) {
        Id = id;
    }

    public String getNombre() {
        return Nombre;
    }

    public void setNombre(String nombre) {
        Nombre = nombre;
    }

    public String getSiglas() {
        return Siglas;
    }

    public void setSiglas(String siglas) {
        Siglas = siglas;
    }

    public String getAbreviatura() {
        return Abreviatura;
    }

    public void setAbreviatura(String abreviatura) {
        Abreviatura = abreviatura;
    }

}
