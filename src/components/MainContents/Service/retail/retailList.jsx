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

class RetailList extends React.Component {
    constructor(props) {
        super(props);
        //  this.state = { render: "", description: "Home" };
    }
    retailData = [
        {
            id: "1",
            title: "BRIAN BELL",
            img_url: "/imgs/service/retail/retail/S4A-BrianBell.jpg"
        },
        {
            id: "2",
            title: "KEYNOTE MUSIC",
            img_url: "/imgs/service/retail/retail/S4B-KeynoteMusic.jpg"
        },
        {
            id: "3",
            title: "STRICKLAND REAL ESATE",
            img_url: "/imgs/service/retail/retail/S4C-StricklandRealEstate.jpg"
        },
        {
            id: "4",
            title: "PRYDE FURNITURE",
            img_url: "/imgs/service/retail/retail/S4D-PrydeFurniture.jpg"
        },
        {
            id: "5",
            title: "RH TRADING",
            img_url: "/imgs/service/retail/retail/S4E-RHTrading.jpg"
        },
        {
            id: "6",
            title: "BNG TRADING",
            img_url: "/imgs/service/retail/retail/S4F-BNGTrading.jpg"
        },
        {
            id: "7",
            title: "PACIFIC PALMS PROPERTY",
            img_url: "/imgs/service/retail/retail/S4G-PacificPalms.jpg"
        },
        {
            id: "8",
            title: "VISION CITY MEGA MALL",
            img_url: "/imgs/service/retail/retail/S4H-VisionCity.jpg"
        },
        {
            id: "9",
            title: "MADNESS PHOTOGRAPHY",
            img_url: "/imgs/service/retail/retail/S4I-MadnessPhotography.jpg"
        },
        {
            id: "10",
            title: "OFC",
            img_url: "/imgs/service/retail/retail/S4J-OFC.jpg"
        }
    ];

    render() {
        return (
            <div style={{ width: "100%", height: "100%" }}>
                <SubsectionList
                    numberOfEntries={4}
                    data={this.retailData}
                    // imageSrc={this.eventData.imgSrc}
                    to=""
                    namespace="retail"
                    imageKey="imageServiceType"
                    isImageArray={true}
                    sideButtons={[
                        {
                            title: "SERVICES TYPES",
                            icon: listIcon,
                            isLink: true,
                            link: serviceNamespace
                        }
                    ]}
                    sideTitle="SERVICES"
                    mainTitle="RETAIL & SERVICES"
                    evenDetailsProps={this.retailData}
                ></SubsectionList>
            </div>
        );
    }
}

export default RetailList;
