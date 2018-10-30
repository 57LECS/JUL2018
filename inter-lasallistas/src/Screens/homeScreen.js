// Fer
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

class HomeScreen extends React.Component {

  render() {
    return (
      <Container>
        <br />
        <Row>
          <br />
          <Col sm="8">
            <Row>
              <Col sm="6">
                <a href="/calendar" className="thumbnail-red">
                  <div className="card text-center" >
                    <div className="card-body"></div>
                    <div className="card-body"><h5>Calendario</h5></div>
                    <div className="card-body"></div>
                  </div>
                </a>
              </Col>
              <br />
              <Col sm="6">
                <a href="/court" className="thumbnail-red">
                  <div className="card text-center" >
                    <div className="card-body"></div>
                    <div className="card-body"><h5>Canchas</h5></div>
                    <div className="card-body"></div>
                  </div>
                </a>
              </Col>
            </Row>

            <br />
            <Row>
            <Col sm="6">
              <a href="/sports" className="thumbnail-red">
                <div className="card text-center"  >
                  <div className="card-body"></div>
                  <div className="card-body"><h5>Equipos</h5></div>
                  <div className="card-body"></div>
                </div>
              </a>
            </Col>
            <br />
            <Col sm="6">
              <a href="/results" className="thumbnail-red" >
                <div className="card text-center" >
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