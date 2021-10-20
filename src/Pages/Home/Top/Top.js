import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Top.css'


const Top = () => {
    return (
        <div>
            <div className="top">
                <Container>
                    <Row>
                        <Col sm={4} className="schedule">
                            <i class="fas fa-clock"></i>
                            <div className="time">
                                <h6> Mon - Fri: 8:30AM - 10:30PM</h6>
                                <p>Sat-Sun: 10:00 - 17:00</p>
                            </div>
                        </Col>
                        <Col sm={4} className="email">
                            <i class="fas fa-envelope"></i>
                            <p><b>Email:</b> microlab@web.com</p>
                        </Col>
                        <Col sm={4} className="emergency">
                            <i class="fas fa-phone-alt"></i>
                            <p><b>Emergency: </b>1-800-400-7400</p>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div >
    )
}

export default Top;
