// Fer
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import {

} from 'reactstrap';

class HomeScreen extends React.Component {

  render() {
    return (
      <Container>
        <br />
        <Row>
          <Col sm="8">
            <Row>
            <Col sm="6">
                <a href="/sports/new" className="thumbnail-red">
                  <div className="card text-center thumb" >
                    <div className="card-body"></div>
                    <div className="card-body"><h5>Deportes</h5></div>
                    <div className="card-body"></div>
                  </div>
                </a>
              </Col>
              <br />
              <Col sm="6">
                <a href="/court" className="thumbnail-red">
                  <div className="card text-center thumb" >
                    <div className="card-body"></div>
                    <div className="card-body"><h5>Lugares</h5></div>
                    <div className="card-body"></div>
                  </div>
                </a>
              </Col>
           
            </Row>
            <br/>
            <Row>
            <Col sm="4">
              <a href="/sports/teams" className="thumbnail-red">
                <div className="card text-center thumb"  >
                  <div className="card-body"></div>
                  <div className="card-body"><h5>Equipos</h5></div>
                  <div className="card-body"></div>
                </div>
              </a>
            </Col>
     
            <Col sm="4">
                <a href="/calendar" className="thumbnail-red">
                  <div className="card text-center thumb" >
                    <div className="card-body"></div>
                    <div className="card-body"><h5>Calendario</h5></div>
                    <div className="card-body"></div>
                  </div>
                </a>
              </Col>
             
            <br />
            <Col sm="4">
              <a href="/sports/results" className="thumbnail-red" >
                <div className="card text-center thumb" >
                  <div className="card-body"></div>
                  <div className="card-body"><h5>Resultados</h5></div>
                  <div className="card-body"></div>
                </div>
              </a>
            </Col>

            </Row>

          </Col>
          <Col sm="4">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="DeLaSalleBajio"
              options={{ height: 470 }}
            />
          </Col>
        </Row>
      </Container>
    );
  }

}

export default HomeScreen;