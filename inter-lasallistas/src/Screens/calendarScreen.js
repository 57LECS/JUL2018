// Aqui va una tabla con todos los equipos
// Fer
import React from 'react';
import {
    Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText,Table
} from 'reactstrap';
import * as firebase from 'firebase'
import TeamModalScreen from '../Components/newTeam'
import TeamRow from '../RowModels/teamRow'
import CalendarComponent from '../Components/calendarComponent'



class CalendarScreen extends React.Component {

  
    constructor(props) {
        super(props);
        this.state = {

          sport: "",
          sports:[]
        };
    
        //bindings
        
        this.loadSportssCombo = this.loadSportssCombo.bind(this);
        this.loadTeamsTable = this.loadTeamsTable.bind(this);
        this.handleSportCombo = this.handleSportCombo.bind(this);        
        this.deleteTeam = this.deleteTeam.bind(this);
      }
    

    
  
  componentDidMount()
  {
  
    this.loadTeamsTable();
    this.loadSportssCombo();
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
         
    
    // firestore.collection('eventos').doc('oct2018').collection('equipos').where("deporte","==",this.state["sport"]).onSnapshot(function(querySnapshot) {
    //     arr = [];
        
    //     that.setState({teams:arr});
    //     querySnapshot.forEach(function(doc) {
    //     // doc.data() is never undefined for query doc snapshots
    //     var obj = {}
    //     obj.id = doc.id;
    //     obj.nombre = doc.data().nombre;
    //     obj.rama = doc.data().rama;
    //     obj.escuela = doc.data().escuela;
    //     obj.deporte = doc.data().deporte;
    //     obj.serie = doc.data().serie;
    //     arr.push(obj );
    //   console.log(obj)
    //     that.setState({teams:arr});
    //     });
        
    
    // });

  }

  
handleSportCombo(event)
{
  this.setState({sport: event.target.value});

}  
loadSportssCombo()
{  const firestore = firebase.firestore();
  const settings = {/* your settings... */ timestampsInSnapshots: true};
  firestore.settings(settings);
  var arr = this.state["sports"];
 
  var that = this;
       
  firestore.collection('eventos').doc('oct2018').collection('deportes').get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      // doc.data() is never undefined for query doc snapshots
      //console.log("DD")
     // console.log(doc.id, " => ", doc.data().nombre_corto);
      arr.push(  doc.data().nombre);
      that.state["sport"] = arr[0]
      that.setState({sports:arr});
      });
      
  
  });
  
}


  
    render() {
        return (
            <Container>
                <Row>   
                <Col md="2"><h4>Calendario de </h4></Col><Col md="4"> <Input type="select" name="selectBranch" value={this.state["sport"]}  onChange={this.handleSportCombo} id="cmbBranch">
                                {this.state["sports"].map(function (x, i = 1) { 
                                return (
                                <option value={x} key={"cmbSport" + i}>{x} </option>
                                 )})}
                                </Input></Col>
                {/* <Col md="2"><TeamModalScreen x={{nombre:"", rama:"", escuela:""}
}  idSport={this.props.match.params.id}  isEdit={false} /></Col> */}
                </Row>
                <Row>
                <Col md="12">
                
                <br/>
                  <CalendarComponent sport={this.state["sport"]}/>
              
                    </Col>
                   

                </Row>

            </Container>
        );
    }

}

export default CalendarScreen;