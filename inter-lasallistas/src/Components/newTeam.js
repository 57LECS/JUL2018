import React from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Alert } from 'reactstrap';

import * as firebase from 'firebase'


class NewTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        modal: false,
        branches: [],
          schools:[],
          sport: this.props.idSport,
          teams:[],
          teamName: this.props.x.nombre,
          branch:"",
          university:this.props.x.escuela,
          series:"Serie A"
    };

    this.toggle = this.toggle.bind(this);
    this.loadBranchesCombo = this.loadBranchesCombo.bind(this);
    this.loadSchoolsCombo = this.loadSchoolsCombo.bind(this);
    this.submitTeam = this.submitTeam.bind(this);
    this.handleUniversityCombo = this.handleUniversityCombo.bind(this);
    this.handleSeriesCombo = this.handleSeriesCombo.bind(this);
    this.handleBranchCombo = this.handleBranchCombo.bind(this);
    this.handleTeamInput = this.handleTeamInput.bind(this);
    
}
componentDidMount()
{

  
  this.loadBranchesCombo();
  this.loadSchoolsCombo();
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
handleSeriesCombo(event)
{
  this.setState({series: event.target.value});

}



submitTeam(event)
{ 
  const firestore = firebase.firestore();
  const settings = {/* your settings... */ timestampsInSnapshots: true};
  firestore.settings(settings);
  var sport = this.state["sport"];
  var university = this.state["university"];
  var teamName = this.state["teamName"];
  var branch = this.state["branch"];
  var series = this.state["series"];
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
      deporte: sport,
      serie: series
  })
  .then(function() {
      that.state["teamName"] = "";
      that.toggle();
  })
  .catch(function(error) {
    alert("Error");
    that.toggle();
  });    
  
  // });

}

loadBranchesCombo()
{ 
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
 const firestore = firebase.firestore();
 const settings = {/* your settings... */ timestampsInSnapshots: true};
 firestore.settings(settings);
 var arr = this.state["branches"];

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







toggle() {
    this.setState({
        modal: !this.state.modal
    });
}

  render() {
    var that = this;
    const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
    function EditButton(props) {
      const isEdit = props.isEdit;
      if (isEdit) {
        return  <Button  onClick={that.toggle} style={{ marginBottom: "8px" }}  color="primary">Editar</Button>
      }
      return <Button style={{ marginBottom: "10px" }} onClick={that.toggle} color="success">Agregar equipo</Button>
    }
    
    return (
        <div>
            <EditButton isEdit={this.props.isEdit}  onClick={this.toggle}/>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle} close={closeBtn}>Agregar equipo</ModalHeader>
                <ModalBody>
                  <Form>
                            <FormGroup>
                                <Label for="txtSport">Deporte:</Label>
                                <Input type="text" name="email" id="txtSport" value={this.state["sport"]} disabled />
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
                            
                            <FormGroup>
                                <Label for="cmbSeries">Serie</Label>
                                <Input type="select" value={this.state["series"]}  onChange={this.handleSeriesCombo} name="selectSeries" id="cmbSeries">
                                
                                <option value={"Serie A"}>Serie A</option>
                                <option value={"Serie B"}>Serie B</option>
              
              
                                </Input>
                            </FormGroup>
                            
                        </Form>

                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={this.toggle}>Cancelar</Button>{' '}
                    <Button color="primary" onClick={() => { this.submitTeam() }}>Agregar</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
}


export default NewTeam;