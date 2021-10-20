import React from 'react'
import './About.css'
const About = () => {
    return (
        <div className="about">
            <div className="container">
                <h1 className="aboutHeading text-center">About Us</h1>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card">
                            <i className="fas fa-map"></i>
                            <div className="card-body">
                                <h5 className="card-title">Advanced medical technologies</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <i className="fas fa-rocket"></i>
                            <div className="card-body">
                                <h5 className="card-title">High professionalism of specialists</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <i className="fas fa-gift"></i>
                            <div className="card-body">
                                <h5 className="card-title">High professionalism of specialists</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <i className="fas fa-paper-plane"></i>
                            <div className="card-body">
                                <h5 className="card-title">High quality of medical services</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <i className="fas fa-glasses"></i>
                            <div className="card-body">
                                <h5 className="card-title">Optimal prices and quality</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <i className="fas fa-ribbon"></i>
                            <div className="card-body">
                                <h5 className="card-title">Optimal prices and quality</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
