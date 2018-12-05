import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import ReactMultiSelect from '../Components/mulitSelect';
import * as firebase from 'firebase';

class ModalSport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            alerta: false,
            handler: [],
            nombreDeporte: '',
            nombreModalidad: '',
            tituloAlerta: '',
            cuerpoAlerta: ''
        };

        this.toggle = this.toggle.bind(this);
        this.dameAlerta = this.dameAlerta.bind(this);
        this.guarda = this.guarda.bind(this);
        this.handleEventNameInput = this.handleEventNameInput.bind(this);
        this.handleEventModalidadInput = this.handleEventModalidadInput.bind(this);
    }

    componentWillMount() {
        this.actualizaModalidades()
    }

    actualizaModalidades() {
        var arr = [];
        var modalidades = ['varonil', 'femenil', 'mixto'];

        for (var i = 0; i <= modalidades.length - 1; i++) {

            var j = i;
            var obj = {
                id: j,
                value: false,
                label: modalidades[i],
                noti: 'none'
            }

            arr.push(obj);
        }

        this.setState({ handler: arr })
    }

    guarda() {

        const firestore = firebase.firestore();
        const settings = {/* your settings... */ timestampsInSnapshots: true };
        firestore.settings(settings);

        var principal = '/eventos/oct2018/';

        // arreglamos el arreglo

        var arrModalidades = this.state.handler;
        var setModalidades = [];

        arrModalidades.forEach(element => {
            if (element.value) {
                // console.log(element.label);
                setModalidades.push(element.label);
            }
        });


        var nombreDeporte = this.state.nombreDeporte;
        var nombreModalidad = this.state.nombreModalidad;

        if (nombreDeporte === '' || nombreModalidad === '' || setModalidades.length === 0) {

            this.setState({ tituloAlerta: 'Error' });
            this.setState({ cuerpoAlerta: 'Campos sin completar' });
            this.dameAlerta();
        }
        else {

            firestore.collection(principal + "deportes").add({
                modalidad: nombreModalidad,
                nombre: nombreDeporte,
                ramas: setModalidades
            })
                .then(function (docRef) {
                    console.log("Document written with ID: ", docRef.id);
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

        this.actualizaModalidades();
    }

    dameAlerta() {
        this.setState({
            alerta: !this.state.alerta
        });
    }

    handleEventNameInput(event) {
        this.setState({ nombreDeporte: event.target.value });
    }

    handleEventModalidadInput(event) {
        this.setState({ nombreModalidad: event.target.value });
    }

    render() {
        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

        // agregar
        if (this.props.tipo == 1) {
            return (
                <div>
                    <Button style={{ marginBottom: "10px" }} onClick={this.toggle} color="success"><i className="fas fa-plus"></i> Agregar deporte</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader className="bg-primary text-white" toggle={this.toggle} close={closeBtn}>Agregar Deporte</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Label for="txtNombreCancha">Nombre deporte:</Label>
                                    <Input type="text" name="cancha" id="txtNombreCancha" placeholder="---" onChange={this.handleEventNameInput} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="txtCorto">Modalidad: </Label>
                                    <Input type="text" name="corto" id="txtCorto" placeholder="---" onChange={this.handleEventModalidadInput} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="txtCorto">Rama: </Label>
                                    <ReactMultiSelect options={this.state.handler} />
                                </FormGroup>
                            </Form>
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
}

export default ModalSport;