import React, {Fragment} from 'react';



const  vehicleHireList = [
    {
        id: 1,
        title: 'HERTZ (PORT MORESBY AIRPORT)',
        img_logo: '/imgs/transport /logoImg/S2LOGOS19-hertz.jpg'
    },
    {
        id: 2,
        title: 'BUDGET RENT A CAR',
        img_logo: '/imgs/transport /logoImg/S2LOGOS16-budget.jpg'
    },
    {
        id: 3,
        title: 'EUROPCAR',
        img_logo: '/imgs/transport /logoImg/S2LOGOS17-europcar.jpg'
    },
    {
        id: 4,
        title: 'CITY CAB',
        img_logo: '/imgs/transport /logoImg/S2LOGOS22-cityCab.jpg'
    },
    {
        id: 5,
        title: 'TRAVELLERS RENT-A-CAR',
        img_logo: '/imgs/transport /logoImg/S2LOGOS21-travellers.jpg'
    },
    {
        id: 6,
        title: 'FRANGIPANI',
        img_logo: '/imgs/transport /logoImg/S2LOGOS18-frang.jpg'
    },
    {
        id: 7,
        title: 'AVIS - NATIONWIDE RENT-A-CAR',
        img_logo: '/imgs/transport /logoImg/S2LOGOS15-avis.jpg'
    },
    {
        id: 8,
        title: 'IZARHLAMBORN HIRE CARS',
        img_logo: '/imgs/transport /logoImg/S2LOGOS20-izarhlamborn.jpg'
    }
 
]

const VehicleHire = () => {
    return (
        <Fragment>
            <div>
               Here is VehicleHire detials pages
            </div>

            <ul>
                {vehicleHireList.map((vhList, index) => {
                    return (
                        <li> <img src={vhList.img_logo}  alt='' /> | {vhList.title} </li>
                    )
                })}
            
            </ul> 
        </Fragment>
   
    )
}

export default VehicleHire;