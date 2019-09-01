import React from "react";
//import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CalendarIcon from "./icons/CalendarIcon.png";
import {
    eventNamespace,
    accomodationNamespace,
    HeavyOrange,
    LightBlueButtonBackground,
    ExtraHeavyBlueGreen,
} from "../../../Constants";
import MapModal from "../Maps/MapModal";
import Markdown from "../../../MarkDown";
import "../List/MainSectionList.scss";
import "./Event.scss";
// import { renderComponent } from "recompose";
// import Events from "material-ui/utils/events";
//import { url } from "inspector";

class EventDetail extends React.Component {
    constructor(props) { 
        console.log(`hi wiliam props`+ props)
        super();
        // this.onChangeLink = this.onChangeLink.bind(this);
        this.state = {
            description: "Hiii"
        }
    }
    styles = {
        horizontalVerticalCenter: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2%"
        },
        
        mapOrFindButtonStyle: {
            backgroundColor: LightBlueButtonBackground,
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
                <div className="vertical-side"
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
                    <div >
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
                                    <p
                                        className="menu-title"
                                        style={this.styles.removePaddingMargin}
                                    >
                                        CALENDAR
                                </p>
                                    <p
                                        className="menu-title"
                                        style={this.styles.removePaddingMargin}
                                    >
                                        OF EVENTS
                                </p>
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
                <div className="event-main">
                    <div className="event-main--topImg"><div></div></div>
                    <div style={{ height: "50%" }}>
                        <div style={{ height: "13%", display: "flex" }}>
                            <div
                                className="event-nextPre-btn"
                                style={{
                                    ...this.styles.horizontalVerticalCenter
                                }}
                                onClick={this.prevEvent}
                            >
                                <span>PREVIOUS EVENT</span>
                            </div>
                            <div
                                className="event-title"
                                style={{
                                    ...this.styles.horizontalVerticalCenter
                                }}
                            >
                                {/* <span>{event.title}</span> */}
                                <h2>Event Title</h2>
                            </div>
                            <div
                                className="event-nextPre-btn"
                                style={{
                                    ...this.styles.horizontalVerticalCenter
                                }}
                            // onClick={this.nextEvent}
                            >
                                <span>NEXT EVENT</span>
                            </div>
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
                                        height: "21%"
                                    }}
                                >
                                    {/* <span>{event.eventMonth}</span> */}
                                    <h3>Event Month</h3>
                                </div>
                                <div className="middle-section--leftSide"
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
                                        <Markdown
                                            // source={event.description}
                                            source="dhj yru  ewkhrfkhr  kurhf a  yhgdf"
                                        />
                                    </p>
                                </div>
                            </div>
                            <div style={{
                                flexBasis: "50%",
                                padding: "1%  2%"
                            }}
                            >
                                <div
                                    className="middle-section--rightSide"
                                    style={{
                                        height: "38%",

                                        letterSpacing: "1px",
                                        overflow: "scroll",
                                        display: "inline-table"
                                    }}
                                >
                                    <p>CALL TODAY: </p>
                                    <p>WEBSITE:  </p>
                                    <p>EMAIL: </p>
                                    <p>LOCATION: PNG </p>
                                    {/* {event.phone && (
                                        <p>CALL TODAY: {event.phone}</p>
                                    )}
                                    {event.website && (
                                        <p>WEBSITE: {event.website}</p>
                                    )}
                                    {event.email && (
                                        <p>EMAIL: {event.email}</p>
                                    )}
                                    {event.location && (
                                        <p>
                                            LOCATION: {event.location},
                                            Papua New Guniea
                                            </p>
                                    )} */}
                                </div>
                                <div className="middle-section--btnContainer">

                                    <div className="middle-section--btnContainer--btn">
                                        <MapModal
                                            buttonTitle="SHOW ON MAP"
                                            title="Event Title"
                                            //  title={event.title}
                                            buttonStyle={
                                                this.styles
                                                    .mapOrFindButtonStyle
                                            }
                                            textStyle={
                                                this.styles
                                                    .mapOrFindButtonText
                                            }
                                        // mapImage={
                                        //     event.mapEvent[0]
                                        //         .mapImage
                                        // }
                                        />
                                    </div>

                                    <div
                                        className="middle-section--btnContainer--btn"
                                        style={{ marginTop: "7%" }}
                                    >
                                        <Link
                                            style={{
                                                textDecoration: "none",
                                                display: "inlineBlock"
                                            }}
                                            // to={
                                            //     accomodationNamespace +
                                            //     "/" +
                                            //     event.destination
                                            // }
                                            to={
                                                accomodationNamespace +
                                                "/:id"

                                            }
                                        >
                                            <div
                                                style={
                                                    this.styles
                                                        .mapOrFindButtonStyle
                                                }
                                            >
                                                <span
                                                    style={
                                                        this.styles
                                                            .mapOrFindButtonText
                                                    }
                                                >
                                                    FIND A CLOSE HOTEL
                                                    </span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div >
            </div >
        );
    }
}
export default EventDetail;