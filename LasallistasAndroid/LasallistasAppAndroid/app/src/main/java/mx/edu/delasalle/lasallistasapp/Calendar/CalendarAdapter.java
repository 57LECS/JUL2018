package mx.edu.delasalle.lasallistasapp.Calendar;

import android.content.Intent;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.google.firebase.firestore.FirebaseFirestore;
import com.google.gson.Gson;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.OnClick;
import mx.edu.delasalle.lasallistasapp.Models.Partido;
import mx.edu.delasalle.lasallistasapp.Second.SecondActivity;
import mx.edu.delasalle.lasallistasapp.Utilities.ActivitiesUtils;
import mx.edu.delasalle.lasallistasapp.Utilities.BaseActivity;

import mx.edu.delasalle.lasallistasapp.R;

/**
 * Created by Axel on 29/10/2018
 */
public class CalendarAdapter extends RecyclerView.Adapter<CalendarAdapter.MyViewHolder> {
    BaseActivity activity;
    public  static List<Partido> lstPartidos;
    Partido partido;

    public CalendarAdapter(BaseActivity activity, List<Partido>lstPartidos){
        this.lstPartidos=lstPartidos;
        this.activity=activity;

    }
    public CalendarAdapter(){

    }

    @Override
    public MyViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View calendarView  = LayoutInflater.from(parent.getContext()).inflate(R.layout.match_list,parent,false);
        return new CalendarAdapter.MyViewHolder(calendarView);
    }

    @Override
    public void onBindViewHolder(MyViewHolder holder, int position) {
        partido = lstPartidos.get(position);
        holder.partidoActual = partido;
        //Calendar cal = Calendar.getInstance();
        Date date = ActivitiesUtils.getDateTimePicker(partido.getFecha());
       // cal.setTime();
        //int hours = cal.get(Calendar.HOUR_OF_DAY);
        String startTime = partido.getFecha();
        SimpleDateFormat input = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        try {
            Date dateValue = input.parse(startTime);
            holder.txvHour.setText(dateValue.getHours()+":"+dateValue.getMinutes());
        } catch (ParseException e) {
            ActivitiesUtils.showToat(activity,"Error añadiendo la hora al partido");

            e.printStackTrace();
        }

        holder.txvPitch.setText(partido.getCancha());
        holder.txvSport.setText(partido.getDeporte());
        if(partido.getTipoPartido() == 0 )
        {
            List<String> resultado = partido.getResultado();
            holder.txvScore1.setText(resultado.get(0));
            holder.txvScore2.setText(resultado.get(2));
        }
        else
        {
            holder.txvScore1.setText("V");
            holder.txvScore2.setText("S");
        }

        holder.txvTeam1.setText(partido.getEquipo1());
        holder.txvTeam2.setText(partido.getEquipo2());
    }

    @Override
    public int getItemCount() {
        return lstPartidos.size();
    }

    public class MyViewHolder extends RecyclerView.ViewHolder {

  /*      @BindView(R.id.imgEquipo1)
        CircularImageView imgTeam1;
        @BindView(R.id.imgEquipo2)
        CircularImageView imgTeam2;*/
        @BindView(R.id.txvEquipo1)
        TextView txvTeam1;
        @BindView(R.id.txvEquipo2)
        TextView txvTeam2;
        @BindView(R.id.txvScoreEquipo1)
        TextView txvScore1;
        @BindView(R.id.txvScoreEquipo2)
        TextView txvScore2;
        @BindView(R.id.txvDeporte)
        TextView txvSport;
        @BindView(R.id.txvHora)
        TextView txvHour;
        @BindView(R.id.txvCancha)
        TextView txvPitch;
        public Partido partidoActual;
        public MyViewHolder(View view) {
            super(view);
            ButterKnife.bind(this, view);
        }
        @OnClick({R.id.txvEquipo1,R.id.txvEquipo2,R.id.txvScoreEquipo1,R.id.txvScoreEquipo2,R.id.txvCancha,R.id.txvHora,R.id.txvDeporte})
        public void goToDetail(){
            Intent i = new Intent(activity,SecondActivity.class);
            Gson gson = new Gson();
            i.putExtra("Partido", gson.toJson(partidoActual));
            activity.startActivity(i);
        }


    }
}
