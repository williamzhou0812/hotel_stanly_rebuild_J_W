import React from 'react';
import SubsectionList from "../List/SubsectionList";

import StandTwin  from './img_logo/Our_Hotel_Section_Imagesstandard.jpg';
import DeluxeKing  from './img_logo/Our_Hotel_Section_Images_Pres_d1uSXpj.jpg';
import ExedutiveKing  from './img_logo/Our_Hotel_Section_Images_AuBae3aKing.jpg';
import CornerSuite from './img_logo/Our_Hotel_Section_Images-JUNIOR-SUITE.jpg';
import JuniorSuite from './img_logo/Our_Hotel_Section_Imagesstandard.jpg';
import Persidential from './img_logo/Our_Hotel_Section_Images_Pres_d1uSXpj.jpg';





const ourhotel_room_suite = [
    {
        id: 1,
        title: 'STANDARD TWIN',
        img_url: StandTwin
    },
    {
        id: 2,
        title: 'DELUXE KING',
        img_url: DeluxeKing
    },
    {
        id: 3,
        title: 'EXECUTIVE KING',
        img_url: ExedutiveKing
    },
    {
        id: 4,
        title: 'CORNER SUITE',
        img_url: CornerSuite
    },
    {
        id: 5,
        title: 'JUNIOR SUITE',
        img_url: JuniorSuite
    },
    {
        id: 6,
        title: 'PRESIDENTIAL SUITE',
        img_url: Persidential
    }
]

const RoomSuite = () => {
    return (
        <div style={{width:'100%', height: '100%'}}>
          

        <SubsectionList
             numberOfEntries={4}
             data={ourhotel_room_suite}
             to=''
            
             imageKey="imageServiceType"
             isImageArray={true}
             
             sideButtons={[
                 //{ title: "EVENTS", isLink: true, link: eventNamespace }
             ]}
             sideTitle="OUT HOTEL"
             mainTitle="ROOMS & SUITES"
             evenDetailsProps={ourhotel_room_suite}
        >
            
        </SubsectionList> 

        </div> 
    )
}

export default  RoomSuite;