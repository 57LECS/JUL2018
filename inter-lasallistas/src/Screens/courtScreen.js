// Andres
// Fer
import React from 'react';
import { Container, Row, Col, Alert, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class CourtScreen extends React.Component {

  render() {
    return (
      <Container>
        <Row>
          <Col md="6" sm="12">
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Titulo 1</Label>
                <Input type="text" name="title1" id="txt" placeholder="---" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Titulo 2</Label>
                <Input type="text" name="title2" id="txt2" placeholder="---" />
              </FormGroup>
            </Form>
          </Col>
          <Col md="6" sm="12">
            <Alert color="info">
              <strong>Mapa de Google</strong>
              <br/>Definir:
              <br/>¿Modal o componente?
              <br/>Formulario
            </Alert>
          </Col>
        </Row>
      </Container>
    );
  }

}

export default CourtScreen;