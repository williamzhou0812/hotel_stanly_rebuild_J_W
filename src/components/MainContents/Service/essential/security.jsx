import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const temp_security_datas = [
    {
        id: 1 ,
        title: 'GUARD DOG SECURITY',
        img_logo: '/imgs/service/security/S1-IMAGES23-GuardDog.jpg'  
    },
    {
        id: 2,
        title: 'G4S SECURE SOLUTIONS PNG',
        img_logo: '/imgs/service/security/S1-IMAGES22-corps.jpg'  
    },
    {
        id: 3 ,
        title: 'THE CORPS SECURITY',
        img_logo: '/imgs/service/security/S1-IMAGES24-c4s.jpg'  
    }
]

const Security = () => {

    return (
        <Fragment>
            <div > 
                here is security  List pages 
            </div>
            <ul>
                {temp_security_datas.map((security, index) => {
                    return (
                        <div>
                            <Link to={`/services/essential/security/${index}`}><img src={security.img_logo} alt='' key={security.id}/> | {security.title} </Link>
                        </div>
                    )
                })}
            </ul>

        </Fragment>
    )

}


export default Security;