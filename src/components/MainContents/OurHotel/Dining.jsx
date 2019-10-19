import React from 'react';
import SubsectionList from "../List/SubsectionList";
import RestaurantListicon from './icons/RestaurantListIcon.6a75108a.png';
import  SilverLeaf  from './img_logo/dinings/R25-DININGLOGO_P-silver-leaf.jpg';
import  GreenHausRes  from './img_logo/dinings/R18-DININGLOGO_P-green_haus_res.jpg';
import  MonsoonLoungeBar from './img_logo/dinings/Our_Hotel_Section_Logo_Monsoon.jpg';
import  MezzBar from './img_logo/dinings/Our_Hotel_Section_Logo_Mezz.jpg';
import  ThePoolDeck from './img_logo/dinings/Our_Hotel_Section_Logo_PoolBar.jpg';
import  ExecitiveClubLounge  from './img_logo/dinings/Our_Hotel_Section_Logo_ExecClub_2L7k0hP.jpg' ;
import  RainforestCafe from './img_logo/dinings/R24-DININGLOGO_P-RINGFOREST.jpg';






const ourhotel_Dinings = [
    {
        id: 1,
        title: 'GREEN HAUS RESTAURANT',
        img_url: GreenHausRes,
    },
    {
        id: 2,
        title: 'RAIN FOREST CAFÉ',
        img_url: RainforestCafe,

    },
    {
        id: 3,
        title: 'MONSOON LOUNGE AND BAR',
        img_url: MonsoonLoungeBar,

    },
    {
        id: 4,
        title: 'THE POOL DECK',
        img_url: ThePoolDeck,

    },
    {
        id: 5,
        title: 'SILVER LEAF',
        img_url: SilverLeaf,

    },
    {
        id: 6,
        title: 'EXECUTIVE CLUB LOUNGE',
        img_url: ExecitiveClubLounge

    },
    {
        id: 7,
        title: 'MEZZ BAR',
        img_url: MezzBar,
    }
]

const Dining = () => {
    return (
        <div style={{width:'100%', height: '100%'}}>
          

        <SubsectionList
             numberOfEntries={4}
             data={ourhotel_Dinings}
             namespace={`/ourhotel/dining`}
            
             imageKey="imageServiceType"
             isImageArray={true}
             
             sideButtons={[
                 { title: "RETURN TO LIST", isLink: true, link:'/ourhotel', icon: RestaurantListicon }
             ]}
             sideTitle="OUR HOTEL"
             mainTitle="DINING"
             evenDetailsProps={ourhotel_Dinings}
             thumbnailStyle={{ width: "316px", height: "207px"}}
        >
            
        </SubsectionList> 

        </div> 
    )
}

export default  Dining;