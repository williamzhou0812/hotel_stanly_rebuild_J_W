import React, {Fragment} from 'react';
import { Switch,  Route } from 'react-router-dom';

import MainLogo from './components/Header/MainLogo/MainLogo';
import SubNavs from './components/Header/Navs/SubNav';
import MainNav from './components/Header/Navs/mainNav';

import AboutOurHotel from './components/MainContents/AboutOurHotel/AboutOurHotel';
import Maps from './components/MainContents/Maps/Maps';
import OurHotel from './components/MainContents/OurHotel/OurHotel';

import Footer from './components/Footer/Footer';

import HotelWelcome from './components/MainContents/Hotel/HotelWelcome';

import EventList from './components/MainContents/Event/EventList';

import EventDetail from './components/MainContents/Event/EventDetail';

import ServiceInitialList from './components/MainContents/Service/ServiceInitialList';


import { serviceNamespace }  from './Constants';

import  Essential  from './components/MainContents/Service/essential/essential'; 

import Banks from './components/MainContents/Service/essential/subpages/bank';
import BankDetails from './components/MainContents/Service/essential/subpages/bankDetails';
import MediclService from './components/MainContents/Service/essential/mediclService';
import MediclServiceDetails from './components/MainContents/Service/essential/subpages/mediclServiceDetails'
import Embassy from './components/MainContents/Service/essential/embassy';
import EmbassyDetails from './components/MainContents/Service/essential/subpages/embassyDetails';
import Security from './components/MainContents/Service/essential/security';
import SecurityDetails from './components/MainContents/Service/essential/subpages/securityDetails'; 
import Transport from './components/MainContents/Service/transport/transport';
import VehicleHire from './components/MainContents/Service/transport/vehicleHire';


// Style Sheets

import './App.css';


function App() {
  return (
    <Fragment>
      <header>
        <MainLogo /> 
             <SubNavs/>
             <MainNav />  
      </header>
      <main>
          <Switch>

              <Route  exact  path='/' component={AboutOurHotel} />
              <Route  exact path='/ourhotel' component={OurHotel} />
              <Route  exact path='/ourhotel/:name' component={OurHotel} />
              <Route  exact path='/hoteldetail' component={HotelWelcome} />

              <Route   exact path='/events' component={EventList} />
              <Route    path='/events/:id' component={EventDetail} /> 

              <Route exact path={serviceNamespace} component={ServiceInitialList} />


              <Route exact path='/maps' component={Maps} />
              <Route    path='/maps/:id' component={Maps} />

              <Route  exact path='/services/essential' component={Essential} />
              <Route   exact  path='/services/essential/0' component={Banks} />  

              <Route    path='/services/essential/0/:id' component={BankDetails} /> 


              <Route   exact  path='/services/essential/medicl' component={MediclService} />  
              <Route    path='/services/essential/medicl/:id' component={MediclServiceDetails} />  


              <Route exact path='/services/essential/embassy' component={Embassy} />
              <Route exact path='/services/essential/embassy/:id' component={EmbassyDetails} /> 

              <Route exact path='/services/essential/security' component={Security} />
              <Route  exact path='/services/essential/security/:id' component={SecurityDetails} />

         
              <Route  exact path='/services/transport' component={Transport} />
              <Route exact path='/services/transport/vehicle-hire' component={VehicleHire} /> 
              {/* <Route exact path='/services/transport/:id' component={TransportDetails} />  */}

          </Switch>
      </main>
      
     <div >

        <Footer /> 
     </div>
    

    </Fragment>
   
  );
}

export default App;
