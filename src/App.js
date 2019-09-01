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

            <Route exact  path='/' component={AboutOurHotel} />
            <Route exact path='/ourhotel' component={OurHotel} />
            <Route  path='/ourhotel/:name' component={OurHotel} />
            <Route  path='/hoteldetail' component={HotelWelcome} />

            <Route   exact path='/events' component={EventList} />
            <Route   path='/events/:id' component={EventDetail} /> 

            <Route exact path={serviceNamespace} component={ServiceInitialList} />


            <Route exact path='/maps' component={Maps} />
            <Route    path='/maps/:id' component={Maps} />


          </Switch>
      </main>
      
     <div >

        <Footer /> 
     </div>
    

    </Fragment>
   
  );
}

export default App;
