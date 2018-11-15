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
    this.logout = this.logout.bind(this);
  }

  logout()
  {
    // firebase.auth().signOut().then(function() {
    //   // Sign-out successful.
    // }).catch(function(error) {
    //   // An error happened.
    // });
    
  }
  
  componentDidMount()
  {
  }


  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/"><img src="../images/lasallistas.png" alt="logo" style={{height: '50px'}} /></NavbarBrand>
          <a style={{float:"right"}} onClick={this.logout()}><img src="../images/exit.png" alt="salir" style={{height: '50px'}} /></a>
        </Navbar>
      </div>
    );
  }

}

export default Navigation;