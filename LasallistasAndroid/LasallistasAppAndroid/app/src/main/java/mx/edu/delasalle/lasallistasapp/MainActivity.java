package mx.edu.delasalle.lasallistasapp;

import android.support.annotation.NonNull;
import android.support.constraint.Placeholder;
import android.support.design.widget.BottomNavigationView;
import android.support.v4.app.Fragment;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.MenuItem;
import android.widget.FrameLayout;

import butterknife.BindView;
import butterknife.ButterKnife;
import mx.edu.delasalle.lasallistasapp.Calendar.CalendarFragment;
import mx.edu.delasalle.lasallistasapp.Map.MapFragment;
import mx.edu.delasalle.lasallistasapp.Utilities.ActivitiesUtils;
import mx.edu.delasalle.lasallistasapp.Utilities.BaseActivity;

public class MainActivity extends BaseActivity {

    @BindView(R.id.bottom_navigation)
    BottomNavigationView bottomBar;
    @BindView(R.id.placeholder)
    FrameLayout mainPlaceholder;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ButterKnife.bind(this);
        bottomBar.setOnNavigationItemSelectedListener(
                new BottomNavigationView.OnNavigationItemSelectedListener() {
                    @Override
                    public boolean onNavigationItemSelected(@NonNull MenuItem item) {
                        switch (item.getItemId()) {
                            case R.id.action_home:
                                break;
                            case R.id.action_calendar:
                                setFragment(new CalendarFragment(),ActivitiesUtils.CALENDAR);
                                break;
                            case R.id.action_map:
                                setFragment(new MapFragment(),ActivitiesUtils.MAP);
                                break;
                            case R.id.action_medals:
                                break;

                        }
                        return true;
                    }
                });
    }
    public void setFragment(Fragment fragment, String tag) {
        ActivitiesUtils.addFragmentToActivity(this, getSupportFragmentManager(), fragment, mainPlaceholder.getId(), tag);
    }

    @Override
    public int getLayoutId() {
        return R.layout.activity_main;
    }
}
