import React from 'react';
import SubsectionList from "../List/SubsectionList";
import RestaurantListicon from './icons/RestaurantListIcon.6a75108a.png';

import  MTWIL from './img_logo/meeting/Our_Hotel_Section_Images2_1ckFKEE-MT-WILHELM.jpg';
import  MTVIC  from './img_logo/meeting/Our_Hotel_Section_Images2_unGoJbX-MT-VIC.jpg';
import  KOKO  from './img_logo/meeting/Our_Hotel_Section_Imagesballroom2_EPgBbAS-KOKO.jpg';
import  BOARDROOM from './img_logo/meeting/Our_Hotel_Section_Imagesmeeting4-boardroom.jpg';





const ourhotel_Meeting = [
    {
        id: 1,
        title: 'BOARDROOM',
        img_url: BOARDROOM,
        
    },
    {
        id: 2,
        title: 'MT WILHELM ROOMS',
        img_url: MTWIL,
       

    },
    {
        id: 3,
        title: 'MT VICTORIA ROOMS',
        img_url: MTVIC,
     

    },
    {
        id: 4,
        title: 'KOKODA BALLROOM',
        img_url: KOKO,
    

    }
]

const Meetings = () => {
    return (
        <div style={{width:'100%', height: '100%'}}>
          

        <SubsectionList
             numberOfEntries={4}
             data={ourhotel_Meeting}
             namespace={`/ourhotel/meeting`}
            
             imageKey="imageServiceType"
             isImageArray={true}
             
             sideButtons={[
                { title: "RETURN TO LIST", isLink: true, link: '/ourhotel', icon: RestaurantListicon }
             ]}
             sideTitle="OUR HOTEL"
             mainTitle="MEETINGS"
             evenDetailsProps={ourhotel_Meeting}              
             thumbnailStyle={{ width: "316px", height: "207px"}}
        >
            
        </SubsectionList> 

        </div> 
    )
}

export default  Meetings;