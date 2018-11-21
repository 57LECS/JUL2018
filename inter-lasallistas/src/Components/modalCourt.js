import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Alert } from 'reactstrap';

class ModalCourt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

        return (
            <div>
                <Button style={{ marginBottom: "10px" }} onClick={this.toggle} color="success">Añadir nueva cancha</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle} close={closeBtn}>Agregar cancha</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="txtNombreCancha">Nombre de la cancha</Label>
                                <Input type="text" name="cancha" id="txtNombreCancha" placeholder="---" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="txtCorto">Nombre corto: </Label>
                                <Input type="text" name="corto" id="txtCorto" placeholder="---" />
                            </FormGroup>
                        </Form>
                        <Alert color="primary">
                            Cargar mapa de Google
                        </Alert>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={this.toggle}>Agregar</Button>{' '}
                        <Button color="danger" onClick={this.toggle}>Cancelar</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalCourt;