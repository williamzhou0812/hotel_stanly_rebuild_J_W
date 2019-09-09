import React from "react";
//import "../List/MainSectionList.css";
import {
    DECIMAL_RADIX,
    diningNamespace,
    imageGallery,
    HeavyOrange,
    LightBlueButtonBackground,
    ExtraHeavyBlueGreen,
    LightOrange
} from "../../../Constants";
import SidebarMapModel from "./../Maps/SidebarMapModel";
import { Link } from "react-router-dom";
import ActivityListIcon from "./icons/ActivityListIcon.png";
import "./Activity.scss";
import activityListIcon from '../../../components/MainContents/icons/ACTIVITIES_ICON.png';
import mapIcon from '../../../components/MainContents/icons/MapIcon.png';
import divingIcon from '../../../components/MainContents/icons/DIVING.svg';
import MapModal from "../Maps/MapModal";

class ActivityDestinationDetail3 extends React.Component {
    constructor(props) {
        super(props);

    }

    styles = {
        horizontalVerticalCenter: {
            display: "flex",
            justifyContent: "center"
        },
        slider: {
            height: "100%",
            duration: 10000,
            transitionDuration: 500,
            infinite: "true",
            indicators: "true",
            arrows: "true",
            onChange: (oldIndex, newIndex) => {
                console.log(`slide transition from ${oldIndex} to ${newIndex}`);
            }
        }
    };

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
        const trekkingDetail = this.trekkingList[parseInt(this.props.match.params.id)]
        //   const { restaurant, status } = this.props;
        // const { divingList } = this.state;

        return (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    color: "white"
                }}
                className="section--bottom--animation"
            >
                <div
                    style={{
                        backgroundColor: HeavyOrange,
                        width: "14%",
                        boxShadow: "9.899px 0px 7px 0px rgba(0,0,0,0.6)",
                        zIndex: 1,
                        display: "flex",
                        flexDirection: "column"
                    }}
                >
                    <Link
                        style={{
                            textDecoration: "none"
                        }}
                        to="/activities"
                    >
                        <div className="leftSide-menu--container">
                            <img
                                className="leftSide-menu--img"
                                src={activityListIcon}
                                alt="All ACTIVITIES Icon"
                            />
                            <div className="menu-title">All ACTIVITIES</div>
                        </div>
                    </Link>

                    {/* <SidebarMapModel
                        item={this.surfingList}
                        mainTitle="SURFING"
                        maps={this.surfingList.mapImage}
                        icon="./icons/ActivityListIcon.png"
                    /> */}
                    <Link
                        // to="/activities/1"
                        style={{
                            textDecoration: "none"
                        }}

                    >
                        <div className="leftSide-menu--container">
                            <img
                                className="leftSide-menu--img"
                                src={mapIcon}
                                alt="DIVING MAP"
                            />
                            <div className="menu-title">SURFING MAP</div>
                        </div>
                    </Link>
                    <Link
                        to="/activities/3"
                        style={{
                            textDecoration: "none"
                        }}

                    >
                        <div className="leftSide-menu--container">
                            <img
                                className="leftSide-menu--img"
                                src={activityListIcon}
                                alt="TREKKING Icon"
                            />
                            <div className="menu-title">TREKKING AREAS</div>
                        </div>
                    </Link>
                    <div className="vertical-title">
                        <span style={{ transform: "rotate(-90deg)" }}>
                            ACTIVITIES
                        </span>
                    </div>
                </div>


                <div style={{ flex: 1, width: "86%", height: "54vh", backgroundColor: "rgb(5, 151, 165)" }}>

                    <div style={{ height: "40%" }}>
                        <div style={{ height: "100%", width: "100%" }} className="slide-container">
                            < img style={{ height: "100%", width: "100%" }} src={trekkingDetail.img_url} />

                        </div>
                    </div>

                    <div className="activity-main-middle" style={{ height: "40%" }}>

                        <div
                            className="activity-main-middle--title"
                            style={{
                                //  height: "15%",
                                //  backgroundColor: LightOrange,

                                ...this.styles.horizontalVerticalCenter

                            }}
                        >
                            <span>TREKKING</span>
                        </div>
                        <div className="activity-main-middle--subtitle">
                            <span>{trekkingDetail.title}</span></div>
                        <div className="activity-main-middle--description">
                            <p>{trekkingDetail.overView}</p>
                        </div>
                        <div className="activity-main-middle--moreInfo">
                            <span>FOR MORE INFORMATION CONTACT:</span></div>


                    </div>
                    <div className="activity-main-bottom">
                        <div className="activity-main-bottom--D1">
                            <div>
                                <span>{trekkingDetail.associate.toUpperCase()}</span>

                            </div>
                            <div>
                                <span>{trekkingDetail.details.phone}</span>
                                <span>{trekkingDetail.details.website}</span>
                            </div>
                            <div>
                                <span>{trekkingDetail.details.email}</span>
                            </div>
                        </div>

                    </div>
                </div >
            </div>
        );
    }

}
export default ActivityDestinationDetail3;
