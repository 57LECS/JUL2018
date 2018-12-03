package mx.edu.delasalle.lasallistasapp.Calendar;

import android.support.annotation.NonNull;
import android.support.design.widget.TabLayout;
import android.support.v4.widget.SwipeRefreshLayout;
import android.support.v7.widget.LinearLayoutManager;

import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.firebase.firestore.CollectionReference;
import com.google.firebase.firestore.DocumentReference;
import com.google.firebase.firestore.DocumentSnapshot;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.Query;
import com.google.firebase.firestore.QuerySnapshot;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import mx.edu.delasalle.lasallistasapp.Models.Cancha;
import mx.edu.delasalle.lasallistasapp.Models.Deporte;
import mx.edu.delasalle.lasallistasapp.Models.Equipo;
import mx.edu.delasalle.lasallistasapp.Models.Partido;
import mx.edu.delasalle.lasallistasapp.Models.Universidad;
import mx.edu.delasalle.lasallistasapp.Utilities.ActivitiesUtils;
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
    List<Partido>partidos;

    private FirebaseFirestore db = FirebaseFirestore.getInstance();
    private CollectionReference ref = db.collection("/eventos/oct2018/partidos/");

    public CalendarController(BaseActivity activity, CalendarFragment calendarFragment){
        this.activity = activity;
        this.calendarFragment = calendarFragment;
        validations = new Validations(activity);
    }

    public void setListToAdapter(List<Partido>lstPartidos ){
        calendarFragment.rcvCalendar.setLayoutManager(new LinearLayoutManager(calendarFragment.getContext()));
        calendarFragment.rcvCalendar.setAdapter(new CalendarAdapter(activity,lstPartidos));

    }
    public  void getMatches(Integer typeMatch){

        ref.whereEqualTo("TipoPartido", typeMatch)
                .get()
                .addOnSuccessListener(new OnSuccessListener<QuerySnapshot>() {
                    @Override
                    public void onSuccess(QuerySnapshot queryDocumentSnapshots) {
                        partidos = new ArrayList<>();
                        for (DocumentSnapshot documentSnapshot : queryDocumentSnapshots) {
                            Partido partido = documentSnapshot.toObject(Partido.class);
                            partidos.add(partido);
                        }
                        setListToAdapter(partidos);

                        activity.hideLoading();
                        calendarFragment.swrListCalendar.setRefreshing(false);
                    }
                })
                .addOnFailureListener(new OnFailureListener() {
                    @Override
                    public void onFailure(@NonNull Exception e) {
                        e.toString();
                        e.printStackTrace();
                        ActivitiesUtils.showToat(activity,"ERROR AL CARGAR PARTIDOS");
                    }
                });

        //setListToAdapter();
    }

    @Override
    public void onTabSelected(TabLayout.Tab tab) {
        if (tab.getPosition()==0){
            statusTab=0;
            if(CalendarAdapter.lstPartidos ==null)
                getMatches(statusTab);
            else if(CalendarAdapter.lstPartidos.size() >0)
            {
                CalendarAdapter.lstPartidos.clear();
                getMatches(statusTab);
            }

        }
        else {
            statusTab=1;
            if(CalendarAdapter.lstPartidos ==null)
                getMatches(statusTab);
            else if(CalendarAdapter.lstPartidos.size() >0)
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
