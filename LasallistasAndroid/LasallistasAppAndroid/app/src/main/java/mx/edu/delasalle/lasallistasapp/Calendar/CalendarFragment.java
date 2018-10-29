package mx.edu.delasalle.lasallistasapp.Calendar;


import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import mx.edu.delasalle.lasallistasapp.R;
import mx.edu.delasalle.lasallistasapp.Utilities.BaseFragment;

public class CalendarFragment extends BaseFragment {

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = super.onCreateView(inflater, container, savedInstanceState);
        return view;
    }

    @Override
    public int getLayoutId() {
        return R.layout.fragment_calendar;
    }

}
