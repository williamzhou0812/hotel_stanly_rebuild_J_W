import React from "react";
import {
    diningNamespace,
    imageGallery,
    HeavyOrange,
    ExtraHeavyBlueGreen,
    LightBlueGreen
} from "../../../Constants";
import { Link } from "react-router-dom";
import RestaurantListIcon from "./icons/RestaurantListIcon.png";
import MapModal from "../Maps/MapModal";
import {restaurants } from "./DiningData";


import "../List/MainSectionList.scss";
import "./Dining.scss";

class DiningDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            map: false
        };
        this.openMap = this.openMap.bind(this);
        this.closeMap = this.closeMap.bind(this);
    }

    openMap() {
        this.setState({ map: true });
    }

    closeMap() {
        this.setState({ map: false });
    }
    // const properties = {
    //     duration: 5000,
    //     transitionDuration: 500,
    //     infinite: true,
    //     indicators: true,
    //     arrows: true,
    //     onChange: (oldIndex, newIndex) => {
    //         console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    //     }
    // }

    styles = {
        horizontalVerticalCenter: {
            display: "flex",
            justifyContent: "center"
        },
        slider: {
            height: "100%",
            duration: 10000,
            transitionDuration: 500,
            infinite: "true",
            indicators: "true",
            arrows: "true",
            onChange: (oldIndex, newIndex) => {
                //console.log(`slide transition from ${oldIndex} to ${newIndex}`);
            }
        },
        mapOrFindButtonStyle: {
            backgroundColor: HeavyOrange,
            display: "flex",
            width: "100%",
            padding: "5% 0",
            marginTop: "-5%",
            borderRadius: "5px",
            boxShadow: "0px 0px 10px 1px rgba(0,0,0,0.5)",
            color: "white",
            justifyContent: "center"
        },
        mapOrFindButtonText: {
            letterSpacing: "2px",
            fontSize: "18px",
            fontWeight: "bold"
        }
    };
    
    renderImages(restaurant) {
        const {  images } = restaurant;
        if (images.length > 1) {
            return imageGallery(images, "100%", "27vh");
        }
        else if (images.length === 1) {
            return (<img src={images[0].imageFile} style={{ height: '100%', width: '100%' }} alt=""/>);
        }
        else {
            return (
                <div
                    style={{
                        backgroundColor: HeavyOrange,
                        height: "100%",
                        padding: "30px"
                    }}
                >
                    <h1>NO IMAGE FOR THIS RESTAURANT</h1>
                </div>
            );
        }
    }
    
    render() {
        const id = this.props.match.params.id;
        const _id = parseInt(id);
        const _DingingsDetails = restaurants.find(item => item.id === _id);
        
        return (
            <div style={{
                    width: "100%",
                    height: "54vh",
                    display: "flex",
                    color: "white"
                }}
                className="section--bottom--animation"
            >
                <div className="vertical-side"
                    style={{
                        backgroundColor: HeavyOrange,
                        width: "14%",
                        height: "100%",
                        boxShadow: "9.899px 0px 7px 0px rgba(0,0,0,0.6)",
                        zIndex: 1,
                        flexDirection: "column",
                        display: "flex"
                    }}
                >
                    <div>
                        <Link
                            style={{ height: "14%", textDecoration: "none" }}
                            to={diningNamespace}
                        >
                            <div className="leftSide-menu--container">
                                <img
                                    className="leftSide-menu--img"
                                    src={RestaurantListIcon}
                                    alt="Restaurant List Icon"
                                />
                                <div
                                style={{
                                    letterSpacing: "2px"
                                }}
                                >
                                    <p
                                        className="menu-title"
                                    
                                    >
                                        RESTAURANT LIST 
                                    </p>
                                    <p
                                        className="menu-title"
                                    
                                    >
                                        
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="vertical-title ">
                        <span
                            style={{
                                transform: "rotate(-90deg)"
                            }}
                        >
                            DINING
                        </span>
                    </div>
                </div>
                <div >
                    <div className='event-main'>
                        <div style={{ height: "50%", width: "100%" }}>
                            {this.renderImages(_DingingsDetails)}
                        </div>
                        <div style={{ height: "50%", width: "100%" }}>
                            <div
                                style={{
                                    height: "50%",
                                    backgroundColor: LightBlueGreen,
                                    display: "flex"
                                }}
                            >
                                <div
                                style={{
                                    flexBasis: "50%",
                                    borderRight:
                                        "1px solid rgb(105,194,209)",
                                    padding: "0px"
                                }}
                                >
                                    
                                    <div className="middle-section--leftSide"
                                        style={{
                                            height: "100%",
                                            padding: "0px"
                                        }}
                                    >
                                        <div style={{
                                                width: "100%",
                                                height: "100%",
                                                backgroundImage: `url('${_DingingsDetails.img_url}')`,
                                                backgroundSize: "100%",
                                                backgroundPosition: "center"
                                            }}>
                                        </div>
                                    </div>
                                </div>
                                <div style={{
                                    flexBasis: "50%",
                                    padding: "25px 0px 0px 25px"
                                }}
                                >
                                    <div className="middle-section--rightSide"
                                        style={{
                                            height: "38%",
                                            letterSpacing: "1px",
                                            overflow: "scroll",
                                            display: "inline-table"
                                        }}
                                    >
                                        {_DingingsDetails.phone && (
                                            <p className="contact-details">
                                                Call Today: {_DingingsDetails.phone}
                                            </p>
                                        )}
                                        {_DingingsDetails.website && (
                                            <p className="contact-details">
                                                {_DingingsDetails.website}
                                            </p>
                                        )}

                                        {_DingingsDetails.address && (
                                            <p className="contact-details">
                                                {_DingingsDetails.address}
                                            </p>
                                        )}

                                        {_DingingsDetails.mapImage && (
                                        <div style={{marginTop: "70px"}}>
                                            <div className="middle-section--btnContainer">
                                                <div className="middle-section--btnContainer--btn">
                                                    <MapModal
                                                        buttonTitle={_DingingsDetails.title.toUpperCase() + " MAP"}
                                                        title={_DingingsDetails.title}
                                                        buttonStyle={
                                                            this.styles
                                                                .mapOrFindButtonStyle
                                                        }
                                                        textStyle={
                                                            this.styles
                                                                .mapOrFindButtonText
                                                        }
                                                        mapImage={_DingingsDetails.mapImage}
                                                    />
                                                </div>
                                            </div>
                                        </div>)}
                                    
                                    </div>

                                </div>

                            </div>
                            <div
                                style={{
                                    height: "50%",
                                    backgroundColor: ExtraHeavyBlueGreen,
                                    display: "flex"
                                }}
                            >
                                <div
                                    style={{
                                        flexBasis: "50%",
                                        padding: "25px 0px 0px 35px",
                                        overflowY: "auto"
                                    }}
                                >
                                    {false && (<div
                                        className="middle-section--innerTitle"
                                        style={{
                                            height: "15%"
                                        }}
                                    >
                                        
                                        {/* <span>{eventDetail.month}</span> */}
                                    </div>)}
                                    <div className="middle-section--leftSide"
                                        style={{
                                            height: "75%",
                                            overflow: "scroll",
                                            display: "inline-table"
                                        }}
                                    >
                                        <div
                                            dangerouslySetInnerHTML={{__html: _DingingsDetails.synopsis}}
                                            style={{
                                                marginTop: 0,
                                                marginBottom: 0
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                <div style={{
                                    flexBasis: "50%",
                                    padding: "25px 0px 0px 25px"
                                }}
                                >
                                    {false && (<div style={{ height: "15%" }} />)}
                                    
                                    <div className="middle-section--rightSide"
                                        style={{
                                            height: "38%",
                                            letterSpacing: "1px",
                                            overflow: "scroll",
                                            display: "inline-table",
                                            width: "100%"
                                            // fontSize: "2vw"
                                        }}
                                    >
                                        {_DingingsDetails.guide.cuisine && (
                                            <div>
                                                CUISINE: {_DingingsDetails.guide.cuisine}
                                            </div>
                                        )}
                                        <div style={{
                                                display: "inline-table",
                                                width: "35%"
                                            }}>
                                            <div>TAKEAWAY: {_DingingsDetails.guide.takeaway} </div>
                                        </div>
                                        <div style={{
                                                display: "inline-table",
                                                width: "30%"
                                            }}>
                                            <div>WIFI: {_DingingsDetails.guide.wifi} </div>
                                        </div>
                                        <div style={{
                                                display: "inline-table",
                                                width: "35%"
                                            }}>
                                            <div>PARKING: {_DingingsDetails.guide.parking} </div>
                                        </div>
                                        
                                        {_DingingsDetails.guide.courtesy && (
                                            <div>COURTESY TRANSPORT: {_DingingsDetails.guide.courtesy} </div>
                                        )}
                                        {_DingingsDetails.guide.cards && (
                                            <div>CARDS ACCEPTED: {_DingingsDetails.guide.cards} </div>
                                        )}
                                        {_DingingsDetails.guide.price && (
                                            <div>
                                                PRICE GUIDE:<br/> {_DingingsDetails.guide.price}
                                            </div>
                                        )}
                                        
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default DiningDetail;
