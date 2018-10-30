package mx.edu.delasalle.lasallistasapp.Calendar;

import android.content.Intent;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.mikhaellopez.circularimageview.CircularImageView;

import java.util.List;

import butterknife.BindView;
import butterknife.ButterKnife;
import mx.edu.delasalle.lasallistasapp.Models.Partido;
import mx.edu.delasalle.lasallistasapp.Utilities.BaseActivity;

import mx.edu.delasalle.lasallistasapp.R;

/**
 * Created by Axel on 29/10/2018
 */
public class CalendarAdapter extends RecyclerView.Adapter<CalendarAdapter.MyViewHolder> {
    BaseActivity activity;
    public  static List<Partido> lstPartidos;
    int tipoPartido = 0;
    Partido partido;
    public CalendarAdapter(BaseActivity activity, int tipoPartido, List<Partido>lstPartidos){
        this.lstPartidos=lstPartidos;
        this.activity=activity;
        this.tipoPartido = tipoPartido;


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
        holder.txvHour.setText("10:00");
        holder.txvPitch.setText(partido.getCancha().getNombre());
        holder.txvSport.setText(partido.getDeporte().getNombre());
        if(tipoPartido == 0 )
        {
            String[] resultado = partido.getResultado();
            holder.txvScore1.setText(resultado[0]);
            holder.txvScore2.setText(resultado[2]);
        }
        else
        {
            holder.txvScore1.setText("V");
            holder.txvScore2.setText("S");
        }

        holder.txvTeam1.setText(partido.getEquipo1().getUniversidad().getNombre());
        holder.txvTeam2.setText(partido.getEquipo2().getUniversidad().getNombre());
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
        public MyViewHolder(View view) {
            super(view);
            ButterKnife.bind(this, view);
        }


    }
}
