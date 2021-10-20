import React from 'react'
import { useParams } from 'react-router'

const Details = () => {
    const { serviceId, name } = useParams();

    return (
        <div>
            <h2>This Is Details{serviceId}</h2>
            <h2>{name}</h2>
        </div>
    )
}

export default Details
