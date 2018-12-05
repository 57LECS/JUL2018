import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Form, FormGroup, Label, Input } from 'reactstrap';
import * as firebase from 'firebase';
import ReactMultiSelect from '../Components/mulitSelect';


class SportRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sports: [],
            show: false,
            edit: false,
            alerta: false,
            handler: [],
            nombreDeporte: '',
            nombreModalidad: '',
            tituloAlerta: '',
            cuerpoAlerta: ''
        };

        //bindings
        this.showConfirmDeleteModal = this.showConfirmDeleteModal.bind(this);
        this.handleClose = this.handleClose.bind(this)
        this.commitDelete = this.commitDelete.bind(this)
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
        // cargo ramas

        var arr = [];
        var ramas = this.props.x.ramas;
        var modalidades = ['varonil', 'femenil', 'mixto'];

        for (var t = 0; t <= modalidades.length - 1; t++) {

            var j = t;

            var valor = true;


            var algo = ramas.findIndex(x => x === modalidades[t]);

            if (algo < 0) {
                valor = false;
            }

            var obj = {
                id: j,
                value: valor,
                label: modalidades[t]
            }

            arr.push(obj);
        }

        this.setState({ handler: arr })
        this.setState({ nombreDeporte: this.props.x.nombre })
        this.setState({ nombreModalidad: this.props.x.modalidad })
    }

    commitDelete() {
        const firestore = firebase.firestore();
        const settings = {/* your settings... */ timestampsInSnapshots: true };
        firestore.settings(settings);

        var principal = '/eventos/oct2018/';

        firestore.collection(principal + "deportes").doc(this.props.x.id).delete().then(function () {
            console.log("Documento eliminado!");
        }).catch(function (error) {
            console.error("Error removing document: ", error);
        });
    }

    handleClose() {
        this.setState({ showModal: false });
    }

    showConfirmDeleteModal() {
        this.setState({ showModal: true });
    }

    dameEditar() {
        this.setState({ edit: !this.state.edit });
        this.actualizaDatos();
    }

    actualiza() {

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

            firestore.collection(principal + "deportes").doc(this.props.x.id).update({
                modalidad: nombreModalidad,
                nombre: nombreDeporte,
                ramas: setModalidades
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
        this.setState({ nombreDeporte: event.target.value });
    }

    handleEventModalidadInput(event) {
        this.setState({ nombreModalidad: event.target.value });
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
                <td>{this.props.x.modalidad}</td>
                <td style={{ textAlign: "center" }}>
                    <Button color="info" onClick={this.dameEditar} ><i className="fas fa-pencil-alt"></i> Editar</Button>{' '}
                    <Button color="danger" onClick={this.showConfirmDeleteModal}><i className="fas fa-trash-alt"></i> Eliminar</Button>
                    <Modal size={"md"} isOpen={this.state["showModal"]}>
                        <ModalHeader className="bg-danger text-white" toggle={this.toggle}> Eliminar deporte</ModalHeader>
                        <ModalBody>
                            ¿Desea eliminar el deporte {this.props.x.nombre}?
                        </ModalBody>
                        <ModalFooter>
                            <Button color={"danger"} onClick={this.commitDelete}>Eliminar</Button>{' '}
                            <Button color={"primary"} onClick={this.handleClose} >Cancelar</Button>
                        </ModalFooter>
                    </Modal>

                    <Modal isOpen={this.state.edit} toggle={this.dameEditar} className={this.props.className}>
                        <ModalHeader className="bg-info text-white" toggle={this.dameEditar}>Editar Deporte</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Label for="txtNombreCancha">Nombre deporte:</Label>
                                    <Input type="text" name="cancha" value={this.state.nombreDeporte} onChange={this.handleEventNameInput} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="txtCorto">Modalidad: </Label>
                                    <Input type="text" name="corto" value={this.state.nombreModalidad} onChange={this.handleEventModalidadInput} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="txtCorto">Rama: </Label>
                                    <ReactMultiSelect options={this.state.handler} />
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

export default SportRow;