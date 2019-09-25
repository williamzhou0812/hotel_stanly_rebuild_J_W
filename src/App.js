import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import MainLogo from "./components/Header/MainLogo/MainLogo";
import SubNavs from "./components/Header/Navs/SubNav";
import MainNav from "./components/Header/Navs/mainNav";

import AboutOurHotel from "./components/MainContents/AboutOurHotel/AboutOurHotel";

// import Maps from './components/MainContents/Maps/Maps';
import MapList from "./components/MainContents/Maps/MapList";

import OurHotel from "./components/MainContents/OurHotel/OurHotel";

import Footer from "./components/Footer/Footer";
import StaticFooter from "./components/Footer/StaticFooter";

import HotelWelcome from "./components/MainContents/Hotel/HotelWelcome";

import EventList from "./components/MainContents/Event/EventList";

import EventDetail from "./components/MainContents/Event/EventDetail";

import ServiceInitialList from "./components/MainContents/Service/ServiceInitialList";

// new improt J
import DiningList from "./components/MainContents/Dining/DiningList";
import DiningDetail from "./components/MainContents/Dining/DiningDetail";
import DestinationDetail from "./components/MainContents/Destination/DestinationDetail";
import DestinationList from "./components/MainContents/Destination/DestinationList";

import {
    serviceNamespace,
    accomodationNamespace,
    activityNamespace,
    destinationNamespace,
    mapListNamespace,
    diningNamespace
} from "./Constants";

import mainComponent from "./components/MainContents/Videos/mainComponent";
// +++++ services

import Essential from "./components/MainContents/Service/essential/essential";

import Banks from "./components/MainContents/Service/essential/subpages/bank";
import BankDetails from "./components/MainContents/Service/essential/subpages/bankDetails";
import MedicalService from "./components/MainContents/Service/essential/medicalService";
import MedicalServiceDetails from "./components/MainContents/Service/essential/subpages/medicalServiceDetails";
import Embassy from "./components/MainContents/Service/essential/embassy";
import EmbassyDetails from "./components/MainContents/Service/essential/subpages/embassyDetails";
import Security from "./components/MainContents/Service/essential/security";
import SecurityDetails from "./components/MainContents/Service/essential/subpages/securityDetails";

import Transport from "./components/MainContents/Service/transport/transport";

import VehicleHire from "./components/MainContents/Service/transport/vehicleHire";
import TransportDetails from "./components/MainContents/Service/transport/subpages/vehicelDetails";
import FreightService from "./components/MainContents/Service/transport/freightService";
import FreightServiceDetail from "./components/MainContents/Service/transport/subpages/freightServiceDetails";

import Mining from "./components/MainContents/Service/mining/mining";
import gasList from "./components/MainContents/Service/mining/gasList";
import gasDetail from "./components/MainContents/Service/mining/subpages/gasDetail";

import minesList from "./components/MainContents/Service/mining/minesList";
import minesDetail from "./components/MainContents/Service/mining/subpages/minesDetail";

import departmentsList from "./components/MainContents/Service/mining/departmentsList";
import departmentsDetail from "./components/MainContents/Service/mining/subpages/departmentsDetail";
import agricultureDetail from "./components/MainContents/Service/mining/subpages/agricultureDetail";

import retailList from "./components/MainContents/Service/retail/retailList";
import retailDetail from "./components/MainContents/Service/retail/subpages/retailDetail";

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

import ActivityDestinationList1 from "./components/MainContents/Activity/ActivityDestinationList1";
import ActivityDestinationList2 from "./components/MainContents/Activity/ActivityDestinationList2";
import ActivityDestinationList3 from "./components/MainContents/Activity/ActivityDestinationList3";
import ActivityDestinationList4 from "./components/MainContents/Activity/ActivityDestinationList4";

import ActivityDestinationDetail1 from "./components/MainContents/Activity/ActivityDestinationDetail1";
import ActivityDestinationDetail2 from "./components/MainContents/Activity/ActivityDestinationDetail2";
import ActivityDestinationDetail3 from "./components/MainContents/Activity/ActivityDestinationDetail3";
import ActivityDestinationDetail4 from "./components/MainContents/Activity/ActivityDestinationDetail4";
import PassengerAirline from "./components/MainContents/Service/transport/passengerAirline";
import PassengerAirlineDetail from "./components/MainContents/Service/transport/subpages/passengerAirlineDetail";

import "./App.css";

function App() {
    return (
        <Fragment>
            <MainLogo />
            <SubNavs />
            <MainNav />
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
                        path="/services/essential"
                        component={Essential}
                    />
                    <Route
                        exact
                        path="/services/essential/banks"
                        component={Banks}
                    />
                    <Route
                        path="/services/essential/banks/:id"
                        component={BankDetails}
                    />
                    <Route
                        exact
                        path="/services/essential/medical"
                        component={MedicalService}
                    />
                    <Route
                        path="/services/essential/medical/:id"
                        component={MedicalServiceDetails}
                    />
                    <Route
                        exact
                        path="/services/essential/embassy"
                        component={Embassy}
                    />
                    <Route
                        exact
                        path="/services/essential/embassy/:id"
                        component={EmbassyDetails}
                    />
                    <Route
                        exact
                        path="/services/essential/security"
                        component={Security}
                    />
                    <Route
                        exact
                        path="/services/essential/security/:id"
                        component={SecurityDetails}
                    />
                    <Route
                        exact
                        path="/services/transport"
                        component={Transport}
                    />
                    <Route
                        exact
                        path="/services/transport/vehicle-hire"
                        component={VehicleHire}
                    />
                    <Route
                        exact
                        path="/services/transport/vehicle-hire/:id"
                        component={TransportDetails}
                    />
                    <Route
                        exact
                        path="/services/transport/freight-services"
                        component={FreightService}
                    />
                    <Route
                        exact
                        path="/services/transport/freight-services/:id"
                        component={FreightServiceDetail}
                    />
                    <Route
                        exact
                        path="/services/transport/passenger-airline-service"
                        component={PassengerAirline}
                    />
                    <Route
                        exact
                        path="/services/transport/passenger-airline-service/:id"
                        component={PassengerAirlineDetail}
                    />
                    <Route exact path="/services/mining" component={Mining} />
                    <Route
                        exact
                        path="/services/mining/gas"
                        component={gasList}
                    />
                    <Route
                        exact
                        path="/services/mining/gas/:id"
                        component={gasDetail}
                    />
                    <Route
                        exact
                        path="/services/mining/mines"
                        component={minesList}
                    />
                    <Route
                        exact
                        path="/services/mining/mines/:id"
                        component={minesDetail}
                    />
                    <Route
                        exact
                        path="/services/mining/officialDepartment"
                        component={departmentsList}
                    />
                    <Route
                        exact
                        path="/services/mining/officialDepartment/:id"
                        component={departmentsDetail}
                    />
                    <Route
                        exact
                        path="/services/mining/agriculture"
                        component={agricultureDetail}
                    />

                    <Route
                        exact
                        path="/services/retail"
                        component={retailList}
                    />
                    <Route
                        exact
                        path="/services/retail/:id"
                        component={retailDetail}
                    />

                    {/* --------------------------------- */}
                    <Route
                        exact
                        path={activityNamespace}
                        component={ActivityList}
                    />
                    <Route
                        exact
                        path={activityNamespace + "/1"}
                        component={ActivityDestinationList1}
                    />
                    <Route
                        exact
                        path={activityNamespace + "/2"}
                        component={ActivityDestinationList2}
                    />
                    <Route
                        exact
                        path={activityNamespace + "/3"}
                        component={ActivityDestinationList3}
                    />
                    <Route
                        exact
                        path={activityNamespace + "/4"}
                        component={ActivityDestinationList4}
                    />
                    <Route
                        exact
                        path={activityNamespace + "/1" + "/:id"}
                        component={ActivityDestinationDetail1}
                    />
                    <Route
                        exact
                        path={activityNamespace + "/2" + "/:id"}
                        component={ActivityDestinationDetail2}
                    />
                    <Route
                        exact
                        path={activityNamespace + "/3" + "/:id"}
                        component={ActivityDestinationDetail3}
                    />
                    <Route
                        exact
                        path={activityNamespace + "/4" + "/:id"}
                        component={ActivityDestinationDetail4}
                    />
                    <Route exact path="/videos" component={mainComponent} />
                </Switch>
                <Footer />
                <StaticFooter />
            </main>
        </Fragment>
    );
}

export default App;
