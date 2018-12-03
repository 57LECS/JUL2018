package mx.edu.delasalle.lasallistasapp.CalendarDetail;


import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.google.gson.Gson;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import butterknife.BindView;
import butterknife.BindViews;
import butterknife.OnClick;
import mx.edu.delasalle.lasallistasapp.Models.Partido;
import mx.edu.delasalle.lasallistasapp.R;
import mx.edu.delasalle.lasallistasapp.Utilities.ActivitiesUtils;
import mx.edu.delasalle.lasallistasapp.Utilities.BaseActivity;
import mx.edu.delasalle.lasallistasapp.Utilities.BaseFragment;


public class CalendarDetailFragment extends BaseFragment {

    BaseActivity activity;
    Partido partido;

    @BindViews({R.id.tv_sportDM,R.id.tv_Team1DM,R.id.tv_Team1ScoreDM,R.id.tv_Team2DM,R.id.tv_Team2ScoreDM,R.id.tv_dateDM,R.id.tv_placeDM})
    List<TextView>lstTv;


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = super.onCreateView(inflater, container, savedInstanceState);
        activity = (BaseActivity) getContext();
        String partidoJSON = getArguments().getString("Partido");
        Gson gson = new Gson();
        partido = gson.fromJson(partidoJSON,Partido.class);
    //    tipoPartido = getArguments().getInt("TipoPartido");
        loadInfo();

        return view;
    }
    @Override
    public int getLayoutId() {
        return R.layout.fragment_calendar_detail;
    }

    @OnClick(R.id.imgBackDM)
    public void onBackPressed(){
        activity.onBackPressed();
    }
    public void loadInfo(){
        lstTv.get(0).setText(partido.getDeporte());
        lstTv.get(1).setText(partido.getEquipo1());
        lstTv.get(3).setText(partido.getEquipo2());
        if(partido.getTipoPartido() ==0 ){
            lstTv.get(2).setText(partido.getResultado().get(0));
            lstTv.get(4).setText(partido.getResultado().get(2));
            if(Integer.parseInt(partido.getResultado().get(0))>Integer.parseInt(partido.getResultado().get(2))){
                lstTv.get(2).setTextColor(getResources().getColor(R.color.redSalle));
            }
            else
                lstTv.get(4).setTextColor(getResources().getColor(R.color.redSalle));
        }
        else{
            lstTv.get(2).setText("-");
            lstTv.get(4).setText("-");
        }


        String startTime = partido.getFecha();
        SimpleDateFormat input = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        try {
            Date dateValue = input.parse(startTime);
            lstTv.get(5).setText(ActivitiesUtils.setDateFormat(dateValue));
        } catch (ParseException e) {
            e.printStackTrace();
        }

        lstTv.get(6).setText(partido.getCancha());
    }
}
