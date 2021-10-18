import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Top.css'
// import useAuth from '../../hooks/useAuth'

const Top = () => {
    // const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <div className="top">
                <Container>
                    <Row>

                        <Col sm={4} className="schedule">
                            <i class="fas fa-clock"></i>
                            <div className="time">
                                <h6> Mon - Fri: 8:30AM - 10:30PM</h6>
                                <p>Sat-Sun: Closed</p>
                            </div>
                        </Col>
                        <Col sm={4} className="email">
                            <i class="fas fa-envelope"></i>
                            <p><b>Email:</b> microlab@web.com</p>
                        </Col>
                        <Col sm={4} className="button">
                            <button className="login">Login</button>
                            <button className="register">Register <i class="fas fa-sign-in-alt"></i></button>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div >
    )
}

export default Top;
