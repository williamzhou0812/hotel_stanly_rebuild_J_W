import React, { Fragment } from 'react';


const  vehicleHireList = [
    {
        id: 1,
        img_title: '/imgs/service/S2C-Images_QTCDF7B.jpg',
        title: 'HERTZ (PORT MORESBY AIRPORT)',
        img_logo: '/imgs/transport /logoImg/S2LOGOS19-hertz.jpg',
        details: 'Enjoy a day trip to the beautiful Variata National Park or a week-long getaway to explore more of this wonderful nation. Whatever your transport needs, Hertz car rentals has you covered.',
        contact: {
            call:'+675 7363 0995',
            web: 'www.hertz.com.au/p/hire-a-car/papua-new-guinea',
            email: '',
            location: 'Section 37, Lot 10, Jackson Rd'
        }
    },
    {
        id: 2,
        img_title: '/imgs/service/S2C-Images_QTCDF7B.jpg',
        title: 'BUDGET RENT A CAR',
        img_logo: '/imgs/transport /logoImg/S2LOGOS16-budget.jpg',
        details: 'Regardless of whether you\'re in PNG for leisure or business, Budget has all your car rental needs covered. “New Cars ... Old Fashioned Service.“  ',
        contact: {
            call:'+675 323 6244',
            web: 'www.budget.com.pg',
            email: 'reservations@budget.com.pg',
            location: 'Port Moresby, Lae, Goroka, Mt. Hagen and Tabubil locations'
        }
    },
    {
        id: 3,
        img_title: '/imgs/service/S2C-Images_QTCDF7B.jpg',
        title: 'EUROPCAR',
        img_logo: '/imgs/transport /logoImg/S2LOGOS17-europcar.jpg',
        details: 'Europcar offers affordable and reliable car rentals for visitors to PNG. Explore more of the incredible landscapes and culture of this fascinating nation with Europcar.',
        contact: {
            call:'',
            web: 'www.europcar.com.au/places/papua-new-guinea',
            email: '',
            location: 'Port Moresby Jacksons Intl Airport, Arrival Hall, 7 Mile Jacksons Road, Port Moresby, Papua New Guinea.'
        }
    },
    {
        id: 4,
        img_title: '/imgs/service/S2C-Images_QTCDF7B.jpg',
        title: 'CITY CAB',
        img_logo: '/imgs/transport /logoImg/S2LOGOS22-cityCab.jpg',
        details: 'City Cab is Mt Hagen\'s sole taxi service.',
        contact: {
            call:'+675 690 4431',
            web: '',
            email: '',
            location: 'Mount Hagen'
        }
    },
    {
        id: 5,
        img_title: '/imgs/service/S2C-Images_QTCDF7B.jpg',
        title: 'TRAVELLERS RENT-A-CAR',
        img_logo: '/imgs/transport /logoImg/S2LOGOS21-travellers.jpg',
        details: 'Travellers Rent-a-Car is a locally owned car rental company offering transport services to both leisure and executive travellers. Delivering the best rentals for PNG\'s road and climate conditions.',
        contact: {
            call:'+675 422 3412',
            web: 'travellersrentacar.com',
            email: 'travellersrentacar@reservations.com',
            location: 'Madang, Lae & Port Moresby Locations'
        }
    },
    {
        id: 6,
        img_title: '/imgs/service/S2C-Images_QTCDF7B.jpg',
        title: 'FRANGIPANI',
        img_logo: '/imgs/transport /logoImg/S2LOGOS18-frang.jpg',
        details: 'Frangipani car hire provides a pleasurable and reliable experience when exploring the stunning and fascinating region of East New Britain. Customer service and satisfaction guaranteed.',
        contact: {
            call:'+675 982 9311',
            web: 'www.facebook.com/pg/Frangipani-Car-Hires',
            email: '',
            location: 'P.O Box 133 Kokopo'
        }
    },
    {
        id: 7,
        img_title: '/imgs/service/S2C-Images_QTCDF7B.jpg',
        title: 'AVIS - NATIONWIDE RENT-A-CAR',
        img_logo: '/imgs/transport /logoImg/S2LOGOS15-avis.jpg',
        details: 'Frangipani car hire provides a pleasurable and reliable experience when exploring the stunning and fascinating region of East New Britain. Customer service and satisfaction guaranteed.',
        contact: {
            call:'',
            web: '',
            email: '',
            location: ''
        }
    },
    {
        id: 8,
        img_title: '/imgs/service/S2C-Images_QTCDF7B.jpg',
        title: 'IZARHLAMBORN HIRE CARS',
        img_logo: '/imgs/transport /logoImg/S2LOGOS20-izarhlamborn.jpg',
        details: 'A rental car service located in Madang.',
        contact: {
            call:' +675 422 0433',
            web: '',
            email: '',
            location: 'PO Box 739 Madang, Modilon Rd, Madang'
        }
    }
 
]

const TransportDetails = (props) => {

    const id = props.match.params.id;

    const _id = parseInt(id);


    const vehicleHireListDetail = vehicleHireList[_id];

    console.log(_id);

    return ( 
        <Fragment>
            <img src={vehicleHireListDetail.img_title} alt=''  style={{width: '100%', height: '25vh'}} />
            <ul> 
             <li> <img src={vehicleHireListDetail.img_logo} alt=''  style={{width: '30vw', height: '25vh'}} /> </li>
              <li>{vehicleHireListDetail.id}</li>
              <li> { vehicleHireListDetail.title} </li>
              <li>{vehicleHireListDetail.details} </li>
              <li>{vehicleHireListDetail.contact.call} </li>
              <li>{vehicleHireListDetail.contact.web} </li>
              <li>{vehicleHireListDetail.contact.email} </li>
              <li>{vehicleHireListDetail.contact.location} </li>



            </ul>
            <button>SEE MAP</button>
        </Fragment>
    )
}


export default TransportDetails;