import React from "react";
import {
    DECIMAL_RADIX,
    diningNamespace,
    imageGallery,
    HeavyOrange,
    LightBlueButtonBackground,
    ExtraHeavyBlueGreen,
    LightOrange
} from "../../../../../Constants";
import { Link } from "react-router-dom";
import ServiceTypesIcon from "../../icons/ServiceTypesIcon.png";
import ESSENTIAL_ICON from "../../icons/ESSENTIAL_ICON.png";
import IconsMines from "../../../icons/MINING_ICON.png";
import IconsPetroleum from "../../../icons/ServicesIcons-Petroleum.svg";
//import RestaurantListIcon from "./icons/RestaurantListIcon.png";
import MapModal from "../../../Maps/MapModal";
import Markdown from "../../../../../MarkDown";
import { border, borderBottom } from "@material-ui/system";

class PetroleumgasDetail extends React.Component {
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
                console.log(`slide transition from ${oldIndex} to ${newIndex}`);
            }
        },
        mapButtonStyle: {
            width: "100%",
            //  height: "100%",
            padding: "2%",
            marginBottom: "5%",
            borderRadius: "5px",
            boxShadow: "0px 0px 10px 1px rgba(0,0,0,0.5)",
            backgroundColor: LightBlueButtonBackground,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        mapButtonTextStyle: {
            fontSize: "2vw",
            fontWeight: "bold"
        }
    };

    petroleumgasData = [
        {
            id: "1",
            slideImages: "/imgs/service/petroleumgas/S3C-HeaderImage.jpg",
            title: "Oil Search Ltd",
            img_url: "/imgs/service/petroleumgas/S3C1-OilSearchLtd.jpg",
            mapImage: "/imgs/maps/S3C1-PNG-Map-OilSearch.png",
            synopsis:
                "Oil Search was established in back in 1929 and manages the operation of all of PNG’s established oil fields.",
            contact: {
                contactId: " ",
                call: "+675 322 5599",
                web: "www.oilsearch.com",
                email: " ",
                location:
                    "PNG Registered Office Oil Search (PNG) Limit Ground Floor, Harbourside East Building, Stanley Esplanade, Port Moresby, Papua New Guinea PO Box 842, Port Moresby, NCD 121, Papua New Guinea"
            }
        },
        {
            id: "2",
            slideImages: "/imgs/service/petroleumgas/S3C-HeaderImage.jpg",
            title: "Esso highlands Ltd",
            img_url: "/imgs/service/petroleumgas/S3C2-EssoHighlandsLtd.jpg",
            mapImage: "/imgs/maps/S3C2-PNG-Map-ExxonMobil.png",
            synopsis:
                "ExxonMobile PNG manages the PNG LNG project which is developing a commercial industry for gas resources in the region.",
            contact: {
                call: "+675 309 711",
                web: "pnglng.com",
                email: " ",
                location: "GPO Box 118 Port Moresby, NCD, Papua New Guinea"
            }
        }
    ];

    render() {
        let petroleumgasDetail = this.petroleumgasData[
            parseInt(this.props.match.params.id)
        ];
        //   const { restaurant, status } = this.props;
        return (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    color: "white"
                }}
                className="section--bottom--animation"
            >
                <div className="left-vertical-nav">
                    <Link style={{ textDecoration: "none" }} to="/Services">
                        <div className="leftSide-menu--container">
                            <img
                                className="leftSide-menu--img"
                                src={ServiceTypesIcon}
                                alt="SERVICE TYPES ICON"
                            />
                            <div className="menu-title">SERVICE TYPES</div>
                        </div>
                    </Link>
                    <Link
                        style={{ textDecoration: "none" }}
                        to="/Services/mining"
                    >
                        <div className="leftSide-menu--container">
                            <img
                                className="leftSide-menu--img"
                                src={IconsMines}
                                alt="SERVICES ICON"
                            />

                            <div className="menu-title">ESSENTIAL SERVICES</div>
                        </div>
                    </Link>
                    <Link
                        style={{ textDecoration: "none" }}
                        to="/Services/mining/gas"
                    >
                        <div className="leftSide-menu--container">
                            <img
                                className="leftSide-menu--img"
                                src={IconsPetroleum}
                                alt="MINING ICON"
                            />

                            <div className="menu-title">MINING & RESOURCES</div>
                        </div>
                    </Link>
                    <div className="vertical-title">
                        <span style={{ transform: "rotate(-90deg)" }}>
                            SERVICES
                        </span>
                    </div>
                </div>

                <div
                    style={{
                        flex: 1,
                        width: "100%",
                        height: "54vh",
                        backgroundColor: "rgb(5, 151, 165)"
                    }}
                >
                    <div
                        className="services-main-img"
                        style={{ height: "50%" }}
                    >
                        <div
                            style={{ height: "100%", width: "100%" }}
                            className="slide-container"
                        >
                            <img
                                style={{ height: "100%", width: "100%" }}
                                src={petroleumgasDetail.slideImages}
                            />
                        </div>
                    </div>
                    <div
                        className="services-main-content"
                        style={{ height: "50%", width: "100%" }}
                    >
                        <div
                            style={{
                                height: "30%",
                                width: "100%",
                                display: "flex"
                            }}
                        >
                            <div
                                className="main-top--left"
                                style={{
                                    flexBasis: "30%",
                                    backgroundImage: `url('${petroleumgasDetail.img_url}')`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}
                            />
                            <div
                                className="main-top--right"
                                style={{
                                    flexBasis: "70%",
                                    backgroundColor: LightBlueButtonBackground,
                                    display: "flex",
                                    border: "1px solid lightblue"
                                }}
                            >
                                <h4
                                    style={{
                                        display: "flex",
                                        fontSize: "3.2vw",
                                        paddingLeft: "5%",
                                        alignItems: "center",
                                        whiteSpace: "nowrap"
                                    }}
                                >
                                    {petroleumgasDetail.title}
                                </h4>

                                <div>
                                    <div
                                        style={{
                                            //  height: "50%",
                                            padding: "0 5%"
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{ height: "80%", padding: "0" }}
                            className="main-bottom"
                        >
                            <div
                                className="main-bottom--left"
                                style={{ padding: "3% 4%" }}
                            >
                                {petroleumgasDetail.synopsis}
                            </div>

                            <div
                                className="main-bottom--right"
                                style={{
                                    padding: "3% 4%",
                                    borderLeft: "1px solid lightblue"
                                }}
                            >
                                <div
                                    style={{
                                        height: "70%",
                                        overflow: "hidden"
                                    }}
                                >
                                    <p
                                        style={{
                                            display: "block",
                                            marginBottom: "3%",
                                            fontSize: "1.5vw"
                                        }}
                                    >
                                        CALL TODAY:{" "}
                                        {petroleumgasDetail.contact.call}
                                    </p>
                                    <p
                                        style={{
                                            display: "block",
                                            marginBottom: "3%",
                                            wordBreak: "break-word",
                                            fontSize: "1.5vw"
                                        }}
                                    >
                                        WEB: {petroleumgasDetail.contact.web}
                                    </p>
                                    <p
                                        style={{
                                            display: "block",
                                            marginBottom: "3%",
                                            wordBreak: "break-word",
                                            fontSize: "1.5vw"
                                        }}
                                    >
                                        EMAIL:
                                        {petroleumgasDetail.contact.email}
                                    </p>
                                    <p
                                        style={{
                                            display: "block",
                                            marginBottom: "3%",
                                            wordBreak: "break-word",
                                            fontSize: "1.5vw"
                                        }}
                                    >
                                        LOCATION:
                                        {petroleumgasDetail.contact.location}
                                    </p>
                                </div>
                                <div style={{ height: "20%" }}>
                                    <MapModal
                                        buttonTitle={`${petroleumgasDetail.title} MAP`}
                                        title="SEE MAP"
                                        buttonStyle={{
                                            // backgroundColor: HeavyOrange,
                                            width: "100%",
                                            // height: "50%",
                                            padding: "3% 0",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            boxShadow:
                                                "0px 0px 10px 1px rgba(0,0,0,0.5)",
                                            borderRadius: "5px"
                                        }}
                                        mapImage={petroleumgasDetail.mapImage}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default PetroleumgasDetail;
