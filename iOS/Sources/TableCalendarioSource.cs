using System;
using System.Collections.Generic;
using Foundation;
using Lasallistas.Models;
using UIKit;

namespace Lasallistas.iOS.Sources
{
    public class TableCalendarioSource : UITableViewSource
    {
        private List<Partido> Data;
        public List<Partido> DataPartidosCalendario
        {
            get
            {
                return Data;
            }
            set
            {
                Data = value;
            }
        }

        public Action<NSIndexPath> DeleteAction = (NSIndexPath indice) => { };
        public Action<NSIndexPath> SelectAction = (NSIndexPath indice) => { };

        public override nint RowsInSection(UITableView tableview, nint section)
        {
            return Data != null ? Data.Count : 0;
        }

        public override nint NumberOfSections(UITableView tableView)
        {
            return 1;
        }

        public override nfloat GetHeightForRow(UITableView tableView, NSIndexPath indexPath)
        {
            return 70;
        }

        public TableCalendarioSource()
        {
        }

        public override UITableViewCell GetCell(UITableView tableView, Foundation.NSIndexPath indexPath)
        {
            var cell = tableView.DequeueReusableCell(HistorialReservacionCell.Key) as HistorialReservacionCell;
            if (cell == null)
            {
                cell = new HistorialReservacionCell();
                var views = NSBundle.MainBundle.LoadNib(HistorialReservacionCell.Key, cell, null);
                cell = Runtime.GetNSObject(views.ValueAt(0)) as HistorialReservacionCell;
            }

            var reservacion = Data[indexPath.Row];
            cell.Fecha = reservacion.FechaHoraEntrada.ToLocalTime().ToString("dd/MMM/yy");
            cell.Hora1 = reservacion.FechaHoraEntrada.ToLocalTime().ToString("HH:mm");
            cell.Hora2 = reservacion.FechaHoraSalida.ToLocalTime().ToString("HH:mm");
            cell.Nombre = reservacion.Lugar?.Nombre;
            cell.Costo = reservacion.SolicitudReservacion?.TarifaTotal.ToString("C");
            return cell;
        }

        public override nint RowsInSection(UITableView tableview, nint section)
        {
            throw new NotImplementedException();
        }
    }
}
