import React from "react";
//import "../List/MainSectionList.css";
import {
    imageGallery,
    HeavyOrange,
} from "../../../Constants";
import { Link } from "react-router-dom";
import SidebarMapModel from "../Maps/SidebarMapModel";
import "./Activity.scss";
import activityListIcon from "../../../components/MainContents/icons/ACTIVITIES_ICON.png";
import mapIcon from "../../../components/MainContents/icons/MapIcon.png";

import { activities } from "./ActivityData";

class ActivityDestinationDetail extends React.Component {
    constructor(props) {
        super(props);

       
        // set state
        this.state = {

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


    /// Image Garllery
    renderImages(activity) {
        const {  images } = activity;
        if (images.length > 1) {
            return imageGallery(images, "100%", "22.7vh");
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
                    <h1>NO IMAGE FOR THIS ACTIVITY</h1>
                </div>
            );
        }
    }

    render() {
         // get current activtity and destination
         const id = this.props.match.params.id;
         const _id = parseInt(id);
         const activity = activities.find(item => item.id === _id);
         const { destinations } = activity;
         const subid = this.props.match.params.subid;
         const _subid = parseInt(subid);
         const destination = destinations.find(item => item.id === _subid);

        const currentIdx = destinations.indexOf(destination);
        const prev_idx = (currentIdx - 1 < 0) ?  destinations.length -1 : currentIdx - 1;
        const next_idx = (currentIdx + 1 >= destinations.length) ? 0 : currentIdx + 1;
        const prev_id = destinations[prev_idx].id;
        const next_id = destinations[next_idx].id;

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
                            <div className="menu-title">ALL ACTIVITIES</div>
                        </div>
                    </Link>
                    {activity.map_image && (                        
                        <SidebarMapModel
                            item={{ title: activity.title + " MAP", icon: mapIcon, isMap: true, map: activity.map_image }}
                            mainTitle={activity.title}
                            mapImage={activity.map_image}
                        />
                    )}
                    <Link
                        to={"/activities/" + activity.id}
                        style={{
                            textDecoration: "none"
                        }}
                    >
                        <div className="leftSide-menu--container">
                            <img
                                className="leftSide-menu--img"
                                src={activity.icon}
                                alt="Activity Icon"
                            />
                            <div className="menu-title">{activity.title}</div>
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
                    <div style={{ height: "42%" }}>
                        <div
                            style={{ height: "100%", width: "100%" }}
                            className="slide-container"
                        >
                            {this.renderImages(activity)}
                           
                        </div>
                    </div>

                    <div
                        className="activity-main-middle"
                        style={{ height: "58%" }}
                    >
                        <div
                            className="activity-main-middle--title"
                            style={{
                                height: '16%',
                                ...this.styles.horizontalVerticalCenter
                            }}
                        >
                            <span>{activity.title.toUpperCase()}</span>
                        </div>
                        <div
                            style={{
                                height: "11%",
                                display: "flex"
                            }}
                        >
                            <Link
                                to={'/activities/' + activity.id + '/' + prev_id}
                                className="event-nextPre-btn"
                                style={{
                                    ...this.styles.horizontalVerticalCenter
                                }}
                            >
                                <span>PREVIOUS LOCATION</span>
                            </Link>
                            <div
                                style={{
                                    flexBasis: "72%",
                                    textAlign: "center",
                                    paddingTop: "12px"
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: "35px",
                                        fontWeight: "500",
                                        margin: "0 auto",
                                        paddingTop: "10px",
                                        letterSpacing: "5px"
                                    }}
                                >
                                    {destination.title.toUpperCase()}
                                </span>
                            </div>
                            <Link
                                to={'/activities/' + activity.id + '/' + next_id}
                                className="event-nextPre-btn"
                                style={{
                                    ...this.styles.horizontalVerticalCenter
                                }}
                            >
                                <span>NEXT LOCATION</span>
                            </Link>
                        </div>

                        <div className="activity-main-middle--description">
                            <p>{destination.overView}</p>
                        </div>
                        <div className="activity-main-middle--moreInfo">
                            <span>FOR MORE INFORMATION CONTACT:</span>
                        </div>
                        <div className="activity-main-bottom">
                            {destination.details.map((info, index) => {
                                const info_class = (destination.details.length === 1) ? 'single' : 'multiple';
                                return (
                                    <div key={index} className={info_class}>
                                        <div className="info-name">
                                            <span>
                                                {info.associate.toUpperCase()}
                                                </span>
                                        </div>
                                        <div className="info-contact">
                                            <span>
                                                PH: {info.Phone}
                                            </span>
                                            <span>
                                                W: {info.website}
                                            </span>
                                        </div>
                                        <div className="info-email">
                                            <span>E: {info.email}</span>
                                        </div>
                                    </div>
                                )
                            })}
                            {destination.details.length === 0 && (
                                <div className="advertise">
                                    Advertise your business here!<br/>
                                    For more information, contact:<br/>
                                    touchscreen@jbg.com.pg
                                </div>
                            )}
                        </div>
                    </div>                    
                </div>
            </div>
        );
    }
}
export default ActivityDestinationDetail;
