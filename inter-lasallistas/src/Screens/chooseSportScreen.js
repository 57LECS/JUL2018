// Andres
import React from 'react';
import {
  Container, Row, Col
} from 'reactstrap';

class ChooseSportScreen extends React.Component {

  render() {
    return (
      <Container>
        <br />
        <Row>
          <br />
          <Col sm="4">
            <a href="/ajedrez" style={{ color: 'inherit', textDecoration: 'none' }}>
              <div className="card text-center" >
                <div className="card-body"></div>
                <div className="card-body"><h5>Ajedrez</h5></div>
                <div className="card-body"></div>
              </div>
            </a>
          </Col>
          <br />
          <Col sm="4">
            <a href="/atletismo" style={{ color: 'inherit', textDecoration: 'none' }}>
              <div className="card text-center" >
                <div className="card-body"></div>
                <div className="card-body"><h5>Atletismo</h5></div>
                <div className="card-body"></div>
              </div>
            </a>
          </Col>
          <br />
          <Col sm="4">
            <a href="/basquetbol" style={{ color: 'inherit', textDecoration: 'none' }}>
              <div className="card text-center" >
                <div className="card-body"></div>
                <div className="card-body"><h5>Basquetbol</h5></div>
                <div className="card-body"></div>
              </div>
            </a>
          </Col>
        </Row>
        <br />
        <Row>
          <br />
          <Col sm="4">
            <a href="/beisbol" style={{ color: 'inherit', textDecoration: 'none' }}>
              <div className="card text-center" >
                <div className="card-body"></div>
                <div className="card-body"><h5>Beisbol</h5></div>
                <div className="card-body"></div>
              </div>
            </a>
          </Col>
          <br />
          <Col sm="4">
            <a href="/soccerap" style={{ color: 'inherit', textDecoration: 'none' }}>
              <div className="card text-center" >
                <div className="card-body"></div>
                <div className="card-body"><h5>Futbol rápido</h5></div>
                <div className="card-body"></div>
              </div>
            </a>
          </Col>
          <br />
          <Col sm="4">
            <a href="/soccer" style={{ color: 'inherit', textDecoration: 'none' }}>
              <div className="card text-center" >
                <div className="card-body"></div>
                <div className="card-body"><h5>Futbol Soccer</h5></div>
                <div className="card-body"></div>
              </div>
            </a>
          </Col>
        </Row>
        <br />
        <Row>
          <br />
          <Col sm="4">
            <a href="/hockey" style={{ color: 'inherit', textDecoration: 'none' }}>
              <div className="card text-center" >
                <div className="card-body"></div>
                <div className="card-body"><h5>Hockey sobre pasto</h5></div>
                <div className="card-body"></div>
              </div>
            </a>
          </Col>
          <br />
          <Col sm="4">
            <a href="/tenis" style={{ color: 'inherit', textDecoration: 'none' }}>
              <div className="card text-center" >
                <div className="card-body"></div>
                <div className="card-body"><h5>Tenis</h5></div>
                <div className="card-body"></div>
              </div>
            </a>
          </Col>
          <br />
          <Col sm="4">
            <a href="/tocho" style={{ color: 'inherit', textDecoration: 'none' }}>
              <div className="card text-center" >
                <div className="card-body"></div>
                <div className="card-body"><h5>Tocho bandera</h5></div>
                <div className="card-body"></div>
              </div>
            </a>
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm="4">
            <a href="/voleibol" style={{ color: 'inherit', textDecoration: 'none' }}>
              <div className="card text-center" >
                <div className="card-body"></div>
                <div className="card-body"><h5>Voleibol</h5></div>
                <div className="card-body"></div>
              </div>
            </a>
          </Col>
        </Row>
        <br />
      </Container>
    );
  }

}

export default ChooseSportScreen;