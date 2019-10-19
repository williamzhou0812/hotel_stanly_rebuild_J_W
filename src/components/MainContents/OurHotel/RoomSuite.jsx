import React from 'react';
import SubsectionList from "../List/SubsectionList";
import RestaurantListicon from './icons/RestaurantListIcon.6a75108a.png';

import StandTwin  from './img_logo/Our_Hotel_Section_Imagesstandard.jpg';
import DeluxeKing  from './img_logo/Our_Hotel_Section_ImagesDeluxe.jpg';
import ExedutiveKing  from './img_logo/Our_Hotel_Section_Images_AuBae3aKing.jpg';
import JuniorSuite from './img_logo/Our_Hotel_Section_Images-JUNIOR-SUITE.jpg';
import Persidential from './img_logo/Our_Hotel_Section_Images_Pres_d1uSXpj.jpg';



const ourhotel_room_suite = [
    {
        id: 1,
        title: 'STANDARD TWIN',
        img_url: StandTwin,
        link: '/ourhotel/roomsuite/'
    },
    {
        id: 2,
        title: 'DELUXE KING',
        img_url: DeluxeKing,
        link: '/ourhotel/roomsuite/'

    },
    {
        id: 3,
        title: 'EXECUTIVE KING',
        img_url: ExedutiveKing,
        link: '/ourhotel/roomsuite/'

    },
    {
        id: 4,
        title: 'CORNER SUITE',
        img_url: '/imgs/ourHotel/H1-Rooms and Suites/H1D-Corner/Our Hotel Section_ImagesCorner.jpg',
        link: '/ourhotel/roomsuite/'

    },
    {
        id: 5,
        title: 'JUNIOR SUITE',
        img_url: JuniorSuite,
        link: '/ourhotel/roomsuite/'

    },
    {
        id: 6,
        title: 'PRESIDENTIAL SUITE',
        img_url: Persidential,
        link: '/ourhotel/roomsuite/'

    }
]

const RoomSuite = () => {
    return (
        <div style={{width:'100%', height: '100%', whiteSpace: 'nowarp'}}>
          
        
            <SubsectionList
                numberOfEntries={4}
                data={ourhotel_room_suite}
                namespace={`/ourhotel/roomsuite`}
                
                imageKey="imageServiceType"
                isImageArray={true}
                sideButtons={[
                    { title: 'RETURN TO LIST', isLink: true, link: '/ourhotel', icon: RestaurantListicon}
                ]}
                sideTitle="OUR HOTEL"
                mainTitle="ROOMS & SUITES"
                evenDetailsProps={ourhotel_room_suite}                
                thumbnailStyle={{ width: "316px", height: "207px"}}
            >
                
            </SubsectionList> 

        </div> 
    )
}

export default  RoomSuite;