import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  NavLink
} from "react-router-dom";
import './App.css';
import HotelWelcome from './components/Hotel/HotelWelcome.js';
import ServiceTypeList from './components/Service/ServiceTypeList.js';
import EventList from './components/Event/EventList.js';
import ServiceList from './components/Service/ServiceList.js';
import ServiceInitialList from './components/Service/ServiceInitialList';
import { map, isEmpty } from "lodash";
import EventDetail from "./components/Event/EventDetail";
//import idleJS from "idle-js";

import {
  accomodationNamespace,
  eventNamespace,
  diningNamespace,
  destinationNamespace,
  serviceNamespace,
  mapListNamespace,
  essentialNamespace,
  transportNamespace,
  retailNamespace,
  miningNamespace,
  airportInfoNamespace,
  IDLE_TIME,
  activityNamespace,
  searchResultNamespace,
  hotelDetailNamespace,
  directoryListNamespace
} from "./Constants.js";

class App extends React.Component {
  idleRef = null;
  constructor() {
    super();
    this.state = { render: '' }
  }
  handleClick(compName, e) {
    console.log(compName);
    this.setState({ render: compName });
  }
  _renderSubComp() {
    switch (this.state.render) {
      case 'HotelWelcome': return <HotelWelcome />
      case 'Service': return <ServiceInitialList />
      case 'Event': return <EventList />
      // case 'rings': return <FRings />
    }
  }

  render() {
    return (
      <Router>
        <div style={{ marginBottom: "10%" }}>
          <NavLink style={{ padding: "3%" }} to={hotelDetailNamespace} onClick={this.handleClick.bind(this, 'HotelWelcome')}>Welcome</NavLink>
          <NavLink style={{ padding: "3%" }} to={serviceNamespace} onClick={this.handleClick.bind(this, 'ServiceInitialList')}>Service</NavLink>
          <NavLink style={{ padding: "3%" }} to={eventNamespace} onClick={this.handleClick.bind(this, 'EventList')}>Events</NavLink>
        </div>
        <div>
          <Route
            path={hotelDetailNamespace}
            component={HotelWelcome}
            exact
          />
          <Route
            exact
            path={serviceNamespace}
            component={ServiceInitialList}
          />
          <Route
            exact
            path={eventNamespace}
            component={EventList}
          />
          <Route
            exact
            path={eventNamespace + "/:id"}
            component={EventDetail}
          />
          <Route
            path={serviceNamespace}
            component={ServiceTypeList}
          />

          <Route
            exact
            path={essentialNamespace + "/:serid"}
            component={ServiceList}
          />
          <Route
            exact
            path={essentialNamespace + "/:serid" + "/:serid"}
            component={ServiceList}
          />
          <Route
            exact
            path={transportNamespace + "/:serid"}
            component={ServiceList}
          />
          <Route
            exact
            path={miningNamespace + "/:serid"}
            component={ServiceList}
          />

        </div>
        {/* {this._renderSubComp()} */}
      </Router>

    );
  }
}

export default App;