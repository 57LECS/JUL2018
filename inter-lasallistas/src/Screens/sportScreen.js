// Andres
import React from 'react';
import { Container, Row, Col, Alert, Button, Form, FormGroup, Label, Input, FormText, Table } from 'reactstrap';
import ModalSport from '../Components/modalSport'

class SportScreen extends React.Component {

  render() {
    return (
      <Container>
        <Row>
          <Col md="10"><h4>Deportes del Evento</h4></Col>
          <Col md="2"><ModalSport /></Col>
        </Row>
        <Row>
        <Col md="12">

          <Table bordered>
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre del Deporte</th>
                <th>Nombre corto</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Fútbol rápido</td>
                <td>rapido</td>
                <td style={{ textAlign: "center" }}><Button color="info">Editar</Button>{' '}<Button color="danger">Eliminar</Button></td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Fútbol soccer</td>
                <td>soccer</td>
                <td style={{ textAlign: "center" }}><Button color="info">Editar</Button>{' '}<Button color="danger">Eliminar</Button></td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Voleibol</td>
                <td>voleibol</td>
                <td style={{ textAlign: "center" }}><Button color="info">Editar</Button>{' '}<Button color="danger">Eliminar</Button></td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Basquetbol varonil</td>
                <td>basquet</td>
                <td style={{ textAlign: "center" }}><Button color="info">Editar</Button>{' '}<Button color="danger">Eliminar</Button></td>
              </tr>
            </tbody>
          </Table>
        </Col>
        </Row>
      </Container>
    );
  }

}

export default SportScreen;