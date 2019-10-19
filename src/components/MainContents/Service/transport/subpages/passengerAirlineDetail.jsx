
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
import HireAndTransport from "../../../icons/HireAndTransport.svg";
import airLine from "../../../icons/ServicesIcons-AirTransport-05.svg";
import ListIcon from "../../../icons/ListIcon.png";
import CarHire from "../../../icons/ServicesIcons-CarHire.svg";
import MapModal from "../../../Maps/MapModal";
//import Markdown from "../../../../../MarkDown";
import { border, borderBottom } from "@material-ui/system";


class passengerAirlineDetail extends React.Component {
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
            justifyContent: "center",

        },
        mapButtonTextStyle: {
            fontSize: "2vw",
            fontWeight: "bold"
        }
    };

    FreightServiceData = [
        {
            id: 1,
            slideImages: '/imgs/service/airline/S2A1-Logo2.png',
            title: 'AIR NIUGINI',
            img_url: '/imgs/service/airline/S2A1-Logo-Niugini.png',
            synopsis: 'Air Niugini offers daily services to Cairns and Brisbane, twice weekly services to Sydney and direct services to Singapore, Hong Kong, Manila, Cebu, Bali, Tokyo, Honiara and Fiji.',

            contact: {
                call: '+675 327 3444',
                web: ' airniugini.com.pg',
                email: 'telephonesales@airniugini.com.pg',
                location: 'ANG Haus 7 Mile PO BOX 7186 Boroko , NCD'
            }

        },
        {
            id: 2,
            title: 'PNG AIR',
            slideImages: '/imgs/service/airline/S2A1-Logo2.png',
            img_url: '/imgs/service/airline/S2A2-Logo-PNG.png',
            synopsis: 'PNG Air proudly connects people throughout PNG with its air service. Everything PNG Air does, is for your security and comfort.',
            contact: {
                call: '+675 7373 7100 ',
                web: 'www.pngair.com.pg',
                email: 'pngair@pngair.com.pg',
                location: 'Jacksons Airport, PO 170 Boroko, NCD'
            }
        },
        {
            id: 3,
            title: 'HELIFIX',
            slideImages: '/imgs/service/airline/S2A1-Logo2.png',
            img_url: '/imgs/service/airline/S2A4Logo-Heliscope.png',
            synopsis: 'Helifix is an aviation operator that provides helicopter and aircraft charters along with maintenance services throughout PNG.',
            contact: {
                call: '+675 323 3968',
                web: 'www.helifix.com.pg',
                email: 'info@helifix.com.pg',
                location: ' '
            }
        },
        {
            id: 4,
            title: 'HELISCOPE',
            slideImages: '/imgs/service/airline/S2A1-Logo2.png',
            img_url: '/imgs/service/airline/S2A4Logo-Heliscope.png',
            synopsis: 'HeliScope is a reliable and safe helicopter charter operator which specialises in construction, gas and oil exploration, and aeromedical and passenger services.',
            contact: {
                call: '+675 323 0662',
                web: 'heliscope.net',
                email: 'info@heliscope.net',
                location: 'HeliScope Terminal Portion 2437'
            }
        }
    ]


    render() {
        let passengerAirlineDetail = this.FreightServiceData[parseInt(this.props.match.params.id)]
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
                <div className="left-vertical-nav"
                >
                    <Link style={{ textDecoration: "none" }} to="/Services">
                        <div
                            className="leftSide-menu--container"

                        >

                            <img
                                className="leftSide-menu--img"
                                src={ListIcon}
                                alt="SERVICE TYPES ICON"
                            />
                            <div
                                className="menu-title"
                            >
                                SERVICE TYPES
                                </div>
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to="/Services/transport">
                        <div
                            className="leftSide-menu--container"
                        >
                            <img
                                className="leftSide-menu--img"
                                src={HireAndTransport}
                                alt="ESSENTIAL SERVICES ICON"
                            />

                            <div
                                className="menu-title"

                            >
                                CAR HIRE & TRANSPORT
                                </div>
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to="/Services/transport/passenger-airline-service">
                        <div
                            className="leftSide-menu--container"
                        >
                            <img
                                className="leftSide-menu--img"
                                src={airLine}
                                alt="Freight ICON"
                            />

                            <div
                                className="menu-title"

                            >
                                PASSENGER AIRLINE SERVICES
                                </div>
                        </div>
                    </Link>
                    <div className="vertical-title">
                        <span style={{ transform: "rotate(-90deg)" }}>
                            SERVICES
                        </span>
                    </div>
                </div>


                <div style={{ flex: 1, width: "100%", height: "54vh", backgroundColor: "rgb(5, 151, 165)" }}>

                    <div className="services-main-img" style={{ height: "50%" }}>
                        <div style={{ height: "100%", width: "100%" }} className="slide-container">
                            < img style={{ height: "100%", width: "100%" }} src={passengerAirlineDetail.slideImages} />
                        </div>
                    </div>
                    <div className="services-main-content" style={{ height: "50%", width: "100%" }}>
                        <div style={{ height: "30%", width: "100%", display: "flex" }}>
                            <div className="main-top--left"
                                style={{
                                    flexBasis: "30%",
                                    backgroundImage: `url('${passengerAirlineDetail.img_url}')`,
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
                                <h4 style={{ display: "flex", fontSize: "3.2vw", paddingLeft: "5%", alignItems: "center", whiteSpace: "nowrap" }}>{passengerAirlineDetail.title}</h4>

                                <div>

                                    <div
                                        style={{
                                            //  height: "50%",
                                            padding: "0 5%"
                                        }}
                                    >

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ height: "80%", padding: "0" }} className="main-bottom" >
                            <div className="main-bottom--left" style={{ padding: "3% 4%" }}>{passengerAirlineDetail.synopsis}</div>

                            <div className="main-bottom--right" style={{ padding: "3% 4%", borderLeft: "1px solid lightblue" }} >
                                <div style={{ height: "70%", overflow: "hidden" }}>
                                    <p style={{ display: "block", marginBottom: "3%", fontSize: "1.5vw" }}>CALL TODAY: {passengerAirlineDetail.contact.call}</p>
                                    <p style={{ display: "block", marginBottom: "3%", wordBreak: "break-word", fontSize: "1.5vw" }}>WEB: {passengerAirlineDetail.contact.web}</p>
                                    <p style={{ display: "block", marginBottom: "3%", wordBreak: "break-word", fontSize: "1.5vw" }}>EMAIL: {passengerAirlineDetail.contact.email}</p>
                                    <p style={{ display: "block", marginBottom: "3%", wordBreak: "break-word", fontSize: "1.5vw" }}>LOCATION: {passengerAirlineDetail.contact.location}</p>
                                </div>
                                <div style={{ height: "20%" }}>
                                    <MapModal
                                        // buttonTitle={`${
                                        //     passengerAirlineDetail.title
                                        //     } MAP`}
                                        buttonTitle="SEE MAP"
                                        title={passengerAirlineDetail.title}
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
                                        mapImage={
                                            passengerAirlineDetail.mapImage
                                        }
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div >

        );
    }
}
export default passengerAirlineDetail;


