import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Service = ({ service }) => {
    const { name, description, img } = service;
    return (
        <div className="service">
       
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Link to={`/details/${name}`}>
                            <button className="btn btn-success">Details</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    )
}

export default Service;
