package mx.edu.delasalle.lasallistasapp.Utilities;

import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.SharedPreferences;
import android.support.annotation.NonNull;
import android.support.annotation.StringRes;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentTransaction;
import android.support.v7.app.AppCompatActivity;
import android.util.Patterns;
import android.widget.Toast;

import java.io.File;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.Map;
import java.util.regex.Pattern;


import static android.content.Context.MODE_PRIVATE;

/**
 * Created by Amalip on 14/02/18.
 */

public class ActivitiesUtils {
    public enum types {
        STRING, INTEGER, FLOAT, BOOLEAN
    }

    public static final String HOME = "Home",CALENDAR = "Calendar", MEDALS = "Medals",MAP = "Map",MATCH_DETAIL = "MatchDetail";


    //This method will replace the Fragment that is showing
    /*
    * fragmentManager = Provides the fragmentManager to the fragmentTransaction that we will create
    * fragment = The fragment that will be shown
    * frameId = The frameId that point to the container
    * */
    public static void addFragmentToActivity(BaseActivity activity, @NonNull FragmentManager fragmentManager,
                                             @NonNull Fragment fragment, int frameId, String tag) {
        //We create the transaction and establish the frameId (place that contains the fragment)
        // and the fragment that will be shown
        if (!activity.isFinishing()&& !activity.isDestroyed()) {
            FragmentTransaction transaction = fragmentManager.beginTransaction();
            if(!tag.equals(MATCH_DETAIL) )
                transaction.addToBackStack(tag);
            /*if(!tag.equals(REQUEST_DETAIL_HERO))
                transaction.addToBackStack(tag);*/
           /* else if (!tag.equals(REQUEST_DETAIL_HERO))
                transaction.addToBackStack(tag);*/
            transaction.replace(frameId, fragment);
            transaction.commit();
        }
        //transaction.commitAllowingStateLoss();
    }


    //This method helps us to show toast everywhere
    /*
    * activity = The actual activity
    * msg = The message to show
    * */
    public static void showToat(AppCompatActivity activity, String msg) {
        Toast.makeText(activity, msg, Toast.LENGTH_LONG).show();
    }

    public static void showToast(AppCompatActivity activity, @StringRes Integer msg) {
        Toast.makeText(activity, msg,Toast.LENGTH_SHORT).show();
    }
    public static boolean clearSharedPreferences(Context context) {
        try {
            SharedPreferences sharedPreferences = context.getSharedPreferences("mx.edu.delasalle.lasallistasapp", MODE_PRIVATE);
            sharedPreferences.edit().clear().apply();
            return true;
        } catch (Exception ex) {
            return false;
        }
    }

    public static boolean clearSharedPreference(Context context, String key) {
        try {
            SharedPreferences sharedPreferences = context.getSharedPreferences("mx.edu.delasalle.lasallistasapp", MODE_PRIVATE);
            sharedPreferences.edit().remove(key).apply();
            return true;
        } catch (Exception ex) {
            return false;
        }
    }

    public static boolean editSharedPreferences(Context context
            , String key, Object value, types type) {
        //Instance of sharedPreferences with the url where will be generated and the accessibility mode
        SharedPreferences sharedPreferences = context.getSharedPreferences("mx.edu.delasalle.lasallistasapp", MODE_PRIVATE);

        try {
            switch (type) {
                case STRING:
                    sharedPreferences.edit().putString(key, (String) value).apply();
                    return true;
                case INTEGER:
                    sharedPreferences.edit().putInt(key, (Integer) value).apply();
                    return true;
                case FLOAT:
                    sharedPreferences.edit().putFloat(key, (Float) value).apply();
                    return true;
                case BOOLEAN:
                    sharedPreferences.edit().putBoolean(key, (Boolean) value).apply();
                    return true;
            }
        } catch (Exception ex) {
            return false;
        }
        return true;
    }

    /*
    * activity = The actual activity
    * map = The map that contains the value-key that will be saved in sharedPreferences
    * */
    public static boolean editSharedPreferences(Context context
            , Map<String, String> map) {
        //Instance of sharedPreferences with the url where will be generated and the accessibility mode
        SharedPreferences sharedPreferences = context.getSharedPreferences("mx.edu.delasalle.lasallistasapp", MODE_PRIVATE);

        try {
            //Iterate the keys in map and if it matches with the value "STRING", "INTEGER", etc,
            // is the type that will be saved, and when it finish returns true, if something crashes return false
            for (String key : map.keySet()) {
                if (key.toString().contains("STRING"))
                    sharedPreferences.edit().putString(key.replace("STRING", ""), map.get(key)).apply();
                else if (key.toString().contains("INTEGER"))
                    sharedPreferences.edit().putInt(key.replace("INTEGER", ""), Integer.parseInt(map.get(key))).apply();
                else if (key.toString().contains("FLOAT"))
                    sharedPreferences.edit().putFloat(key.replace("FLOAT", ""), Float.parseFloat(map.get(key))).apply();
                else if (key.toString().contains("BOOLEAN"))
                    sharedPreferences.edit().putBoolean(key.replace("BOOLEAN", ""), Boolean.parseBoolean(map.get(key))).apply();
            }
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public static Object getSharedPreference(Context context, String key, types type) {
        //Instance of sharedPreferences with the url where will be generated and the accessibility mode
        SharedPreferences sharedPreferences = context.getSharedPreferences("mx.edu.delasalle.lasallistasapp", MODE_PRIVATE);
        switch (type) {
            case STRING:
                return sharedPreferences.getString(key, "");
            case INTEGER:
                return sharedPreferences.getInt(key, 0);
            case FLOAT:
                return sharedPreferences.getFloat(key, 0);
            case BOOLEAN:
                return sharedPreferences.getBoolean(key, false);
            default:
                return null;
        }
    }

    public static String setDateFormat(Date date) {
        Locale locale = new Locale("es", "MX");
        SimpleDateFormat smp = new SimpleDateFormat("dd MMMM yyyy", locale);
        return smp.format(date);
    }
    public static boolean validarEmail(String email) {
        Pattern pattern = Patterns.EMAIL_ADDRESS;
        return pattern.matcher(email).matches();
    }
    public static Date getDateTimePicker(String _date) {
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy", Locale.getDefault());
        try {
            Date date = sdf.parse(_date);
            return date;
        } catch (ParseException e) {
            return null;
        }
    }


    public static void showAlertDialog(final AppCompatActivity activity , String message, String possitiveMessage){
        AlertDialog.Builder alertDialogBuilder = new AlertDialog.Builder(
                activity);
        alertDialogBuilder
                .setMessage(message)
                .setCancelable(false)
                .setPositiveButton(possitiveMessage,
                        new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog,
                                                int id) {
                                Intent callGPSSettingIntent = new Intent(
                                        android.provider.Settings.ACTION_LOCATION_SOURCE_SETTINGS);
                                activity.startActivity(callGPSSettingIntent);
                            }
                        });

        AlertDialog alert = alertDialogBuilder.create();
        alert.show();
    }

}
