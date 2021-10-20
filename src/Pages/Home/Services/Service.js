import Button from '@restart/ui/esm/Button';
import React from 'react'
import { Card, Col } from 'react-bootstrap'
// import Home from '../Home/Home';
import './Service.css'

const Service = ({ services }) => {
    const { name, description, img } = services;

    return (
        <div className="service">
            <div className="container">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>
                                {name}
                            </Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <Button>Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        </div>
    )
}

export default Service
