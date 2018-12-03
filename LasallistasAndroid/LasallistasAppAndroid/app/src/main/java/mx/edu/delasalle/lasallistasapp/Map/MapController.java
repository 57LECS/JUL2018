package mx.edu.delasalle.lasallistasapp.Map;

import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.android.gms.maps.model.BitmapDescriptor;
import com.google.android.gms.maps.model.BitmapDescriptorFactory;
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
        BitmapDescriptor icon = BitmapDescriptorFactory.fromResource(R.drawable.ic_location);
        this.googleMap.addMarker(new MarkerOptions().position(new LatLng(21.1516802,-101.7129921)).icon(icon).title("Cancha Uruguayo"));
        this.googleMap.addMarker(new MarkerOptions().position(new LatLng(21.1531794,-101.7118626)).icon(icon).title("Cancha Rápido"));
        this.googleMap.addMarker(new MarkerOptions().position(new LatLng(21.1531838,-101.7127907)).icon(icon).title("Universum Nostrum"));
        this.googleMap.addMarker(new MarkerOptions().position(new LatLng(21.1523036,-101.7102436)).icon(icon).title("Cancha Soccer"));
        this.googleMap.addMarker(new MarkerOptions().position(new LatLng(21.1537014,-101.7109474)).icon(icon).title("Cancha Voleybol 1"));
        this.googleMap.addMarker(new MarkerOptions().position(new LatLng(21.1537477,-101.7109085)).icon(icon).title("Cancha Voleybol 2"));
        this.googleMap.addMarker(new MarkerOptions().position(new LatLng(21.1537858,-101.7107583)).icon(icon).title("Cancha Voleybol 3"));
        this.googleMap.moveCamera(CameraUpdateFactory.newLatLngZoom(new LatLng(21.1516802,-101.7129921), 19));

    }
}
