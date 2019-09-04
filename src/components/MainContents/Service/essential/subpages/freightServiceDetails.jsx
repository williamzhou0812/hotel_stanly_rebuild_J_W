import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

const  temp_transportFrieightServiceDetails = [
    {
        id: 1,
        img_title: '/imgs/service/frightservice/S2B-Image_pwci2MI-frigh-service-img-tiitle.jpg',
        title: 'IPI GROUP', 
        img_logo: '/imgs/service/frightservice/S2LOGOS13-ipi.jpg',
        details: 'With its many clients in mind, the iPi Group offers tailor-made logistics solutions for transport, warehousing and catering. Call today!',
        contact: {
            call: '+675 475 1400',
            web: ' www.ipigroup.com.pg',
            email: 'IPIGROUP@ipigroup.com.pg',
            location: 'PO Box 795, Lae, Morobe Province, Papua New Guine'
        }
        
    },
    {
        id: 2,
        title: 'GFS LIMITED',
        img_title: '/imgs/service/frightservice/S2B-Image_pwci2MI-frigh-service-img-tiitle.jpg',
        img_logo: '/imgs/service/frightservice/S2LOGOS12-GFB.jpg',
        detials: 'GFS offers transport and logistics services to the gas and petroleum industry in PNG. Professional, efficient and expedient.',
        contact: {
            call: '+675 320 1040',
            web: 'www.gfspng.com',
            email: '',
            location: 'P.O Box 2091 Port Moresby Kabua Cres Papua New Guinea'
        }
    },
    {
        id: 3,
        title: 'DHL',
        img_title: '/imgs/service/frightservice/S2B-Image_pwci2MI-frigh-service-img-tiitle.jpg',
        img_logo: '/imgs/service/frightservice/S2LOGOS11-DHL.jpg',
        detials:  'DHL offers domestic and international freight services as well as logistical and facilitation services for e-commerce businesses. Open Monday to Friday 8am-5pm, and Saturday 8am-12pm.',
        contact: {
            call: '+675 302 6555',
            web: 'www.dhl.com',
            email: '',
            location: 'Kitty Hawk Street Six Mile, N.C.D Port Moresby'
        }
    },
    {
        id: 3,
        title: 'PNG AIR FREIGHT',
        img_title: '/imgs/service/frightservice/S2B-Image_pwci2MI-frigh-service-img-tiitle.jpg',
        img_logo: '/imgs/service/frightservice/S2LOGOS14-png-Air-Freight.jpg',
        details: 'TNT Air Cargo offers PNG businesses express delivery services both domestically and internationally. Domestic routes include Port Moresby, Lae, Goroka, Mt Hagen, Tabubil, Lihir Island, Rabaul, Madang, Wewak, Kavieng, Buka, Alotau, Popondetta, Kimbe, Manus, Vanimo and Kiunga.',
        contact: {
            call: '+675 325 2411',
            web: 'www.tnt.kenmore.com.pg',
            email: 'sales@pngaf.com.pg',
            location: 'Head Office: Port Moresby Jackson’s Parade Saraga, PO Box 6645, Boroko'
        }
    }
]



const FreightServiceDetail = (props) => { 
    const id = props.match.params.id;

    const _id = parseInt(id);

    const frightServiceDetail = temp_transportFrieightServiceDetails[_id];

    return (
        <Fragment>
            <h1>Herer is Frieight Service Detials  pages</h1>
            <img src={frightServiceDetail.img_title} alt=''  style={{width:  '100%', height: '25vh'}} />
            <ul> 
                <li>
                    <img src={frightServiceDetail.img_logo} alt='' /> 
                    {frightServiceDetail.title}
                 </li>
                 <li>{frightServiceDetail.details}</li>
                 <li>{frightServiceDetail.contact.call}</li>
                 <li>{frightServiceDetail.contact.web}</li>
                 <li>{frightServiceDetail.contact.email}</li>
                 <li>{frightServiceDetail.contact.location}</li>
            </ul>
                   
        </Fragment>
    )
};


export default FreightServiceDetail;