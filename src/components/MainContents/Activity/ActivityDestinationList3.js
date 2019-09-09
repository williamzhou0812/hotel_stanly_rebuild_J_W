import React from 'react';
import SubsectionList from "../List/SubsectionList";
import { DECIMAL_RADIX, activityNamespace } from '../../../Constants';
import activityListIcon from '../../../components/MainContents/icons/ACTIVITIES_ICON.png';
import mapIcon from '../../../components/MainContents/icons/MapIcon.png';

class ActivityDestinationList3 extends React.Component {
    trekkingList = [
        {
            id: 1,
            title: 'BOUGAINVILLE',
            img_url: '/imgs/activity/ACTIVITIES-TREKKING.jpg',
            mapImage: './images/DIVING-Moresby-Map.png',
            overView: 'The Rotokas-Numa Trail, located on Bougainville, is a demanding yet gratifying trek. Lesser known than the Kokoda Trail, the track stretches from the heart of the island to the west coast canvassing dense jungle, volcanic landscapes and lush waterways. It is recommended that trekkers take a local guide with them on their travels.',
            associate: 'Rotokas Ecotourism',
            details: {
                Phone: '+675 7078 0211',
                email: 'rotokas.ecotourism@gmail.com',
                website: 'rotokasecotourism.com',

            }
        }, {
            id: 2,
            title: 'MT.WILHELM',
            img_url: '/imgs/activity/ACTIVITIES-TREKKING.jpg',
            mapImage: './images/PNG-Map-TUFI.png',
            overView: 'For the intrepid trekker, Mt Wilhelm presents the perfect challenge hovering at 4,509 metres and offers spectacular views of the Highlands. Demarcating the point where three provinces converge (Western Highlands, Simbu and Madang), the hike is tailored for those with a moderate fitness level as it takes three to four days to reach the peak. ',
            associate: 'Escape Trekking Adventures',
            details: {
                Phone: '0422 372 273',
                email: 'shane@escapetrekkingadventures.com.au',
                website: 'www.escapetrekkingadventures.com.au',
            }

        },
        {
            id: 3,
            title: 'MT.HAGEN',
            img_url: '/imgs/activity/ACTIVITIES-TREKKING.jpg',
            mapImage: './images/PNG-Map-TUFI.png',
            overView: 'Mt Hagen is the third highest peak in PNG. Trekking to the summit will take experienced trekkers around three hours and less experienced hikers four hours. The panorama from the top is certainly well worth it. Discover exotic flora and fauna along the way.',
            associate: 'Lifetime Experience Tours',
            details: {
                Phone: '+675 542 3552',
                email: 'sales@letpng.com',
                website: 'www.letpng.com',
            }

        },

    ];

    render() {
        return (
            <div
                className="section--bottom--animation"
                style={{ width: "100%", height: "100%", color: "white" }}
            >
                <SubsectionList
                    numberOfEntries={4}
                    data={this.trekkingList}
                    namespace={activityNamespace + "/3"}
                    //   namespace={namespace + "/id"}
                    imageKey="logo"
                    isImageArray={false}
                    sideButtons={[
                        { title: "ALL ACTIVITIES", icon: activityListIcon, isLink: true, link: activityNamespace },
                        { title: "TREKKING MAP", icon: mapIcon, isMap: true }
                    ]}
                    sideTitle="TREKKING"
                    mainTitle="TREKKING"
                    maps={this.trekkingList.mapImage}
                >

                </SubsectionList>

            </div >
        );
    }
};
export default ActivityDestinationList3;
