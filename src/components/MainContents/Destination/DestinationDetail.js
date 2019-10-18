import React from "react";

import { Link } from "react-router-dom";

import AllAreas from "./icons/AllAreas.png";
import {
    HeavyOrange,
    destinationNamespace,
    LightBlueButtonBackground,
    imageGallery,
} from "../../../Constants";
import MapModal from "../Maps/MapModal";
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
            width: "85%",
            //  height: "100%",
            padding: "3%",
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
        },
        exploreButtonStyle: {
            width: "85%",
            height: "5.5vh",
            padding: "3%",
            marginBottom: "5%",
            borderRadius: "5px",
            boxShadow: "0px 0px 10px 1px rgba(0,0,0,0.5)",
            backgroundColor: HeavyOrange,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        exploreButtonTextStyle: {
            fontSize: "20px",
            fontWeight: "500",
            paddingTop: "5px"
        }
    };

    renderImages(destination) {
        const {  images } = destination;
        if (images.length > 1) {
            return imageGallery(images, "100%", "27vh");
        }
        else if (images.length === 1) {
            return (<img src={images[0].imageFile} style={{ height: '100%', width: '100%' }} alt=""/>);
        }
        else {
            return (
                <div
                    style={{
                        backgroundColor: HeavyOrange,
                        height: "100%",
                        padding: "30px"
                    }}
                >
                    <h1>NO IMAGE FOR THIS DESTINATION</h1>
                </div>
            );
        }
    }

    render() {
        const id = this.props.match.params.id;
        const _id = parseInt(id);
        let destinationsDetail = destinations.find(item => item.id === _id);
        let mapInfo = [];
        if (destinationsDetail.CityMap) {
            mapInfo.push({
                title: destinationsDetail.state,
                buttonTitle: destinationsDetail.state + " map",
                mapImage: destinationsDetail.CityMap
            });
        }
        if (destinationsDetail.mapImage) {
            mapInfo.push({
                title: destinationsDetail.title,
                buttonTitle: destinationsDetail.title + " map",
                mapImage: destinationsDetail.mapImage
            });
        }

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
                            <div className="menu-title">ALL AREAS</div>
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
                         {this.renderImages(destinationsDetail)}
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
                                            <span className="label">PROVINCE:</span>{" "}
                                            {destinationsDetail.province}{" "}
                                        </p>
                                    )}
                                    {destinationsDetail.airport && (
                                        <p>
                                            <span className="label">CLOSEST AIRPORT:</span>{" "}
                                            {destinationsDetail.airport}{" "}
                                        </p>
                                    )}
                                </div>
                                <div className="destination-main--details--bottom--right--btnContainer">
                                    <Link style={{ textDecoration: "none", color: "white" }}
                                          to={destinationNamespace + '/' + destinationsDetail.id + '/explore'}>
                                        <div style={this.styles.exploreButtonStyle}>
                                            <span style={this.styles.exploreButtonTextStyle}>
                                                EXPLORE
                                            </span>                                        
                                        </div>
                                    </Link>                                    
                                   {mapInfo.map((item, index)=>{
                                       const firstStyle = (index === 0) ? { marginBottom: "6%" } : {};
                                       return (
                                        <div key={index} style={firstStyle}>
                                            <MapModal
                                                buttonTitle={
                                                    item.buttonTitle
                                                }
                                                title={item.title}
                                                buttonStyle={
                                                    this.styles.mapButtonStyle
                                                }
                                                textStyle={
                                                    this.styles.mapButtonTextStyle
                                                }
                                                mapImage={
                                                    item.mapImage
                                                }
                                            />
                                        </div>
                                       )
                                   })}
                                   
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
