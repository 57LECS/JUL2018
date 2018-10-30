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
            <a href="/ajedrez" className="thumbnail-blue">
              <div className="card text-center thumb" >
                <div className="card-body"></div>
                <div className="card-body"><h5>Ajedrez</h5></div>
                <div className="card-body"></div>
              </div>
            </a>
          </Col>
          <br />
          <Col sm="4">
            <a href="/atletismo" className="thumbnail-blue">
              <div className="card text-center thumb" >
                <div className="card-body"></div>
                <div className="card-body"><h5>Atletismo</h5></div>
                <div className="card-body"></div>
              </div>
            </a>
          </Col>
          <br />
          <Col sm="4">
            <a href="/basquetbol" className="thumbnail-blue">
              <div className="card text-center thumb" >
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
            <a href="/beisbol" className="thumbnail-blue">
              <div className="card text-center thumb" >
                <div className="card-body"></div>
                <div className="card-body"><h5>Beisbol</h5></div>
                <div className="card-body"></div>
              </div>
            </a>
          </Col>
          <br />
          <Col sm="4">
            <a href="/soccerap" className="thumbnail-blue">
              <div className="card text-center thumb" >
                <div className="card-body"></div>
                <div className="card-body"><h5>Futbol rápido</h5></div>
                <div className="card-body"></div>
              </div>
            </a>
          </Col>
          <br />
          <Col sm="4">
            <a href="/soccer" className="thumbnail-blue">
              <div className="card text-center thumb" >
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
            <a href="/hockey" className="thumbnail-blue">
              <div className="card text-center thumb" >
                <div className="card-body"></div>
                <div className="card-body"><h5>Hockey sobre pasto</h5></div>
                <div className="card-body"></div>
              </div>
            </a>
          </Col>
          <br />
          <Col sm="4">
            <a href="/tenis" className="thumbnail-blue">
              <div className="card text-center thumb" >
                <div className="card-body"></div>
                <div className="card-body"><h5>Tenis</h5></div>
                <div className="card-body"></div>
              </div>
            </a>
          </Col>
          <br />
          <Col sm="4">
            <a href="/tocho" className="thumbnail-blue">
              <div className="card text-center thumb" >
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
            <a href="/voleibol" className="thumbnail-blue">
              <div className="card text-center thumb" >
                <div className="card-body"></div>
                <div className="card-body"><h5>Voleibol</h5></div>
                <div className="card-body"></div>
              </div>
            </a>
          </Col>
        </Row>
        <br /><br /><br /><br />

      </Container>
    );
  }

}

export default ChooseSportScreen;