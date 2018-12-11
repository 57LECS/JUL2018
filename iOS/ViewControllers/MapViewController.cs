// This file has been autogenerated from a class added in the UI designer.

using System;
using CoreGraphics;
using Foundation;
//using Google.Maps;
using UIKit;
using Mapbox;
using CoreLocation;
using Lasallistas.Models;
using System.Collections.Generic;

namespace Lasallistas.iOS
{
	public partial class MapViewController : UIViewController, IMGLMapViewDelegate
    {
        MGLMapView mGLMap;
        List<Cancha> Canchas;
        List<Lugares> Banios;
        List<Lugares> Asistencias;
        List<Lugares> Cafeterias;


        public MapViewController (IntPtr handle) : base (handle)
		{
		}

        public override void ViewDidLoad()
        {
            base.ViewDidLoad();


            var document = AppDelegate.dbFirestore.GetCollection("eventos/oct2018/canchas");
            MapConfiguration();
            document.GetDocuments(HandleQuerySnapshot);

        }

        partial void btnAsistenciaTouchUpInside(NSObject sender)
        {

        }

        void MapConfiguration()
        {
            var url = new NSUrl("mapbox://styles/mapbox/streets-v10");
            var mapViewView = new MGLMapView(View.Bounds, url);
            mapViewView.StyleURL = MGLStyle.DarkStyleURL;
            mapViewView.AutoresizingMask = UIViewAutoresizing.FlexibleDimensions;
            mapViewView.SetCenterCoordinate(new CLLocationCoordinate2D(21.152212, -101.711294), 15, false);
            View.AddSubview(mapViewView);
            mGLMap = mapViewView;
            View.BringSubviewToFront(ButtonsStackView);
        }


        void HandleQuerySnapshot(Firebase.CloudFirestore.QuerySnapshot snapshot, NSError error)
        {
            if (error != null)
            {
                System.Console.WriteLine($"Error getting documents: {error.LocalizedDescription}");
                return;
            }
            Canchas = new List<Cancha>();
            foreach (var document in snapshot?.Documents)
            {

                NSDictionary dictCanchas = document.Data;
                Cancha cancha = new Cancha();
                cancha.Nombre = $"{dictCanchas["nombre"]}";
                var ubicacion = dictCanchas["ubicacion"] as Firebase.CloudFirestore.GeoPoint;
                cancha.Lat = ubicacion.Latitude;
                cancha.Long = ubicacion.Longitude;

                mGLMap.WeakDelegate = this;


                var anotation = new MGLPointAnnotation()
                {
                    Title = cancha.Nombre,
                    Coordinate = new CLLocationCoordinate2D(cancha.Lat, cancha.Long)
                };

                Canchas.Add(cancha);
                mGLMap.AddAnnotation(anotation);
            } 

        }


    }
}
