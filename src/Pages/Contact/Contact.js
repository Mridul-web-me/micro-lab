import React from 'react'
import './Contact.css'

const Login = () => {
    return (
        <div className="contact">
            <div className=" container  ">
                <div className="row m-8">
                    <div className="col-md-8">
                        <form class="row g-3">
                            <h2 className="text-center">Get In Touch</h2>
                            <div class="col-md-6">
                                <label for="inputName4" class="form-label">Name</label>
                                <input type="name" class="form-control" id="inputName4" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputEmail4" class="form-label">Email</label>
                                <input type="email" class="form-control" id="inputEmail4" required />
                            </div>
                            <div class="col-12">
                                <label for="inputSubject" class="form-label">Subject</label>
                                <input type="text" class="form-control" id="inputSubject" />
                            </div>
                            <div class="col-12">
                                <label for="inputMessage" class="form-label">Message</label>
                                <textarea type="text" class="form-control" id="inputMessage"></textarea>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Send</button>
                            </div>
                        </form>
                    </div>
                    <div className="contact-text col-md-4">
                        <h2 className="text-center text-white m-4">Contact Us</h2>
                        <div className="contact-detail address">
                            <i class="fas fa-map-marker-alt"></i>
                            <p><b>Address: </b>Puraton Kataikhana Mor, Aruapara 7000, Kushtia</p>
                        </div>
                        <div className="contact-detail phone">
                            <i class="fas fa-phone-alt"></i>
                            <p><b>Phone: </b>+8801312-812128</p>
                        </div>
                        <div className="contact-detail email">
                            <i class="fas fa-paper-plane"></i>
                            <p><b>Email: </b>microlab@web.com</p>
                        </div>
                        <div className="contact-detail website">
                            <i class="fab fa-internet-explorer"></i>
                            <p><b>Website: </b><a href="https://www.microlab.com/">microlab</a></p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
