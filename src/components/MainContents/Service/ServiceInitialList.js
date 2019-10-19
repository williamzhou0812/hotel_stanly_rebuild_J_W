import React from "react";

import SectionList from "../List/SectionList";
import { services } from "./ServiceData";

class ServiceInitialList extends React.Component {
    
    render() {
        const images = services.map(item => {
            return item.image_url
        });
        return (
            <div style={{ height: "54vh" }}>
                <SectionList
                    data={services}
                    images={images}
                    title="SERVICES"
                    namespace=""
                    linkFunction={(_, item) => {
                        return item.url;
                    }}
                    backgroundPositionValue="top"
                ></SectionList>
            </div>
        );
    }
}

export default ServiceInitialList;
