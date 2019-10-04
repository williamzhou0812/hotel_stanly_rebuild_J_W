import React, {useState, Fragment} from 'react';

import {Link, Route} from 'react-router-dom';

import './Maps.scss';
import PropTypes from 'prop-types';

// new import 
import { maps } from './MapData';

import SubsectionMapList from "../List/SubsectionMapList";

  


const MapList = (props) => { 
  return (
    <div
        className="section--bottom--animation"
        style={{ width: "100%", height: "100%", color: "white" }}
    >
        <SubsectionMapList
            numberOfEntries={4}
            data={maps}

            namespace="map"
            imageKey="logo"
            isImageArray={false}
            sideButtons={[
                //{ title: "EVENTS", isLink: true, link: eventNamespace }
            ]}
            sideTitle="MAPS"
            mainTitle="LIST OF MAPS"
            thumbnailStyle={{ width: "306px", height: "138.2px"}}

        >

        </SubsectionMapList>

    </div >
    );

};


export  default MapList;