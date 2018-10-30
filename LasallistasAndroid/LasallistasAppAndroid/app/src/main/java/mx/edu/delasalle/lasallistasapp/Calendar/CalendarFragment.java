package mx.edu.delasalle.lasallistasapp.Calendar;


import android.os.Bundle;
import android.support.design.widget.TabLayout;
import android.support.v4.app.Fragment;
import android.support.v4.widget.SwipeRefreshLayout;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import java.util.ArrayList;
import java.util.List;

import butterknife.BindView;
import mx.edu.delasalle.lasallistasapp.Models.Partido;
import mx.edu.delasalle.lasallistasapp.R;
import mx.edu.delasalle.lasallistasapp.Utilities.BaseActivity;
import mx.edu.delasalle.lasallistasapp.Utilities.BaseFragment;

public class CalendarFragment extends BaseFragment {

    BaseActivity activity;
    CalendarController calendarController;

    @BindView(R.id.tabCalendar)
    TabLayout tab;
    @BindView(R.id.rcvCalendar)
    RecyclerView rcvCalendar;
    @BindView(R.id.swrListCalendar)
    SwipeRefreshLayout swrListCalendar;
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = super.onCreateView(inflater, container, savedInstanceState);
        activity = (BaseActivity)getContext();
        calendarController = new CalendarController(activity,this);
        initTabs();
        swrListCalendar.setOnRefreshListener(calendarController);
       // calendarController.getMatches();
       /* List<Partido>partidos = new ArrayList<>();
        rcvCalendar.setLayoutManager(new LinearLayoutManager(getContext()));
        rcvCalendar.setAdapter(new CalendarAdapter(activity,1,partidos));*/
        return view;
    }

    @Override
    public int getLayoutId() {
        return R.layout.fragment_calendar;
    }

    public void initTabs(){
        tab.addTab(tab.newTab().setText("Pasados"));
        tab.addTab(tab.newTab().setText("Próximos"));
        tab.addOnTabSelectedListener(calendarController);
        calendarController.getMatches(0);
        TabLayout.Tab _tab =   tab.getTabAt(0);
        _tab.select();

    }
}
