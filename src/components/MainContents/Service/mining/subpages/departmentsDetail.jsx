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

class DepartmentsDetails extends React.Component {
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

    departmentsData = [
        {
            id: "1",
            slideImages: "/imgs/service/S3B-HeaderImage.jpg",
            title: "Papua New Guinea Chamber of Trade & Industry (PNGCTI)",
            img_url: "/imgs/service/officialdepartments/S3B1-PNGCTI.jpg",
            mapImage: " ",
            synopsis:
                "The Papua New Guinea Chamber of Commerce and Industry Inc. (PNGCCI) is a government body that is committed to the development of trade and commerce in PNG.",
            contact: {
                contactId: " ",
                call: "+675 321 3057",
                web: "www.pngcci.org.pg ",
                email: " ",
                location: " "
            }
        },
        {
            id: "2",
            slideImages: "/imgs/service/S3B-HeaderImage.jpg",
            title: "Department of Labour & Industrial Relations",
            img_url:
                "/imgs/service/officialdepartments/S3B2-DepartmentOfLabour.jpg",
            mapImage: " ",
            synopsis:
                "Department of Labour and Industrial Relations is a PNG body that strives to create positive industrial relations and support work opportunities throughout the region.",
            contact: {
                call: "+675 321 2817",
                web:
                    "www.facebook.com/pg/PngDepartmentOfLabourIndustrialRelation",
                email: " ",
                location:
                    "P.O Box 5644, Boroko, National Capital District Port Moresby, Papua New Guinea"
            }
        },
        {
            id: "3",
            slideImages: "/imgs/service/S3B-HeaderImage.jpg",
            title: "Department of Mineral Policy & Geohazards Management",
            img_url: "/imgs/service/officialdepartments/S3B3-DMPGM.jpg",
            mapImage: " ",
            synopsis:
                "The Department of Mineral Policy and Geohazards Management is a government body that oversees mining legislation and the management of geohazards.",
            contact: {
                call: "+675 322 7664",
                web: "",
                email: " ",
                location:
                    "Private Mail Bag of Port Moresby NCD Papua New Guinea"
            }
        },
        {
            id: "4",
            slideImages: "/imgs/service/S3B-HeaderImage.jpg",
            title: "Mineral Resources Authority",
            img_url:
                "/imgs/service/officialdepartments/S3B4-MineralResourcesAuthority.jpg",
            mapImage: " ",
            synopsis:
                "The Mineral Resources Authority is a government body formed to assist and approve exploration applications for the benefit of PNG and business operators undertaking exploration.",
            contact: {
                call: "+675 321 3511",
                web: "www.mra.gov.pg",
                email: "info@mra.gov.pg",
                location: "PO Box 1906 Port Moresby NCD Papua New Guinea"
            }
        },
        {
            id: "5",
            slideImages: "/imgs/service/S3B-HeaderImage.jpg",
            title: "Investment Promotion Authority",
            img_url:
                "/imgs/service/officialdepartments/S3B5-InvestmentPromotionAuthority.jpg",
            mapImage: " ",
            synopsis:
                "The Investment Promotion Authority is a government body that incentivises exploration in PNG. The organisation also oversees the Intellectual Property Office, Securities Commission and Companies Office.",
            contact: {
                call: "+675 321 7311",
                web: "www.ipa.gov.pg",
                email: "ispd@ipa.gov.pg/clarence@ipa.gov.pg",
                location:
                    "First Floor, IPA Haus, Munidubu Street, Lawes Road, Konedobu"
            }
        },
        {
            id: "6",
            slideImages: "/imgs/service/S3B-HeaderImage.jpg",
            title: "PNG Chamber of Mines and Petroleum",
            img_url:
                "/imgs/service/officialdepartments/S3B6-PNGChamberOfMinesAndPetroleum.jpg",
            mapImage: " ",
            synopsis:
                "The PNG Chamber of Mines and Petroleum is an official body overseeing the interests of those within the mining and petroleum sector.",
            contact: {
                call: "+675 321 2988",
                web: "www.pngchamberminpet.com.pg",
                email: "info@pngchamberminpet.com.pg",
                location:
                    "The Lodge, First Floor, Brampton St, Port Moresby, Papua New Guinea"
            }
        },
        {
            id: "7",
            slideImages: "/imgs/service/S3B-HeaderImage.jpg",
            title: "Department of Petroleum and Energy",
            img_url:
                "imgs/service/officialdepartments/S3B7-DepartmentOfPetroleumAndEnergy.jpg",
            mapImage: " ",
            synopsis:
                "The PNG Chamber of Mines and Petroleum is an official body overseeing the interests of those within the mining and petroleum sector.",
            contact: {
                call: "+675 322 4200",
                web: "www.petroleum.gov.pg",
                email: " ",
                location: "Po Box 1993 Port Moresby NCD Papua New Guinea"
            }
        }
    ];

    render() {
        let departmentsDetail = this.departmentsData[
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
                                src={departmentsDetail.slideImages}
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
                                    backgroundImage: `url('${departmentsDetail.img_url}')`,
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
                                    {departmentsDetail.title}
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
                                {departmentsDetail.synopsis}
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
                                        {departmentsDetail.contact.call}
                                    </p>
                                    <p
                                        style={{
                                            display: "block",
                                            marginBottom: "3%",
                                            wordBreak: "break-word",
                                            fontSize: "1.5vw"
                                        }}
                                    >
                                        WEB: {departmentsDetail.contact.web}
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
                                        {departmentsDetail.contact.email}
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
                                        {departmentsDetail.contact.location}
                                    </p>
                                </div>
                                <div style={{ height: "20%" }}>
                                    <MapModal
                                        buttonTitle="SEE MAP"
                                        title={departmentsDetail.title}
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
                                        mapImage={departmentsDetail.mapImage}
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
export default DepartmentsDetails;
