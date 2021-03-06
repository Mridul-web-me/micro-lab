import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import useFirebase from '../../../hooks/useFirebase';
import './Nav.css'

function Nav() {
    const { user, logOut } = useAuth();
    return (
        <div className="menu sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container-fluid">
                    <Link className="navbar-brand text-primary" to="/home">Micro<span>LAB</span></Link>
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

                                {
                                    user?.email ?
                                        <Link
                                            className="nav-link login text-white"
                                            onClick={logOut} to="/"
                                        >Logout</Link>
                                        :
                                        <Link className="nav-link login text-white" to="/login">Login</Link>
                                }
                            </li>
                            <p className="m-2">{user.displayName}</p>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;