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
    [Register ("MapViewController")]
    partial class MapViewController
    {
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
        }
    }
}