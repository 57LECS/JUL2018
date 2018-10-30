package mx.edu.delasalle.lasallistasapp.Map;

import android.content.Context;
import android.net.Uri;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.MapView;
import com.google.android.gms.maps.SupportMapFragment;

import butterknife.BindView;
import mx.edu.delasalle.lasallistasapp.R;
import mx.edu.delasalle.lasallistasapp.Utilities.BaseFragment;


public class MapFragment extends BaseFragment {

    MapController mapController;
    @BindView(R.id.mapView)
    MapView map;


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = super.onCreateView(inflater, container, savedInstanceState);


        mapController = new MapController();
        //SupportMapFragment mapFragment = (SupportMapFragment) getChildFragmentManager()
        //        .findFragmentById(R.id.mapView);
        //mapFragment.getMapAsync(mapController);
//        map.onCreate(savedInstanceState);
//        map.getMapAsync(mapController);

        map.onCreate(savedInstanceState);
        map.getMapAsync(mapController);
        map.onResume();
        return view;
    }

    @Override
    public int getLayoutId() {
        return R.layout.fragment_map;
    }

    @Override
    public void onResume() {
        super.onResume();
     //   map.getMapAsync(mapController);
    }
}
