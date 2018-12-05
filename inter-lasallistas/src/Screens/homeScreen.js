// Fer
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import {

} from 'reactstrap';
import { Link } from 'react-router-dom';

class HomeScreen extends React.Component {

  render() {
    return (
      <Container >
        <br />
        <Row>
          <Col sm="8">
            <Row>
              <Col sm="6">
                <Link to="/newSport" className="thumbnail-red">
                  <div className="card text-center thumb" >
                    <div className="card-body"></div>
                    <div className="card-body"><h5>Deportes</h5></div>
                    <div className="card-body"></div>
                  </div>
                </Link>
                <br />
              </Col>
              <br />
              <Col sm="6">
                <Link to="/court" className="thumbnail-red">
                  <div className="card text-center thumb" >
                    <div className="card-body"></div>
                    <div className="card-body"><h5>Lugares</h5></div>
                    <div className="card-body"></div>
                  </div>
                </Link>
                <br />
              </Col>

            </Row>

            <Row>
              <Col sm="4">
                <Link to="/sports/teams" className="thumbnail-red">
                  <div className="card text-center thumb"  >
                    <div className="card-body"></div>
                    <div className="card-body"><h5>Equipos</h5></div>
                    <div className="card-body"></div>
                  </div>
                </Link>
                <br />
              </Col>
              <Col sm="4">
                <Link to="/calendar" className="thumbnail-red">
                  <div className="card text-center thumb" >
                    <div className="card-body"></div>
                    <div className="card-body"><h5>Calendario</h5></div>
                    <div className="card-body"></div>
                  </div>
                </Link>
                <br />
              </Col>

              <Col sm="4">
                <Link to="/sports/results" className="thumbnail-red" >
                  <div className="card text-center thumb" >
                    <div className="card-body"></div>
                    <div className="card-body"><h5>Resultados</h5></div>
                    <div className="card-body"></div>
                  </div>
                </Link>
                <br />
              </Col>

              <Col sm="12">
                <Link to="/machineLearning" className="thumbnail-red" >
                  <div className="card text-center thumb" >
                    <div className="card-body"></div>
                    <div className="card-body"><h5>Machine Learning Microsoft</h5></div>
                    <div className="card-body"></div>
                  </div>
                </Link>
                <br />
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