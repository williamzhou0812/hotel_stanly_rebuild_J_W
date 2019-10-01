import React from "react";
//import { connect } from 'react-redux';
import {
    accomodationNamespace,
    destinationNamespace
} from "../../../Constants";
import SectionList from "../List/SectionList";
import DP1 from "./images/D-DESTINATIONS-IMAGES_P.jpg";
import DP2 from "./images/D-DESTINATIONS-IMAGES_P2.jpg";
import DP3 from "./images/D-DESTINATIONS-IMAGES_P3.jpg";
import DP4 from "./images/D-DESTINATIONS-IMAGES_P4.jpg";
import { destinations } from "./DestinationData";

class DestinationList extends React.Component {
    

    images = destinations.map(item => item.img_url);
    render() {
        return (
            <div
                className="section--bottom--animation"
                style={{ width: "100%", height: "54vh" }}
            >
                <SectionList
                    data={destinations}
                    images={this.images}
                    title="DESTINATIONS"
                    namespace={destinationNamespace}
                    backgroundPositionValue="top"
                />
            </div>
        );
    }
}
export default DestinationList;
