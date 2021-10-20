import React from 'react'
import { useParams } from 'react-router'
import { withRouter } from 'react-router';

const Details = () => {
    const { serviceId, serviceName } = useParams();



    return (
        <div>
            <h2>This Is Details{serviceId}</h2>
            <h2>{serviceName}</h2>
        </div>
    )
}

export default withRouter(Details);
