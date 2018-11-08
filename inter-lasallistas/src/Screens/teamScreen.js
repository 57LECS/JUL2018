// Aqui va una tabla con todos los equipos
// Fer
import React from 'react';
import {
    Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText
} from 'reactstrap';

class TeamScreen extends React.Component {

    render() {
        return (
            <Container>
                <br />
                <Row>
                    <Col md="6">
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">Deporte:</Label>
                                <Input type="text" name="email" id="exampleEmail" value="Ajedrez" disabled />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Nombre del equipo:</Label>
                                <Input type="text" name="password" id="examplePassword" placeholder="---" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleSelect">Rama</Label>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>Femenil</option>
                                    <option>Varonil</option>
                                    <option>Mixto</option>
                                </Input>
                            </FormGroup>
                            <Button>Agregar</Button>
                        </Form>
                    </Col>
                </Row>
                <br /><br /><br /><br />

            </Container>
        );
    }

}

export default TeamScreen;