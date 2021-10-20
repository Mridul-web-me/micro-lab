import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'

const TimeTable = () => {
    return (
        <div className="container">
            <CardGroup>
                <Card className="card1">
                    <Card.Body>
                        <i className="fas fa-phone-alt"></i>
                        <Card.Title>Emergency Causes</Card.Title>
                        <Card.Text>
                            <p>This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.</p>
                            <h4>1-800-400-7400</h4>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="card2">
                    <Card.Body>
                        <i className="fas fa-calendar-alt"></i>
                        <Card.Title>Doctors Time Table</Card.Title>
                        <Card.Text>
                            <p> This card has supporting text below as a natural lead-in to additional
                                content.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="card3">
                    <Card.Body>
                        <i className="far fa-clock"></i>
                        <Card.Title>Opening Hours</Card.Title>
                        <Card.Text>
                            <div className="table">
                                <div className="dayTime">
                                    <p>Monday - Friday</p>
                                    <p>8.00 - 17.00</p>
                                </div>
                                <div className="dayTime">
                                    <p>Saturday</p>
                                    <p>9.30 - 15.30</p>
                                </div>
                                <div className="dayTime">
                                    <p>Sunday</p>
                                    <p>9.00 - 15.00</p>
                                </div>

                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    )
}

export default TimeTable
