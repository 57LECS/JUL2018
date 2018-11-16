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
          universities: [],
          schools:[],
          sport: "voleibol de sala",
          teams:[],
          eventName:"",
          university:"",
          mode:""
        };
    
        //bindings
        this.loaduniversitiesCombo = this.loaduniversitiesCombo.bind(this);
        this.submitEvent = this.submitEvent.bind(this);

        this.handlemodeCombo = this.handlemodeCombo.bind(this);
        this.handleuniversityCombo = this.handleuniversityCombo.bind(this);
        this.handleTeamInput = this.handleTeamInput.bind(this);

        this.deleteTeam = this.deleteTeam.bind(this);
      }
    

    
  
  componentDidMount()
  {
  
    console.log("teamScreamDidMount");
    
    this.setState({sport:"voleibol de sala"});
    this.loaduniversitiesCombo();
  }
  
  deleteTeam()
  {
      console.log("del");
      alert("delete")
      
  }
  
  handleuniversityCombo(event)
  {
    this.setState({university: event.target.value});

  }  
  handleTeamInput(event)
  {
    this.setState({eventName: event.target.value});

  }

  
  handlemodeCombo(event)
  {
    this.setState({mode: event.target.value});

  }

  loaduniversitiesCombo()
  {
      
    var db = firebase.firestore();
    const firestore = firebase.firestore();
    const settings = {/* your settings... */ timestampsInSnapshots: true};
    firestore.settings(settings);
    var arr = this.state["universities"];
 
    var that = this;
         
    firestore.collection('universidades').get().then(function(querySnapshot) {
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


  


  submitEvent()
  {

    var db = firebase.firestore();
    const firestore = firebase.firestore();
    const settings = {/* your settings... */ timestampsInSnapshots: true};
    firestore.settings(settings);
    var sport = this.state["sport"];
    var mode = this.state["mode"];
    var eventName = this.state["eventName"];
    var sede = this.state["university"];
    var that = this;
       
    if(eventName == "")
    {
        alert("Ingrese un nombre de equipo!")
        return;
    }

    firestore.collection('eventos').doc().set({
        nombre: eventName,
        fechaInicio: sede,
        modalidad: mode,
        sede: sede
      
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
                                <Label for="cmbuniversity">Sede</Label>
                                <Input type="select" name="selectuniversity" value={this.state["university"]}  onChange={this.handleuniversityCombo} id="cmbuniversity">
                                {this.state["universities"].map(function (x, i = 1) { 
                                return (
                                <option value={x} key={"cmbuniversity" + i}>{x} </option>
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
                            <Button onClick={this.submitEvent}>Agregar</Button>
                        </Form>
                    </Col>
              
                </Row>
                <br /><br /><br /><br />

            </Container>
        );
    }

}

export default NewEvent;