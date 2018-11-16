using System;

using UIKit;

namespace Lasallistas.iOS
{
    public partial class CalendarioViewController : UIViewController
    {
        public CalendarioViewController() : base("CalendarioViewController", null)
        {
        }

        public override void ViewDidLoad()
        {
            base.ViewDidLoad();
            // Perform any additional setup after loading the view, typically from a nib.
        }

        public override void DidReceiveMemoryWarning()
        {
            base.DidReceiveMemoryWarning();
            // Release any cached data, images, etc that aren't in use.
        }
    }
}

