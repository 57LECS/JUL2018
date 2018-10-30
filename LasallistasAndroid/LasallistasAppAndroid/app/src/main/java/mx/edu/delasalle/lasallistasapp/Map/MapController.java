package mx.edu.delasalle.lasallistasapp.Map;

import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.MarkerOptions;

import mx.edu.delasalle.lasallistasapp.R;

/**
 * Created by Axel on 29/10/2018
 */
public class MapController implements OnMapReadyCallback {

    GoogleMap googleMap;
    @Override
    public void onMapReady(GoogleMap googleMap) {

        this.googleMap = googleMap;
        this.googleMap.getUiSettings().setZoomControlsEnabled(true);
        this.googleMap.addMarker(new MarkerOptions().position(new LatLng(21.1530643,-101.6779752)));
        this.googleMap.moveCamera(CameraUpdateFactory.newLatLngZoom(new LatLng(21.1530643,-101.6779752), 10));

    }
}
