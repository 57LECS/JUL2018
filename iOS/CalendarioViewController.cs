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

            var document = AppDelegate.dbFirestore.GetCollection("eventos");
            document.GetDocuments(HandleQuerySnapshotHandler);

            //Llamado del ejemplo.
            Partido.GetPartidosByDate(DateTime.Now, HandleCallback, true);
        }

        void HandleQuerySnapshotHandler(Firebase.CloudFirestore.QuerySnapshot snapshot, Foundation.NSError error)
        {
            if (error != null)
            {
                System.Console.WriteLine($"Error getting documents: {error.LocalizedDescription}");
                return;
            }

            foreach (var document in snapshot?.Documents)
                System.Console.WriteLine($"{document.Id} => {document.Data}");
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

