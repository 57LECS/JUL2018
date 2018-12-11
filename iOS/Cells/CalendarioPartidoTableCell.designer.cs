// WARNING
//
// This file has been generated automatically by Visual Studio from the outlets and
// actions declared in your storyboard file.
// Manual changes to this file will not be maintained.
//
using Foundation;
using System;
using System.CodeDom.Compiler;

namespace Lasallistas.iOS
{
    [Register ("CalendarioPartidoTableCell")]
    partial class CalendarioPartidoTableCell
    {
        [Outlet]
        UIKit.UILabel lblDeporte { get; set; }


        [Outlet]
        UIKit.UILabel lblEquipoLoc { get; set; }


        [Outlet]
        UIKit.UILabel lblEquipoVis { get; set; }


        [Outlet]
        UIKit.UILabel lblHora { get; set; }


        [Outlet]
        UIKit.UILabel lblLugar { get; set; }

        void ReleaseDesignerOutlets ()
        {
            if (lblDeporte != null) {
                lblDeporte.Dispose ();
                lblDeporte = null;
            }

            if (lblEquipoLoc != null) {
                lblEquipoLoc.Dispose ();
                lblEquipoLoc = null;
            }

            if (lblEquipoVis != null) {
                lblEquipoVis.Dispose ();
                lblEquipoVis = null;
            }

            if (lblHora != null) {
                lblHora.Dispose ();
                lblHora = null;
            }

            if (lblLugar != null) {
                lblLugar.Dispose ();
                lblLugar = null;
            }
        }
    }
}