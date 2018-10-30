// Fer
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

class CalendarScreen extends React.Component {

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/"><img src="./images/lasallistas.png" alt="logo" style={{height: '50px'}} /></NavbarBrand>
        </Navbar>
      </div>
    );
  }

}

export default CalendarScreen;