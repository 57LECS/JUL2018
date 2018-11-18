import React from 'react';
import { Container, Row, Col, Modal, ModalBody,ModalHeader} from 'reactstrap';
import {
  Table,
 
} from 'reactstrap';
import NewSchool from '../Components/newSchool'
import SchoolRow from '../RowModels/schoolRow'
import * as firebase from 'firebase'

class SchoolScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          schools:[],
          showModal:false
        };
    
        
        //bindings
        this.loadSchoolsTable = this.loadSchoolsTable.bind(this);
        this.showNewSchoolModal = this.showNewSchoolModal.bind(this);
        this.handleClose = this.handleClose.bind(this)
        
      }   

    componentWillMount()
    {
        this.loadSchoolsTable();
    }

    showNewSchoolModal()
    {
      
      this.setState({ showModal: true });
    }

    
    loadSchoolsTable()
    {
    const firestore = firebase.firestore();
    const settings = {/* your settings... */ timestampsInSnapshots: true};
    firestore.settings(settings);
    var arr = this.state["schools"];
 
    var that = this;
         
    firestore.collection('universidades').onSnapshot(function(querySnapshot) {
        arr = [];
        querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        var obj = {}
        obj.id = doc.id;
        obj.nombre = doc.data().nombre;
        obj.nombreCorto = doc.data().nombre_corto;
        obj.sede = doc.data().sede;
        obj.modalidad = doc.data().modalidad;
        obj.erasable = doc.data().borrable;
        arr.push(obj);
        that.setState({schools:arr});
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
            Escuelas
            
        </h1>
        <br />
        <Row>
          <br />
          
          <Col sm="4">
          <Col sm="12">
              <div   onClick={this.showNewSchoolModal} className="thumbnail-red">
                  <div className="card text-center thumb" >
                     
                    <div className="card-body"><h5>Nueva Escuela</h5></div>
                    <div className="card-body"></div>
                  </div>
                </div>
              </Col>
              <br/>
             
            <Col sm="12">
            <img src="../images/ulsa_red.jpg" alt="logo" style={{width: '250px'}} />
            </Col>
         
          </Col>
     
          <Col sm="8">
          <div style={{ display: 'block', maxHeight: '345px', overflowY: "auto", msOverflowStyle: "-ms-autohiding-scrollbar" }}>
            
            <Table bordered>
                <tbody>
                  <tr>
                    <th scope="row"> </th>
                    <th className="text-center">Nombre</th>
                    <th className="text-center">Nombre corto</th>
                    <th className="text-center">Dirección</th>
           
                    <th className="text-center">Acciones</th>
                  </tr>
                  {this.state["schools"].map(function (x, i = 1,that = this) { 
                                return (

                                  <SchoolRow key={x.id} x={x}i={++i}/>
                                 )})}
                    </tbody>
              </Table>
            </div>  
               
          </Col>
          
        </Row>
        <Modal size={"lg"} isOpen={this.state["showModal"]}>
        <ModalHeader toggle={this.toggle}>Nueva Escuela</ModalHeader>
        <ModalBody>
         
          <NewSchool unmountMe={this.handleClose} />
        </ModalBody>
 
      </Modal>
      </Container>
  
    );
  }

}

export default SchoolScreen;