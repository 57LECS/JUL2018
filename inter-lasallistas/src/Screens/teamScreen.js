// Aqui va una tabla con todos los equipos
// Fer
import React from 'react';
import {
    Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText,Table
} from 'reactstrap';
import * as firebase from 'firebase'



class TeamScreen extends React.Component {

  
    constructor(props) {
        super(props);
        this.state = {
          branches: [],
          schools:[],
          sport: "voleibol de sala",
          teams:[]
        };
    
        //bindings
        this.loadBranchesCombo = this.loadBranchesCombo.bind(this);
        this.loadSchoolsCombo = this.loadSchoolsCombo.bind(this);
        this.loadTeamsTable = this.loadTeamsTable.bind(this);
        
      }
    

    
  
  componentDidMount()
  {
  
    console.log("teamScreamDidMount");
    
    this.setState({sport:"voleibol de sala"});
    this.loadBranchesCombo();
    this.loadSchoolsCombo();
    this.loadTeamsTable();
  }
  loadTeamsTable()
  {

    var db = firebase.firestore();
    const firestore = firebase.firestore();
    const settings = {/* your settings... */ timestampsInSnapshots: true};
    firestore.settings(settings);
    var arr = this.state["teams"];
 
    var that = this;
         
    //PROBABLEMENTE HAYA QUE CAMBIAR EL TIPO DE DATO DE DEPORTE DE REFERENCIA A STRING Y PONERLE VOLEIBOLDE SALA
    firestore.collection('eventos').doc('oct2018').collection('equipos').where("deporte","==",this.state["sport"]).get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        var obj = {}
        obj.nombre = doc.data().nombre;
        obj.rama = doc.data().rama;
        arr.push(obj );
      console.log(obj)
        that.setState({teams:arr});
        });
        
    
    });

  }
  loadBranchesCombo()
  {
      
    var db = firebase.firestore();
    const firestore = firebase.firestore();
    const settings = {/* your settings... */ timestampsInSnapshots: true};
    firestore.settings(settings);
    var arr = this.state["branches"];

    var that = this;
         
    firestore.collection('eventos').doc('oct2018').collection('deportes').where("nombre","==",this.state["sport"]).get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        arr =  doc.data().ramas;
        that.setState({branches:arr});
        });
    
    });
     
 }

 loadSchoolsCombo()
 {
     
   var db = firebase.firestore();
   const firestore = firebase.firestore();
   const settings = {/* your settings... */ timestampsInSnapshots: true};
   firestore.settings(settings);
   var arr = this.state["branches"];

   var that = this;
        
   firestore.collection('eventos').doc('oct2018').collection('universidades').get().then(function(querySnapshot) {
     querySnapshot.forEach(function(doc) {
       // doc.data() is never undefined for query doc snapshots
       //console.log("DD")
      // console.log(doc.id, " => ", doc.data().nombre_corto);
       arr.push(  doc.data().nombre_corto);
     
       that.setState({schools:arr});
       });
       
   
   });
    
}


  
    render() {
        return (
            <Container>
                <br />
                <Row>
                    <Col md="6">
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">Deporte:</Label>
                                <Input type="text" name="email" id="exampleEmail" value={this.state["sport"]} disabled />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Nombre del equipo:</Label>
                                <Input type="text" name="password" id="examplePassword" placeholder="---" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="cmbBranch">Rama</Label>
                                <Input type="select" name="selectBranch" id="cmbBranch">
                                {this.state["branches"].map(function (x, i = 1) { 
                                return (
                                <option value={x} key={"cmbBranch" + i}>{x} </option>
                                 )})}
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="cmbBranch">Universidad</Label>
                                <Input type="select" name="selectSchool" id="cmbSchool">
                                {this.state["schools"].map(function (x, i = 1) { 
                                return (
                                <option value={x} key={"cmbSchool" + i}>{x}
                                
                                </option>
              
              
                                 )})}
                                </Input>
                            </FormGroup>
                            <Button>Agregar</Button>
                        </Form>
                    </Col>
                    <Col md="6">
                    <Table bordered>
                <tbody>
                  <tr>
                    <th scope="row"> </th>
                    <th className="text-center">equipo</th>
                    <th className="text-center">rama</th>
                    <th className="text-center">escuela</th>
                  </tr>
                  {this.state["teams"].map(function (x, i = 1) { 
                                return (
                                <tr  key={"trTeam" + i}>
                                    <td className="text-center">{i++}</td>
                                    <td className="text-center">{x.nombre}</td>
                                    <td className="text-center">{x.rama}</td>
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