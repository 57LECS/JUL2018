import React from 'react';
import { Container, Row, Col, Modal, ModalBody,ModalHeader} from 'reactstrap';
import {
  Table,
 
} from 'reactstrap';
import NewEvent from '../Components/newEvent'
import EventRow from '../RowModels/eventRow'
import * as firebase from 'firebase'

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          branches: [],
          schools:[],
          sport: "voleibol de sala",
          teams:[],
          showModal:false
        };
    
        
        //bindings
        this.loadEventsTable = this.loadEventsTable.bind(this);
        this.showNewEventModal = this.showNewEventModal.bind(this);
        this.handleClose = this.handleClose.bind(this)
        
      }   

    componentWillMount()
    {
        this.loadEventsTable();
    }

    showNewEventModal()
    {
      
      this.setState({ showModal: true });
    }

    
    loadEventsTable()
    {
    const firestore = firebase.firestore();
    const settings = {/* your settings... */ timestampsInSnapshots: true};
    firestore.settings(settings);
    var arr = this.state["teams"];
 
    var that = this;
         
    firestore.collection('eventos').orderBy("fechaInicio", "desc").onSnapshot(function(querySnapshot) {
        arr = [];
        querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        var obj = {}
        obj.id = doc.id;
        obj.nombre = doc.data().nombre;
        obj.fechaInicio = doc.data().fechaInicio;
        obj.sede = doc.data().sede;
        obj.modalidad = doc.data().modalidad;
        obj.erasable = doc.data().borrable;
        arr.push(obj);
        that.setState({teams:arr});
        });
        
    
    });
    }
    handleClose()
    {
      this.setState({ showModal: false });
    }
    


  render() {
    return (
      <Container >
        <h1>
            Administrador juegos la sallistas
            
        </h1>
        <br />
        <Row>
          <br />
          <Col sm="8">
          <div style={{ display: 'block', maxHeight: '345px', overflowY: "auto", msOverflowStyle: "-ms-autohiding-scrollbar" }}>
            
            <Table bordered>
                <tbody>
                  <tr>
                    <th scope="row"> </th>
                    <th className="text-center">Fecha Inicio</th>
                    <th className="text-center">Sede</th>
                    <th className="text-center">Nombre</th>
                    <th className="text-center">Modalidad</th>
                    <th className="text-center">Acciones</th>
                  </tr>
                  {this.state["teams"].map(function (x, i = 1,that = this) { 
                                return (

                                  <EventRow key={x.id} x={x}i={++i}/>
                                 )})}
                    </tbody>
              </Table>
            </div>  
               
          </Col>
          
          <Col sm="4">
            <Row>
              <Col sm="12">
                <a   onClick={this.showNewEventModal} className="thumbnail-red">
                  <div className="card text-center thumb" >
                    <div className="card-body"></div>
                    <div className="card-body"><h5>Nuevo evento</h5></div>
                    <div className="card-body"></div>
                  </div>
                </a>
              </Col>
            </Row>

            <br />
            <Row>
            <Col sm="12">
            <img src="../images/ulsa_red.jpg" alt="logo" style={{width: '250px'}} />
            </Col>

            </Row>

          </Col>
        </Row>
        <Modal size={"lg"} isOpen={this.state["showModal"]}>
        <ModalHeader toggle={this.toggle}>Nuevo evento</ModalHeader>
        <ModalBody>
         
          <NewEvent unmountMe={this.handleClose} />
        </ModalBody>
 
      </Modal>
      </Container>
  
    );
  }

}

export default HomeScreen;