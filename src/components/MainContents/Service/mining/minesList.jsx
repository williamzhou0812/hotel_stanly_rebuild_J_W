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

class MinesList extends React.Component {
    constructor(props) {
        super(props);
        //  this.state = { render: "", description: "Home" };
    }
    minesData = [
        {
            id: "1",
            title: "Newcrest Mining",
            img_url: "/imgs/service/mines/S3A1-NewcrestMining.jpg"
        },
        {
            id: "2",
            title: "St Barbara Ltd. (Simberi Operations)",
            img_url: "/imgs/service/mines/S3A2-StBarbaraLtd.jpg"
        },
        {
            id: "3",
            title: "Porgera Joint Venture",
            img_url: "/imgs/service/mines/S3A3-PorgeraJointVenture.jpg"
        },
        {
            id: "4",
            title: "OK Tedi Mining Ltd",
            img_url: "/imgs/service/mines/S3A4-OKTediMiningLtd.jpg"
        },
        {
            id: "6",
            title: "Morobe Mining Joint Ventures (Hidden Valley)",
            img_url: "/imgs/service/mines/S3A6-MorobeMiningJointVentures.jpg"
        },
        {
            id: "7",
            title: "MCC Ramu Nico Ltd (RAMU)",
            img_url: "/imgs/service/mines/S3A7-MCCRamuNicoLtd(RAMU).jpg"
        },
        {
            id: "8",
            title: "Kula Gold (Woodlark Island Gold Project)",
            img_url: "/imgs/service/mines/S3A8-KulaGold.jpg"
        },
        {
            id: "9",
            title: "K92 Mining Inc.",
            img_url: "/imgs/service/mines/S3A9-K92MiningInc.jpg"
        },
        {
            id: "10",
            title: "Crater Gold Mining",
            img_url: "/imgs/service/mines/S3A10-CraterGoldMining.jpg"
        }
    ];

    render() {
        return (
            <div style={{ width: "100%", height: "100%" }}>
                <SubsectionList
                    numberOfEntries={4}
                    data={this.minesData}
                    // imageSrc={this.eventData.imgSrc}
                    to=""
                    namespace="mines"
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
                    sideTitle="SERVICES"
                    mainTitle="MINES"
                    evenDetailsProps={this.minesData}
                ></SubsectionList>
            </div>
        );
    }
}

export default MinesList;
