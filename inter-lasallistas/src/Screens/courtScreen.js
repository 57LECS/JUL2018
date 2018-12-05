// Andres
// Fer
import React from 'react';
import { Container, Row, Col, Alert, Button, Form, FormGroup, Label, Input, FormText, Table } from 'reactstrap';
import ModalCourt from '../Components/modalCourt';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import * as firebase from 'firebase';
import CourtRow from '../RowModels/courtRow'

class CourtScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      courts: [],
      markers: [],
      markfirebase: [],
      lat: 0,
      lng: 0
    };

    //bindings
    this.loadCourtsTable = this.loadCourtsTable.bind(this);
    this.mapClicked = this.mapClicked.bind(this);

  }

  componentWillMount() {
    this.loadCourtsTable();
  }

  upperLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }



  loadCourtsTable() {
    const firestore = firebase.firestore();
    const settings = {/* your settings... */ timestampsInSnapshots: true };
    firestore.settings(settings);

    var arrCourt = this.state["courts"];
    var arrMarker = [];
    this.setState({markfirebase: []})

    var that = this;
    var principal = '/eventos/oct2018/'

    firestore.collection(principal + 'canchas').onSnapshot(function (querySnapshot) {
      arrCourt = [];

      querySnapshot.forEach(function (doc) {
        // console.log(doc.data());

        var court = {
          id: doc.id,
          deporte: doc.data().deporte,
          nombre: that.upperLetter(doc.data().nombre),
          ubicacion: doc.data().ubicacion, 
          la: that.state.lat,
          lg: that.state.lng
        }

        var obj = {
          id: doc.id,
          lat: court.ubicacion.latitude,
          lng: court.ubicacion.longitude
        }

        arrMarker.push(obj);
        arrCourt.push(court);
        that.setState({ courts: arrCourt });
        that.setState({ markfirebase: arrMarker });

      });


    });
  }

  mapClicked(mapProps, map, clickEvent) {
    // ...
    // console.log(clickEvent.latLng.lat());
    // console.log(clickEvent.latLng.lng());

    var lat = clickEvent.latLng.lat();
    var lng = clickEvent.latLng.lng();

    var arrMarker = [];
    var obj = {
      lat: lat,
      lng: lng
    }

    arrMarker.push(obj);

    this.setState({ lat: obj.lat });
    this.setState({ lng: obj.lng });
    this.setState({ markers: arrMarker });

  }

  render() {
    return (
      <Container>
        <Row>
          <Col md="6" sm="12">
            <h5>Seleccione para ver más detalles: </h5>
            <ModalCourt lat={this.state.lat} lng={this.state.lng} />
            <Table bordered>
              <thead>
                <tr>
                  <th className="text-center">#</th>
                  <th>Nombre</th>
                  <th style={{ textAlign: "center" }}>Acciones</th>
                </tr>
              </thead>
              <tbody>

                {
                  this.state["courts"].map(function (x, i = 1, that = this ) {

                    return (
                      <CourtRow key={x.id} x={x} i={++i} l={x.la} lg={x.lg} />
                    )
                  })}
              </tbody>
            </Table>

          </Col>
          <Col md="6" sm="12" style={{ height: '500px' }}>
            <Map google={this.props.google} zoom={17} initialCenter={{
              lat: 21.152384,
              lng: -101.711371
            }} onClick={this.mapClicked} >

              <Marker name={'Current location'} />

              {this.state["markers"].map(function (x, i = 1, that = this) {
                return (
                  <Marker key={++i}
                    position={{ lat: x.lat, lng: x.lng }}
                    icon={{ url: "http://maps.google.com/mapfiles/ms/icons/blue.png" }}
                  />
                )
              })}
              
              {this.state["markfirebase"].map(function (x, i = 1, that = this) {
                return (
                  <Marker key={++i}
                    position={{ lat: x.lat, lng: x.lng }}
                    icon={{ url: "http://maps.google.com/mapfiles/ms/icons/yellow.png" }}
                  />
                )
              })}

            </Map>
            <br /><br /><br />
          </Col>
        </Row>
      </Container>
    );
  }

}

// export default CourtScreen;
export default GoogleApiWrapper({
  apiKey: ('AIzaSyCgl8A9j6N3bRPqVnKzsTB3pMhordwzQtQ'),
  language: 'Spanish'
})(CourtScreen)