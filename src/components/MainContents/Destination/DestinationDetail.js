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
import { destinations } from "./DestinationData";


class DestinationDetail extends React.Component {
    
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
            fontSize: "20px",
            fontWeight: "500"
        }
    };

    render() {
        const id = this.props.match.params.id;
        const _id = parseInt(id);
        let destinationsDetail = destinations.find(item => item.id == _id);
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
                                    flexBasis: "50%"
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
                                    <div style={{ marginBottom: "6%" }}>
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
