import React from 'react';
//import { connect } from 'react-redux';
import {
    accomodationNamespace,
    destinationNamespace
} from '../../../Constants';
import SectionList from '../List/SectionList';
import DP1 from './images/D-DESTINATIONS-IMAGES_P.jpg';
import DP2 from './images/D-DESTINATIONS-IMAGES_P2.jpg';
import DP3 from './images/D-DESTINATIONS-IMAGES_P3.jpg';
import DP4 from './images/D-DESTINATIONS-IMAGES_P4.jpg';



class DestinationList extends React.Component {

    constructor(props) {
         super(props)
        setTimeout(() => {
            console.log(`im time outat index page`)
            window.location.replace("http://localhost:3000/");
        }, 40000)
    }
    destinations = [
        {
            id: 1,
            title: 'PORT MORESBY',
            state: 'PAPUA NEW GUNIEA',
            img_url: '/imgs/destination/D-DESTINATIONS-IMAGES_P.jpg',
            mapImage: '/imgs/destination/maps/Port-Moresby-Map-PORTMORESBY.png',
            CityMap: '/imgs/destination/maps/PNG-Map-PORTMORESBY.png',
            url: destinationNamespace,
            province: 'National Capital District',
            airport: ' Port Moresby International Airport (Jacksons)',
            description: 'Port Moresby was once a trading port for the Motuan people who sustained their existence by sailing to villages to trade pots for food and canoe logs. Whether you’re in the Port Moresby region for a day or longer, there’s a number of interesting attractions on offer. If you’re around in mid-September on Independence Day, Port Moresby plays host to the Hiri Moale Festival.'
        },
        {
            id: 2,
            title: 'LAE',
            state: 'PAPUA NEW GUNIEA',
            img_url: '/imgs/destination/D-DESTINATIONS-IMAGES_P2.jpg',
            mapImage: '/imgs/destination/maps/Port-Moresby-Map-PORTMORESBY.png',
            CityMap: '/imgs/destination/maps/PNG-Map-PORTMORESBY.png',
            url: destinationNamespace,
            province: 'Morobe',
            airport: ' Nadzab Airport',
            description: 'Lae is home to the famous Morobe Cultural Show and offers visitors plenty of things to see and do. Take a stroll through the recently restored Lae National Botanic Gardens and pay homage to the World War II soldiers buried at the Lae War Cemetery along Memorial Drive. See Agro the sixteen metre Salty Crocodile at the Rainforest Habitat and visit the Lae Market from Monday to Saturday.'
        },
        {
            id: 3,
            title: 'MADANG',
            state: 'PAPUA NEW GUNIEA',
            img_url: '/imgs/destination/D-DESTINATIONS-IMAGES_P3.jpg',
            mapImage: '/imgs/destination/maps/Port-Moresby-Map-PORTMORESBY.png',
            CityMap: '/imgs/destination/maps/PNG-Map-PORTMORESBY.png',
            url: destinationNamespace,
            province: 'Madang',
            airport: 'Madang Airport',
            description: 'Situated on the northern coast of the mainland, Madang is one of PNG’s top tourist destinations. The region is known for its sheer beauty and is perfect for planning a dive adventure. The pristine waters here are abundant in rainbow coral reefs, bommies and World War II wrecks with the oceanic currents luring both pelagic and reef fish varieties. Don’t miss the Madang Festival which occurs on the Queen’s Birthday weekend each year.'
        },
        {
            id: 4,
            title: 'MOUNT HAGEN',
            state: 'PAPUA NEW GUNIEA',
            img_url: '/imgs/destination/D-DESTINATIONS-IMAGES_p4-.jpg',
            mapImage: '/imgs/destination/maps/Port-Moresby-Map-PORTMORESBY.png',
            CityMap: '/imgs/destination/maps/PNG-Map-PORTMORESBY.png',
            url: destinationNamespace,
            province: 'Western Highlands',
            airport: 'Kagamuga Airport',
            description: 'Mount Hagen is the capital of the Western Highlands Province. The region is particularly ideal for growing Arabic coffee and offers a range of activities such as birdwatching, trekking and fishing. In August each year, Mount Hagen comes alive with the ever-popular Mount Hagen Show which showcases the rich heritage of the local culture. Be sure to check out the Hagen Market on Saturdays.'
        },
    ];

    images = [
        DP1,
        DP2,
        DP3,
        DP4
    ];
    render() {
        return (
            <div
                className="section--bottom--animation"
                style={{ width: '100%', height: '54vh' }}
            >
                <SectionList
                    data={this.destinations}
                    images={this.images}
                    //  data={this.props.accommodationList.accommodations}
                    //  images={this.props.accommodationList.images}
                    title="DESTINATIONS"
                    namespace={destinationNamespace}
                    backgroundPositionValue="top"
                />
            </div>
        );
    }
}
export default DestinationList;
    //     renderDestinationList() {
    //         const pathname = this.props.location.pathname;
    //         if (pathname.includes(accomodationNamespace)) {
    //             return (
    //                 <SectionList
    //                     data={this.accomodation}
    //                     //  data={this.props.accommodationList.accommodations}
    //                     //  images={this.props.accommodationList.images}
    //                     title="HOTELS"
    //                     namespace={accomodationNamespace}
    //                 />
    //             );
    //         } else {
    //             return (
    //                 <SectionList
    //                     data={this.destination}
    //                     //  data={this.props.destinationList.destinations}
    //                     // images={this.props.destinationList.images}
    //                     title="DESTINATIONS"
    //                     namespace={destinationNamespace}
    //                 />
    //             );
    //         }
    //     }
    //     render() {
    //         return (
    //             <div
    //                 className="section--bottom--animation"
    //                 style={{ width: '100%', height: '100%' }}
    //             >
    //                 {this.renderDestinationList()}
    //             </div>
    //         );
    //     }
    // }

    // const mapStateToProps = ({ destinationList, accommodationList }) => {
    //     return {
    //         destinationList,
    //         accommodationList
    //     };
    // };

    // export default connect(mapStateToProps)(DestinationList);

