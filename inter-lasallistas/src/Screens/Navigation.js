// Fer
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';


import * as firebase from 'firebase'

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  logout() {

    firebase.auth().signOut().then(function () {
      // Sign-out successful.
    }).catch(function (error) {
      // An error happened.
    });

  }

  render() {
    return (
      <div>
        <Navbar style={{backgroundColor: '#2359af'}} light expand="md">
          <NavbarBrand href="/"><img src="../images/redsalle.png" alt="logo" style={{ height: '50px' }} /></NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink><div style={{ float: "right", cursor: "pointer" }} ><span style={{color:"white"}}>Salir </span><img onClick={this.logout} src="../images/exit.png" alt="salir" style={{ height: '35px' }} /></div></NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }

}

export default Navigation;