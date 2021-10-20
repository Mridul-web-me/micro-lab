import React from 'react'
import './Testimonials.css'
import doc1 from '../../../img/doctor/doc1.png';
import doc2 from '../../../img/doctor/doc2.png';
import doc3 from '../../../img/doctor/doc3.jpg';
import doc4 from '../../../img/doctor/doc4.png';
import doc5 from '../../../img/doctor/doc5.jpg';
import doc6 from '../../../img/doctor/doc6.jpg';


const Testimonials = () => {
    return (
        <div className="testimonials">
            <div className="container">
                <div className="testimonials-text">
                    <h1>Meet Our Doctor</h1>
                    <p>We have best doctor in our MicroLAB</p>
                </div>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card">
                            <img src={doc1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Dr. William A. Abdu, M.D, M.S.</h5>
                                <p class="card-text">Dr. Abdu is an Associate Professor of Orthopedics and of The Dartmouth Institute Medical Director at Dartmouth-Hitchcock Medical Center</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={doc2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Dr. Myles. B. Abbott, M.D.</h5>
                                <p class="card-text">Dr. Myles is also one of the best-known doctors of Pediatricians in the world. He graduated from the University of Miami Leonard M Miller School of Medicine in 1972. He treats the problems of growth and child development.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={doc3} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Dr. Fouad. M. Abbas, M.D.</h5>
                                <p class="card-text">Dr. Abbas is a well-known Gynecologist/Oncologist. His specialization field is Oncologist of Obstetrician and Gynecology. He is also considered to be one of the best doctors of Oncology in the world. The term Oncology is the study of cancer</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={doc4} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Dr. Khalid Abbed, M.D.</h5>
                                <p class="card-text">Dr. Khalid is a famous doctor of Neuro. He is an Associate Professor and Chief of the Spine Section in the Department of Neurosurgery. His area of clinical interest is in the treatment of spinal disorders.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={doc5} class="card-img-top" alt="..." />
                            <div class="card-body h-100">
                                <h5 class="card-title">Dr. Naresh Trehan</h5>
                                <p class="card-text">Dr. Naresh is a famous Indian cardiovascular and cardiothoracic surgeon. He was born on August 12, 1946, in Delhi, India. He obtained a medical degree from King George’s Medical College in Lucknow.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={doc6} class="card-img-top" alt="..." />
                            <div class="card-body h-100">
                                <h5 class="card-title">Dr. Corrie T.M Anderson, M.D.</h5>
                                <p class="card-text">Dr. Anderson is also one of the best doctors in Pediatric Anesthesiologist around the world. He received his A.B. with Honors in Biochemistry from Harvard University and Doctor of Medicine (M.D) from Stanford University School of Medicine in 1982. He can be truly crowned as “world best doctor”.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Testimonials;
