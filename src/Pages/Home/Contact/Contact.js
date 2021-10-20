import React from 'react'
import './Contact.css'

const Login = () => {
    return (
        <div className="contact">
            <div className=" container  ">
                <div className="row m-8">
                    <div className="col-md-8">
                        <form className="row g-3">
                            <h2 className="text-center">Get In Touch</h2>
                            <div className="col-md-6">
                                <label for="inputName4" className="form-label">Name</label>
                                <input type="name" className="form-control" id="inputName4" />
                            </div>
                            <div className="col-md-6">
                                <label for="inputEmail4" className="form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" required />
                            </div>
                            <div className="col-12">
                                <label for="inputSubject" className="form-label">Subject</label>
                                <input type="text" className="form-control" id="inputSubject" />
                            </div>
                            <div className="col-12">
                                <label for="inputMessage" className="form-label">Message</label>
                                <textarea type="text" className="form-control" id="inputMessage"></textarea>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary">Send</button>
                            </div>
                        </form>
                    </div>
                    <div className="contact-text col-md-4">
                        <h2 className="text-center text-white m-4">Contact Us</h2>
                        <div className="contact-detail address">
                            <i className="fas fa-map-marker-alt"></i>
                            <p><b>Address: </b>Puraton Kataikhana Mor, Aruapara 7000, Kushtia</p>
                        </div>
                        <div className="contact-detail phone">
                            <i className="fas fa-phone-alt"></i>
                            <p><b>Phone: </b>+8801312-812128</p>
                        </div>
                        <div className="contact-detail email">
                            <i className="fas fa-paper-plane"></i>
                            <p><b>Email: </b>microlab@web.com</p>
                        </div>
                        <div className="contact-detail website">
                            <i className="fab fa-internet-explorer"></i>
                            <p><b>Website: </b><a href="https://www.microlab.com/">microlab</a></p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
