// Andres
import React from 'react';
import {
  Container, Row, Col
} from 'reactstrap';
import { Link } from 'react-router-dom';

class ChooseSportScreen extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.match.params.id);    

    this.state = {
      ejemploRuta: ''
    };
  }

  componentDidMount() {
    this.setState({ ejemploRuta: "/" + this.props.match.params.id + "/" })
  }

  render() {
    return (
      <Container>
        <br />
        <Row>
          <br />
          <Col sm="4">
            <Link to={this.state.ejemploRuta + 'ajedrez'} className="thumbnail-blue">
              <div className="card text-center thumb" >
                <div className="card-body"></div>
                <div className="card-body"><h5>Ajedréz</h5></div>
                <div className="card-body"></div>
              </div>
            </Link>
          </Col>
          <br />
          <Col sm="4">
            <Link to={this.state.ejemploRuta + 'atletismo'} className="thumbnail-blue">
              <div className="card text-center thumb" >
                <div className="card-body"></div>
                <div className="card-body"><h5>Atletismo</h5></div>
                <div className="card-body"></div>
              </div>
            </Link>
          </Col>
          <br />
          <Col sm="4">
            <Link to={this.state.ejemploRuta + 'basquetbol'} className="thumbnail-blue">
              <div className="card text-center thumb" >
                <div className="card-body"></div>
                <div className="card-body"><h5>Basquetbol</h5></div>
                <div className="card-body"></div>
              </div>
            </Link>
          </Col>
        </Row>
        <br />
        <Row>
          <br />
          <Col sm="4">
            <Link to={this.state.ejemploRuta + 'beisbol'} className="thumbnail-blue">
              <div className="card text-center thumb" >
                <div className="card-body"></div>
                <div className="card-body"><h5>Beisbol</h5></div>
                <div className="card-body"></div>
              </div>
            </Link>
          </Col>
          <br />
          <Col sm="4">
            <Link to={this.state.ejemploRuta + 'rapido'} className="thumbnail-blue">
              <div className="card text-center thumb" >
                <div className="card-body"></div>
                <div className="card-body"><h5>Futbol rápido</h5></div>
                <div className="card-body"></div>
              </div>
            </Link>
          </Col>
          <br />
          <Col sm="4">
            <Link to={this.state.ejemploRuta + 'soccer'} className="thumbnail-blue">
              <div className="card text-center thumb" >
                <div className="card-body"></div>
                <div className="card-body"><h5>Futbol Soccer</h5></div>
                <div className="card-body"></div>
              </div>
            </Link>
          </Col>
        </Row>
        <br />
        <Row>
          <br />
          <Col sm="4">
            <a href={this.state.ejemploRuta + 'hockey'} className="thumbnail-blue">
              <div className="card text-center thumb" >
                <div className="card-body"></div>
                <div className="card-body"><h5>Hockey sobre pasto</h5></div>
                <div className="card-body"></div>
              </div>
            </a>
          </Col>
          <br />
          <Col sm="4">
            <Link to={this.state.ejemploRuta + 'tenis'} className="thumbnail-blue">
              <div className="card text-center thumb" >
                <div className="card-body"></div>
                <div className="card-body"><h5>Tenis</h5></div>
                <div className="card-body"></div>
              </div>
            </Link>
          </Col>
          <br />
          <Col sm="4">
            <Link to={this.state.ejemploRuta + 'tocho'} className="thumbnail-blue">
              <div className="card text-center thumb" >
                <div className="card-body"></div>
                <div className="card-body"><h5>Tocho bandera</h5></div>
                <div className="card-body"></div>
              </div>
            </Link>
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm="4">
            <Link to={this.state.ejemploRuta + 'voleibol'} className="thumbnail-blue">
              <div className="card text-center thumb" >
                <div className="card-body"></div>
                <div className="card-body"><h5>Voleibol</h5></div>
                <div className="card-body"></div>
              </div>
            </Link>
          </Col>
        </Row>
        <br /><br /><br /><br />

      </Container>
    );
  }

}

export default ChooseSportScreen;