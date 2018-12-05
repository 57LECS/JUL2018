import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, Row, Col, ModalHeader, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import * as firebase from 'firebase';
import ReactMultiSelect from '../Components/mulitSelect';


class CourtRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courts: [],
            show: false,
            edit: false,
            alerta: false,
            nombreDeporte: '',
            nombreCancha: '',
            // ubicacionCancha: '',
            tituloAlerta: '',
            cuerpoAlerta: '',
            lati: 0,
            long: 0
        };

        //bindings

        this.dameEditar = this.dameEditar.bind(this)
        this.handleEventNameInput = this.handleEventNameInput.bind(this);
        this.handleEventModalidadInput = this.handleEventModalidadInput.bind(this);
        this.dameAlerta = this.dameAlerta.bind(this);
        this.actualiza = this.actualiza.bind(this);

    }

    componentWillMount() {

        this.actualizaDatos();

    }


    actualizaDatos() {

        // console.log(this.props.x.nombre);
        // console.log(this.props.l);
        // console.log(this.props.lg);

        if (this.props.l > 0 && this.props.lg > 0) {
            this.setState({ lati: this.props.l })
            this.setState({ long: this.props.lg })
            // actualido a coordenadas de mapa
        }
        else {
            this.setState({ lati: this.props.x.ubicacion.latitude })
            this.setState({ long: this.props.x.ubicacion.longitude })
            
        }

        this.setState({ nombreDeporte: 'Futbol' })
        this.setState({ nombreCancha: this.props.x.nombre })
    }

    dameEditar() {
        this.setState({ edit: !this.state.edit });
    }

    actualiza() {

        const firestore = firebase.firestore();
        const settings = {/* your settings... */ timestampsInSnapshots: true };
        firestore.settings(settings);

        var principal = '/eventos/oct2018/';

        var nombreDeporte = this.state.nombreDeporte;
        var nombreCancha = this.state.nombreCancha;
        var latitud = this.state.lati;
        var longitud = this.state.long;

        if (nombreDeporte === '' || nombreCancha === '') {

            this.setState({ tituloAlerta: 'Error' });
            this.setState({ cuerpoAlerta: 'Campos sin completar' });
            this.dameAlerta();

        }
        else {

            firestore.collection(principal + "canchas").doc(this.props.x.id).update({
                deporte: nombreDeporte,
                nombre: nombreCancha,
                ubicacion: new firebase.firestore.GeoPoint(latitud, longitud)
            })
                .then(function () {
                    console.log("Documento actualizado!");
                })
                .catch(function (error) {
                    // The document probably doesn't exist.
                    console.error("Error updating document: ", error);
                });

            this.dameEditar();
        }
    }

    handleEventNameInput(event) {
        this.setState({ nombreCancha: event.target.value });
    }

    handleEventModalidadInput(event) {
        this.setState({ nombreDeporte: event.target.value });
    }

    dameAlerta() {
        this.setState({
            alerta: !this.state.alerta
        });
    }

    render() {

        return (
            <tr>
                <th className="text-center" scope="row">{this.props.i}</th>
                <td>{this.props.x.nombre}</td>
                <td style={{ textAlign: "center" }}>
                    <Button color="info" onClick={this.dameEditar} ><i className="fas fa-pencil-alt"></i> Editar</Button>{' '}

                    <Modal isOpen={this.state.edit} toggle={this.dameEditar} className={this.props.className}>
                        <ModalHeader className="bg-info text-white" toggle={this.dameEditar}>Editar Cancha</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Label for="txtNombreCancha">Nombre de la cancha:</Label>
                                    <Input type="text" name="cancha" value={this.state.nombreCancha} onChange={this.handleEventNameInput} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelect">Deporte</Label>
                                    <Input type="select" name="select" value={this.state.nombreDeporte} onChange={this.handleEventModalidadInput} >
                                        <option>Ajedrez</option>
                                        <option>Futbol</option>
                                        <option>Basquetbol</option>
                                        <option>Voleibol</option>
                                        <option>Atletismo</option>
                                    </Input>
                                </FormGroup>
                                
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="info" onClick={this.actualiza}>Actualizar</Button>{' '}
                            <Button color="danger" onClick={this.dameEditar}>Cancelar</Button>
                        </ModalFooter>
                    </Modal>


                    <Modal size={"sm"} isOpen={this.state.alerta} toggle={this.dameAlerta} className={this.props.className}>
                        <ModalHeader className="bg-danger text-white" toggle={this.dameAlerta}>{this.state.tituloAlerta}</ModalHeader>
                        <ModalBody>
                            {this.state.cuerpoAlerta}
                        </ModalBody>
                    </Modal>
                </td>
            </tr>
        );
    }

}

export default CourtRow;