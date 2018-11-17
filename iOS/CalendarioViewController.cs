using System;

using UIKit;
using Lasallistas.Models;

namespace Lasallistas.iOS
{
    public partial class CalendarioViewController : UIViewController
    {
        public CalendarioViewController(IntPtr handle) : base(handle)
        {
        }

        public override void ViewDidLoad()
        {
            base.ViewDidLoad();
            // Perform any additional setup after loading the view, typically from a nib.


            //Llamado del ejemplo.
            Partido.GetPartidosByDate(DateTime.Now, HandleCallback, true);
        }

        void HandleCallback(System.Collections.Generic.List<Partido> partidos, string message)
        {

            foreach (Partido partido in partidos) {

                Console.WriteLine(partido);
            }
        }

        public override void DidReceiveMemoryWarning()
        {
            base.DidReceiveMemoryWarning();
            // Release any cached data, images, etc that aren't in use.
        }
    }
}

