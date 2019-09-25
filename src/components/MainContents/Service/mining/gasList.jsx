import React from "react";
//import { connect } from "react-redux";
import SubsectionList from "../../List/SubsectionList";
import IconsMines from "../../icons/MINING_ICON.png";
import listIcon from "../../icons/ListIcon.png";

//import EventDetail from "./EventDetail";

import {
    transportNamespace,
    eventNamespace,
    toTitleCase,
    serviceNamespace,
    miningNamespace
} from "../../../../Constants";

class GasList extends React.Component {
    constructor(props) {
        super(props);
        //  this.state = { render: "", description: "Home" };
    }

    petroleumgasData = [
        {
            id: "1",
            title: "Oil Search Ltd",
            img_url: "/imgs/service/petroleumgas/S3C1-OilSearchLtd.jpg"
        },
        {
            id: "2",
            title: "Esso highlands Ltd (Subsidiary of ExxonMobil)",
            img_url: "/imgs/service/petroleumgas/S3C2-EssoHighlandsLtd.jpg"
        }
    ];

    render() {
        return (
            <div style={{ width: "100%", height: "100%" }}>
                <SubsectionList
                    numberOfEntries={4}
                    data={this.petroleumgasData}
                    // imageSrc={this.eventData.imgSrc}
                    to=""
                    namespace="gas"
                    imageKey="imageServiceType"
                    isImageArray={true}
                    sideButtons={[
                        {
                            title: "SERVICES TYPES",
                            icon: listIcon,
                            isLink: true,
                            link: serviceNamespace
                        },
                        {
                            title: "MINING & RESOURCES",
                            icon: IconsMines,
                            isLink: true,
                            link: miningNamespace
                        }
                    ]}
                    sideTitle="EVENTS"
                    mainTitle="CALENDAR"
                    evenDetailsProps={this.petroleumgasData}
                ></SubsectionList>
            </div>
        );
    }
}

export default GasList;
