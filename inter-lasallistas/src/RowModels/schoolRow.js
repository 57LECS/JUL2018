import React from 'react';

import { Button, Modal, ModalBody,ModalFooter, ModalHeader } from 'reactstrap';
import * as firebase from 'firebase';
class SchoolRow extends React.Component {
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
       
        firestore.collection("universidades").doc(this.props.x.id).delete().then(function() {
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
 
            return (
                <tr  key={this.props.x.id}>
                <td className="text-center">{this.props.i}</td>
                <td className="text-center">{this.props.x.nombre}</td>
                <td className="text-center">{this.props.x.nombreCorto}</td>
                <td className="text-center">{this.props.x.direccion}</td>
                <td className="text-center">
                    <div>
                    <Button  color={"primary"}>Editar</Button> {' '}
                    <Button  color={"danger"} onClick={this.showConfirmDeleteModal}> Borrar</Button>
                    </div>
                    <Modal size={"sm"} isOpen={this.state["showModal"]}>
                        <ModalHeader toggle={this.toggle}>Nuevo evento</ModalHeader>
                        <ModalBody>
                        ¿Desea eliminar la escuela {this.props.x.nombreCorto}?
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

}

export default SchoolRow;