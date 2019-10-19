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
import IconsDepartment from "../../../icons/Services_Icons-OfficialDepartments.svg";
//import RestaurantListIcon from "./icons/RestaurantListIcon.png";
import MapModal from "../../../Maps/MapModal";
import Markdown from "../../../../../MarkDown";
import { border, borderBottom, textAlign } from "@material-ui/system";

class AgricultureDetails extends React.Component {
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

    agricultureData = {
        id: "1",
        slideImages: "/imgs/service/S3D-HeaderImage.jpg",
        title: "Ramu Agri Industries Ltd",
        img_url: "/imgs/service/agriculture/S3D1-RamuAgriIndustriesLtd.jpg",
        mapImage: "/imgs/maps/S3D1-PNG-Map-RAMUAGRIINDUSTRIES.png",
        synopsis:
            "Ramu Sugar, PNG’s only locally grown and manufactured sugar, is operated by Ramu Agri Industries Ltd (RAIL). Aside from sugar, the company also produces Ramu Premium Beef, Ramu Palm Oil and Ramu Ethanol.",
        contact: {
            contactId: " ",
            call: "+675 4743299",
            web: "www.nbpol.com.pg",
            email: "rbeerwald@rai.com.pg",
            location: "Gusap Downs, PO Box 2183 Lae, 411 Papua New Guinea"
        }
    };

    render() {
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

                            <div className="menu-title">MINING & RESOURCES</div>
                        </div>
                    </Link>
                    {/* <Link
                        style={{ textDecoration: "none" }}
                        to="/Services/mining/officialDepartment"
                    >
                        <div className="leftSide-menu--container">
                            <img
                                className="leftSide-menu--img"
                                src={IconsDepartment}
                                alt="Departments ICON"
                            />

                            <div className="menu-title">
                                OFFICIAL DEPARTMENTS
                            </div>
                        </div>
                    </Link> */}
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
                                src={this.agricultureData.slideImages}
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
                                    backgroundImage: `url('${this.agricultureData.img_url}')`,
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
                                        textAlign: "left"
                                        //  whiteSpace: "nowrap"
                                    }}
                                >
                                    {this.agricultureData.title}
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
                                {this.agricultureData.synopsis}
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
                                        {this.agricultureData.contact.call}
                                    </p>
                                    <p
                                        style={{
                                            display: "block",
                                            marginBottom: "3%",
                                            wordBreak: "break-word",
                                            fontSize: "1.5vw"
                                        }}
                                    >
                                        WEB: {this.agricultureData.contact.web}
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
                                        {this.agricultureData.contact.email}
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
                                        {this.agricultureData.contact.location}
                                    </p>
                                </div>
                                <div style={{ height: "20%" }}>
                                    <MapModal
                                        buttonTitle="SEE MAP"
                                        title={this.agricultureData.title}
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
                                        mapImage={this.agricultureData.mapImage}
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
export default AgricultureDetails;
