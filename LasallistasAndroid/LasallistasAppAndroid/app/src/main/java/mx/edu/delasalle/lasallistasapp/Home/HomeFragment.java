package mx.edu.delasalle.lasallistasapp.Home;


import android.os.Bundle;
import android.os.Handler;
import android.support.annotation.NonNull;
import android.support.v4.app.Fragment;
import android.support.v4.widget.SwipeRefreshLayout;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.OnSuccessListener;

import com.google.firebase.firestore.CollectionReference;
import com.google.firebase.firestore.DocumentReference;
import com.google.firebase.firestore.DocumentSnapshot;
import com.google.firebase.firestore.EventListener;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.FirebaseFirestoreException;
import com.google.firebase.firestore.QuerySnapshot;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import butterknife.BindView;
import butterknife.BindViews;
import mx.edu.delasalle.lasallistasapp.MainActivity;
import mx.edu.delasalle.lasallistasapp.R;
import mx.edu.delasalle.lasallistasapp.Utilities.ActivitiesUtils;
import mx.edu.delasalle.lasallistasapp.Utilities.BaseActivity;
import mx.edu.delasalle.lasallistasapp.Utilities.BaseFragment;

/**
 * Created by Axel
 */
public class HomeFragment extends BaseFragment {

    BaseActivity activity;
    HomeController homeController;


    @BindViews({R.id.linear_layout_1,R.id.linear_layout_2})List<LinearLayout>lstLly;
    @BindViews({R.id.tv_days,R.id.tv_hour,R.id.tv_minute,R.id.tv_second})List<TextView>lstTextView;
    @BindView(R.id.rcvCalendar)
    RecyclerView rcvCalendar;
    @BindView(R.id.swrListCalendar)
    SwipeRefreshLayout swrListCalendar;

    private static final String TAG = "MainActivity";


    private FirebaseFirestore db = FirebaseFirestore.getInstance();
    private CollectionReference noteRef = db.collection("/eventos/oct2018/partidos/");

    private String EVENT_DATE_TIME = "2019-03-14 12:20:00";
    private String DATE_FORMAT = "yyyy-MM-dd HH:mm:ss";
    private Handler handler = new Handler();
    private Runnable runnable;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View view = super.onCreateView(inflater, container, savedInstanceState);
        activity = (BaseActivity) getContext();
        homeController = new HomeController(activity,this);
        swrListCalendar.setOnRefreshListener(homeController);
        noteRef.addSnapshotListener( new EventListener<QuerySnapshot>() {
            @Override
            public void onEvent(QuerySnapshot querySnapshot, FirebaseFirestoreException e) {
                if (e != null) {
                    ActivitiesUtils.showToat(activity,"Fallo la carga de partidos");
                    Log.d(TAG, e.toString());
                    return;
                }

                if (!querySnapshot.isEmpty()) {
                    List<DocumentSnapshot>documentSnapshots = querySnapshot.getDocuments();
                }
            }
        });
        try {
            SimpleDateFormat dateFormat = new SimpleDateFormat(DATE_FORMAT);
            Date event_date = dateFormat.parse(EVENT_DATE_TIME);
            Date current_date = new Date();
            if (current_date.after(event_date)){
                lstLly.get(0).setVisibility(View.VISIBLE);
                lstLly.get(1).setVisibility(View.GONE);
                homeController.getMatches();
            }
            else
                countDownStart();
        } catch (ParseException e) {
            e.printStackTrace();
        }

        return view;
    }
    private void countDownStart() {
        runnable = new Runnable() {
            @Override
            public void run() {
                try {
                    handler.postDelayed(this, 1000);
                    SimpleDateFormat dateFormat = new SimpleDateFormat(DATE_FORMAT);
                    Date event_date = dateFormat.parse(EVENT_DATE_TIME);
                    Date current_date = new Date();
                    if (!current_date.after(event_date)) {
                        long diff = event_date.getTime() - current_date.getTime();
                        long Days = diff / (24 * 60 * 60 * 1000);
                        long Hours = diff / (60 * 60 * 1000) % 24;
                        long Minutes = diff / (60 * 1000) % 60;
                        long Seconds = diff / 1000 % 60;
                        lstTextView.get(0).setText(String.format("%02d", Days));
                        lstTextView.get(1).setText(String.format("%02d", Hours));
                        lstTextView.get(2).setText(String.format("%02d", Minutes));
                        lstTextView.get(3).setText(String.format("%02d", Seconds));
                    } else {
                        lstLly.get(0).setVisibility(View.VISIBLE);
                        lstLly.get(1).setVisibility(View.GONE);
                        handler.removeCallbacks(runnable);
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        };
        handler.postDelayed(runnable, 0);
    }

    @Override
    public int getLayoutId() {
        return R.layout.fragment_home;
    }

}
