import React, { Fragment } from "react";
import DownButton from "../../MainContents/Destination/icons/DownExploreButton.png";
import UpButton from "../../MainContents/Destination/icons/UpExploreButton.png";
import { Link } from "react-router-dom";
import {
    MediumOrange,
    shiftArray,
    HeavyBlue,
    HeavyOrange,
    LightOrange,
    randomiseButKeepOrder,
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
            sideButtons,
            sideTitle,
            mainTitle,
            namespace,
            thumbnailStyle = { width: "auto", height: "9.3vh"},
            titleWrap = false,
            itemTitleStyle = {},
            itemTitleDivStyle = {}
        } = this.props;
        const titleStyle = (titleWrap) ? 'normal' : 'nowrap';
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
                                if (item.map.length > 0) {
                                    return (
                                        <SidebarMapModel
                                            key={index}
                                            item={item}
                                            mainTitle={mainTitle}
                                            mapImage={item.map}
                                        />
                                    );
                                }
                                else {
                                    return (<Fragment key={index}/>);
                                }                                
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
                            
                            const thumbnailBgStyle = { 
                                ...thumbnailStyle, 
                                backgroundImage: 'url(\'' + item.img_url + '\')',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center center'}
                
                            return (
                                <Link
                                    style={{ textDecoration: "none" }}
                                    to={(this.props.urlKey) ? item[this.props.urlKey] : `${namespace}/${item.id}`}
                                    key={`${item.id}-${index}`}
                                
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            borderBottom: "1px solid white"
                                        }}
                                    >
                                        <div>
                                            {item.isIcon && (
                                                <div style={thumbnailStyle}>
                                                    <div >
                                                        <img src={item.img_url} style={this.props.iconStyle} alt=""/>
                                                    </div>
                                                </div>
                                            )}
                                            {!item.isIcon && (
                                                <div
                                                style={thumbnailBgStyle}
                                            >
                                            </div>
                                            )}                                           
                                        </div>                                        
                                        {item.isIcon && item.icon_title && (
                                            <div className="subSection--icon-title" style={this.props.iconTitleStyle}>
                                                {item.icon_title}
                                            </div>
                                        )}                                        
                                        {/* <div className="subSection--title"><div>{item.event_title}</div> <div>{item.month}</div> </div> */}
                                        <div className="subSection--title" style={itemTitleDivStyle}>
                                            <div
                                                style={{
                                                    fontSize: "2.25vw",
                                                    whiteSpace: titleStyle,
                                                    ...itemTitleStyle
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
