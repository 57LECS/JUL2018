import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ChooseSportScreen from './Screens/chooseSportScreen_teams';
import ChooseSportScreenResults from './Screens/chooseSportScreen_results';
import HomeScreen from './Screens/homeScreen';
import ResultScreen from './Screens/resultScreen';
import error from './Screens/Error';
import Navigation from './Screens/Navigation';
import TeamScreen from './Screens/teamScreen';
import CalendarScreen from './Screens/calendarScreen';
import CourtScreen from './Screens/courtScreen';
import CalendarMenuScreen from './Screens/calendarMenuScreen';
import EventScreen from './Screens/eventScreenMenu';
import Footer from './Screens/Footer';
import SchoolScreen from './Screens/schoolScreen';
import SportScreen from './Screens/sportScreen';
import './index.css';
import './lasallistas.css';

import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button, Col, Row
} from 'reactstrap';
import * as firebase from 'firebase'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: "",
      password: "",
      loggedIn: true
    };

    //bindings
    this.login = this.login.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleMailInput = this.handleMailInput.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    var that = this;

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        // var displayName = user.displayName;
        // var email = user.email;
        // var emailVerified = user.emailVerified;
        // var photoURL = user.photoURL;
        // var isAnonymous = user.isAnonymous;
        // var uid = user.uid;
        // var providerData = user.providerData;

        that.setState({ loggedIn: true })
        // ...
      } else {
        // User is signed out.
        // ...

        that.setState({ loggedIn: false })
      }
    });
  }
  componentWillMount() {


  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  login() {
    var email = this.state["mail"];
    var password = this.state["password"];

    if (!this.validateEmail(email)) {
      alert("Ingrese un correo válido");
      return;
    }
    if (password === "" || password.length < 6) {

      alert("Ingrese una contraseña válida");
      return;
    }

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      // var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      alert(errorMessage)
    });

  }
  handleMailInput(event) {
    this.setState({ mail: event.target.value });

  }
  handlePasswordInput(event) {
    this.setState({ password: event.target.value });

  }


  render() {
    const isLoggedIn = this.state["loggedIn"];

    if (isLoggedIn) {
      return (
        <div  >
          <Navigation />
          <br />
          <BrowserRouter >
            <Switch>
              <Route path="/" component={EventScreen} exact />
              <Route path="/home" component={HomeScreen} exact />
              <Route path="/sports/:id" component={ChooseSportScreen} />
              <Route path="/newSport" component={SportScreen} />
              <Route path="/results/:id" component={ResultScreen} />
              <Route path="/teams/:id" component={TeamScreen} />
              <Route path="/calendar/get" component={CalendarScreen} />
              <Route path="/court" component={CourtScreen} />
              <Route path="/calendar" component={CalendarMenuScreen} />
              <Route path="/school" component={SchoolScreen} />
              <Route component={error} />
            </Switch>
          </BrowserRouter>

          <div className="footer">
            <Footer />
          </div>
        </div>
      );
    }
    else {
      return (
        <Container className="App" style={{ marginTop: "75px" }}>
          <Form className="form">
            <Row>
              <Col md="4"></Col>
              <Col>
                <h2 style={{textAlign:"center"}}>Iniciar Sesión</h2><br/>
                <FormGroup>
                  <Label>Correo: </Label>
                  <Input
                    type="text"
                    name="txtMail"
                    id="txtMail"
                    value={this.state["mail"]}
                    onChange={this.handleMailInput}
                    placeholder=""
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="examplePassword">Contraseña:</Label>
                  <Input
                    type="password"
                    name="txtPassword"
                    id="txtPassword"
                    value={this.state["password"]} onChange={this.handlePasswordInput}
                    placeholder=""
                  />
                </FormGroup>
                <Button  block color="info" onClick={this.login} >Ingresar</Button>
                <div style={{marginTop:"30px", textAlign:"center"}}><img src="../images/ulsa_red.jpg" alt="logo" style={{ height: '70px' }} /></div>
              </Col> 
              <Col md="4"></Col>
            </Row>
          </Form>

        </Container>
      );
    }
  }
}

export default App;
