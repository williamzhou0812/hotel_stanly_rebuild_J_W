import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const  essential_service_data = [
    {
        id: 1,
        title: 'BANKS',
        svgIcon: ''
    },
    {
        id: 2,
        title: 'MEDICL SERVICE',
        svgIcon: ''
    },
    {
        id: 3,
        title: 'SECURITY',
        svgIcon: ''
    },
    {
        id: 4,
        title: 'EMBASSIES & HIGH COMMISSIONS',
        svgIcon: ''
    }
]

const Essential = () => { 



    return ( 
        <Fragment> 
            <div> 
                    <h1>Left part of </h1>
            </div>
            <div>esential pages</div>
            {essential_service_data.map((essential_data, index) => {
                return (
                    <ul>
                        <Link to={`/service/esssential/bank/${essential_data.id}`}>
                            {essential_data.id} |  {essential_data.title} |  {essential_data.svgIcon}
                        </Link>
                        
                    </ul>
                )
            })}
        </Fragment>
      

    )
}

export default Essential;