using System;
using Foundation;

using UIKit;
using Lasallistas.Models;
using System.Collections.Generic;

namespace Lasallistas.iOS
{
    public partial class CalendarioViewController : UIViewController, IUITableViewDataSource, IUITableViewDelegate
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
            tableCalendario.DataSource = this;
            tableCalendario.Delegate = this;

            //this.NavigationItem.
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

                cancha.Nombre = $"{dictPartido["Cancha"]}";

                //El objeto de Deporte.
                Deporte deporte = new Deporte(0, $"{dictPartido["Deporte"]}", 0);


                //El objeto de Universidad 1.
                Universidad universidad1 = new Universidad();
                universidad1.Nombre = $"{dictPartido["Equipo1"]}";

                //El objeto de Universidad 2.
                Universidad universidad2 = new Universidad();
                universidad2.Nombre = $"{dictPartido["Equipo2"]}";


                //Decisión de tipo de Rama.
                RamasEnum ramasEnum = new RamasEnum();

                switch ($"{dictPartido["Rama"]}") {

                    case "Varonil":

                        ramasEnum = RamasEnum.Varonil;
                        break;

                    case "Femenil":

                        ramasEnum = RamasEnum.Femenil;
                        break;

                    case "Mixto":

                        ramasEnum = RamasEnum.Mixto;
                        break;

                    default:

                        ramasEnum = RamasEnum.NA;
                        break;
                }

                //El objeto de Equipo 1.
                Equipo equipo1 = new Equipo(0, universidad1, deporte, ramasEnum);

                //El objeto de Equipo 2.
                Equipo equipo2 = new Equipo(0, universidad2, deporte, ramasEnum);

                //Resultados.
                NSArray results = dictPartido["Resultado"] as NSArray;


                List<string> lstTemp = new List<string>();
                for (uint i = 0; i < results.Count; i++) {

                    lstTemp.Add(results.GetItem<NSObject>(i).ToString());

                }

                string[] resultsArray = lstTemp.ToArray();

                Partido partido;
                if ($"{dictPartido["Ganador"]}" == equipo1.Universidad.Nombre) {

                    partido = new Partido(cancha, equipo1, equipo2, equipo1, resultsArray);
                }
                else {

                    partido = new Partido(cancha, equipo1, equipo2, equipo2, resultsArray);
                }

                lstPartidos.Add(partido);

            }
            tableCalendario.ReloadData();

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

        public nint RowsInSection(UITableView tableView, nint section)
        {
            return lstPartidos.Count > 0 ? lstPartidos.Count : 0;
        }

        [Export("numberOfSectionsInTableView:")]
        public nint NumberOfSections(UITableView tableView)
        {
            return 1;
        }

        [Export("tableView:heightForRowAtIndexPath:")]
        public nfloat GetHeightForRow(UITableView tableView, NSIndexPath indexPath)
        {
            return 100;
        }


        /// <summary>
        /// Gets the cell to show in the table view.
        /// </summary>
        /// <returns>The cell.</returns>
        /// <param name="tableView">Table view.</param>
        /// <param name="indexPath">Index path.</param>
        public UITableViewCell GetCell(UITableView tableView, NSIndexPath indexPath)
        {
            var cell = tableView.DequeueReusableCell(CalendarioPartidoTableCell.Key, indexPath) as CalendarioPartidoTableCell;

            cell.EquipoLocal = lstPartidos[indexPath.Row].Equipo1.Universidad.Nombre;
            cell.EquipoVisitante = lstPartidos[indexPath.Row].Equipo2.Universidad.Nombre;
            cell.Deporte = lstPartidos[indexPath.Row].Deporte.Nombre;
            cell.Hora = "";
            cell.Lugar = lstPartidos[indexPath.Row].Cancha.Nombre;

            return cell;

        }
    }
}

