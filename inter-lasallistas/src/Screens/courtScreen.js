// Andres
// Fer
import React from 'react';
import { Container, Row, Col, Alert, Button, Form, FormGroup, Label, Input, FormText, Table } from 'reactstrap';

class CourtScreen extends React.Component {

  render() {
    return (
      <Container>
        <Row>
          <Col md="6" sm="12">
            <h5>Seleccione para ver más detalles: </h5>
            <Table bordered>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th style={{textAlign:"center"}}>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Cancha empastada De La Salle Bajío</td>
                  <td style={{textAlign:"center"}}><Button color="info">Editar</Button></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Cancha de voleibol</td>
                  <td style={{textAlign:"center"}}><Button color="info">Editar</Button></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Cancha universum</td>
                  <td style={{textAlign:"center"}}><Button color="info">Editar</Button></td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Cancha bravos de León</td>
                  <td style={{textAlign:"center"}}><Button color="info">Editar</Button></td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Cancha fútbol rápido</td>
                  <td style={{textAlign:"center"}}><Button color="info">Editar</Button></td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md="6" sm="12">
            <Alert color="info">
              <strong>Mapa de Google</strong>
              <br />Definir:
              <br />¿Modal o componente?
              <br />Formulario
            </Alert>
          </Col>
        </Row>
      </Container>
    );
  }

}

export default CourtScreen;