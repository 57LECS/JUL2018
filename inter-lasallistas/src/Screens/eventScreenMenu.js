// Fer
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
  Table,
 
} from 'reactstrap';
import * as firebase from 'firebase'

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          branches: [],
          schools:[],
          sport: "voleibol de sala",
          teams:[]
        };
    
        //bindings
        this.loadEventsTable = this.loadEventsTable.bind(this);
    }   

    componentWillMount()
    {
        
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          
          // ...
        } else {
          // User is signed out.
          // ...
          
          window.location.href = "/login";
        }
      });
      
        this.loadEventsTable();
    }

    loadEventsTable()
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
        <h1>
            Administrador juegos la sallistas
        </h1>
        <br />
        <Row>
          <br />
          <Col sm="8">
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
          
          <Col sm="4">
            <Row>
              <Col sm="12">
                <a href="/calendar" className="thumbnail-red">
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
            <Col sm="6">
              <a href="/sports/teams" className="thumbnail-red">
                <div className="card text-center thumb"  >
                  <div className="card-body"></div>
                  <div className="card-body"><h5>Equipos</h5></div>
                  <div className="card-body"></div>
                </div>
              </a>
            </Col>
            <br />
            <Col sm="6">
              <a href="/sports/results" className="thumbnail-red" >
                <div className="card text-center thumb" >
                  <div className="card-body"></div>
                  <div className="card-body"><h5>Resultados</h5></div>
                  <div className="card-body"></div>
                </div>
              </a>
            </Col>

            </Row>

          </Col>
        </Row>
      </Container>
    );
  }

}

export default HomeScreen;