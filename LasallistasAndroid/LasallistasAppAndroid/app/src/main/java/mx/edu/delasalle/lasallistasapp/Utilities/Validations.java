package mx.edu.delasalle.lasallistasapp.Utilities;

import android.Manifest;
import android.content.Context;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.os.Build;
import android.support.v7.app.AppCompatActivity;

import java.math.BigInteger;
import java.net.SocketException;
import java.net.SocketTimeoutException;
import java.net.UnknownHostException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;


public class Validations {
    final BaseActivity activity;

    public Validations(BaseActivity activity) {
        this.activity = activity;
    }

    public static String doSHA256(String password) {
        MessageDigest digest = null;
        try {
            digest = MessageDigest.getInstance("SHA-256");
        } catch (NoSuchAlgorithmException e1) {
            e1.printStackTrace();
        }
        digest.reset();
        byte[] data = digest.digest(password.getBytes());
        return String.format("%0" + (data.length * 2) + 'x', new BigInteger(1, data));
    }

    public boolean isConnected() {
        ConnectivityManager cm =
                (ConnectivityManager) activity.getSystemService(Context.CONNECTIVITY_SERVICE);
        NetworkInfo netInfo = cm.getActiveNetworkInfo();

        if (netInfo != null && netInfo.isConnectedOrConnecting())
            return true;
        else {
            ActivitiesUtils.showToat(activity, "No hay conexion a internet");
            return false;
        }
    }
    public static Boolean askPermissions(AppCompatActivity activity) {
        String[] permissions = {Manifest.permission.ACCESS_FINE_LOCATION,
                Manifest.permission.ACCESS_COARSE_LOCATION
        };
        int requestCode = 200;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            activity.requestPermissions(permissions, requestCode);
            //fragment.requestPermissions(permissions, requestCode);
            return true;
        }
        return false;
    }

    public void onFailureRequest(Throwable t) {
        if (t instanceof SocketException || t instanceof SocketTimeoutException || t instanceof UnknownHostException)
            ActivitiesUtils.showToat(activity, "Error conectando al servidor");
    }
}
