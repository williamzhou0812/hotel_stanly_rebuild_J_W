import React from "react";
//import Tab from "./Tab";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    NavLink
} from "react-router-dom";
import {
    accomodationNamespace,
    eventNamespace,
    diningNamespace,
    destinationNamespace,
    serviceNamespace,
    mapListNamespace,
    activityNamespace,
    airportInfoNamespace,
    shiftArray
} from "../../../Constants";
import AccommodationIcon from "./icons/ACCOMMODATION_ICON.png";
import ActivitiesIcon from "./icons/ACTIVITIES_ICON.png";
import DestinationsIcon from "./icons/DESTINATIONS_ICON.png";
import DiningIcon from "./icons/DINING_ICON.png";
import EventsIcon from "./icons/EVENTS_ICON.png";
import ServicesIcon from "./icons/SERVICES_ICON.png";
import MapListIcon from "./icons/MAP_LIST_ICON.png";
import "./mainNav.scss";
//import { connect } from "react-redux";
//import * as actions from "../actions";
//import "./Tab.scss";

class mainNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [
                {
                    name: "SERVICES",
                    path: serviceNamespace,
                    icon: ServicesIcon,
                    iconWidth: "70px"
                },
                {
                    name: "MAPS",
                    //   path: mapListNamespace,
                    path: "/maplist",
                    icon: MapListIcon,
                    iconWidth: "70px"
                },
                {
                    name: "ACTIVITIES",
                    // path: activityNamespace,
                    path: "/activities",
                    icon: ActivitiesIcon,
                    iconWidth: "70px"
                },
                {
                    name: "DESTINATIONS",
                    path: "/destinations",
                    icon: DestinationsIcon,
                    iconWidth: "90px"
                },
                {
                    name: "EVENTS",
                    path: eventNamespace,
                    icon: EventsIcon,
                    iconWidth: "70px"
                },
                {
                    name: "DINING",
                    path: diningNamespace,
                    icon: DiningIcon,
                    iconWidth: "70px"
                },
                {
                    name: "OUR HOTEL",
                    path: "/ourhotel",
                    icon: AccommodationIcon,
                    iconWidth: "70px"
                }
            ],
            sameClicked: false,
            performClick: false
        };
    }
    middle = 3;

    render() {
        const { tabs } = this.state;
        // const { pathname } = this.props.location;
        return (
            <div style={{ width: "100vw", height: "8vh" }}>
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        boxShadow: "2px 5px 10px black",
                        position: "relative"
                    }}
                >
                    {tabs.map((t, i) => {
                        return (
                            <div className="item-tab not-selected">
                                <NavLink
                                    to={t.path}
                                    exact
                                    activeClassName="active-link"
                                    // isActive={checkActive}
                                    style={{
                                        height: "100%",
                                        width: "100%",
                                        display: "block",
                                        textDecoration: "none",
                                        borderStyle: "none solid solid solid",
                                        borderColor: "#49afbd",
                                        borderWidth: "2px"
                                    }}
                                >
                                    <div
                                        style={{
                                            marginTop: "10%",
                                            height: "90px",
                                            width: "100%",
                                            display: "block"
                                        }}
                                    >
                                        <img
                                            alt=""
                                            src={t.icon}
                                            style={{
                                                height: "100%",

                                                width: !!t.iconWidth
                                                    ? t.iconWidth
                                                    : "50%",
                                                // width: "40%",
                                                height: "auto",
                                                marginBottom: "25%",
                                                margin: "5% auto"
                                            }}
                                            // className="tab--icon icon-img"
                                        />
                                    </div>
                                    <p
                                        style={{
                                            // height: "30%",
                                            fontSize: "1.5vw",
                                            fontWeight: "500"
                                        }}
                                    >
                                        {t.name}
                                    </p>
                                </NavLink>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default mainNav;
