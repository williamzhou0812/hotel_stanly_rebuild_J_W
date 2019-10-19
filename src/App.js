import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import idleJS from "idle-js";

import MainLogo from "./components/Header/MainLogo/MainLogo";
import SubNavs from "./components/Header/Navs/SubNav";
import MainNav from "./components/Header/Navs/mainNav";

import MapList from "./components/MainContents/Maps/MapList";

import OurHotel from "./components/MainContents/OurHotel/OurHotel";

import Footer from "./components/Footer/Footer";
import StaticFooter from "./components/Footer/StaticFooter";

import HotelWelcome from "./components/MainContents/Hotel/HotelWelcome";

import EventList from "./components/MainContents/Event/EventList";

import EventDetail from "./components/MainContents/Event/EventDetail";

import ServiceInitialList from "./components/MainContents/Service/ServiceInitialList";
import ServiceTypeList from "./components/MainContents/Service/ServiceTypeList";
import ServiceDetail from "./components/MainContents/Service/ServiceDetail";
import ServiceList from "./components/MainContents/Service/ServiceList"
import ServiceBranch from "./components/MainContents/Service/ServiceBranch";

// new improt J
import DiningList from "./components/MainContents/Dining/DiningList";
import DiningDetail from "./components/MainContents/Dining/DiningDetail";
import DestinationDetail from "./components/MainContents/Destination/DestinationDetail";
import DestinationList from "./components/MainContents/Destination/DestinationList";
import ExploreList from "./components/MainContents/Destination/ExploreList";

import {
    serviceNamespace,
    activityNamespace,
    destinationNamespace,
    videosNamespace,
    diningNamespace,
    IDLE_TIME
} from "./Constants";

import mainComponent from "./components/MainContents/Videos/mainComponent";

import "react-image-gallery/styles/scss/image-gallery.scss";

// Style Sheets

import RoomSuite from "./components/MainContents/OurHotel/RoomSuite";
import Dining from "./components/MainContents/OurHotel/Dining";
import RoomSuiteDetails from "./components/MainContents/OurHotel/RoomSuiteDetails";
import DiningDetails from "./components/MainContents/OurHotel/DiningDetails";
import Facilities from "./components/MainContents/OurHotel/Facilities";
import FacilitieDetails from "./components/MainContents/OurHotel/FacilitieDetails";

import Meetings from "./components/MainContents/OurHotel/Meetings";
import MeetingDetails from "./components/MainContents/OurHotel/MeetingDetails";

// 5.9
import ActivityList from "./components/MainContents/Activity/ActivityList";

import ActivityDestinationList from "./components/MainContents/Activity/ActivityDestinationList";

import ActivityDestinationDetail from "./components/MainContents/Activity/ActivityDestinationDetail";

import "./App.css";

class App extends Component {
    // keep reference of idle object
    idleRef = null;

    constructor(props) {
        super(props);

        // check if it is in video mode
        const isIdle = (this.props.history.location.pathname.indexOf(videosNamespace) !== -1) ? true : false;
        this.state = {
            isIdle,
            lastPathname: null,
            currentPathname: this.props.history.location.pathname
        };
        this.setSPAIdle = this.setSPAIdle.bind(this);
        this.setSPAActive = this.setSPAActive.bind(this);
    }

    componentDidMount() {
        const { isIdle } = this.state;
        //Set idle timer
        this.idleRef = new idleJS({
            idle: IDLE_TIME,
            onIdle: this.setSPAIdle,
            onActive: this.setSPAActive,
            startAtIdle: (isIdle === true)
        }).start();
        this.props.history.listen((location, action) => { this.routeChanged(location, action); })
    }

    routeChanged(location, action) {
        if (action === 'PUSH' && location.pathname.indexOf(videosNamespace) !== -1 
            && this.state.isIdle === false && this.idleRef) {
                // ensure it is in idle state
                this.idleRef.reset({
                    idle: true
                });
                this.setState({ isIdle: true });
        }

        // keep track of last path name
        const { lastPathname, currentPathname } = this.state;
        if (lastPathname !== location.pathname) {
            this.setState({
                lastPathname: currentPathname,
                currentPathname: location.pathname
            });
        }
    }

    setSPAIdle() {
        const { isIdle } = this.state;
        if (!isIdle) {
            this.setState({ isIdle: true });        
            // start videos
            this.props.history.push(videosNamespace);
        } 
    }
    setSPAActive() {
        const { isIdle } = this.state;
        if (isIdle) {
            this.setState({ isIdle: false });
            // default to destination
            this.props.history.push(destinationNamespace);
        }
    }

    render() {
        const { isIdle, lastPathname } = this.state;
        return (
            <Fragment>
                <MainLogo />
                <SubNavs lastPathname={lastPathname} />
                <MainNav history={this.props.history} isIdle={isIdle} lastPathname={lastPathname}/>
                <main>
                    <Switch>
                        <Route exact path="/" component={HotelWelcome} />
                        <Route exact path="/ourhotel" component={OurHotel} />
                        <Route
                            exact
                            path="/ourhotel/roomsuite"
                            component={RoomSuite}
                        />
                        <Route
                            exact
                            path="/ourhotel/roomsuite/:id"
                            component={RoomSuiteDetails}
                        />
                        <Route exact path="/ourhotel/dining" component={Dining} />
                        <Route
                            exact
                            path="/ourhotel/dining/:id"
                            component={DiningDetails}
                        />
                        <Route
                            exact
                            path="/ourhotel/facilities"
                            component={Facilities}
                        />
                        <Route
                            exact
                            path="/ourhotel/facilities/:id"
                            component={FacilitieDetails}
                        />
                        <Route
                            exact
                            path="/ourhotel/meeting"
                            component={Meetings}
                        />
                        <Route
                            exact
                            path="/ourhotel/meeting/:id"
                            component={MeetingDetails}
                        />
                        <Route exact path="/hoteldetail" component={HotelWelcome} />
                        <Route exact path="/events" component={EventList} />
                        <Route path="/events/:id" component={EventDetail} />
                        <Route
                            exact
                            path={serviceNamespace}
                            component={ServiceInitialList}
                        />
                        <Route
                            exact
                            path={destinationNamespace}
                            component={DestinationList}
                        />
                        <Route
                            exact
                            path={destinationNamespace + "/:id"}
                            component={DestinationDetail}
                        />
                        <Route
                            exact
                            path={destinationNamespace + "/:id/explore"}
                            component={ExploreList}
                        />
                        <Route
                            exact
                            path={diningNamespace}
                            component={DiningList}
                        />
                        <Route
                            exact
                            path={diningNamespace + "/:id"}
                            component={DiningDetail}
                        />
                        <Route exact path="/maplist" component={MapList} />
                        <Route
                            exact
                            path="/services/:servicename"
                            component={ServiceTypeList}
                        />
    
                        <Route
                            exact
                            path="/services/retail/:subservicename"
                            component={ServiceBranch}
                        />   
    
                        <Route
                            exact
                            path="/services/:servicename/:subservicename"
                            component={ServiceList}
                        />
    
                        <Route
                            exact
                            path="/services/:servicename/:subservicename/:detailid"
                            component={ServiceDetail}
                        />
    
    
                        {/* --------------------------------- */}
                        <Route
                            exact
                            path={activityNamespace}
                            component={ActivityList}
                        />
                        <Route
                            exact
                            path={activityNamespace + "/:id"}
                            component={ActivityDestinationList}
                        />
                        
                        <Route
                            exact
                            path={activityNamespace + "/:id/:subid"}
                            component={ActivityDestinationDetail}
                        />
                        
                        <Route exact path="/videos" component={mainComponent} />
                    </Switch>
                    { !isIdle && (
                        <Footer />
                    )}
                    { !isIdle && (
                        <StaticFooter />
                    )}
                    
                </main>
            </Fragment>
        );
    }
}

export default App;
