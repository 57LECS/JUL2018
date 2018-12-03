package mx.edu.delasalle.lasallistasapp.CalendarDetail;

import mx.edu.delasalle.lasallistasapp.Second.SecondActivity;
import mx.edu.delasalle.lasallistasapp.Utilities.ActivitiesUtils;
import mx.edu.delasalle.lasallistasapp.Utilities.BaseActivity;
import mx.edu.delasalle.lasallistasapp.Utilities.Validations;

/**
 * Created by Axel on 19/11/2018
 */
public class CalendarDetailController {
    BaseActivity activity;
    CalendarDetailFragment calendarDetailFragment;
    Validations validations;
    public CalendarDetailController(BaseActivity activity, CalendarDetailFragment calendarDetailFragment){
        this.activity = activity;
        this.calendarDetailFragment = calendarDetailFragment;
        validations = new Validations(activity);
    }

}
