import React, { Fragment } from 'react';




// All tempm data will replace to data base and center context folder

const temp_data_mediclService  = [
    {
        id: 1,
        title_img: '/imgs/service/medical/S1-MAINLISTIMAGES_P3_sfm5zwD.jpg',
        title: 'EMS ASSIST (MEDIVAC SERVICE)',
        imgLogo: '/imgs/service/medical/S1-IMAGES20.jpg',
        details: 'EMS Assist delivers specialised pre-hospital care in a mobile environment. It has 3 core focus areas in its medical care program are: • Emergency care in the community • Emergency care during transportation • Emergency care on arrival at the health care facility',
        contact: {
            call: '+675 1567',
            web: 'www.emspng.com',
            email: 'emspng@emspng.com',
            location: 'Cnr Lawes & Le Hunt St, Ela Beach Road'
        }

    },
    {
        id: 2,
        title_img: '/imgs/service/medical/S1-MAINLISTIMAGES_P3_sfm5zwD.jpg',
        title: 'PNG CHIROPRACTIC',
        imgLogo: '/imgs/service/medical/S1-IMAGES21.jpg',
        details: 'Located in Port Moresby, PNG Chiropractic is there to help with any of your chiropractic needs.',
        contact: {
            call: '+675 325 8466',
            web: '',
            email: '',
            location: 'Ruta Pl, Port Moresby, Papua New Guinea'
        }
        
    },
    {
        id: 3,
        title_img: '/imgs/service/medical/S1-MAINLISTIMAGES_P3_sfm5zwD.jpg',
        title: 'MEDEVAC PACIFIC (MEDIVAC SERVICE)',
        imgLogo: '/imgs/service/medical/S1-IMAGES19.jpg',
        details: 'www.medevac.com.pg',
        contact: {
            call: ' +675 323 5626',
            web: 'www.medevac.com.pg',
            email: 'operations@medevac.com.au',
            location: 'P O Box 4997 Boroko, NCD.'
        }
    },

]



const MediclServiceDetails = (props) => {


    const [id] = props.match.params.id;
    console.log('med Details'+ id)

    const mediclDetail = temp_data_mediclService[parseInt(id)];

    return (
        <Fragment>
            <div>
                <h3>Here is MediclServiceDetails pages </h3>
            </div>
            <div>
                <img src={mediclDetail.title_img} />
                 <ul>
                     <li>  <img src={mediclDetail.imgLogo}  alt=''/> | {mediclDetail.title}</li>
                     <li>{mediclDetail.details }</li> 
                     <li>{mediclDetail.contact.call}</li>
                     <li>{mediclDetail.contact.web}</li>
                     <li>{mediclDetail.contact.email}</li>
                     <li>{mediclDetail.contact.location}</li>

                 </ul>
                
                
            </div>

        </Fragment>
    )
}


export  default MediclServiceDetails;