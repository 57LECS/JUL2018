package mx.edu.delasalle.lasallistasapp;

import android.support.v7.app.AppCompatActivity;
import android.test.mock.MockApplication;
import android.test.mock.MockContentProvider;
import android.test.mock.MockContext;

import org.junit.Assert;
import org.junit.Test;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import mx.edu.delasalle.lasallistasapp.Utilities.ActivitiesUtils;
import mx.edu.delasalle.lasallistasapp.Utilities.BaseActivity;

import static org.junit.Assert.*;

/**
 * Example local unit test, which will execute on the development machine (host).
 *
 * @see <a href="http://d.android.com/tools/testing">Testing documentation</a>
 */
public class ExampleUnitTest {
    @Test
    public void addition_isCorrect() {
        assertEquals(4, 2 + 2);
    }

    @Test
    public void format_Date_isCorrect() throws ParseException {
        String input = "2018-10-31 16:30:00";
        String expected = "31 octubre 2018";
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String output  = ActivitiesUtils.setDateFormat(sdf.parse(input));
        assertEquals(expected, output);
       // "java.text.ParseException"
    }


    @Test(expected= ParseException.class)
    public void format_Date_isNotCorrect() throws ParseException {
            String input = "#";
            String expected = "31 octubre 2018";
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String output  = ActivitiesUtils.setDateFormat(sdf.parse(input));
            assertEquals(expected, output);

    }

    @Test
    public void getDateFromStringIsNull() throws ParseException {
        String input = "2018-10-31 16:30:00";
        Date expected = new Date(2018, 10, 31,16,30,00);
        Date output  = ActivitiesUtils.getDateTimePicker(input);
        //assertEquals(expected, output);
        assertNull(output);

    }
    @Test
    public void showToastCorrect(){
        BaseActivity activity =new BaseActivity() {
            @Override
            public int getLayoutId() {
                return R.layout.activity_main;
            }
        };
        ActivitiesUtils.showToat(activity,"Holaaa");

    }

}