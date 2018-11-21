// Aqui va una tabla con todos los equipos
// Fer
import React from 'react';
import {
    Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText,Table
} from 'reactstrap';
import * as firebase from 'firebase'
import ModalScreen from '../Components/newTeam'



class TeamScreen extends React.Component {

  
    constructor(props) {
        super(props);
        this.state = {
          branches: [],
          schools:[],
          sport: this.props.match.params.id,
          teams:[],
          teamName:"",
          branch:"",
          university:""
        };
    
        //bindings
        this.loadTeamsTable = this.loadTeamsTable.bind(this);
        
       
        this.deleteTeam = this.deleteTeam.bind(this);
      }
    

    
  
  componentDidMount()
  {
  
    this.loadTeamsTable();
  }
  
  deleteTeam()
  {
      console.log("del");
      alert("delete")
      
  }
  loadTeamsTable()
  {

    var db = firebase.firestore();
    const firestore = firebase.firestore();
    const settings = {/* your settings... */ timestampsInSnapshots: true};
    firestore.settings(settings);
    var arr = this.state["teams"];
 
    var that = this;
         
    firestore.collection('eventos').doc('oct2018').collection('equipos').where("deporte","==",this.state["sport"]).onSnapshot(function(querySnapshot) {
        arr = [];
        querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        var obj = {}
        obj.id = doc.id;
        obj.nombre = doc.data().nombre;
        obj.rama = doc.data().rama;
        obj.escuela = doc.data().escuela;
        arr.push(obj );
      console.log(obj)
        that.setState({teams:arr});
        });
        
    
    });

  }

  
    render() {
        return (
            <Container>
                <Row>   
                <Col md="10"><h4>Equipos de {this.state["sport"]}</h4></Col>
                <Col md="2"><ModalScreen  idSport={this.props.match.params.id} /></Col>
                </Row>
                <Row>
                <Col md="12">
                <Table bordered>
                <tbody>
                  <tr>
                    <th scope="row"> </th>
                    <th className="text-center">Equipo</th>
                    <th className="text-center">Rama</th>
                    <th className="text-center">Escuela</th>
                    <th className="text-center">Acciones</th>
                  </tr>
                  {this.state["teams"].map(function (x, i = 1,that = this) { 
                                return (
                                <tr  key={x.id}>
                                    <td className="text-center">{++i}</td>
                                    <td className="text-center">{x.nombre}</td>
                                    <td className="text-center">{x.rama}</td>
                                    <td className="text-center">{x.escuela}</td>
                                    <td class="text-center">
                                        <a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> Edit</a> 
                                        <a href="#" class="btn btn-danger btn-xs" onClick={that.deleteTeam}>
                                        <span class="glyphicon glyphicon-remove"></span> Del</a>
                                    </td>
                 

                                </tr>
              
              
                                 )})}
                  <tr>
                  </tr>
                  </tbody>
                  </Table>
              
                    </Col>
                   

                </Row>
                <br /><br /><br /><br />

            </Container>
        );
    }

}

export default TeamScreen;