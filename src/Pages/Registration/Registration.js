import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
import './Registration.css'

const Registration = () => {
const {handlePasswordChange, handleEmailChange, handleRegistration, signInUsingGoogle, error} = useAuth();

    return (
        <div>
            <Container>
                <Form onSubmit={handleRegistration}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={handleEmailChange} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <p className="text-danger">{error}</p>
                    
                    <Link className="nav-link login" to="/register">Register</Link>
                    <br />
                        <Link onClick={signInUsingGoogle} to="/register"><i class="fab fa-google"></i></Link>
                    {/* <Button className="btn btn-primary" >Sign In Google</Button> */}
                    <p>Do You have an Account <Link to="/login">Login</Link></p>
                </Form>
            </Container>
        </div>
    )
}

export default Registration
