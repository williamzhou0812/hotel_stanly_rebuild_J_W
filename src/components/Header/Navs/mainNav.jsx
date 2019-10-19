import React from "react";
//import Tab from "./Tab";
import {
    NavLink
} from "react-router-dom";
import {
    eventNamespace,
    diningNamespace,
    destinationNamespace,
    serviceNamespace,
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

class mainNav extends React.Component {
    middle = 3;

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
        this.clickItem = this.clickItem.bind(this);
    }
   
    componentDidMount() {
        // Update route according to middle tab...
        const { history } = this.props;
        const { location } = history;
        const { tabs, sameClicked, performClick } = this.state;
        if (location.pathname.includes(tabs[this.middle].path)) {
            if (sameClicked && performClick) {
                //If clicked on the same main tab even though similar location, force redirect
                history.replace(tabs[this.middle].path);
                this.setState({ performClick: false });
            }
        } else if (
            location.pathname !== tabs[this.middle].path &&
            performClick
        ) {
            //Only perform redirect if a performClick on one of the Main Tab is done
            history.replace(tabs[this.middle].path);
            this.setState({ performClick: false });
        } else if (location.pathname !== tabs[this.middle].path) {
            //Perform tab changing due to automatic redirection
            tabs.forEach((tab, index) => {
                if (location.pathname.includes(tab.path)) {
                    //Change the tabs array based on the difference of the middle and current location pathname
                    const tempTabs = shiftArray(tabs, this.middle - index);
                    this.setState({
                        tabs: tempTabs,
                        tab: tempTabs[this.middle].name,
                        sameClicked: false,
                        performClick: false
                    });
                }
            });
        }
    }

    componentDidUpdate(prevProps) {
        // check if idle state changed
        if (prevProps.isIdle !== this.props.isIdle) {
            if (this.props.isIdle === false) {
                // this indicate switching from showcase mode to interactive mode
                const default_pathname = destinationNamespace;
                const { tabs } = this.state;
                if (default_pathname !== tabs[this.middle].path) {
                    //Change the tabs array based on the difference of the middle and current location pathname
                    tabs.forEach((tab, index) => {
                        if (default_pathname.includes(tab.path)) {
                            //Change the tabs array based on the difference of the middle and current location pathname
                            const tempTabs = shiftArray(tabs, this.middle - index);
                            this.setState({
                                tabs: tempTabs,
                                tab: tempTabs[this.middle].name,
                                sameClicked: false,
                                performClick: false
                            });
                        }
                    });
                }
                
            }
        }
    }

    clickItem(clickedTab, clickIndex) {
        // get tabs
        const { tabs } = this.state;
        // check if clicked tab is the middle one
        if (clickedTab === tabs[this.middle]) {
            this.setState({ sameClicked: true, performClick: true });
        }
        else {
            const tempTabs = shiftArray(tabs, this.middle - clickIndex);
            this.setState({
                tabs: tempTabs,
                sameClicked: false,
                performClick: true
            });
        }
    }

    render() {
        const { tabs } = this.state;

        const checkActive = (match, location) => {
            //some additional logic to verify if current link is active
            if(!location) return false;
            const {pathname} = location;
            if (!match) return false;
            if (match.isExact)
                return true;
            if (pathname.indexOf(match.url) >= 0)
                return true;
            return pathname === "/";
        }

        return (
            <div style={{ width: "100vw", height: "8vh" }}>
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        boxShadow: "-5px 5px 10px black",
                        position: "relative",
                        zIndex: 6
                    }}
                >
                    {tabs.map((t, i) => {
                        return (
                            <div key={i} className="item-tab not-selected">
                                <NavLink
                                    to={t.path}
                                    activeClassName="active-link"
                                    isActive={checkActive}
                                    style={{
                                        height: "100%",
                                        width: "100%",
                                        display: "block",
                                        textDecoration: "none",
                                        borderStyle: "none solid solid solid",
                                        borderColor: "#49afbd",
                                        borderWidth: "2px"
                                    }}
                                    onClick={() => { this.clickItem(t, i);}}
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
