import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <h2 className="text-center text-white">Micro Lab</h2>

            <ul className="footer-item">
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
            </ul>
            <div className="social-icon text-center">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-linkedin-in"></i>
                <i className="fab fa-twitter"></i>
            </div>
            <p className="text-white text-center">© 2021 Microlab, All Rights Reserved</p>
        </div>
    )
}

export default Footer
