import React from "react";
//import "../List/MainSectionList.css";
import {
    DECIMAL_RADIX,
    diningNamespace,
    imageGallery,
    HeavyOrange,
    LightBlueButtonBackground,
    ExtraHeavyBlueGreen,
    LightOrange,
    activityNamespace
} from "../../../Constants";
import { Link } from "react-router-dom";
import ActivityListIcon from "./icons/ActivityListIcon.png";
import "./Activity.scss";
import activityListIcon from "../../../components/MainContents/icons/ACTIVITIES_ICON.png";
import mapIcon from "../../../components/MainContents/icons/MapIcon.png";
import divingIcon from "../../../components/MainContents/icons/DIVING.svg";

class ActivityDestinationDetail1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeId: 0,
            L: this.divingList.length - 1,
            count: 0
        };
    }

    styles = {
        horizontalVerticalCenter: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2%",
            textDecoration: "none",
            color: "white",
            textAlign: "center"
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

    getNextLink() {
        var count = parseInt(`${this.props.match.params.id}`);
        count = count + 1;

        if (count > this.state.L) {
            // count = 0;
            return `${activityNamespace + "/1"}/0`;
        } else {
            return `${activityNamespace + "/1"}/${count}`;
        }
    }

    getPrevLink() {
        var count = parseInt(`${this.props.match.params.id}`);
        count = count - 1;

        if (count < 1) {
            return `${activityNamespace + "/1"}/${this.state.L}`;
        } else {
            return `${activityNamespace + "/1"}/${count}`;
        }
    }

    divingList = [
        {
            id: 1,
            title: "PORT MORESBY",
            img_url: "/imgs/activity/ACTIVITIES-DIVING-GALLERY_P.jpg",
            mapActivity: "./images/maps/activities/A1-map.png",
            overView:
                " Susie’s Bommie, located just fifteen minutes from Port Moresby, is touted as world class because of its spectacular coral reef garden. With a seamount protruding 30 metres from the seabed, the site attracts a diverse range of marine life from the pygmy seahorse to pelagic varieties of fish. Other dives worth checking out are Pumpkin Patch, MV Pacific Gas, End Bommie and Eastern Fields.",

            details: [
                {
                    associate: "The Dive Centre",
                    phone: "+675 7202 1200",
                    email: "info@divecentre.com.pg",
                    website: "www.divecentre.com.pg"
                }
            ]
        },
        {
            id: 2,
            title: "MADANG",
            img_url: "/imgs/activity/ACTIVITIES-DIVING-GALLERY_T.jpg",
            mapActivity: "./images/maps/activities/A1-map.png",
            overView:
                "Madang serves up an exciting dive at Planet Rock which features a volcanic seamount and a number of amazing sea creatures such as the renowned clown fish, hammerhead sharks and pelagic species. Magic Passage is the most popular site for divers to the region. The combination of fish such as rainbowfish, bannerfish and silvery jacks provides a cavalcade of stunning colour along with the hard and soft corals.",

            details: [
                {
                    associate: "Jais Aben Resort",
                    phone: "+675 423 3111",
                    email: "jaisaben@global.net.pg",
                    website: "www.jaisabenresort.com"
                },
                {
                    associate: "Niugini Dive Adventures",
                    phone: "+675 422 2655",
                    email: "nda@mtspng.com",
                    website: "www.niuginidive.com"
                }
            ]
        },

        {
            id: 3,
            title: "TUFI",
            img_url: "/imgs/activity/ACTIVITIES-DIVING-GALLERY_P2.jpg",
            mapActivity: "./images/maps/activities/A1-map.png",
            overView:
                "Tufi’s underwater world lights up in a kaleidoscope of colour, offering great visibility all year round to explore its fjords and WWII wrecks. For reef diving, divers can try Black Rocks, Cyclone Cay, Stewarts Reef and Shark Tip. Wreck diving offers the renowned Blackjack site.",

            details: [
                {
                    associate: "Tufi Dive Resort",
                    phone: "+675 323 3462",
                    email: "reservations@tufiresort.com",
                    website: "www.tufidive.com"
                }
            ]
        },
        {
            id: 4,
            title: " MILNE BAY",
            img_url: "/imgs/activity/ACTIVITIES-DIVING-GALLERY_P3.jpg",
            mapActivity: "./images/maps/activities/A1-map.png",
            overView:
                " Like most sites in PNG, Tania’s Reef in Milnes Bay is flush with colourful",

            details: [
                {
                    associate: "Doini Island Plantation Resort",
                    phone: "+61 434 060 530",
                    email: "teresa.levy@rocketmail.com",
                    website: "www.doiniisland.com"
                },
                {
                    associate: "Tawali Resort",
                    phone: "+675 7364 0607",
                    email: "reservations@tawali.com",
                    website: "www.tawali.com"
                }
            ]
        },
        {
            id: 5,
            title: " WEST NEW BRITAIN - Kimbe Bay",
            img_url: "/imgs/activity/ACTIVITIES-DIVING-GALLERY_P4.jpg",
            mapActivity: "./images/maps/activities/A1-map.png",
            overView:
                "Zero is the most accessible wreck in West New Britain. In WWII, the aircraft ran out of fuel and was force-landed close to shore so that the pilot could alight safely. The wreck stayed hidden for almost 57 years and was eventually discovered by a spear fisherman. Other popular sites include South Emma, Fathers Reef and Susan’s  Reef which offer reef diving among brightly coloured coral, red whip gorgonians and other amazing sea creatures. ",

            details: [
                {
                    associate: "Walindi Resort",
                    phone: "+675 7234 8460",
                    email: "resort@walindifebrina.com",
                    website: "www.walindifebrina.com"
                },
                {
                    associate: "Liamo Reef Resort",
                    phone: "+675  983 4368",
                    email: "reservations@liamoreefresort.com",
                    website: "www.liamoreefresort.com"
                }
            ]
        },
        {
            id: 6,
            title: " EAST NEW BRITAIN - KOKOPO",
            img_url: "/imgs/activity/ACTIVITIES-DIVING-GALLERY_P5.jpg",
            mapActivity: "./images/maps/activities/A1-map.png",
            overView:
                "The WWII wrecks that litter the reefs surrounding East New Britain offer excellent visibility all year round. Simpson Harbour is excellent for war wrecks and the Beehives also offer great diving. The most accessible wreck  in the region is Zero which lies within proximity to Walindi. South Emma, Fathers Reef and Susans Reef all offer their own unique reef diving among brightly coloured coral, red whip gorgonians and other amazing sea creatures.",

            details: [
                {
                    associate: "Rabaul-Kokopo Dive",
                    phone: "+675 7947 4892",
                    email: "admin@rabaul-kokopodive.com",
                    website: "rabaul-kokopodive.com"
                },
                {
                    associate: "Kokopo Beach Bungalow Resort",
                    phone: "+675 982 8788",
                    email: "reservations@kbb.com.pg",
                    website: "www.kbb.com.pg"
                },
                {
                    associate: "Rapopo Plantation Resort",
                    phone: "+675 982 9944",
                    email: "reservations@rapopo.com",
                    website: "www.rapopo.com"
                }
            ]
        },
        {
            id: 7,
            title: "NEW IRELAND - KAVIENG",
            img_url: "/imgs/activity/ACTIVITIES-DIVING-GALLERY_P6.jpg",
            mapActivity: "./images/maps/activities/A1-map.png",
            overView:
                "Diving spots are plentiful in the region, with WWII wrecks dotted throughout Kavieng Harbour. Near Nusa Island lies the famed Echuca Patch and Der Yang wreck. Between the north of New Ireland and New Hanover, the region is flush with superb dive sites. Albatross Passage, New Ireland’s most renowned dive site, features stunning marine life.",

            details: [
                {
                    associate: "Lissenung Resort",
                    phone: "+675 7234 5834",
                    email: "info@lissenung.com",
                    website: "www.lissenung.com"
                },
                {
                    associate: "Nusa Island Retreat",
                    phone: "+675 7231 8302",
                    email: "info@nusaislandretreat.com",
                    website: "www.nusaislandretreat.com"
                },
                {
                    associate: "Niugini Dive Adventures",
                    phone: "+675 422 2655",
                    email: "nda@madangresort.com",
                    website: "www.niuginidive.com"
                }
            ]
        }
    ];

    render() {
        const divingDetail = this.divingList[
            parseInt(this.props.match.params.id)
        ];
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

                <div
                    style={{
                        flex: 1,
                        width: "86%",
                        height: "54vh",
                        backgroundColor: "rgb(5, 151, 165)"
                    }}
                >
                    <div style={{ height: "40%" }}>
                        <div
                            style={{ height: "100%", width: "100%" }}
                            className="slide-container"
                        >
                            <img
                                style={{ height: "100%", width: "100%" }}
                                src={divingDetail.img_url}
                            />
                        </div>
                    </div>

                    <div
                        className="activity-main-middle"
                        style={{ height: "40%" }}
                    >
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
                        <div
                            style={{
                                height: "13%",
                                width: "100%",
                                display: "flex"
                            }}
                        >
                            <Link
                                to={this.getPrevLink()}
                                className="event-nextPre-btn"
                                style={{
                                    ...this.styles.horizontalVerticalCenter
                                }}
                            >
                                <span>PREVIOUS EVENT</span>
                            </Link>
                            <div
                                style={{
                                    flexBasis: "72%",
                                    textAlign: "center"
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: "2.8vw",
                                        fontWeight: "bold",
                                        margin: "0 auto"
                                    }}
                                >
                                    {divingDetail.title}
                                </span>
                            </div>
                            <Link
                                to={this.getNextLink()}
                                className="event-nextPre-btn"
                                style={{
                                    ...this.styles.horizontalVerticalCenter
                                }}
                            >
                                <span>NEXT EVENT</span>
                            </Link>
                        </div>

                        <div className="activity-main-middle--description">
                            <p>{divingDetail.overView}</p>
                        </div>
                        <div className="activity-main-middle--moreInfo">
                            <span>FOR MORE INFORMATION CONTACT:</span>
                        </div>
                    </div>
                    <div className="activity-main-bottom">
                        {divingDetail.details.length === 1 && (
                            <div className="activity-main-bottom--D1">
                                <div>
                                    <span>
                                        {divingDetail.details[0].associate.toUpperCase()}
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        PH: {divingDetail.details[0].phone}
                                    </span>
                                    <span>
                                        W: {divingDetail.details[0].website}
                                    </span>
                                </div>
                                <div>
                                    <span>{divingDetail.details[0].email}</span>
                                </div>
                            </div>
                        )}
                        {divingDetail.details.length === 2 && (
                            <div style={{ height: "100%" }}>
                                <div className="activity-main-bottom--D2">
                                    <div>
                                        <span>
                                            {divingDetail.details[0].associate.toUpperCase()}
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            PH: {divingDetail.details[0].phone}
                                        </span>
                                        <span>
                                            W: {divingDetail.details[0].website}
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            {divingDetail.details[0].email}
                                        </span>
                                    </div>
                                </div>
                                <div className="activity-main-bottom--D2">
                                    <div>
                                        <span>
                                            {divingDetail.details[1].associate.toUpperCase()}
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            PH: {divingDetail.details[1].phone}
                                        </span>
                                        <span>
                                            W: {divingDetail.details[1].website}
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            {divingDetail.details[1].email}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}
                        {divingDetail.details.length === 3 && (
                            <div style={{ height: "100%" }}>
                                <div className="activity-main-bottom--D3">
                                    <div>
                                        <span>
                                            {divingDetail.details[0].associate.toUpperCase()}
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            PH: {divingDetail.details[0].phone}
                                        </span>
                                        <span>
                                            W: {divingDetail.details[0].website}
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            {divingDetail.details[0].email}
                                        </span>
                                    </div>
                                </div>
                                <div className="activity-main-bottom--D3">
                                    <div>
                                        <span>
                                            {divingDetail.details[1].associate.toUpperCase()}
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            PH: {divingDetail.details[1].phone}
                                        </span>
                                        <span>
                                            W: {divingDetail.details[1].website}
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            {divingDetail.details[1].email}
                                        </span>
                                    </div>
                                </div>
                                <div className="activity-main-bottom--D3">
                                    <div>
                                        <span>
                                            {divingDetail.details[2].associate.toUpperCase()}
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            PH: {divingDetail.details[2].phone}
                                        </span>
                                        <span>
                                            W: {divingDetail.details[2].website}
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            {divingDetail.details[2].email}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
export default ActivityDestinationDetail1;
