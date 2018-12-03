package mx.edu.delasalle.lasallistasapp.Second;

import mx.edu.delasalle.lasallistasapp.CalendarDetail.CalendarDetailFragment;
import mx.edu.delasalle.lasallistasapp.Utilities.ActivitiesUtils;

/**
 * Created by Axel on 19/11/2018
 */
public class SecondController {
    SecondActivity activity;
    public SecondController(SecondActivity secondActivity) {
        activity = secondActivity;
    }
    public void setViews() {
            activity.setFragment(new CalendarDetailFragment(), ActivitiesUtils.MATCH_DETAIL);
    }
}
