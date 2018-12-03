package mx.edu.delasalle.lasallistasapp.Second;

import android.support.v4.app.Fragment;
import android.os.Bundle;
import android.widget.FrameLayout;
import butterknife.BindView;
import mx.edu.delasalle.lasallistasapp.R;
import mx.edu.delasalle.lasallistasapp.Utilities.ActivitiesUtils;
import mx.edu.delasalle.lasallistasapp.Utilities.BaseActivity;

public class SecondActivity extends BaseActivity {

    String objPartido;
    Integer tipoPartido;

    SecondController secondController;

    @BindView(R.id.placeholderSecond)
    FrameLayout placeHolder;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);
        secondController = new SecondController(this);
        objPartido = getIntent().getStringExtra("Partido");
        tipoPartido = getIntent().getIntExtra("TipoPartido",-1);
        secondController.setViews();
    }

    @Override
    public int getLayoutId() {
        return R.layout.activity_second;
    }

    public void setFragment(Fragment fragment, String tag) {
        Bundle args = new Bundle();
        args.putString("Partido",objPartido );
        args.putInt("TipoPartido",tipoPartido);
        fragment.setArguments(args);
        ActivitiesUtils.addFragmentToActivity(SecondActivity.this, getSupportFragmentManager(), fragment, placeHolder.getId(), tag);
    }
}
