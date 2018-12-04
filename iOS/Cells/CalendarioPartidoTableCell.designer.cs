// WARNING
//
// This file has been generated automatically by Visual Studio to store outlets and
// actions made in the UI designer. If it is removed, they will be lost.
// Manual changes to this file may not be handled correctly.
//
using Foundation;
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
			if (lblEquipoLoc != null) {
				lblEquipoLoc.Dispose ();
				lblEquipoLoc = null;
			}

			if (lblEquipoVis != null) {
				lblEquipoVis.Dispose ();
				lblEquipoVis = null;
			}

			if (lblDeporte != null) {
				lblDeporte.Dispose ();
				lblDeporte = null;
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
