// Fer
import React from 'react';
import {
  Navbar,
  NavbarBrand
} from 'reactstrap';

class HomeScreen extends React.Component {

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Juegos lasallistas</NavbarBrand>
        </Navbar>
      </div>
    );
  }

}

export default HomeScreen;