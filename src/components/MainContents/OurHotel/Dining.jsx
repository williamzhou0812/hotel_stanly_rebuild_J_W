import React from 'react';
import SubsectionList from "../List/SubsectionList";
import RestaurantListicon from './icons/RestaurantListIcon.6a75108a.png';
import { Link } from "react-router-dom";
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
        title: 'SILVER LEAF',
        img_url: SilverLeaf,
    },
    {
        id: 2,
        title: 'GREEN HAUS RESTAURANT',
        img_url: GreenHausRes,

    },
    {
        id: 3,
        title: 'MONSOON LOUNGE & BAR',
        img_url: MonsoonLoungeBar,

    },
    {
        id: 4,
        title: 'MEZZ BAR',
        img_url: MezzBar,

    },
    {
        id: 5,
        title: 'THE POOL DECK',
        img_url: ThePoolDeck,

    },
    {
        id: 6,
        title: 'EXECITIVE CLUB LOUNGE',
        img_url: ExecitiveClubLounge

    },
    {
        id: 7,
        title: 'RAINFOREST CAFE',
        img_url: RainforestCafe,
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
             mainTitle="DINGING"
             evenDetailsProps={ourhotel_Dinings}
        >
            
        </SubsectionList> 

        </div> 
    )
}

export default  Dining;