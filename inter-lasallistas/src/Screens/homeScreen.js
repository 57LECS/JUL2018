// Fer
import React from 'react';
import {
  Container, Row, Col
} from 'reactstrap';
import {
  TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton,
  TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton,
  TwitterVideoEmbed, TwitterOnAirButton
} from 'react-twitter-embed';

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
                <a href="/calendar" style={{ color: 'inherit', textDecoration: 'none' }}>
                  <div className="card text-center" >
                    <div className="card-body"></div>
                    <div className="card-body"><h5>Calendario</h5></div>
                    <div className="card-body"></div>
                  </div>
                </a>
              </Col>
              <br />
              <Col sm="6">
                <a href="/court" style={{ color: 'inherit', textDecoration: 'none' }}>
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
              <a href="/teams" style={{ color: 'inherit', textDecoration: 'none' }}>
                <div className="card text-center" >
                  <div className="card-body"></div>
                  <div className="card-body"><h5>Equipos</h5></div>
                  <div className="card-body"></div>
                </div>
              </a>
            </Col>
            <br />
            <Col sm="6">
              <a href="/results" style={{ color: 'inherit', textDecoration: 'none' }}>
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
              options={{ height: 400 }}
            />
          </Col>
        </Row>
      </Container>
    );
  }

}

export default HomeScreen;