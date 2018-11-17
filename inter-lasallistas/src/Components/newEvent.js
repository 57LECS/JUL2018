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
          teams:[],
          eventName:"",
          university:"",
          mode:"",
          startDate:"",
          endDate:""
        };
    
        //bindings
        this.loaduniversitiesCombo = this.loaduniversitiesCombo.bind(this);
        this.submitEvent = this.submitEvent.bind(this);

        this.handlemodeCombo = this.handlemodeCombo.bind(this);
        this.handleuniversityCombo = this.handleuniversityCombo.bind(this);
        this.handleEventNameInput = this.handleEventNameInput.bind(this);
        this.handleStartDateInput = this.handleStartDateInput.bind(this);
        this.handleEndDateInput = this.handleEndDateInput.bind(this);

        this.deleteTeam = this.deleteTeam.bind(this);
        this.dismiss = this.dismiss.bind(this);
      }

      dismiss() {
          
        this.props.unmountMe();
     } 
    

    
  
  componentDidMount()
  {
  
    console.log("teamScreamDidMount");
    
    this.setState({sport:"voleibol de sala"});
    this.setState({mode:"Universidad"});
    this.loaduniversitiesCombo();
  }

  
  handleuniversityCombo(event)
  {
    this.setState({university: event.target.value});

  }  
  handleEventNameInput(event)
  {
    this.setState({eventName: event.target.value});

  }  
  handleStartDateInput(event)
  {
    this.setState({startDate: event.target.value});

  }  
  handleEndDateInput(event)
  {
    this.setState({endDate: event.target.value});

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
    var fechaInicio = this.state["startDate"];
    var fechaFin = this.state["endDate"];
    var that = this;
       
    if(eventName == "")
    {
        alert("Ingrese un nombre de equipo!")
        return;
    }

    firestore.collection('eventos').doc().set({
        nombre: eventName,
        fechaInicio: fechaInicio,
        fechaFin:fechaFin,
        modalidad: mode,
        sede: sede,
        borrable:true
      
    })
    .then(function() {
        console.log("Document successfully written!");
        
        that.dismiss();
        that.setState({eventName:""});
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });    
    
    // });

  }


 

  
    render() {
        return (
            <Container>
                <Row>
                    <Col md="12">
                        <Form>
                            <FormGroup>
                                <Label for="txtTeamName">Nombre del evento:</Label>
                                <Input type="text" name="txtTeamName" value={this.state["eventName"]} onChange={this.handleEventNameInput} id="txtTeamName" placeholder="" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="startDate">Fecha de inicio:</Label>
                                <Input type="date" name="date" id="startDate" placeholder="date placeholder"value={this.state["startDate"]} onChange={this.handleStartDateInput} />
                            </FormGroup>        <FormGroup>
                                <Label for="endDate">Fecha de fin:</Label>
                                <Input type="date" name="date" id="endDate" placeholder="date placeholder"value={this.state["endDate"]} onChange={this.handleEndDateInput}  />
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
                            <br/>
                            <hr/>
                            <Button color={"secondary"} onClick={this.dismiss }>Cancelar</Button>{' '}
                            <Button color={"primary"} onClick={this.submitEvent}>Agregar</Button>
                      
                        </Form>
                    </Col>
              
                </Row>

            </Container>
        );
    }

}

export default NewEvent;