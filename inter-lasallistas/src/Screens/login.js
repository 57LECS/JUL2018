import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
 
} from 'reactstrap';
import * as firebase from 'firebase'

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          mail:"",
          password:""
        };
    
        //bindings
        this.login = this.login.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
        this.handleMailInput = this.handleMailInput.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
    }   

  
    componentWillMount()
    {
        
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          
          window.location.href = "/";
          // ...
        } else {
          // User is signed out.
          // ...
          
        }
      });
      
    }
    handleMailInput(event)
    {
        this.setState({mail: event.target.value});

    }
    handlePasswordInput(event)
    {
        this.setState({password: event.target.value});

    }

    

    login()
    {
        var email = this.state["mail"];
        var password = this.state["password"];
      
        if(!this.validateEmail(email))
        {
            alert("Ingrese un correo válido");   
            return;
        }
        if(password == "" || password.length < 6)
        {

            alert("Ingrese una contraseña válida");   
            return;
        }

        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
    
    }
    
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }


  render() {
    return (
      <Container>
        <h1>
            Login
        </h1>
        <Form>
        <FormGroup>
                <Label for="txtMail">Correo:</Label>
                <Input type="text" name="txtMail" value={this.state["mail"]} onChange={this.handleMailInput} id="txtMail" placeholder="" />
            </FormGroup>
            <FormGroup>
                <Label for="txtPassword">Contraseña:</Label>
                <Input type="password" name="txtPassword" value={this.state["password"]} onChange={this.handlePasswordInput} id="txtPassword" placeholder="" />
            </FormGroup>
            <Button onClick={this.login}>Entrar</Button>
        </Form>
    
        <br />
        
      
      </Container>
    );
  }

}

export default LoginScreen;