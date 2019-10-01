import React from 'react';
import SubsectionList from "../List/SubsectionList";
import RestaurantListicon from './icons/RestaurantListIcon.6a75108a.png';

import  ZENSPA from './img_logo/facilities/Our_Hotel_Section_Images6-zen-spa.jpg';
import  FITENESSCENTER  from './img_logo/facilities/Our_Hotel_Section_Imagesgym_e5xGEtm-fitness-center.jpg';
import  THEPOOL  from './img_logo/facilities/Our_Hotel_Section_Imagespool_JVQx0Ft-the-pool.jpg';
import  WOMEMARKING from './img_logo/facilities/Our_Hotel_Section_ImagesOwens_FkykBdv-women-marking .jpg';





const ourhotel_Facilities = [
    {
        id: 1,
        title: 'ZEN SPA',
        img_url: ZENSPA,
        
    },
    {
        id: 2,
        title: 'FITNESS CENTRE',
        img_url: FITENESSCENTER,
       

    },
    {
        id: 3,
        title: 'THE POOL',
        img_url: THEPOOL,
     

    },
    {
        id: 4,
        title: 'OWEN\'S MARKET',
        img_url: WOMEMARKING,
    

    }
]

const Facilities = () => {
    return (
        <div style={{width:'100%', height: '100%'}}>
          

        <SubsectionList
             numberOfEntries={4}
             data={ourhotel_Facilities}
             namespace={`/ourhotel/facilities`}
            
             imageKey="imageServiceType"
             isImageArray={true}
             
             sideButtons={[
                 { title: "RETURN TO LIST", isLink: true, link: '/ourhotel', icon: RestaurantListicon }
             ]}
             sideTitle="OUR HOTEL"
             mainTitle="FACILITIES"
             evenDetailsProps={ourhotel_Facilities}             
             thumbnailStyle={{ width: "316px", height: "207px"}}
        >
            
        </SubsectionList> 

        </div> 
    )
}

export default  Facilities;