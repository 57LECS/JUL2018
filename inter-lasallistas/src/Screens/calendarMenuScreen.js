// Fer
import React from 'react';
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
              <a href="/calendar/new" className="thumbnail-red">
                <div className="card text-center thumb" >
                  <div className="card-body"></div>
                  <div className="card-body"><h5>Generar calendario</h5></div>
                  <div className="card-body"></div>
                </div>
              </a>
            </Col>
            <br />
            <Col sm="6">
              <a href="/calendar/get" className="thumbnail-red" >
                <div className="card text-center thumb" >
                  <div className="card-body"></div>
                  <div className="card-body"><h5>Ver calendario</h5></div>
                  <div className="card-body"></div>
                </div>
              </a>
            </Col>

            </Row>
          </Col>
        </Row>
      </Container>
    );
  }

}

export default CalendarMenuScreen;