// Fer
import React from 'react';
import {
  Navbar,
  NavbarBrand
} from 'reactstrap';

import * as firebase from 'firebase'

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }


   logout()
  {
    
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
    
  }
  
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/"><img src="../images/lasallistas.png" alt="logo" style={{height: '50px'}} /></NavbarBrand>
          <a style={{float:"right"}} ><img onClick={this.logout} src="../images/exit.png" alt="salir" style={{height: '50px'}} /></a>
        </Navbar>
      </div>
    );
  }

}

export default Navigation;