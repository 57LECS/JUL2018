// Fer
import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';

class CalendarMenuScreen extends React.Component {

  render() {
    return (
      <Container>
        <br />
        <Row>
          <br />
          <Col sm="12">
            <br />
            <Row>
            <Col sm="6">
              <Link to="/calendar/new" className="thumbnail-red">
                <div className="card text-center thumb" >
                  <div className="card-body"></div>
                  <div className="card-body"><h5>Generar calendario</h5></div>
                  <div className="card-body"></div>
                </div>
              </Link>
            </Col>
            <br />
            <Col sm="6">
              <Link to="/calendar/get" className="thumbnail-red" >
                <div className="card text-center thumb" >
                  <div className="card-body"></div>
                  <div className="card-body"><h5>Ver calendario</h5></div>
                  <div className="card-body"></div>
                </div>
              </Link>
            </Col>

            </Row>
          </Col>
        </Row>
      </Container>
    );
  }

}

export default CalendarMenuScreen;