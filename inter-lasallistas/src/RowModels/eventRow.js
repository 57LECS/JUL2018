import React from 'react';

import { Button, Modal, ModalBody,ModalFooter, ModalHeader } from 'reactstrap';
import * as firebase from 'firebase';
class EventRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          branches: [],
          schools:[],
          sport: "voleibol de sala",
          teams:[],
          show:false
        };
    
        
        //bindings
        this.startDeleteEvent = this.startDeleteEvent.bind(this);
        this.showConfirmDeleteModal = this.showConfirmDeleteModal.bind(this);
        this.handleClose = this.handleClose.bind(this)   
         this.commitDelete = this.commitDelete.bind(this)
    
      }   
      startDeleteEvent()
      {
        this.commitDelete()
        
      }
      commitDelete()
      {
        const firestore = firebase.firestore();
        const settings = {/* your settings... */ timestampsInSnapshots: true};
        firestore.settings(settings);
       
        firestore.collection("eventos").doc(this.props.x.id).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
      }
      handleClose()
      {
        this.setState({ showModal: false });
      }
      
    showConfirmDeleteModal()
    {
      
      this.setState({ showModal: true });
    }

    render() {
        if (this.props.x.erasable) {
                        
            return (
                <tr  key={this.props.x.id}>
                <td className="text-center">{this.props.i}</td>
                <td className="text-center">{this.props.x.fechaInicio}</td>
                <td className="text-center">{this.props.x.sede}</td>
                <td className="text-center">{this.props.x.nombre}</td>
                <td className="text-center">{this.props.x.modalidad}</td>
                <td className="text-center">
                    <div>
                    <Button href="/home" color={"primary"}>Editar</Button> {' '}
                    <Button  color={"danger"} onClick={this.showConfirmDeleteModal}> Borrar</Button>
                    </div>
                    <Modal size={"sm"} isOpen={this.state["showModal"]}>
                        <ModalHeader toggle={this.toggle}>Nuevo evento</ModalHeader>
                        <ModalBody>
                        Desea eliminar el evento {this.props.x.nombre}
                        </ModalBody>
                        <ModalFooter>   
                            <Button  color={"danger"} onClick={this.commitDelete}>Borrar</Button> {' '}
                            <Button  color={"primary"}onClick={this.handleClose} > Cancelar</Button>   
                        </ModalFooter>
                    </Modal>
                </td>
                </tr>
            );
        }
        else
        {
            return (
                <tr  key={this.props.x.id}>
                <td className="text-center">{this.props.i}</td>
                <td className="text-center">{this.props.x.fechaInicio}</td>
                <td className="text-center">{this.props.x.sede}</td>
                <td className="text-center">{this.props.x.nombre}</td>
                <td className="text-center">{this.props.x.modalidad}</td>
                <td className="text-center">
                    <div>
                    <Button href="/home" color={"primary"}>Editar</Button> {' '}
                    </div>
                    <Modal size={"sm"} isOpen={this.state["showModal"]}>
                        <ModalHeader toggle={this.toggle}>Nuevo evento</ModalHeader>
                        <ModalBody>
                        Desea eliminar el evento {this.props.x.nombre}
                        </ModalBody>
                        <ModalFooter>   
                            <Button  color={"primary"}onClick={this.handleClose} > Cancelar</Button> {' '}  
                            <Button  color={"primary"}onClick={this.handleClose} > Cancelar</Button>   
                        </ModalFooter>
                    </Modal>
                </td>
                </tr>
            );
        }
    }

}

export default EventRow;