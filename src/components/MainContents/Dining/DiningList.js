import React from "react";

import SubsectionList from "../List/SubsectionList";
import {restaurants } from "./DiningData";
import "../List/MainSectionList.scss";



class DiningList extends React.Component {
    
    render() {
        return (
            <div
                className="section--bottom--animation"
                style={{ width: "100%", height: "100%", color: "white" }}
            >
                <SubsectionList
                    numberOfEntries={4}
                    data={restaurants}

                    namespace="dining"
                    imageKey="logo"
                    isImageArray={false}
                    sideButtons={[
                        //{ title: "EVENTS", isLink: true, link: eventNamespace }
                    ]}
                    sideTitle="DINING"
                    mainTitle="LIST OF RESTAURANTS"
                    thumbnailStyle={{ width: "316px", height: "207px"}}

                >

                </SubsectionList>

            </div >
        );
    }
}

export default DiningList;


