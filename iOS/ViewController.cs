using System;

using UIKit;
using Firebase.Core;
using Firebase.Auth;
using Firebase.CloudFirestore;

namespace Lasallistas.iOS
{
    public partial class ViewController : UIViewController
    {
        int count = 1;

        Firestore db;

        public ViewController(IntPtr handle) : base(handle)
        {
        }

        public override void ViewDidLoad()
        {
            base.ViewDidLoad();

            // Perform any additional setup after loading the view, typically from a nib.
            Button.AccessibilityIdentifier = "myButton";
            Button.TouchUpInside += delegate
            {
                var title = string.Format("{0} clicks!", count++);
                Button.SetTitle(title, UIControlState.Normal);
            };

            //Configurar la variable de Firestore.


            //Base command to initialize Firebase.
            App.Configure();

            //Ejemplo para traer una colección de Firestore.
            db.GetCollection("eventos").GetDocuments(HandleQuerySnapshotHandler);

        }

        void HandleQuerySnapshotHandler(QuerySnapshot snapshot, Foundation.NSError error)
        {
            if (error != null) {

                System.Console.WriteLine($"Error getting documents: {error.LocalizedDescription}");
                return;
            }

            foreach (var document in snapshot?.Documents) {

                System.Console.WriteLine($"{document.Id} => {document.Data}");
            }
                
        }


        public override void DidReceiveMemoryWarning()
        {
            base.DidReceiveMemoryWarning();
            // Release any cached data, images, etc that aren't in use.		
        }
    }
}
