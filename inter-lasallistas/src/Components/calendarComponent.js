// Fer
import React from 'react';
import { Container, Row, Col, Table, Button } from 'reactstrap';
import * as firebase from 'firebase';


class calendarComponent extends React.Component {

    
    constructor(props) {
        super(props);
        this.state = {
          sport: this.props.sport,
          games:[],
          teams:[]
         
        };
    
        //bindings
        this.loadCalendar = this.loadCalendar.bind(this);
        this.getTeamsForSport = this.getTeamsForSport.bind(this);
        this.generateCalendar = this.generateCalendar.bind(this);
      }
    
     
  componentDidMount()
  {
    this.loadCalendar();
    this.getTeamsForSport();
  }
  
  getTeamsForSport()
  {

    

    const firestore = firebase.firestore();
    const settings = {/* your settings... */ timestampsInSnapshots: true};
    firestore.settings(settings);
    var arr = this.state["teams"];
 
    var that = this;
    arr = [];  
    firestore.collection('eventos').doc('oct2018').collection('equipos').where("deporte","==",this.state["sport"]).onSnapshot(function(querySnapshot) {
       
        
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
        
    
    },function(){
         
      alert("hola "+arr.length)
  });

  }
 
  generateCalendar()
  {
    
    var arr = this.state["teams"];
    var len = arr.length;
    while(arr.length>1)
    {
        var Equipo1 = arr[0];
        for(var i=1;i<arr.length;i++)
        {
          
        }
    }

  }

  
  loadCalendar( )
  {
    const firestore = firebase.firestore();
    const settings = {/* your settings... */ timestampsInSnapshots: true};
    firestore.settings(settings);
    var arr = this.state["games"];

    var that = this;
         
    firestore.collection('eventos').doc('oct2018').collection('partidos').where("Deporte","==",this.state["sport"]).onSnapshot(function(querySnapshot) {
        arr = [];
        
        that.setState({games:arr});
        querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        var obj = {}
        obj.id = doc.id;
        obj.Cancha = doc.data().Cancha;
        obj.Rama = doc.data().Rama;
        obj.Equipo1 = doc.data().Equipo1;
        obj.Equipo2 = doc.data().Equipo2;
        obj.Fecha = doc.data().Fecha;
        obj.Ganador = doc.data().Ganador;
        obj.Rama = doc.data().Rama;
        obj.Resultado = doc.data().Resultado;
        obj.TipoPartido = doc.data().TipoPartido;
        arr.push(obj );
      console.log(obj)
        that.setState({games:arr});
        });
        
    
    });
  }    

 

    

  render() {
      
    var that = this;
    var games = this.state["games"];
    function Calendar(props) {
        const isLoggedIn = props.isLoggedIn;
        if (games.length>1) {
          return (<Container>

            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns" crossOrigin="anonymous"></link>
    
            <Row>
              <Col sm="12">
                <div style={{ display: 'block', maxHeight: '345px', overflowY: "auto", msOverflowStyle: "-ms-autohiding-scrollbar" }}>
                  <Table bordered>
                    <tbody>
                      <tr>
                        <th scope="row">2018-10-31</th>
                        <td className="text-center">Chihuaha</td>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                        <td className="text-center">Cuernavaca</td>
                        <td className="text-center"><i className="far fa-futbol"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">2018-11-01</th>
                        <td className="text-center">Neza</td>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                        <td className="text-center">Victoria</td>
                        <td className="text-center"><i className="fas fa-basketball-ball"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">2018-11-01</th>
                        <td className="text-center">Cancún</td>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                        <td className="text-center">Laguna</td>
                        <td className="text-center"><i className="fas fa-volleyball-ball"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">2018-11-03</th>
                        <td className="text-center">México</td>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                        <td className="text-center">Laguna</td>
                        <td className="text-center"><i className="fas fa-chess-rook"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">2018-11-02</th>
                        <td className="text-center">Cuernavaca</td>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                        <td className="text-center">Morelia</td>
                        <td className="text-center"><i className="fas fa-running"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">2018-10-31</th>
                        <td className="text-center">Victoria</td>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                        <td className="text-center">Cancún</td>
                        <td className="text-center"><i className="far fa-futbol"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">2018-10-31</th>
                        <td className="text-center">Morelia</td>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                        <td className="text-center">Saltillo</td>
                        <td className="text-center"><i className="fas fa-running"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">2018-11-01</th>
                        <td className="text-center">Cancún</td>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                        <td className="text-center">Bajío</td>
                        <td className="text-center"><i className="fas fa-running"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">2018-10-31</th>
                        <td className="text-center">Gua</td>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                        <td className="text-center">Gua</td>
                        <td className="text-center"><i className="fas fa-volleyball-ball"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">2018-11-04</th>
                        <td className="text-center">Victoria</td>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                        <td className="text-center">Cancún</td>
                        <td className="text-center"><i className="far fa-futbol"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">2018-10-31</th>
                        <td className="text-center">Morelia</td>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                        <td className="text-center">Saltillo</td>
                        <td className="text-center"><i className="fas fa-running"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">2018-11-03</th>
                        <td className="text-center">Cancún</td>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                        <td className="text-center">Bajío</td>
                        <td className="text-center"><i className="fas fa-running"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">2018-10-31</th>
                        <td className="text-center">Bajío</td>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                        <td className="text-center">Saltillo</td>
                        <td className="text-center"><i className="fas fa-volleyball-ball"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">2018-10-31</th>
                        <td className="text-center">Victoria</td>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                        <td className="text-center">Cancún</td>
                        <td className="text-center"><i className="far fa-futbol"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">2018-11-02</th>
                        <td className="text-center">Morelia</td>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                        <td className="text-center">Saltillo</td>
                        <td className="text-center"><i className="fas fa-running"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">2018-11-02</th>
                        <td className="text-center">Cancún</td>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                        <td className="text-center">Bajío</td>
                        <td className="text-center"><i className="fas fa-running"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">2018-11-01</th>
                        <td className="text-center">Cancún</td>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                        <td className="text-center">Bajío</td>
                        <td className="text-center"><i className="fas fa-volleyball-ball"></i></td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Col>
            </Row>
          </Container>);
        }
        else{
        return (<Container>
            <Col md="12" style={{alignItems: 'center'}} >
            <h5 style={{textAlign:'center'}}>No se encontraron partidos asignados a este deporte</h5>
            <Button onClick={that.generateCalendar}  color={"primary"} style={{margin:'auto',  display:'block'}}>Generar calendario de {that.props.sport}</Button>
            </Col>   
        </Container>);
        }
      }
      
    return (
      <Calendar isLoggedIn={true}/>
    );
  }

}

export default calendarComponent;