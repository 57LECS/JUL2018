import React from 'react';
import { Container, Row, Col, Table } from 'reactstrap';

class Footer extends React.Component {

    render() {
        return (
            <div style={{ backgroundColor: '#343a40' }}>
                <Container>
                    <br />
                    <Row>
                        <Col sm="2">
                            <img src="./images/bravos.png" alt="logo" style={{ height: '30px' }} />
                        </Col>
                        <Col sm="2">
                            <img src="./images/power.png" alt="logo" style={{ height: '30px' }} />
                        </Col>
                        <Col sm="2">
                            <img src="./images/comude.png" alt="logo" style={{ height: '30px' }} />
                        </Col>
                        <Col sm="2">
                            <img src="./images/electrolit.png" alt="logo" style={{ height: '30px' }} />
                        </Col>
                        <Col sm="2">
                            <img src="./images/ice.png" alt="logo" style={{ height: '30px' }} />
                        </Col>
                        <Col sm="2">
                            <img src="./images/molten.png" alt="logo" style={{ height: '30px' }} />
                        </Col>
                    </Row>
                    <br />
                </Container>
            </div>
        );
    }

}

export default Footer;