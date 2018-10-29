package mx.edu.delasalle.lasallistasapp.Models;

/**
 * Created by Axel on 24/10/2018
 */
public class Partido {
    private Cancha Cancha;
    private Deporte Deporte;
    private Equipo Equipo1;
    private Equipo Equipo2;
    private Equipo Ganador;
    private Enums.RamasEnum Rama;
    private String[] Resultado;

    public mx.edu.delasalle.lasallistasapp.Models.Cancha getCancha() {
        return Cancha;
    }

    public void setCancha(mx.edu.delasalle.lasallistasapp.Models.Cancha cancha) {
        Cancha = cancha;
    }

    public mx.edu.delasalle.lasallistasapp.Models.Deporte getDeporte() {
        return Deporte;
    }

    public void setDeporte(mx.edu.delasalle.lasallistasapp.Models.Deporte deporte) {
        Deporte = deporte;
    }

    public Equipo getEquipo1() {
        return Equipo1;
    }

    public void setEquipo1(Equipo equipo1) {
        Equipo1 = equipo1;
    }

    public Equipo getEquipo2() {
        return Equipo2;
    }

    public void setEquipo2(Equipo equipo2) {
        Equipo2 = equipo2;
    }

    public Equipo getGanador() {
        return Ganador;
    }

    public void setGanador(Equipo ganador) {
        Ganador = ganador;
    }

    public Enums.RamasEnum getRama() {
        return Rama;
    }

    public void setRama(Enums.RamasEnum rama) {
        Rama = rama;
    }

    public String[] getResultado() {
        return Resultado;
    }

    public void setResultado(String[] resultado) {
        Resultado = resultado;
    }


}
