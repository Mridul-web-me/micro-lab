import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, handleRegistration } = useAuth();
    return (
        <div>
            <Container>
                <Form onSubmit={handleRegistration}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button> <br />
                    <br />
                    <h4 className="text-dark">New to MicroLAB?<Link to="register"> Create an Account</Link></h4>
                    <Link onClick={signInUsingGoogle} to='/login'><i className="fab fa-google"></i></Link>
                </Form>
            </Container>
        </div>
    )
}

export default Login;