using System;
using Foundation;

using UIKit;
using Lasallistas.Models;
using System.Collections.Generic;

namespace Lasallistas.iOS
{
    public partial class CalendarioViewController : UIViewController
    {
        List<Partido> lstPartidos;

        public CalendarioViewController(IntPtr handle) : base(handle)
        {
        }

        public override void ViewDidLoad()
        {
            base.ViewDidLoad();
            // Perform any additional setup after loading the view, typically from a nib.

            var document = AppDelegate.dbFirestore.GetCollection("eventos/oct2018/partidos");
            document.GetDocuments(HandleQuerySnapshotHandler);

            //Inicializado de la lista.
            lstPartidos = new List<Partido>();

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

            foreach (var document in snapshot?.Documents) {

                NSDictionary dictPartido = document.Data;

                //El objeto de Cancha.
                Cancha cancha = new Cancha();

                long canchaId; 
                if (!long.TryParse($"{dictPartido["cancha_id"]}", out canchaId)) {

                    canchaId = 0;
                }

                cancha.Id_Cancha = canchaId;
                cancha.Nombre = $"{dictPartido["cancha_nombre"]}";

                //El objeto de Universidad 1.
                Universidad universidad1 = new Universidad();
                universidad1.Nombre = $"{dictPartido["equipo1"]}";

                //El objeto de Universidad 2.
                Universidad universidad2 = new Universidad();
                universidad2.Nombre = $"{dictPartido["equipo2"]}";


                //El objeto de Equipo 1.
                Equipo equipo1 = new Equipo(0, universidad1, null, RamasEnum.NA);

                //El objeto de Equipo 2.
                Equipo equipo2 = new Equipo(0, universidad2, null, RamasEnum.NA);


                //Resultados. Esto deberá venir de Firebase.
                string[] results = { "0-0", "3-1" };

                Partido partido = new Partido(cancha, equipo1, equipo2, equipo2, results);


                lstPartidos.Add(partido);

            }

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

