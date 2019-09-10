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
import { Link } from "react-router-dom";
import ActivityListIcon from "./icons/ActivityListIcon.png";
import "./Activity.scss";
import activityListIcon from '../../../components/MainContents/icons/ACTIVITIES_ICON.png';
import mapIcon from '../../../components/MainContents/icons/MapIcon.png';
import divingIcon from '../../../components/MainContents/icons/DIVING.svg';


class ActivityDestinationDetail1 extends React.Component {
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

    divingList = [
        {
            id: 1,
            title: 'PORT MORESBY',
            img_url: '/imgs/activity/ACTIVITIES-DIVING-GALLERY_P.jpg',
            mapImage: './images/DIVING-Moresby-Map.png',
            overView: ' Susie’s Bommie, located just fifteen minutes from Port Moresby, is touted as world class because of its spectacular coral reef garden. With a seamount protruding 30 metres from the seabed, the site attracts a diverse range of marine life from the pygmy seahorse to pelagic varieties of fish. Other dives worth checking out are Pumpkin Patch, MV Pacific Gas, End Bommie and Eastern Fields.',
            associate: 'The Dive Centre',
            details: {
                phone: '+675 7202 1200',
                email: 'info@divecentre.com.pg',
                website: 'www.divecentre.com.pg',

            }

        }, {
            id: 2,
            title: 'TUFI',
            img_url: '/imgs/activity/ACTIVITIES-DIVING-GALLERY_T.jpg',
            mapImage: './images/PNG-Map-TUFI.png',
            overView: 'Tufi\’s underwater world lights up in a kaleidoscope of colour, offering great visibility all year round to explore its fjords and WWII wrecks. For reef diving, divers can try Black Rocks, Cyclone Cay, Stewarts Reef and Shark Tip. Wreck diving offers the renowned Blackjack site.',
            associate: 'Tufi Dive Resort',
            details: {
                phone: '+675 323 3462',
                email: 'reservations@tufiresort.com',
                website: 'www.tufidive.com',
            }

        },

    ];

    render() {
        const divingDetail = this.divingList[parseInt(this.props.match.params.id)]
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
                    <Link
                        to="/activities/1"
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
                            <div className="menu-title">DIVING MAP</div>
                        </div>
                    </Link>
                    <Link
                        to="/activities/1"
                        style={{
                            textDecoration: "none"
                        }}

                    >
                        <div className="leftSide-menu--container">
                            <img
                                className="leftSide-menu--img"
                                src={divingIcon}
                                alt="Diving Icon"
                            />
                            <div className="menu-title">DIVING AREAS</div>
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
                            < img style={{ height: "100%", width: "100%" }} src={divingDetail.img_url} />

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
                            <span> DIVING</span>
                        </div>
                        <div className="activity-main-middle--subtitle">
                            <span>{divingDetail.title}</span></div>
                        <div className="activity-main-middle--description">
                            <p>{divingDetail.overView}</p>
                        </div>
                        <div className="activity-main-middle--moreInfo">
                            <span>FOR MORE INFORMATION CONTACT:</span></div>


                    </div>
                    <div className="activity-main-bottom">
                        <div className="activity-main-bottom--D1">
                            <div>
                                <span>{divingDetail.associate.toUpperCase()}</span>

                            </div>
                            <div>
                                <span>PH: {divingDetail.details.phone}</span>
                                <span>W: {divingDetail.details.website}</span>
                            </div>
                            <div>
                                <span>{divingDetail.details.email}</span>
                            </div>
                        </div>
                        {/* <div className="activity-main-bottom--D2">
                            <div>
                                <span>{divingDetail.details2.associate.toUpperCase()}</span>

                            </div>
                            <div>
                                <span>{divingDetail.details2.phone}</span>
                                <span>{divingDetail.details2.website}</span>
                            </div>
                            <div>
                                <span>{divingDetail.details2.email}</span>
                            </div>
                        </div> */}
                    </div>
                </div >
            </div>
        );
    }

}
export default ActivityDestinationDetail1;
