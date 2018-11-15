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
          teams:[],
          teamName:"",
          branch:"",
          university:""
        };
    
        //bindings
        this.loadBranchesCombo = this.loadBranchesCombo.bind(this);
        this.loadSchoolsCombo = this.loadSchoolsCombo.bind(this);
        this.loadTeamsTable = this.loadTeamsTable.bind(this);
        this.submitTeam = this.submitTeam.bind(this);

        this.handleUniversityCombo = this.handleUniversityCombo.bind(this);
        this.handleBranchCombo = this.handleBranchCombo.bind(this);
        this.handleTeamInput = this.handleTeamInput.bind(this);

        this.deleteTeam = this.deleteTeam.bind(this);
      }
    

    
  
  componentDidMount()
  {
  
    console.log("teamScreamDidMount");
    
    this.setState({sport:"voleibol de sala"});
    this.loadBranchesCombo();
    this.loadSchoolsCombo();
    this.loadTeamsTable();
  }
  
  deleteTeam()
  {
      console.log("del");
      alert("delete")
      
  }
  handleBranchCombo(event)
  {
    this.setState({branch: event.target.value});

  }  
  handleTeamInput(event)
  {
    this.setState({teamName: event.target.value});

  }

  
  handleUniversityCombo(event)
  {
    this.setState({university: event.target.value});

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


  submitTeam()
  {

    var db = firebase.firestore();
    const firestore = firebase.firestore();
    const settings = {/* your settings... */ timestampsInSnapshots: true};
    firestore.settings(settings);
    var sport = this.state["sport"];
    var university = this.state["university"];
    var teamName = this.state["teamName"];
    var branch = this.state["branch"];
    var that = this;
       
    if(teamName == "")
    {
        alert("Ingrese un nombre de equipo!")
        return;
    }

    firestore.collection('eventos').doc('oct2018').collection('equipos').doc().set({
        nombre: teamName,
        rama: branch,
        escuela: university,
        deporte: sport
    })
    .then(function() {
        console.log("Document successfully written!");
        this.state["teamName"] = "";
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });    
    
    // });

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
        that.state["branch"] = arr[0]
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
       that.state["university"] = arr[0]
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
                                <Label for="txtTeamName">Nombre del equipo:</Label>
                                <Input type="text" name="txtTeamName" value={this.state["teamName"]} onChange={this.handleTeamInput} id="txtTeamName" placeholder="" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="cmbBranch">Rama</Label>
                                <Input type="select" name="selectBranch" value={this.state["branch"]}  onChange={this.handleBranchCombo} id="cmbBranch">
                                {this.state["branches"].map(function (x, i = 1) { 
                                return (
                                <option value={x} key={"cmbBranch" + i}>{x} </option>
                                 )})}
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="cmbSchool">Universidad</Label>
                                <Input type="select" value={this.state["university"]}  onChange={this.handleUniversityCombo} name="selectSchool" id="cmbSchool">
                                {this.state["schools"].map(function (x, i = 1) { 
                                return (
                                <option value={x} key={"cmbSchool" + i}>{x}
                                
                                </option>
              
              
                                 )})}
                                </Input>
                            </FormGroup>
                            <Button onClick={this.submitTeam}>Agregar</Button>
                        </Form>
                    </Col>
                    <Col md="6">
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