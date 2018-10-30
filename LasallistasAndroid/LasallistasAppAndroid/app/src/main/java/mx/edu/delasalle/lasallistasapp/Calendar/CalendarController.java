package mx.edu.delasalle.lasallistasapp.Calendar;

import android.support.design.widget.TabLayout;
import android.support.v4.widget.SwipeRefreshLayout;
import android.support.v7.widget.LinearLayoutManager;

import java.util.ArrayList;
import java.util.List;

import mx.edu.delasalle.lasallistasapp.Models.Cancha;
import mx.edu.delasalle.lasallistasapp.Models.Deporte;
import mx.edu.delasalle.lasallistasapp.Models.Equipo;
import mx.edu.delasalle.lasallistasapp.Models.Partido;
import mx.edu.delasalle.lasallistasapp.Models.Universidad;
import mx.edu.delasalle.lasallistasapp.Utilities.BaseActivity;
import mx.edu.delasalle.lasallistasapp.Utilities.Validations;

/**
 * Created by Axel on 29/10/2018
 */
public class CalendarController implements TabLayout.OnTabSelectedListener,SwipeRefreshLayout.OnRefreshListener {

    BaseActivity activity;
    CalendarFragment calendarFragment;
    Validations validations;
    public static Integer statusTab=0;
    public CalendarController(BaseActivity activity, CalendarFragment calendarFragment){
        this.activity = activity;
        this.calendarFragment = calendarFragment;
        validations = new Validations(activity);
    }

    public void setListToAdapter(List<Partido>lstPartidos, int tipoPartido ){
        calendarFragment.rcvCalendar.setLayoutManager(new LinearLayoutManager(calendarFragment.getContext()));
        calendarFragment.rcvCalendar.setAdapter(new CalendarAdapter(activity,tipoPartido,lstPartidos));

    }
    public  void getMatches(Integer typeMatch){
        //Logica FIREBASE
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

        setListToAdapter(partidos,typeMatch);

        activity.hideLoading();
        calendarFragment.swrListCalendar.setRefreshing(false);

        //setListToAdapter();
    }

    @Override
    public void onTabSelected(TabLayout.Tab tab) {
        if (tab.getPosition()==0){
            statusTab=0;
            if(CalendarAdapter.lstPartidos ==null)
                getMatches(statusTab);
            if(CalendarAdapter.lstPartidos.size() >0)
            {
                CalendarAdapter.lstPartidos.clear();
                getMatches(statusTab);
            }

        }
        else {
            statusTab=1;
            if(CalendarAdapter.lstPartidos ==null)
                getMatches(statusTab);
            if(CalendarAdapter.lstPartidos.size() >0)
            {
                CalendarAdapter.lstPartidos.clear();
                getMatches(statusTab);
            }

        }
    }

    @Override
    public void onTabUnselected(TabLayout.Tab tab) {

    }

    @Override
    public void onTabReselected(TabLayout.Tab tab) {

    }

    @Override
    public void onRefresh() {
        activity.showLoading();
        getMatches(statusTab);
    }
}
