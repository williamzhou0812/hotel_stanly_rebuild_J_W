import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

const  temp_transportDetails = [
    {
        id: 1,
        title: 'VEHICLE HIRE', 
        img_logo: ''
        
    },
    {
        id: 2,
        title: 'FREIGHT SERVICES',
        img_logo: ''
    },
    {
        id: 3,
        title: 'PASSEMGER AIRLINE SERVICES',
        img_logo: ''
    }
]

const Transport = () => {
    return (
        <Fragment>
            <h1>Herer is Transport pages</h1>

                        <ul>
                            <Link to={`/services/transport/vehicle-hire`}>
                               | {temp_transportDetails[0].title}
                            </Link>
                         </ul>
                   
        </Fragment>
    )
};


export default Transport;