import React from "react";
//import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CalendarIcon from "./icons/CalendarIcon.png";
import {
    eventNamespace,
    accomodationNamespace,
    HeavyOrange,
    LightBlueButtonBackground,
    ExtraHeavyBlueGreen
} from "../../../Constants";
import MapModal from "../Maps/MapModal";
import SubsectionList from "../List/SubsectionList";
import { events } from "./EventData";

import "../List/MainSectionList.scss";
import "./Event.scss";

class EventDetail extends React.Component {
    constructor(props) {
        super();

        this.state = {
            activeId: 0,
            L: events.length - 1,
            count: 0
        };
    }

    getNextLink() {
        var count = parseInt(`${this.props.match.params.id}`);
        count = count + 1;

        if (count > this.state.L) {
            // count = 0;
            return `${eventNamespace}/0`;
        } else {
            return `${eventNamespace}/${count}`;
        }
    }

    getPrevLink() {
        var count = parseInt(`${this.props.match.params.id}`);
        count = count - 1;

        if (count < 1) {
            return `${eventNamespace}/${this.state.L}`;
        } else {
            return `${eventNamespace}/${count}`;
        }
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

        mapOrFindButtonStyle: {
            backgroundColor: LightBlueButtonBackground,
            display: "flex",
            width: "100%",
            padding: "4% 0",
            display: "inline-bock",
            marginTop: "-5%",
            borderRadius: "5px",
            boxShadow: "0px 0px 10px 1px rgba(0,0,0,0.5)",
            color: "white",
            justifyContent: "center"
        },
        mapOrFindButtonText: {
            letterSpacing: "2px",
            fontSize: "18px",
            fontWeight: "bold"
        },
        removePaddingMargin: { margin: 0, padding: 0 }
    };

    render() {
        const id = this.props.match.params.id;
        const _id = parseInt(id);
        const eventDetail = events.find(item => item.id == _id);
        const currentIdx = events.indexOf(eventDetail);
        const prev_idx = (currentIdx - 1 < 0) ?  events.length -1 : currentIdx - 1;
        const next_idx = (currentIdx + 1 >= events.length) ? 0 : currentIdx + 1;
        const prev_id = events[prev_idx].id;
        const next_id = events[next_idx].id;
        return (
            <div
                style={{
                    width: "100%",
                    //   height: "100%",
                    height: "54vh",
                    display: "flex",
                    color: "white"
                }}
                className="section--bottom--animation"
            >
                <div
                    className="left-vertical-nav"
                    style={{
                        backgroundColor: HeavyOrange,
                        width: "14%",
                        height: "100%",
                        boxShadow: "9.899px 0px 7px 0px rgba(0,0,0,0.6)",
                        zIndex: 1,
                        flexDirection: "column",
                        display: "flex"
                    }}
                >
                    <div>
                        <Link
                            style={{ height: "14%", textDecoration: "none" }}
                            to={eventNamespace}
                        >
                            <div className="leftSide-menu--container">
                                <img
                                    className="leftSide-menu--img"
                                    src={CalendarIcon}
                                    alt="Calendar Icon"
                                />
                                <div
                                    style={{
                                        letterSpacing: "2px"
                                    }}
                                >
                                    <p className="menu-title">CALENDAR</p>
                                    <p className="menu-title">OF EVENTS</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="vertical-title ">
                        <span
                            style={{
                                transform: "rotate(-90deg)"
                            }}
                        >
                            EVENTS
                        </span>
                    </div>
                </div>
                <div>
                    <div className="event-main">
                        <div style={{ height: "50%", width: "100%" }}>
                            <img
                                src={eventDetail.img_url}
                                style={{ height: "100%", width: "100%" }}
                            />
                        </div>
                        <div style={{ height: "50%", width: "100%" }}>
                            <div style={{ height: "13%", display: "flex" }}>
                                <Link
                                    to={eventNamespace + "/" + prev_id}
                                    className="event-nextPre-btn"
                                    style={{
                                        ...this.styles.horizontalVerticalCenter
                                    }}
                                >
                                    <span>PREVIOUS EVENT</span>
                                </Link>
                                <div
                                    className="event-title"
                                    style={{
                                        ...this.styles.horizontalVerticalCenter
                                    }}
                                >
                                    <span>{eventDetail.title}</span>
                                </div>
                                <Link
                                    to={eventNamespace + "/" + next_id}
                                    className="event-nextPre-btn"
                                    style={{
                                        ...this.styles.horizontalVerticalCenter
                                    }}
                                >
                                    <span>NEXT EVENT</span>
                                </Link>
                            </div>
                            <div
                                style={{
                                    height: "87%",
                                    backgroundColor: ExtraHeavyBlueGreen,
                                    display: "flex"
                                }}
                            >
                                <div
                                    style={{
                                        flexBasis: "50%",
                                        borderRight:
                                            "1px solid rgb(105,194,209)",
                                        padding: "1% 1% 1% 4%"
                                    }}
                                >
                                    <div
                                        className="middle-section--innerTitle"
                                        style={{
                                            height: "20%"
                                        }}
                                    >
                                        <span>{eventDetail.subTitle.toUpperCase()}</span>
                                    </div>
                                    <div
                                        className="middle-section--leftSide"
                                        style={{
                                            height: "75%",
                                            overflow: "scroll",
                                            display: "inline-table"
                                        }}
                                    >
                                        <p
                                            style={{
                                                marginTop: 0,
                                                marginBottom: 0
                                            }}
                                        >
                                            {eventDetail.description}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        flexBasis: "50%",
                                        padding: "1%  2%"
                                    }}
                                >
                                    <div style={{ height: "20%" }} />

                                    <div
                                        className="middle-section--rightSide"
                                        style={{
                                            height: "65%",
                                            letterSpacing: "1px",
                                            overflow: "scroll",
                                            display: "inline-table"
                                        }}
                                    >
                                        {eventDetail.details.call && (
                                            <p>
                                                CALL TODAY:{" "}
                                                {eventDetail.details.call}{" "}
                                            </p>
                                        )}
                                        {eventDetail.details.website && (
                                            <p>
                                                WEBSITE:{" "}
                                                {eventDetail.details.website}{" "}
                                            </p>
                                        )}
                                        {eventDetail.details.email && (
                                            <p>
                                                EMAIL:{" "}
                                                {eventDetail.details.email}{" "}
                                            </p>
                                        )}

                                        {eventDetail.details.location && (
                                            <p>
                                                LOCATION:{" "}
                                                {eventDetail.details.location}{" "}
                                            </p>
                                        )}
                                    </div>
                                    <div style={{marginTop: "-80px"}}>
                                        <div className="middle-section--btnContainer">
                                            <div className="middle-section--btnContainer--btn">
                                                <MapModal
                                                    buttonTitle="SHOW ON MAP"
                                                    title={eventDetail.title}
                                                    buttonStyle={
                                                        this.styles
                                                            .mapOrFindButtonStyle
                                                    }
                                                    textStyle={
                                                        this.styles
                                                            .mapOrFindButtonText
                                                    }
                                                    mapImage={eventDetail.mapImage}
                                                />
                                            </div>
                                        </div>
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
export default EventDetail;
