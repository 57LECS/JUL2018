// Aqui va una tabla con todos los equipos
// Fer
import React from 'react';
import {
    Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText,Table
} from 'reactstrap';
import * as firebase from 'firebase'
import TeamModalScreen from '../Components/newTeam'
import TeamRow from '../RowModels/teamRow'



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

  
    const firestore = firebase.firestore();
    const settings = {/* your settings... */ timestampsInSnapshots: true};
    firestore.settings(settings);
    var arr = this.state["teams"];
 
    var that = this;
         
    firestore.collection('eventos').doc('oct2018').collection('equipos').where("deporte","==",this.state["sport"]).onSnapshot(function(querySnapshot) {
        arr = [];
        
        that.setState({teams:arr});
        querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        var obj = {}
        obj.id = doc.id;
        obj.nombre = doc.data().nombre;
        obj.rama = doc.data().rama;
        obj.escuela = doc.data().escuela;
        obj.deporte = doc.data().deporte;
        obj.serie = doc.data().serie;
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
                <Col md="2"><TeamModalScreen x={{nombre:"", rama:"", escuela:""}
}  idSport={this.props.match.params.id}  isEdit={false} /></Col>
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
                    <th className="text_center">Serie</th>
                    <th className="text-center">Acciones</th>
                  </tr> 
                  {this.state["teams"].map(function (x, i = 1,idSport=this.props.match.params.id ) { 
                                return (
                                <TeamRow key={x.id} x={x}i={++i} idSport={idSport} isEdit={true} />                              
                                 )})}
                 
                  </tbody>
                  </Table>
              
                    </Col>
                   

                </Row>

            </Container>
        );
    }

}

export default TeamScreen;