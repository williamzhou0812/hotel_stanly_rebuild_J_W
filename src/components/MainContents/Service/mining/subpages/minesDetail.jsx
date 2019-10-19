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
import IconsMine from "../../../icons/Services_Icons-Mines.svg";
//import RestaurantListIcon from "./icons/RestaurantListIcon.png";
import MapModal from "../../../Maps/MapModal";
import Markdown from "../../../../../MarkDown";
import { border, borderBottom } from "@material-ui/system";

class MinesDetail extends React.Component {
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

    minesData = [
        {
            id: "1",
            slideImages: "/imgs/service/S3A-HeaderImage.jpg",
            title: "Newcrest Mining",
            img_url: "/imgs/service/mines/S3A1-NewcrestMining.jpg",
            mapImage: "/imgs/maps/S3A1-PNG-Map-NEWCRESTMINING.png",
            synopsis:
                "Located within the New Ireland Province, Newcrest’s Lihir operation has produced over 10 million ounces of gold since its inception back in 1997. It remains one of the most prolific gold mines in PNG today.  ",
            contact: {
                contactId: " ",
                call: "+675 321 7711",
                web: "www.newcrest.com.au",
                email: "corporateaffairs@newcrest.com.au",
                location:
                    "Level 4, Port Tower Building, Hunter Street, Port Moresby, NCD, Papua New Guinea"
            }
        },
        {
            id: "2",
            slideImages: "/imgs/service/S3A-HeaderImage.jpg",
            title: "St Barbara Ltd. (Simberi Operations)",
            img_url: "imgs/service/mines/S3A2-StBarbaraLtd.jpg",
            mapImage: "/imgs/maps/S3A2-PNG-Map-STBARBARA.png",
            synopsis:
                "Simberi Gold Company Limited is located in the New Ireland Province on an island within the Tabar Group. Due to its volcanic composition, the island elevates dramatically around the shoreline and attracts high rain falls. The mining operations currently centres around the eastern part of the island which extends 2,560 hectares in total.",
            contact: {
                call: "+675 276 2010",
                web: "www.stbarbara.com.au",
                email: "info@stbarbara.com.au",
                location:
                    "Simberi Gold Company Limited Simberi Island, New Ireland Province, PNGPO Box 624, Kavieng NIP PNG"
            }
        },
        {
            id: "3",
            slideImages: "/imgs/service/S3A-HeaderImage.jpg",
            title: "Porgera Joint Venture",
            img_url: "/imgs/service/mines/S3A3-PorgeraJointVenture.jpg",
            mapImage: "/imgs/maps/S3A3-PNG-Map-PORGERAJOINTVENTURE.png",
            synopsis:
                "Located in the Enga Province, approximately 130 kilometres from the township of Mount Hagen, the Porgera Joint Venture is an operational gold mine 95% owned by Barrick (Niugini) Limited.",
            contact: {
                call: "+675 547 9500",
                web: "www.barrick.com",
                email: " ",
                location: "PO box 484 Mt Hagen, Papua New Guinea"
            }
        },
        {
            id: "4",
            slideImages: "/imgs/service/S3A-HeaderImage.jpg",
            title: "OK Tedi Mining Ltd",
            img_url: "/imgs/service/mines/S3A4-OKTediMiningLtd.jpg",
            mapImage: "/imgs/maps/S3A4-PNG-Map-OKTEDI.png",
            synopsis:
                "Ok Tedi Mining Limited is one of the most proliferate copper, gold and silver mines in PNG. Located in the Star Mountains in the Western Province, the company ships ore from the township of Kiunga down the Fly River to the coast.",
            contact: {
                call: "+675 321 3522",
                web: "www.oktedi.com",
                email: "enquiry.tabubil@oktedi.com",
                location:
                    "PO Box 1, 1 Dakon Road, Tabubil, Western Province 332, Papua New Guinea"
            }
        },
        {
            id: "6",
            slideImages: "/imgs/service/S3A-HeaderImage.jpg",
            title: "Morobe Mining Joint Ventures (Hidden Valley)",
            img_url: "/imgs/service/mines/S3A6-MorobeMiningJointVentures.jpg",
            mapImage: "/imgs/maps/S3A6-PNG-Map-MOROBEMINING.png",
            synopsis:
                "Morobe Mining Joint Ventures was established back in 2008 and operates in the Morobe Province.",
            contact: {
                call: "+675 478 5000",
                web: "www.morobejv.com",
                email: "mmj.media@morobejv.com",
                location: "PO Box 40165 Morobe Province, Papua New Guinea"
            }
        },
        {
            id: "7",
            slideImages: "/imgs/service/S3A-HeaderImage.jpg",
            title: "MCC Ramu Nico Ltd (RAMU)",
            img_url: "/imgs/service/mines/S3A7-MCCRamuNicoLtd(RAMU).jpg",
            mapImage: "/imgs/maps/S3A7-PNG-Map-RAMUNICO.png",
            synopsis:
                "Established back in 2005, Ramu NiCo Management oversees the Ramu Nickel Joint Venture which focuses on nickel mining in the Madang Province.",
            contact: {
                call: "+675 422 2888",
                web: "www.ramunico.com",
                email: "info@mccgrd.com",
                location:
                    "Port Moresby Office: Level 3, Pacific Place, Port Moresby, Papua New Guinea"
            }
        },
        {
            id: "8",
            slideImages: "/imgs/service/S3A-HeaderImage.jpg",
            title: "Kula Gold (Woodlark Island Gold Project)",
            img_url: "imgs/service/mines/S3A8-KulaGold.jpg",
            mapImage: "/imgs/maps/S3A8-PNG-Map-WOODLARK.png",
            synopsis:
                "Woodlark Island Gold Project is a gold mine located on Woodlark Island located in the Milne Bay Province.",
            contact: {
                call: "+61 8 6144 0588",
                web: "www.kulagold.com.au",
                email: "info@kulagold.com.au",
                location: "Woodlark Island, Papua New Guinea"
            }
        },
        {
            id: "9",
            slideImages: "/imgs/service/S3A-HeaderImage.jpg",
            title: "K92 Mining Inc.",
            img_url: "imgs/service/mines/S3A9-K92MiningInc.jpg",
            mapImage: "/imgs/maps/S3A9-PNG-Map-K92MINING.png",
            synopsis:
                "K92 Mining is a gold mine operation located in the Eastern Highlands Province of PNG.",
            contact: {
                call: "+675 7100 2451",
                web: "www.k92mining.com",
                email: "site@k92mining.com",
                location: "PO Box 1290 Morobe Province, Papua new Guinea"
            }
        },
        {
            id: "10",
            slideImages: "/imgs/service/S3A-HeaderImage.jpg",
            title: "Crater Gold Mining",
            img_url: "imgs/service/mines/S3A10-CraterGoldMining.jpg",
            mapImage: "/imgs/maps/S3A10-PNG-Map-CRATERGOLDMINING.png",
            synopsis:
                "Crater Gold Mining manages two gold mining projects in PNG, one at Fergusson Island and the other at Crater Mountain.",
            contact: {
                call: "+61 2 9241 4224",
                web: "www.cratergold.com.au",
                email: "info@cratergold.com.au",
                location: "Crater Mountain, East highlands, Papua New Guinea"
            }
        }
    ];

    render() {
        let minesDetail = this.minesData[parseInt(this.props.match.params.id)];
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
                        to="/Services/mining/mines"
                    >
                        <div className="leftSide-menu--container">
                            <img
                                className="leftSide-menu--img"
                                src={IconsMine}
                                alt="MINING ICON"
                            />

                            <div className="menu-title">MINES</div>
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
                                src={minesDetail.slideImages}
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
                                    backgroundImage: `url('${minesDetail.img_url}')`,
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
                                    {minesDetail.title}
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
                                {minesDetail.synopsis}
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
                                        CALL TODAY: {minesDetail.contact.call}
                                    </p>
                                    <p
                                        style={{
                                            display: "block",
                                            marginBottom: "3%",
                                            wordBreak: "break-word",
                                            fontSize: "1.5vw"
                                        }}
                                    >
                                        WEB: {minesDetail.contact.web}
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
                                        {minesDetail.contact.email}
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
                                        {minesDetail.contact.location}
                                    </p>
                                </div>
                                <div style={{ height: "20%" }}>
                                    <MapModal
                                        buttonTitle="SEE MAP"
                                        title={minesDetail.title}
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
                                        mapImage={minesDetail.mapImage}
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
export default MinesDetail;
