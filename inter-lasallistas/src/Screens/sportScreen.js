// Andres
import React from 'react';
import { Container, Row, Col, Alert, Button, Form, FormGroup, Label, Input, FormText, Table } from 'reactstrap';
import ModalSport from '../Components/modalSport';
import * as firebase from 'firebase';
import SportRow from '../RowModels/sportRow'

class SportScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sports: []
    };

    //bindings
    this.loadSportsTable = this.loadSportsTable.bind(this);

  }

  componentWillMount() {
    this.loadSportsTable();
  }

  upperLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }



  loadSportsTable() {
    const firestore = firebase.firestore();
    const settings = {/* your settings... */ timestampsInSnapshots: true };
    firestore.settings(settings);

    var arrSport = this.state["sports"];

    var that = this;

    var principal = '/eventos/oct2018/'

    firestore.collection(principal + 'deportes').onSnapshot(function (querySnapshot) {
      arrSport = [];
      querySnapshot.forEach(function (doc) {
        // console.log(doc.data());

        var sport = {
          id: doc.id,
          nombre: that.upperLetter(doc.data().nombre),
          modalidad: that.upperLetter(doc.data().modalidad),
          ramas: doc.data().ramas
        }

        arrSport.push(sport);

      });

      that.setState({ sports: arrSport });

    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md="10"><h4>Deportes del Evento</h4></Col>
          <Col md="2"><ModalSport tipo={1} /></Col>
        </Row>
        <Row>
          <Col md="12">

            <Table bordered>
              <thead>
                <tr>
                  <th className="text-center">#</th>
                  <th>Nombre del Deporte</th>
                  <th>Modalidad</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state["sports"].map(function (x, i = 1, that = this) {

                    return (
                      <SportRow key={x.id} x={x} i={++i} />
                    )
                  })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }

}

export default SportScreen;