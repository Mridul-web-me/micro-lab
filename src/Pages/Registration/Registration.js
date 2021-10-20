import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const handleEmailChange = e => {
    console.log(e.target.value);
}

const Registration = () => {
    const handleRegistration = e => {
        console.log('registration');
        e.preventDefault();
    }
    return (
        <div>
            <Container>
                <Form onSubmit={handleRegistration}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={handleEmailChange} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Register
                    </Button> <br />
                    <br />

                    <Button className="btn btn-primary" >Sign In Google</Button>
                    <p>Do You have an Account <Link to="login">Login</Link></p>
                </Form>
            </Container>
        </div>
    )
}

export default Registration
