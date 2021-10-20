import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import Details from '../../Details/Details';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('../../../../fakedata.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div className="service">
        
            <div className="container">
 <h1 className="text-center my-2">This Is Service</h1>
                <Row xs={1} md={3} className="g-4 my-2">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)

                    }
                    <Details></Details>



                </Row>

            </div>
        </div>
    )
}

export default Services
