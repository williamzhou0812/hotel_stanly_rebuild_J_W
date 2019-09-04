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
                            <div>
                                <Link to={`/services/transport/vehicle-hire`}>
                                | {temp_transportDetails[0].title}
                                </Link>
                            </div>
                            <div> 
                               <Link to={`/services/transport/freight-services`}> 
                                | {temp_transportDetails[1].title}
                                </Link>
                            </div>
                            <div>
                                <Link to={`/services/transport/passenger-airline-serviece`} >
                                    | {temp_transportDetails[2].title}
                                </Link>
                            </div>
                    
                         </ul>
                   
        </Fragment>
    )
};


export default Transport;