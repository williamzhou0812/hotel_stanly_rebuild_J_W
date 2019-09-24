import React, { Fragment } from "react";
import DownButton from "../../../MainContents/Destination/icons/DownExploreButton.png";
import UpButton from "../../../MainContents/Destination/icons/UpExploreButton.png";
import { Link } from "react-router-dom";
import ServiceTypesIcon from "../icons/ServiceTypesIcon.png";
import SubsectionList from "../../List/SubsectionList";

import {
    SUBSECTION_LIST_ENTRIES,
    MediumOrange,
    shiftArray,
    HeavyBlue,
    HeavyOrange,
    LightOrange,
    getRandomImage,
    LightBlue,
    randomiseButKeepOrder,
    addNullItemToData
} from "../../../../Constants";

import { borderBottom, fontSize } from "@material-ui/system";
import { lightBlue } from "@material-ui/core/colors";

const miningList = [
    {
        id: 1,
        title: "OFFICIAL DEPARTMENTS",
        img_logo:
            "/imgs/service/service_type_icons/Services_Icons-OfficialDepartments.svg",
        url: "/services/mining/officialDepartment"
    },
    {
        id: 2,
        title: "MINES",
        img_logo: "/imgs/service/service_type_icons/Services_Icons-Mines.svg",
        url: "/services/mining/mines"
    },
    {
        id: 3,
        title: "PETROLEUM & GAS",
        img_logo:
            "/imgs/service/service_type_icons/Services_Icons-Petroleum.svg",
        url: "/services/mining/gas"
    },
    {
        id: 4,
        title: "AGRICULTURE",
        img_logo:
            "/imgs/service/service_type_icons/Services_Icons-Agriculture.svg",
        url: "/services/mining/agriculture"
    }
];

class Mining extends React.Component {
    constructor(props) {
        super(props);

        console.log(props.data);

        const { data, randomise } = this.props;

        this.goUp = this.goUp.bind(this);
        this.goDown = this.goDown.bind(this);
    }
    styles = {
        mainSectionRow: {
            display: "flex",
            alignItems: "left",
            justifyContent: "center",
            height: "25%",
            width: "100%",
            borderBottom: "1px solid lightBlue"
        },
        mainIcon: {
            width: "25%",
            height: "100%",
            padding: "3%"
        },
        mainTitleContainer: {
            width: "70%",
            height: "100%",
            paddingLeft: "3%",
            alignItems: "center",
            display: "flex"
        },
        horizontalVerticalCenter: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        linkStyle: {
            display: "flex",
            width: "100%",
            textDecoration: "none"
        }
    };

    render() {
        const {
            numberOfEntries,
            sideButtons,
            sideTitle,
            mainTitle,
            namespace
        } = this.props;
        return (
            <div style={{ height: "54vh" }}>
                <div style={{ width: "100%", height: "100%", display: "flex" }}>
                    <div
                        style={{
                            backgroundColor: HeavyOrange,
                            width: "14%",
                            height: "100%",
                            boxShadow: "9.899px 0px 7px 0px rgba(0,0,0,0.6)",
                            zIndex: 1,
                            display: "flex",
                            flexDirection: "column"
                        }}
                    >
                        <div>
                            <Link
                                style={{ textDecoration: "none" }}
                                to="/Services"
                            >
                                <div className="leftSide-menu--container">
                                    <img
                                        className="leftSide-menu--img"
                                        src={ServiceTypesIcon}
                                        alt="SERVICE TYPES"
                                    />
                                    <div className="menu-title">
                                        SERVICE TYPES
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="vertical-title">
                            <span style={{ transform: "rotate(-90deg)" }}>
                                SERVICES
                            </span>
                        </div>
                    </div>

                    <div className="main-section">
                        <div className="main-section--top">
                            <div
                                className="main-section--top--title"
                                style={{
                                    // height: "8%",
                                    // backgroundColor: LightOrange,

                                    ...this.styles.horizontalVerticalCenter
                                }}
                            >
                                MINING & RESOURCES
                            </div>
                            <div
                                className="main-section--upBtn"
                                style={{
                                    height: "6%",
                                    backgroundColor: MediumOrange,
                                    ...this.styles.horizontalVerticalCenter
                                }}
                                onClick={this.goUp}
                            >
                                <img
                                    src={UpButton}
                                    style={{ width: "5%" }}
                                    alt="Up"
                                />
                            </div>
                        </div>

                        <div className="main-section--middle">
                            <div style={{ ...this.styles.mainSectionRow }}>
                                <Link
                                    to={miningList[0].url}
                                    style={{
                                        ...this.styles.linkStyle
                                    }}
                                >
                                    <div style={{ ...this.styles.mainIcon }}>
                                        <img
                                            style={{
                                                width: "100%",
                                                height: "100%"
                                            }}
                                            src={miningList[0].img_logo}
                                            alt="Bank Icon"
                                        />
                                    </div>
                                    <div
                                        style={{
                                            ...this.styles.mainTitleContainer
                                        }}
                                    >
                                        <h4 style={{ color: "white" }}>
                                            {miningList[0].title}
                                        </h4>
                                    </div>
                                </Link>
                            </div>

                            <div style={{ ...this.styles.mainSectionRow }}>
                                <Link
                                    to={miningList[1].url}
                                    style={{
                                        ...this.styles.linkStyle
                                    }}
                                >
                                    <div style={{ ...this.styles.mainIcon }}>
                                        <img
                                            style={{
                                                width: "100%",
                                                height: "100%"
                                            }}
                                            src={miningList[1].img_logo}
                                            alt="Medical Icon"
                                        />
                                    </div>
                                    <div
                                        style={{
                                            ...this.styles.mainTitleContainer
                                        }}
                                    >
                                        <h4 style={{ color: "white" }}>
                                            {miningList[1].title}
                                        </h4>
                                    </div>
                                </Link>
                            </div>
                            <div style={{ ...this.styles.mainSectionRow }}>
                                <Link
                                    to={miningList[2].url}
                                    style={{ ...this.styles.linkStyle }}
                                >
                                    <div style={{ ...this.styles.mainIcon }}>
                                        <img
                                            style={{
                                                width: "100%",
                                                height: "100%"
                                            }}
                                            src={miningList[2].img_logo}
                                            alt="Medical Icon"
                                        />
                                    </div>
                                    <div
                                        style={{
                                            ...this.styles.mainTitleContainer
                                        }}
                                    >
                                        <h4 style={{ color: "white" }}>
                                            {miningList[2].title}
                                        </h4>
                                    </div>
                                </Link>
                            </div>
                            <div style={{ ...this.styles.mainSectionRow }}>
                                <Link
                                    // to={`/services/transport/passenger-airline-service`}
                                    to={miningList[3].url}
                                    style={{ ...this.styles.linkStyle }}
                                >
                                    <div style={{ ...this.styles.mainIcon }}>
                                        <img
                                            style={{
                                                width: "100%",
                                                height: "100%"
                                            }}
                                            src={miningList[3].img_logo}
                                            alt="Medical Icon"
                                        />
                                    </div>
                                    <div
                                        style={{
                                            ...this.styles.mainTitleContainer
                                        }}
                                    >
                                        <h4 style={{ color: "white" }}>
                                            {miningList[3].title}
                                        </h4>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div
                            className="main-section--bottom"
                            style={{
                                height: "6%",
                                backgroundColor: MediumOrange,
                                ...this.styles.horizontalVerticalCenter
                            }}
                            onClick={this.goDown}
                        >
                            <img
                                src={DownButton}
                                style={{ width: "5%" }}
                                alt="Down"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Mining;
