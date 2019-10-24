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
    MAX_ZOOM_LEVEL,
    MAP_HEIGHT,
    MAP_WIDTH,
    HOVER_DELAY
} from "../../../Constants";
import { MuiThemeProvider } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import SidebarMapModel from "./../Maps/SidebarMapModel";
import "./MainSectionList.scss";
import { Modal } from "react-bootstrap";
import ReactImageMagnify from 'react-image-magnify';


class SubsectionMapList extends React.Component {
    constructor(props) {
        super(props);

        const { data, randomise } = this.props;

        this.state = {
            data: randomise ? randomiseButKeepOrder(data) : data,
            showModal: false,
            map: null
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

    openMap  = (map) =>  {

        this.setState({ showModal:true, map: map });
    }
    closeMap = () => {
        //map close
        this.setState({
            showModal: false,
            map: null
        })
    }
    render() {
        const { data } = this.state;
        const {
            sideButtons,
            sideTitle,
            mainTitle,
            thumbnailStyle = { width: "auto", height: "9.3vh"}
        } = this.props;
        
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
                            const thumbnailBgStyle = { 
                                ...thumbnailStyle, 
                                backgroundImage: 'url(\'' + item.img_url + '\')',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center center'}
                            return (
                                
                                <div key={index}
                                    onClick={() => this.openMap(item)}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        borderBottom: "1px solid white"
                                    }}
                                >
                                    <div>
                                        <div style={thumbnailBgStyle}>
                                            
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
                <Modal
                    className="modal-100"  
                    show={this.state.showModal}
                    onHide={() => this.closeMap()}
                    dialogClassName="map-modal">
                    <Modal.Body>
                        <div style={{                                         
                                position: 'absolute',
                                right: 0,
                                top: 0,
                                border: '16px solid white'
                            }} 
                        >
                            <div style={{ width:"100%",  position: "absolute", right: 0, top: 0 }}>
                                <MuiThemeProvider>
                                    <CloseIcon
                                        onClick={() => this.closeMap()}
                                        style={{
                                            padding: 0,
                                            height: 32,
                                            width: 32,
                                            color: "white",
                                            float: "right",
                                            marginRight: "20px",
                                            marginTop: "20px"
                                        }}
                                    />
                                </MuiThemeProvider>
                            </div>
                            {this.state.map && (
                            <Fragment>
                                <div className="map-title">
                                    MAP OF
                                    <br />
                                    {this.state.map.title.toUpperCase()}
                                </div>
                                <ReactImageMagnify
                                    {...{
                                        smallImage: {
                                            alt: `Map of ${this.state.map.title}`,
                                            isFluidWidth: true,
                                            src: this.state.map.mapImage
                                        },
                                        largeImage: {
                                            src: this.state.map.mapImage,
                                            width: MAX_ZOOM_LEVEL * MAP_WIDTH,
                                            height: MAX_ZOOM_LEVEL * MAP_HEIGHT
                                        },
                                        hoverOffDelayInMs: HOVER_DELAY,
                                        enlargedImagePosition: "over",
                                        isHintEnabled: true,
                                        isActivatedOnTouch: true,
                                        shouldHideHintAfterFirstActivation: false,
                                        hintTextMouse: "Long-Touch to Zoom"
                                    }}
                                />
                                <div
                                    style={{
                                        backgroundColor: "rgb(13,109,121)",
                                        color: "rgb(107,193,209)",
                                        padding: 5,
                                        textAlign: "center"
                                    }}
                                >
                                    TAP OUTSIDE OF MAP TO CLOSE
                                </div>
                            </Fragment>
                            )}
                            
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}
export default SubsectionMapList;
