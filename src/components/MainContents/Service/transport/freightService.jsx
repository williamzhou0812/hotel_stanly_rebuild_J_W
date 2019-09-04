import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

const  temp_transportFrieightService = [
    {
        id: 1,
        title: 'IPI GROUP', 
        img_logo: '/imgs/service/frightservice/S2LOGOS13-ipi.jpg'
        
    },
    {
        id: 2,
        title: 'GFS LIMITED',
        img_logo: '/imgs/service/frightservice/S2LOGOS12-GFB.jpg'
    },
    {
        id: 3,
        title: 'DHL',
        img_logo: '/imgs/service/frightservice/S2LOGOS11-DHL.jpg'
    },
    {
        id: 3,
        title: 'PNG AIR FREIGHT',
        img_logo: '/imgs/service/frightservice/S2LOGOS14-png-Air-Freight.jpg'
    }
]



const FreightService = () => {
    return (
        <Fragment>
            <h1>Herer is Frieight Service List  pages</h1>

            <div>
                <ul>
                    { temp_transportFrieightService.map((frights, index) => 
                        (   <div>

                                <Link to={`/services/transport/freight-services/${index}`}><img src={frights.img_logo} alt=' ' style={{ width: '100px', height: '100px'}} /> | {frights.title} </Link>
                            </div> 
                        ) 
                    ) }
                </ul>
            </div>
                   
        </Fragment>
    )
};


export default FreightService;