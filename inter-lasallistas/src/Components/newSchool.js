// Fer// Aqui va una tabla con todos los equipos
// Fer
import React from 'react';
import {
    Container, Row, Col, Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import * as firebase from 'firebase'



class NewSchool extends React.Component {

  
    constructor(props) {
        super(props);
        this.state = {
          schoolName:"",
          shortName:"",
          Address:""
        };
    
        //bindings
        this.submitSchool = this.submitSchool.bind(this);

        this.handleSchoolNameInput = this.handleSchoolNameInput.bind(this);
        this.handleShortNameInput = this.handleShortNameInput.bind(this);
        this.handleAddressInput = this.handleAddressInput.bind(this);

        this.dismiss = this.dismiss.bind(this);
      }

      dismiss() {
          
        this.props.unmountMe();
     } 
    
  
  handleSchoolNameInput(event)
  {
    this.setState({schoolName: event.target.value});

  }  
  handleShortNameInput(event)
  {
    var shortName = event.target.value;
    this.setState({shortName: shortName.toLowerCase()});

  }  
  handleAddressInput(event)
  {
    this.setState({address: event.target.value});

  }

  submitSchool()
  {

    const firestore = firebase.firestore();
    const settings = {/* your settings... */ timestampsInSnapshots: true};
    firestore.settings(settings);
    var schoolName = this.state["schoolName"];
    var shortName = this.state["shortName"];
    var address = this.state["address"];
  
    var that = this;
       
    if(schoolName === "")
    {
        alert("Ingrese un nombre de escuela!")
        return;
    }  
    if(shortName === "")
    {
        alert("Ingrese un nombre corto de escuela!")
        return;
    }  
    if(address === "")
    {
        alert("Ingrese una dirección de escuela!")
        return;
    }

    firestore.collection('universidades').doc().set({
        nombre: schoolName,
        nombre_corto: shortName,
        direccion:address,
        borrable:true
      
    })
    .then(function() {
        
        that.dismiss();
    })
    .catch(function(error) {
        alert("Error al ingresar el nuevo registro!")
        that.dismiss();
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
                                <Label for="txtSchoolName">Nombre de la escuela:</Label>
                                <Input type="text" name="txtSchoolName" value={this.state["schoolName"]} onChange={this.handleSchoolNameInput} id="txtSchoolName" placeholder="" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="txtShortName">Nombre corto:</Label>
                                <Input type="text" name="date" id="txtShortName" placeholder=""value={this.state["shortName"]} onChange={this.handleShortNameInput} />
                            </FormGroup>        <FormGroup>
                                <Label for="address">Direccion:</Label>
                                <Input type="txt" name="date" id="address" placeholder=""value={this.state["address"]} onChange={this.handleAddressInput}  />
                            </FormGroup>
                            <br/>
                            <hr/>
                            <Button color={"secondary"} onClick={this.dismiss }>Cancelar</Button>{' '}
                            <Button color={"primary"} onClick={this.submitSchool}>Agregar</Button>
                      
                        </Form>
                    </Col>
              
                </Row>

            </Container>
        );
    }

}

export default NewSchool;