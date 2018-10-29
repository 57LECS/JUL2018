package mx.edu.delasalle.lasallistasapp.Utilities;

import android.app.ProgressDialog;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.ProgressBar;

import butterknife.ButterKnife;

/**
 * Created by dianacch on 14/02/18.
 */

public abstract class BaseActivity extends AppCompatActivity {
    ProgressDialog progressDialog;

    //Override the onCreate method implementing the data that all activies will use
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(getLayoutId());
        //Setting the binding of ButterKnife
        ButterKnife.bind(this);
    }

    //This method helps us getting the idLayout of the activity
    public abstract int getLayoutId();

    public void showLoading() {
        progressDialog = ProgressDialog.show(this, null, null);
        progressDialog.setContentView(new ProgressBar(this));
        progressDialog.getWindow().setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
    }

    public void hideLoading() {
        try {
            progressDialog.cancel();
        }
        catch (Exception ex){

        }
    }
}