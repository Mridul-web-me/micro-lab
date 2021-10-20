import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
// import useFirebase from '../../hooks/useFirebase';
import './Nav.css'

function Nav() {
    const { user, logOut } = useFirebase();
    return (
        <div className="menu sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">Micro<span>LAB</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse flex-grow-0" id="navbarNavDropdown">
                        <ul className="navbar-nav mx-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/testimonials">Testimonials</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/timetable">Time Table</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <span>{user.displayName}</span>
                                {
                                    user.email ?
                                        <Link
                                            className="nav-link login"
                                            onClick={logOut}
                                        >Logout</Link>
                                        :
                                        <Link className="nav-link login" to="/login">Login</Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;