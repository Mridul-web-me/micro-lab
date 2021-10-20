
import GroupCard from './Card/GroupCard';
import Gallery from './Gallery/Gallery';
import doc1 from '../../img/doctor/doc1.png';
import doc2 from '../../img/doctor/doc2.png';
import doc3 from '../../img/doctor/doc3.jpg';
import doc4 from '../../img/doctor/doc4.png';
import Banner from './Banner/Banner';
import Services from './Services/Services';




const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <GroupCard></GroupCard>
            <div className="about">
                <div className="container">
                    <h1 className=" aboutHeading text-center">About Us</h1>

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
            <Gallery></Gallery>
            <div className="testimonials">
                <div className="container">
                    <div className="testimonials-text">
                        <h1>Meet Our Doctor</h1>
                        <p>We have best doctor in our MicroLAB</p>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <div className="card">
                                <img src={doc1} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Dr. William A. Abdu, M.D, M.S.</h5>
                                    <p className="card-text">Dr. Abdu is an Associate Professor of Orthopedics and of The Dartmouth Institute Medical Director at Dartmouth-Hitchcock Medical Center</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={doc2} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Dr. Myles. B. Abbott, M.D.</h5>
                                    <p className="card-text">Dr. Myles is also one of the best-known doctors of Pediatricians in the world. He graduated from the University of Miami Leonard M Miller School of Medicine in 1972. He treats the problems of growth and child development.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={doc3} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Dr. Fouad. M. Abbas, M.D.</h5>
                                    <p className="card-text">Dr. Abbas is a well-known Gynecologist/Oncologist. His specialization field is Oncologist of Obstetrician and Gynecology. He is also considered to be one of the best doctors of Oncology in the world. The term Oncology is the study of cancer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={doc4} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Dr. Khalid Abbed, M.D.</h5>
                                    <p className="card-text">Dr. Khalid is a famous doctor of Neuro. He is an Associate Professor and Chief of the Spine Section in the Department of Neurosurgery. His area of clinical interest is in the treatment of spinal disorders.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Services></Services>

        </div>




    )
}

export default Home;
