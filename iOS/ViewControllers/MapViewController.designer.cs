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
	[Register ("MapViewController")]
	partial class MapViewController
	{
		[Outlet]
		UIKit.UIStackView ButtonsStackView { get; set; }

		[Outlet]
		UIKit.UIView mapView { get; set; }

		[Action ("btnAsistenciaTouchUpInside:")]
		partial void btnAsistenciaTouchUpInside (Foundation.NSObject sender);

		[Action ("btnBañosTouchUpInside:")]
		partial void btnBañosTouchUpInside (Foundation.NSObject sender);

		[Action ("btnCafeteriasTouchUpInside:")]
		partial void btnCafeteriasTouchUpInside (Foundation.NSObject sender);

		[Action ("btnCanchasTouchUpInside:")]
		partial void btnCanchasTouchUpInside (Foundation.NSObject sender);
		
		void ReleaseDesignerOutlets ()
		{
			if (mapView != null) {
				mapView.Dispose ();
				mapView = null;
			}

			if (ButtonsStackView != null) {
				ButtonsStackView.Dispose ();
				ButtonsStackView = null;
			}
		}
	}
}
