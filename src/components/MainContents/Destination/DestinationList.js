import React from "react";

import {
    destinationNamespace,
    randomiseItems
} from "../../../Constants";
import SectionList from "../List/SectionList";
import { destinations } from "./DestinationData";

class DestinationList extends React.Component {
    
    // pick a random url
    images = destinations.map(item => { 
        if (item.images && item.images.length > 0) {
            // randomize the images
            const randomized = randomiseItems(item.images);
            // return first image url
            return randomized[0].imageFile;
        }
        else 
            return item.img_url;
    });
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
