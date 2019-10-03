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
import SidebarMapModel from "../Maps/SidebarMapModel";
import "./Activity.scss";
import activityListIcon from "../../../components/MainContents/icons/ACTIVITIES_ICON.png";
import mapIcon from "../../../components/MainContents/icons/MapIcon.png";

import { activities } from "./ActivityData";

class ActivityDestinationDetail extends React.Component {
    constructor(props) {
        super(props);

        // get current activtity and destination
        const id = props.match.params.id;
        const _id = parseInt(id);
        const activity = activities.find(item => item.id == _id);
        const { destinations } = activity;
        const subid = props.match.params.subid;
        const _subid = parseInt(subid);
        const destination = destinations.find(item => item.id == _subid);

        // set state
        this.state = {
            activeId: 0,
            L: destinations.length - 1,
            count: 0,
            activity,
            destinations,
            destination
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

    render() {
        const { destination, activity } = this.state;
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
                    <SidebarMapModel
                        item={{ title: activity.title + " MAP", icon: mapIcon, isMap: true, map: activity.map_image }}
                        mainTitle={activity.title}
                        mapImage={activity.map_image}
                    />
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
                                alt="Diving Icon"
                            />
                            <div className="menu-title">{activity.title} AREAS</div>
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
                                src={destination.img_url}
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
                                    {destination.title}
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
                            <p>{destination.overView}</p>
                        </div>
                        <div className="activity-main-middle--moreInfo">
                            <span>FOR MORE INFORMATION CONTACT:</span>
                        </div>
                    </div>
                    <div className="activity-main-bottom">
                        {destination.details.length === 1 && (
                            <div className="activity-main-bottom--D1">
                                <div>
                                    <span>
                                        {destination.details[0].associate.toUpperCase()}
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        PH: {destination.details[0].phone}
                                    </span>
                                    <span>
                                        W: {destination.details[0].website}
                                    </span>
                                </div>
                                <div>
                                    <span>{destination.details[0].email}</span>
                                </div>
                            </div>
                        )}
                        {destination.details.length === 2 && (
                            <div style={{ height: "100%" }}>
                                <div className="activity-main-bottom--D2">
                                    <div>
                                        <span>
                                            {destination.details[0].associate.toUpperCase()}
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            PH: {destination.details[0].phone}
                                        </span>
                                        <span>
                                            W: {destination.details[0].website}
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            {destination.details[0].email}
                                        </span>
                                    </div>
                                </div>
                                <div className="activity-main-bottom--D2">
                                    <div>
                                        <span>
                                            {destination.details[1].associate.toUpperCase()}
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            PH: {destination.details[1].phone}
                                        </span>
                                        <span>
                                            W: {destination.details[1].website}
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            {destination.details[1].email}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}
                        {destination.details.length === 3 && (
                            <div style={{ height: "100%" }}>
                                <div className="activity-main-bottom--D3">
                                    <div>
                                        <span>
                                            {destination.details[0].associate.toUpperCase()}
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            PH: {destination.details[0].phone}
                                        </span>
                                        <span>
                                            W: {destination.details[0].website}
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            {destination.details[0].email}
                                        </span>
                                    </div>
                                </div>
                                <div className="activity-main-bottom--D3">
                                    <div>
                                        <span>
                                            {destination.details[1].associate.toUpperCase()}
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            PH: {destination.details[1].phone}
                                        </span>
                                        <span>
                                            W: {destination.details[1].website}
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            {destination.details[1].email}
                                        </span>
                                    </div>
                                </div>
                                <div className="activity-main-bottom--D3">
                                    <div>
                                        <span>
                                            {destination.details[2].associate.toUpperCase()}
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            PH: {destination.details[2].phone}
                                        </span>
                                        <span>
                                            W: {destination.details[2].website}
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            {destination.details[2].email}
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
export default ActivityDestinationDetail;
