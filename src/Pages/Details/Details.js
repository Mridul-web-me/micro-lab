import React from 'react'
import { useParams } from 'react-router'
import { withRouter } from 'react-router';


const Details = () => {
    const { serviceName } = useParams();



    return (
        <div>
            
            <h2>{serviceName}</h2>
        </div>
    )
}

export default withRouter(Details);
