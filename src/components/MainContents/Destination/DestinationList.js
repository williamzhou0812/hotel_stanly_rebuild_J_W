import React from "react";
//import { connect } from 'react-redux';
import {
    destinationNamespace
} from "../../../Constants";
import SectionList from "../List/SectionList";
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
