// Fer// Aqui va una tabla con todos los equipos
// Fer
import React from 'react';
import {
    Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText,Table
} from 'reactstrap';
import * as firebase from 'firebase'



class NewEvent extends React.Component {

  
    constructor(props) {
        super(props);
        this.state = {
          branches: [],
          schools:[],
          sport: "voleibol de sala",
          teams:[],
          eventName:"",
          branch:"",
          mode:""
        };
    
        //bindings
        this.loadBranchesCombo = this.loadBranchesCombo.bind(this);
        this.loadSchoolsCombo = this.loadSchoolsCombo.bind(this);
        this.loadTeamsTable = this.loadTeamsTable.bind(this);
        this.submitTeam = this.submitTeam.bind(this);

        this.handlemodeCombo = this.handlemodeCombo.bind(this);
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
    this.setState({eventName: event.target.value});

  }

  
  handlemodeCombo(event)
  {
    this.setState({mode: event.target.value});

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
    var mode = this.state["mode"];
    var eventName = this.state["eventName"];
    var branch = this.state["branch"];
    var that = this;
       
    if(eventName == "")
    {
        alert("Ingrese un nombre de equipo!")
        return;
    }

    firestore.collection('eventos').doc('oct2018').collection('equipos').doc().set({
        nombre: eventName,
        rama: branch,
        escuela: mode,
        deporte: sport
    })
    .then(function() {
        console.log("Document successfully written!");
        this.state["eventName"] = "";
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
       that.state["mode"] = arr[0]
       that.setState({schools:arr});
       });
       
   
   });
    
}


  
    render() {
        return (
            <Container>
                <br />
                <Row>
                    <Col md="12">
                        <Form>
                            <FormGroup>
                                <Label for="txtTeamName">Nombre del evento:</Label>
                                <Input type="text" name="txtTeamName" value={this.state["eventName"]} onChange={this.handleTeamInput} id="txtTeamName" placeholder="" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="cmbBranch">Sede</Label>
                                <Input type="select" name="selectBranch" value={this.state["branch"]}  onChange={this.handleBranchCombo} id="cmbBranch">
                                {this.state["branches"].map(function (x, i = 1) { 
                                return (
                                <option value={x} key={"cmbBranch" + i}>{x} </option>
                                 )})}
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="cmbSchool">Modalidad</Label>
                                <Input type="select" value={this.state["mode"]}  onChange={this.handlemodeCombo} name="selectSchool" id="cmbSchool">
                              
                                <option value={"Universidad"}>Universidad</option>
                                <option value={"Preparatoria"}>Preparatoria</option>
              
              
                                </Input>
                            </FormGroup>
                            <Button onClick={this.submitTeam}>Agregar</Button>
                        </Form>
                    </Col>
              
                </Row>
                <br /><br /><br /><br />

            </Container>
        );
    }

}

export default NewEvent;