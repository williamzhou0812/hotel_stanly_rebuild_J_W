import React from "react";
import DownButton from "../../MainContents/Destination/icons/DownExploreButton.png";
import UpButton from "../../MainContents/Destination/icons/UpExploreButton.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import MapModal from "../Maps/MapModal";
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
} from "../../../Constants";
import SidebarMapModel from "./../Maps/SidebarMapModel";
import "./MainSectionList.scss";

class SubsectionList extends React.Component {
    constructor(props) {
        super(props);

        const { data, randomise } = this.props;

        this.state = {
            data: randomise ? randomiseButKeepOrder(data) : data
        };
        this.goUp = this.goUp.bind(this);
        this.goDown = this.goDown.bind(this);
    }
    goUp() {
        let items = this.state.data.slice();
        items = shiftArray(items, 1);
        this.setState({
            data: items
        });
    }
    goDown() {
        let items = this.state.data.slice();
        items = shiftArray(items, -1);
        this.setState({
            data: items
        });
    }
    styles = {
        horizontalVerticalCenter: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }
    };
    render() {
        const { data } = this.state;
        const {
            numberOfEntries,
            sideButtons,
            sideTitle,
            mainTitle,
            namespace
        } = this.props;
        const itemHeight = `${100 / numberOfEntries}%`;
        let toRender = data.slice();
        // if (data.length < numberOfEntries) {
        //     toRender = addNullItemToData(data, numberOfEntries);
        // }
        let hasRenderedAdvertiseWithUs = false;
        return (
            <div
                style={{ width: "100%", height: "100%", display: "flex" }}
                className="section--bottom--animation"
            >
                <div
                    style={{
                        backgroundColor: HeavyOrange,
                        width: "14%",
                        boxShadow: "9.899px 0px 7px 0px rgba(0,0,0,0.6)",
                        zIndex: 1,
                        display: "flex",
                        flexDirection: "column"
                    }}
                >
                    {sideButtons.length > 0 &&
                        sideButtons.map((item, index) => {
                            if (item.isLink) {
                                return (
                                    <Link
                                        style={{
                                            textDecoration: "none"
                                        }}
                                        key={index}
                                        to={item.link}
                                    >
                                        <div className="leftSide-menu--container">
                                            <img
                                                className="leftSide-menu--img"
                                                src={item.icon}
                                                alt=""
                                            />
                                            <div className="menu-title">
                                                {item.title}
                                            </div>
                                        </div>
                                    </Link>
                                );
                            } else if (item.isClick) {
                                return (
                                    <div key={index} onClick={item.onClick}>
                                        <div className="leftSide-menu--container">
                                            <img
                                                style={{ height: "100%" }}
                                                className="leftSide-menu--img"
                                                src={item.icon}
                                                alt=""
                                            />
                                            <div className="menu-title">
                                                {item.title}
                                            </div>
                                        </div>
                                    </div>
                                );
                            } else if (item.isMap) {
                                return (
                                    <SidebarMapModel
                                        item={item}
                                        mainTitle={mainTitle}
                                        // maps={maps}
                                    />
                                );
                            } else {
                                return (
                                    <div key={index}>
                                        <div className="leftSide-menu--container">
                                            <img
                                                className="leftSide-menu--img"
                                                src={item.icon}
                                                alt=""
                                            />
                                            <div className="menu-title">
                                                {item.title}
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    <div className="vertical-title">
                        <span style={{ transform: "rotate(-90deg)" }}>
                            {sideTitle}
                        </span>
                    </div>
                </div>
                <div style={{ width: "86%" }}>
                    <div
                        className="middle-section--title"
                        style={{
                            height: "8%",
                            backgroundColor: LightOrange,

                            ...this.styles.horizontalVerticalCenter
                        }}
                    >
                        {mainTitle}
                    </div>
                    <div
                        style={{
                            height: "6%",
                            backgroundColor: MediumOrange,
                            ...this.styles.horizontalVerticalCenter
                        }}
                        onClick={this.goUp}
                    >
                        <img src={UpButton} style={{ width: "46.5px", height: "46.5px" }} alt="Up" />
                    </div>
                    <div
                        style={{
                            height: "80%",
                            overflow: "auto",
                            backgroundColor: HeavyBlue
                        }}
                    >
                        {data.map((item, index) => {
                            let imageSrc = null;

                            return (
                                <Link
                                    style={{ textDecoration: "none" }}
                                    to={`${namespace}/${index}`}
                                    key={`${item.id}-${index}`}
                                    // imageSrc={`${item.imgSrc}`}
                                    // backgroundImage={ `url(${
                                    // images[index]
                                    // })`}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            borderBottom: "1px solid white"
                                        }}
                                    >
                                        <div>
                                            <div
                                                style={{
                                                    backgroundImage: `url(${imageSrc})`,
                                                    backgroundSize: "cover",
                                                    backgroundPosition: "center"
                                                }}
                                            >
                                                <img
                                                    src={item.img_url}
                                                    alt={item.event_title}
                                                    style={{
                                                        width: "auto",
                                                        height: "9.3vh"
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        {/* <div className="subSection--title"><div>{item.event_title}</div> <div>{item.month}</div> </div> */}
                                        <div className="subSection--title">
                                            <div
                                                style={{
                                                    fontSize: "2.25vw",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                {item.title}
                                            </div>
                                            <div
                                                style={{
                                                    fontSize: "2.1vw",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                {item.subTitle}
                                            </div>{" "}
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                    <div
                        style={{
                            height: "6%",
                            backgroundColor: MediumOrange,
                            ...this.styles.horizontalVerticalCenter
                        }}
                        onClick={this.goDown}
                    >
                        <img
                            src={DownButton}
                            style={{ width: "46.5px", height: "46.5px" }}
                            alt="Down"
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default SubsectionList;
