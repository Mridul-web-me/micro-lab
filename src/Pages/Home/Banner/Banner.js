import React from 'react'
import './Banner.css'
import { Carousel } from 'react-bootstrap'
import banner1 from '../../../img/banner/banner1.jpg'
import banner2 from '../../../img/banner/banner2.jpg'
import banner3 from '../../../img/banner/banner3.jpg'

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>Welcome to <b>MicroLab</b></h1>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-70"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1>Dedication <b>and Commitment</b></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>We have the <b>Finest Physician</b></h1>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Banner
