// This file has been autogenerated from a class added in the UI designer.

using System;
using CoreGraphics;
using Foundation;
using Google.Maps;
using UIKit;

namespace Lasallistas.iOS
{
	public partial class MapViewController : UIViewController
	{

        MapView _mapView;
		public MapViewController (IntPtr handle) : base (handle)
		{
		}

        public override void LoadView()
        {
            base.LoadView();

            var camera = CameraPosition.FromCamera(latitude: 37.79,
                                            longitude: -122.40,
                                            zoom: 6);
            _mapView = MapView.FromCamera(CGRect.Empty, camera);
            _mapView.MyLocationEnabled = true;
            mapView = _mapView;
        }
    }
}
