package mx.edu.delasalle.lasallistasapp.Models;

import java.util.Date;
import java.util.List;

/**
 * Created by Axel on 24/10/2018
 */
public class Partido {
    private String Cancha;
    private String Deporte;
    private String Equipo1;
    private String Equipo2;
    private String Ganador;
    private String Rama;
    private List<String> Resultado;
    private String Fecha;
    private int TipoPartido;

    public String getCancha() {
        return Cancha;
    }

    public void setCancha(String cancha) {
        Cancha = cancha;
    }

    public String getDeporte() {
        return Deporte;
    }

    public void setDeporte(String deporte) {
        Deporte = deporte;
    }

    public String getEquipo1() {
        return Equipo1;
    }

    public void setEquipo1(String equipo1) {
        Equipo1 = equipo1;
    }

    public String getEquipo2() {
        return Equipo2;
    }

    public void setEquipo2(String equipo2) {
        Equipo2 = equipo2;
    }

    public String getGanador() {
        return Ganador;
    }

    public void setGanador(String ganador) {
        Ganador = ganador;
    }

    public String getRama() {
        return Rama;
    }

    public void setRama(String rama) {
        Rama = rama;
    }

    public List<String> getResultado() {
        return Resultado;
    }

    public void setResultado(List<String> resultado) {
        Resultado = resultado;
    }

    public String getFecha() {
        return Fecha;
    }

    public void setFecha(String fecha) {
        Fecha = fecha;
    }

    public int getTipoPartido() {
        return TipoPartido;
    }

    public void setTipoPartido(int tipoPartido) {
        TipoPartido = tipoPartido;
    }

}
