import React from "react";

import { Link } from "react-router-dom";

import AllAreas from "./icons/AllAreas.png";
import BackIcon from "./icons/BackIcon.png";
import {
    HeavyOrange,
    destinationNamespace,
    LightBlueButtonBackground,
    ExtraHeavyBlueGreen,
    imageGallery,
    LightOrange
} from "../../../Constants";
import ExploreList from "./ExploreList";
import MapModal from "../Maps/MapModal";
import Markdown from "../../../MarkDown";
import "./Destination.scss";
import "../List/MainSectionList.scss";

class DestinationDetail extends React.Component {
    destinations = [
        {
            id: 1,
            title: "PORT MORESBY",
            state: "PAPUA NEW GUNIEA",
            img_url: "/imgs/destination/D-DESTINATIONS-IMAGES_P.jpg",
            mapImage: "/imgs/destination/maps/Port-Moresby-Map-PORTMORESBY.png",
            CityMap: "/imgs/destination/maps/PNG-Map-PORTMORESBY.png",
            url: destinationNamespace,
            province: "National Capital District",
            airport: " Port Moresby International Airport (Jacksons)",
            description:
                "Port Moresby was once a trading port for the Motuan people who sustained their existence by sailing to villages to trade pots for food and canoe logs. Whether you’re in the Port Moresby region for a day or longer, there’s a number of interesting attractions on offer. If you’re around in mid-September on Independence Day, Port Moresby plays host to the Hiri Moale Festival."
        },
        {
            id: 2,
            title: "LAE",
            state: "PAPUA NEW GUNIEA",
            img_url: "/imgs/destination/D2-LAE-IMAGES2.jpg",
            mapImage: "/imgs/destination/maps/Port-Moresby-Map-PORTMORESBY.png",
            CityMap: "/imgs/destination/maps/PNG-Map-PORTMORESBY.png",
            url: destinationNamespace,
            province: "Morobe",
            airport: " Nadzab Airport",
            description:
                "Lae is home to the famous Morobe Cultural Show and offers visitors plenty of things to see and do. Take a stroll through the recently restored Lae National Botanic Gardens and pay homage to the World War II soldiers buried at the Lae War Cemetery along Memorial Drive. See Agro the sixteen metre Salty Crocodile at the Rainforest Habitat and visit the Lae Market from Monday to Saturday."
        },
        {
            id: 3,
            title: "MADANG",
            state: "PAPUA NEW GUNIEA",
            img_url: "/imgs/destination/D3-MADANG-IMAGES.jpg",
            mapImage: "/imgs/destination/maps/Port-Moresby-Map-PORTMORESBY.png",
            CityMap: "/imgs/destination/maps/PNG-Map-PORTMORESBY.png",
            url: destinationNamespace,
            province: "Madang",
            airport: "Madang Airport",
            description:
                "Situated on the northern coast of the mainland, Madang is one of PNG’s top tourist destinations. The region is known for its sheer beauty and is perfect for planning a dive adventure. The pristine waters here are abundant in rainbow coral reefs, bommies and World War II wrecks with the oceanic currents luring both pelagic and reef fish varieties. Don’t miss the Madang Festival which occurs on the Queen’s Birthday weekend each year."
        },
        {
            id: 4,
            title: "MOUNT HAGEN",
            state: "PAPUA NEW GUNIEA",
            img_url: "/imgs/destination/E3E_-_Mount_Hagen_Show.jpg",
            mapImage: "/imgs/destination/maps/Port-Moresby-Map-PORTMORESBY.png",
            CityMap: "/imgs/destination/maps/PNG-Map-PORTMORESBY.png",
            url: destinationNamespace,
            province: "Western Highlands",
            airport: "Kagamuga Airport",
            description:
                "Mount Hagen is the capital of the Western Highlands Province. The region is particularly ideal for growing Arabic coffee and offers a range of activities such as birdwatching, trekking and fishing. In August each year, Mount Hagen comes alive with the ever-popular Mount Hagen Show which showcases the rich heritage of the local culture. Be sure to check out the Hagen Market on Saturdays."
        }
    ];

    styles = {
        horizontalVerticalCenter: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        mapButtonStyle: {
            width: "100%",
            //  height: "100%",
            padding: "2%",
            marginBottom: "5%",
            borderRadius: "5px",
            boxShadow: "0px 0px 10px 1px rgba(0,0,0,0.5)",
            backgroundColor: LightBlueButtonBackground,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        mapButtonTextStyle: {
            fontSize: "2vw",
            fontWeight: "bold"
        }
    };

    render() {
        let destinationsDetail = this.destinations[
            parseInt(this.props.match.params.id - 1)
        ];
        return (
            <div
                style={{
                    width: "100%",
                    height: "54vh",
                    display: "flex"
                }}
                className="section--bottom--animation"
            >
                <div className="left-vertical-nav">
                    <Link
                        style={{ textDecoration: "none" }}
                        to={destinationNamespace}
                    >
                        <div className="leftSide-menu--container">
                            <img
                                className="leftSide-menu--img"
                                src={AllAreas}
                                alt="All Areas Icon"
                            />
                            <div className="menu-title">BACK TO OVERVIEW</div>
                        </div>
                    </Link>
                    <div className="vertical-title">
                        <span style={{ transform: "rotate(-90deg)" }}>
                            DESTINATIONS
                        </span>
                    </div>
                </div>

                <div className="destination-main">
                    <div
                        className="destination-main--topImg"
                        style={{ height: "50%", width: "100%" }}
                    >
                        <img
                            src={destinationsDetail.img_url}
                            style={{ height: "100%", width: "100%" }}
                        />
                        {/* {imageGallery(destinationsDetail.img_url,
                                "100%",
                                "27vh")} */}
                    </div>
                    <div className="destination-main--details">
                        <div className="destination-main--details--top-title">
                            {destinationsDetail.title}
                        </div>
                        <div className="destination-main--details--bottom">
                            <div className="destination-main--details--bottom--left">
                                <div style={{ overflow: "Hidden" }}>
                                    <p>{destinationsDetail.description}</p>
                                </div>
                            </div>
                            <div
                                className="destination-main--details--bottom--right"
                                style={{
                                    flexBasis: "50%",
                                    padding: "1%  2%"
                                }}
                            >
                                <div className="destination-main--details--bottom--right--info">
                                    {destinationsDetail.province && (
                                        <p>
                                            PROVINCE:{" "}
                                            {destinationsDetail.province}{" "}
                                        </p>
                                    )}
                                    {destinationsDetail.airport && (
                                        <p>
                                            CLOSEST AIRPORT:{" "}
                                            {destinationsDetail.airport}{" "}
                                        </p>
                                    )}
                                </div>
                                <div className="destination-main--details--bottom--right--btnContainer">
                                    <div style={{ marginBottom: "3%" }}>
                                        <MapModal
                                            buttonTitle={
                                                destinationsDetail.title +
                                                " map"
                                            }
                                            title={destinationsDetail.title}
                                            buttonStyle={
                                                this.styles.mapButtonStyle
                                            }
                                            textStyle={
                                                this.styles.mapButtonTextStyle
                                            }
                                            mapImage={
                                                destinationsDetail.mapImage
                                            }
                                        />
                                    </div>
                                    <div style={{}}>
                                        <MapModal
                                            buttonTitle={
                                                destinationsDetail.state +
                                                " map"
                                            }
                                            title={destinationsDetail.state}
                                            buttonStyle={
                                                this.styles.mapButtonStyle
                                            }
                                            textStyle={
                                                this.styles.mapButtonTextStyle
                                            }
                                            mapImage={
                                                destinationsDetail.CityMap
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default DestinationDetail;
