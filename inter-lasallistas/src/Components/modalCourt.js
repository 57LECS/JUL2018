import React from 'react';
import { Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import * as firebase from 'firebase';

class ModalCourt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            alerta: false,
            // ubicacionCancha: '',
            nombreCancha: '',
            nombreDeporte: '',
            tituloAlerta: '',
            cuerpoAlerta: ''
        };

        this.toggle = this.toggle.bind(this);
        this.dameAlerta = this.dameAlerta.bind(this);
        this.guarda = this.guarda.bind(this);
        this.handleEventNameInput = this.handleEventNameInput.bind(this);
        this.handleEventModalidadInput = this.handleEventModalidadInput.bind(this);
    }

    guarda() {

        const firestore = firebase.firestore();
        const settings = {/* your settings... */ timestampsInSnapshots: true };
        firestore.settings(settings);

        var principal = '/eventos/oct2018/';

        var nombreCancha = this.state.nombreCancha;
        var nombreDeporte = this.state.nombreDeporte;
        var latitud = this.props.lat;
        var longitud = this.props.lng;

        if (nombreCancha === '' || nombreDeporte === '') {

            this.setState({ tituloAlerta: 'Error' });
            this.setState({ cuerpoAlerta: 'Campos sin completar' });
            this.dameAlerta();
        }
        else {

            firestore.collection(principal + "canchas").add({
                deporte: nombreDeporte,
                nombre: nombreCancha,
                ubicacion: new firebase.firestore.GeoPoint(latitud, longitud)
            })
                .then(function (docRef) {
                    console.log("Document guardado: ", docRef.id);
                })
                .catch(function (error) {
                    console.error("Error adding document: ", error);
                });

            this.toggle();
        }
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    dameAlerta() {
        this.setState({
            alerta: !this.state.alerta
        });
    }

    handleEventNameInput(event) {
        this.setState({ nombreCancha: event.target.value });
    }

    handleEventModalidadInput(event) {
        this.setState({ nombreDeporte: event.target.value });
    }

    render() {
        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

        return (
            <div>
                <Button style={{ marginBottom: "10px" }} onClick={this.toggle} color="success"><i className="fas fa-plus"></i> Añadir nueva cancha</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader className="bg-primary text-white" toggle={this.toggle} close={closeBtn}>Agregar cancha</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label>Nombre de la cancha:</Label>
                                <Input type="text" name="cancha" placeholder="---" onChange={this.handleEventNameInput} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleSelect">Deporte</Label>
                                <Input type="select" name="select" onChange={this.handleEventModalidadInput} >
                                    <option>Seleccione</option>
                                    <option>Ajedrez</option>
                                    <option>Futbol</option>
                                    <option>Basquetbol</option>
                                    <option>Voleibol</option>
                                    <option>Atletismo</option>
                                </Input>
                            </FormGroup>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="txtLat">Latitud</Label>
                                        <Input type="text" name="txtLat" id="txtLat" placeholder="---" value={this.props.lat} readOnly />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="txtLng">Longitud</Label>
                                        <Input type="text" name="txtLng" id="txtLng" placeholder="---" value={this.props.lng} readOnly />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                        <Alert color="primary">
                            Presione sobre el <strong>mapa</strong> para obtener las coordenadas del nuevo lugar
                        </Alert>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.guarda}>Agregar</Button>{' '}
                        <Button color="danger" onClick={this.toggle}>Cancelar</Button>
                    </ModalFooter>
                </Modal>

                <Modal size={"sm"} isOpen={this.state.alerta} toggle={this.dameAlerta} className={this.props.className}>
                    <ModalHeader className="bg-danger text-white" toggle={this.dameAlerta}>{this.state.tituloAlerta}</ModalHeader>
                    <ModalBody>
                        {this.state.cuerpoAlerta}
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default ModalCourt;