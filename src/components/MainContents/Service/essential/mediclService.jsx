import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const temp_data_mediclService  = [
    {
        id: 1,
        title: 'EMS ASSIST (MEDIVAC SERVICE)',
        imgLogo: '/imgs/service/medical/S1-IMAGES20.jpg',

    },
    {
        id: 2,
        title: 'PNG CHIROPRACTIC',
        imgLogo: '/imgs/service/medical/S1-IMAGES21.jpg',
        
    },
    {
        id: 3,
        title: 'MEDEVAC PACIFIC (MEDIVAC SERVICE)',
        imgLogo: '/imgs/service/medical/S1-IMAGES19.jpg',
    },

]

const MediclService = () => {

    return (
        <Fragment>
            <div>Medicl Servic list page</div> 

            {temp_data_mediclService.map((mediclData, index) => {
                return  (
                    <div> 
                        <ul>
                            <Link to={`/services/essential/medicl/${index}`}>{mediclData.id} | <img src={mediclData.imgLogo}  alt='' /> | {mediclData.title} |  </Link>
                        </ul>
                    </div>
                )
            })}

        </Fragment>


    )
};

export default MediclService;