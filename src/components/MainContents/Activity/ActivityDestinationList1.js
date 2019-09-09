import React from 'react';
import SubsectionList from "../List/SubsectionList";
import { DECIMAL_RADIX, activityNamespace } from '../../../Constants';
import activityListIcon from '../../../components/MainContents/icons/ACTIVITIES_ICON.png';
import mapIcon from '../../../components/MainContents/icons/MapIcon.png';

class ActivityDestinationList1 extends React.Component {
    divingList = [
        {
            id: 1,
            title: 'PORT MORESBY',
            img_url: '/imgs/activity/ACTIVITIES-DIVING-GALLERY_P.jpg',
            mapActivity: './images/DIVING-Moresby-Map.png',
            overView: ' Susie’s Bommie, located just fifteen minutes from Port Moresby, is touted as world class because of its spectacular coral reef garden. With a seamount protruding 30 metres from the seabed, the site attracts a diverse range of marine life from the pygmy seahorse to pelagic varieties of fish. Other dives worth checking out are Pumpkin Patch, MV Pacific Gas, End Bommie and Eastern Fields.',
            associate: 'The Dive Centre',
            details: {
                Phone: '+675 7202 1200',
                email: 'info@divecentre.com.pg',
                website: 'www.divecentre.com.pg',

            }

        }, {
            id: 2,
            title: 'TUFI',
            img_url: '/imgs/activity/ACTIVITIES-DIVING-GALLERY_T.jpg',
            mapActivity: './images/PNG-Map-TUFI.png',
            associate: 'Tufi Dive Resort',
            details: {
                Phone: '+675 323 3462',
                email: 'reservations@tufiresort.com',
                website: 'www.tufidive.com',
            }

        },

    ]
    render() {
        return (
            <div
                className="section--bottom--animation"
                style={{ width: "100%", height: "100%", color: "white" }}
            >
                <SubsectionList
                    numberOfEntries={4}
                    data={this.divingList}
                    namespace={activityNamespace + "/1"}
                    //   namespace={namespace + "/id"}
                    imageKey="logo"
                    isImageArray={false}
                    sideButtons={[
                        { title: "ALL ACTIVITIES", icon: activityListIcon, isLink: true, link: activityNamespace },
                        { title: "DIVING MAP", icon: mapIcon, isMap: true }
                    ]}
                    sideTitle="DIVING"
                    mainTitle="DIVING AREAS"
                    maps={this.divingList.mapActivity}
                >

                </SubsectionList>

            </div >
        );
    }
};
export default ActivityDestinationList1;
