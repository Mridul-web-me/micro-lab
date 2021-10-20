import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useAuth from '../../hooks/useAuth'



const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <Container>
                <Form >
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
                    <p>New to MicroLAB ?<Link to="register">Create an Account</Link></p>
                    <Button className="btn btn-primary" onClick={signInUsingGoogle}>Sign In Google</Button>
                </Form>
            </Container>
        </div>
    )
}

export default Login;