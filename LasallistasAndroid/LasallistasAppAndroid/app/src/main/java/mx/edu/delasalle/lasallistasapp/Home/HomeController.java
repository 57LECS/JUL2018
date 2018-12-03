package mx.edu.delasalle.lasallistasapp.Home;

import android.support.v4.widget.SwipeRefreshLayout;
import android.support.v7.widget.LinearLayoutManager;

import java.util.ArrayList;
import java.util.List;

import mx.edu.delasalle.lasallistasapp.Calendar.CalendarAdapter;
import mx.edu.delasalle.lasallistasapp.Models.Cancha;
import mx.edu.delasalle.lasallistasapp.Models.Deporte;
import mx.edu.delasalle.lasallistasapp.Models.Equipo;
import mx.edu.delasalle.lasallistasapp.Models.Partido;
import mx.edu.delasalle.lasallistasapp.Models.Universidad;
import mx.edu.delasalle.lasallistasapp.Utilities.BaseActivity;
import mx.edu.delasalle.lasallistasapp.Utilities.BaseFragment;
import mx.edu.delasalle.lasallistasapp.Utilities.Validations;

/**
 * Created by Axel on 14/11/2018
 */
public class HomeController implements SwipeRefreshLayout.OnRefreshListener {
    HomeFragment homeFragment;
    BaseActivity activity;
    Validations validations;

    public HomeController(BaseActivity activity, HomeFragment homeFragment){
        this.activity = activity;
        this.homeFragment = homeFragment;
        validations = new Validations(activity);
    }


    public void setListToAdapter(List<Partido> lstPartidos){
        homeFragment.rcvCalendar.setLayoutManager(new LinearLayoutManager(homeFragment.getContext()));
        homeFragment.rcvCalendar.setAdapter(new HomeAdapter(activity,lstPartidos));
    }
    public void getMatches(){
   /*     //Logica FIREBASE
        List<Partido>partidos = new ArrayList<>();
        Cancha cancha1 = new  Cancha();
        cancha1.setNombre("Cancha Uruguayo");
        Cancha cancha2 = new  Cancha();
        cancha2.setNombre("Cancha Rápido");
        Cancha cancha3 = new  Cancha();
        cancha3.setNombre("Universum Nostrum");

        Universidad universidad1 = new Universidad();
        universidad1.setNombre("La salle Bajío");
        universidad1.setSiglas("BAJ");
        Universidad universidad2 = new Universidad();
        universidad2.setNombre("Neza");
        universidad2.setSiglas("NEZ");
        Universidad universidad3 = new Universidad();
        universidad3.setNombre("Cancún");
        universidad3.setSiglas("CAN");

        Equipo equipo1 = new Equipo();
        equipo1.setUniversidad(universidad1);
        Equipo equipo2 = new Equipo();
        equipo2.setUniversidad(universidad2);
        Equipo equipo3 = new Equipo();
        equipo3.setUniversidad(universidad3);

        Deporte deporte1 = new Deporte();
        deporte1.setNombre("Futbol Rápido");
        Deporte deporte2 = new Deporte();
        deporte2.setNombre("Futbol Uruguayo");
        Deporte deporte3 = new Deporte();
        deporte3.setNombre("Basquetbol");

        Partido partido = new Partido();
        partido.setEquipo1(equipo1);
        partido.setEquipo2(equipo2);
        partido.setResultado(new String[]{
                "2","-","1"
        });
        partido.setCancha(cancha2);
        partido.setDeporte(deporte1);
        partido.setGanador(equipo1);
        partidos.add(partido);

        partido = new Partido();
        partido.setEquipo1(equipo1);
        partido.setEquipo2(equipo2);
        partido.setResultado(new String[]{
                "3","-","4"
        });
        partido.setCancha(cancha1);
        partido.setDeporte(deporte2);
        partido.setGanador(equipo2);
        partidos.add(partido);

        partido = new Partido();
        partido.setEquipo1(equipo1);
        partido.setEquipo2(equipo3);
        partido.setResultado(new String[]{
                "93","-","82"
        });
        partido.setCancha(cancha3);
        partido.setDeporte(deporte3);
        partido.setGanador(equipo3);
        partidos.add(partido);

        setListToAdapter(partidos);*/
    }

    @Override
    public void onRefresh() {
        homeFragment.swrListCalendar.setRefreshing(true);
        getMatches();
        homeFragment.swrListCalendar.setRefreshing(false);
    }
}
