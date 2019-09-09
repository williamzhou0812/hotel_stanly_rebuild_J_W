import React, {Fragment} from 'react';




const temp_security_datas = [
    {
        id: 1 ,
        title_img: '/imgs/service/security/S1-MAINLISTIMAGES_P4_0U5yiZD-detial-title-img.jpg',
        title: 'GUARD DOG SECURITY',
        img_logo: '/imgs/service/security/S1-IMAGES23-GuardDog.jpg' ,
        details: 'Guard Dog Security / NADZAB Airport Coach Service offers: • Executive personal protection/body guard • V.I.P. executive car available • Armed security personnel • Air-conditioning • Drop off to your home or hotel • Guaranteed pick up no matter how late your flight is delayed • Tours by arrangementLae oFfice: +675 475 1069',
        contact: {
            call: '+675 323 1811',
            web: 'www.guarddogpng.com',
            email: 'enquiries@gdsspng.com',
            location: 'PO Box 648 Port Moresby, NCD'
        }
        
    },
    {
        id: 2,
        title_img: '/imgs/service/security/S1-MAINLISTIMAGES_P4_0U5yiZD-detial-title-img.jpg',
        title: 'G4S SECURE SOLUTIONS PNG',
        img_logo: '/imgs/service/security/S1-IMAGES22-corps.jpg' ,
        details: 'G4S is an international security solutions organisation which offers a range of security services and systems.',
        contact: {
            call: '+675 305 8300',
            web: 'www.g4s.com.pg',
            email: '',
            location: 'ENQUIRIES@PG.G4S.COM'
        }
    },
    {
        id: 3 ,
        title_img: '/imgs/service/security/S1-MAINLISTIMAGES_P4_0U5yiZD-detial-title-img.jpg',
        title: 'THE CORPS SECURITY',
        img_logo: '/imgs/service/security/S1-IMAGES24-c4s.jpg' ,
        details: 'orps Security has been providing security solutions in PNG since 1996 to some of the most high profile entities in the country. Corps Security has successfully provided its services to a range of sectors including finance, construction, diplomatic, commercial, retail and industrial.',
        contact: {
            call: '+675 323 4473',
            web: 'www.the-corps.com.pg',
            email: '',
            location: ''
        }
    }
]


const SecurityDetails = (props) => {
const [id] = props.match.params.id;

const _id = parseInt(id);

const security_datas = temp_security_datas[_id];

    return (
        <Fragment>
            <div> Here is Security Details pages </div>
            <img src={security_datas.title_img} alt='' />
            <ul>
                <li><img src={security_datas.img_logo}  alt=''/>  | {security_datas.title}</li>
                <li>{security_datas.details}</li>
                <li>{security_datas.contact.call}</li>
                <li>{security_datas.contact.web}</li>
                <li>{security_datas.contact.email}</li>
                <li>{security_datas.contact.location}</li>
            </ul>
        </Fragment>
    )
};


export default SecurityDetails;