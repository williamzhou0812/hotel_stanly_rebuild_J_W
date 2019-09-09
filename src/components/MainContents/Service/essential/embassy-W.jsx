import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


const temp_embassy_data = [
    {
        id: '1',
        title: 'SOLOMON ISLANDS HIGH COMMISSION',
        img_logo: '/imgs/embassies/S1-IMAGES16-solomon.jpg'
    },
    {
        id: '2',
        title: 'AUSTRALIAN HIGH COMMISSION',
        img_logo: '/imgs/embassies/S1-IMAGES12-australia.jpg'
    },
    {
        id: '3',
        title: 'EMBASSY OF THE PHILIPPINES',
        img_logo: '/imgs/embassies/S1-IMAGES10-phlipin.jpg'
    },
    {
        id: '4',
        title: 'BRITISH HIGH COMMISSION',
        img_logo: '/imgs/embassies/S1-IMAGES13-british-high.jpg'
    },
    {
        id: '5',
        title: 'CHINESE EMBASSY',
        img_logo: '/imgs/embassies/S1-IMAGES4-china.jpg'
    },
    {
        id: '6',
        title: 'FIJIAN HIGH COMMISSION',
        img_logo: '/imgs/embassies/S1-IMAGES14-fujian.jpg'
    },
    {
        id: '7',
        title: 'JAPANESE EMBASSY',
        img_logo: '/imgs/embassies/S1-IMAGES7-japan.jpg'
    },
    {
        id: '8',
        title: 'THAI HONORARY CONSULATE GENERAL',
        img_logo: '/imgs/embassies/S1-IMAGES9-thai.jpg'
    },
    {
        id: '9',
        title: 'INDONESIAN EMBASSY',
        img_logo: '/imgs/embassies/S1-IMAGES6-indoneshiya.jpg'
    },
    {
        id: '10',
        title: 'UNITED STATES OF AMERICA EMBASSY ',
        img_logo: '/imgs/embassies/S1-IMAGES8-united-state.jpg'
    },
    {
        id: '11',
        title: 'NEW ZEALAND HIGH COMMISSION',
        img_logo: '/imgs/embassies/S1-IMAGES15-new-zealand.jpg'
    },
    {
        id: '12',
        title: 'MALAYSIAN HIGH COMMISSION',
        img_logo: '/imgs/embassies/S1-IMAGES18-malalaysla.jpg'
    },
    {
        id: '13',
        title: 'FRENCH EMBASSY',
        img_logo: '/imgs/embassies/S1-IMAGES5-francaise.jpg'
    },
    {
        id: '14',
        title: 'SOUTH KOREAN EMBASSY',
        img_logo: '/imgs/embassies/S1-IMAGES11-south-korea.jpg'
    },
    {
        id: '15',
        title: 'HIGH COMMISSION OF INDIA',
        img_logo: '/imgs/embassies/S1-IMAGES17-india.jpg'
    }

]

const Embassy = () => {

    return (
        <div>
            <h1> Here is main Embressy list page</h1>

            {temp_embassy_data.map((embassyList, index) => {
                return (
                    <div>
                        <ul>
                            <Link to={`/services/essential/embassy/${index}`}>
                                <img src={embassyList.img_logo} alt='' /> | {embassyList.title} </Link>
                        </ul>
                    </div>
                )
            })}
        </div>
    );
};

export default Embassy;