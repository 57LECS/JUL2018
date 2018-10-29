package mx.edu.delasalle.lasallistasapp.Utilities;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import java.util.concurrent.Callable;

import butterknife.ButterKnife;


/**
 * Created by amalip on 14/02/18.
 */

public abstract class BaseFragment extends Fragment {

    //Override the onCreateView method implementing the data that all Fragments will use
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = inflater.inflate(getLayoutId(), container, false);
        //Setting the binding of ButterKnife
        ButterKnife.bind(this, view);
        return view;
    }

    //This method helps us getting the idLayout of the activity
    public abstract int getLayoutId();

    //Method that handle the back to the last fragment
    public void backFragment(BaseActivity activity) {
        //activity.getSupportFragmentManager().popBackStackImmediate();
        activity.getSupportFragmentManager().popBackStack();
    }



}