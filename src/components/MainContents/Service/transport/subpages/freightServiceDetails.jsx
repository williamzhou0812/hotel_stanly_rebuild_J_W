
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
import Freight from "../../../icons/ServicesIcons-Freight.svg";
import ListIcon from "../../../icons/ListIcon.png";
import CarHire from "../../../icons/ServicesIcons-CarHire.svg";
import MapModal from "../../../Maps/MapModal";
//import Markdown from "../../../../../MarkDown";
import { border, borderBottom } from "@material-ui/system";


class FreightServiceDetail extends React.Component {
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
            slideImages: '/imgs/service/frightservice/S2B-Image_pwci2MI-frigh-service-img-tiitle.jpg',
            title: 'IPI GROUP',
            img_url: '/imgs/service/frightservice/S2LOGOS13-ipi.jpg',
            synopsis: 'With its many clients in mind, the iPi Group offers tailor-made logistics solutions for transport, warehousing and catering. Call today!',
            contact: {
                call: '+675 475 1400',
                web: ' www.ipigroup.com.pg',
                email: 'IPIGROUP@ipigroup.com.pg',
                location: 'PO Box 795, Lae, Morobe Province, Papua New Guine'
            }

        },
        {
            id: 2,
            title: 'GFS LIMITED',
            slideImages: '/imgs/service/frightservice/S2B-Image_pwci2MI-frigh-service-img-tiitle.jpg',
            img_url: '/imgs/service/frightservice/S2LOGOS12-GFB.jpg',
            synopsis: 'GFS offers transport and logistics services to the gas and petroleum industry in PNG. Professional, efficient and expedient.',
            contact: {
                call: '+675 320 1040',
                web: 'www.gfspng.com',
                email: '',
                location: 'P.O Box 2091 Port Moresby Kabua Cres Papua New Guinea'
            }
        },
        {
            id: 3,
            title: 'DHL',
            slideImages: '/imgs/service/frightservice/S2B-Image_pwci2MI-frigh-service-img-tiitle.jpg',
            img_url: '/imgs/service/frightservice/S2LOGOS11-DHL.jpg',
            synopsis: 'DHL offers domestic and international freight services as well as logistical and facilitation services for e-commerce businesses. Open Monday to Friday 8am-5pm, and Saturday 8am-12pm.',
            contact: {
                call: '+675 302 6555',
                web: 'www.dhl.com',
                email: '',
                location: 'Kitty Hawk Street Six Mile, N.C.D Port Moresby'
            }
        },
        {
            id: 3,
            title: 'PNG AIR FREIGHT',
            slideImages: '/imgs/service/frightservice/S2B-Image_pwci2MI-frigh-service-img-tiitle.jpg',
            img_url: '/imgs/service/frightservice/S2LOGOS14-png-Air-Freight.jpg',
            synopsis: 'TNT Air Cargo offers PNG businesses express delivery services both domestically and internationally. Domestic routes include Port Moresby, Lae, Goroka, Mt Hagen, Tabubil, Lihir Island, Rabaul, Madang, Wewak, Kavieng, Buka, Alotau, Popondetta, Kimbe, Manus, Vanimo and Kiunga.',
            contact: {
                call: '+675 325 2411',
                web: 'www.tnt.kenmore.com.pg',
                email: 'sales@pngaf.com.pg',
                location: 'Head Office: Port Moresby Jackson’s Parade Saraga, PO Box 6645, Boroko'
            }
        }
    ]


    render() {
        let FreightServiceDetail = this.FreightServiceData[parseInt(this.props.match.params.id)]
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
                    <Link style={{ textDecoration: "none" }} to="/Services/transport/freight-services">
                        <div
                            className="leftSide-menu--container"
                        >
                            <img
                                className="leftSide-menu--img"
                                src={Freight}
                                alt="Freight ICON"
                            />

                            <div
                                className="menu-title"

                            >
                                FREIGHT SERVICES
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
                            < img style={{ height: "100%", width: "100%" }} src={FreightServiceDetail.slideImages} />
                        </div>
                    </div>
                    <div className="services-main-content" style={{ height: "50%", width: "100%" }}>
                        <div style={{ height: "30%", width: "100%", display: "flex" }}>
                            <div className="main-top--left"
                                style={{
                                    flexBasis: "30%",
                                    backgroundImage: `url('${FreightServiceDetail.img_url}')`,
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
                                <h4 style={{ display: "flex", fontSize: "3.2vw", paddingLeft: "5%", alignItems: "center", whiteSpace: "nowrap" }}>{FreightServiceDetail.title}</h4>

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
                            <div className="main-bottom--left" style={{ padding: "3% 4%" }}>{FreightServiceDetail.synopsis}</div>

                            <div className="main-bottom--right" style={{ padding: "3% 4%", borderLeft: "1px solid lightblue" }} >
                                <div style={{ height: "70%", overflow: "hidden" }}>
                                    <p style={{ display: "block", marginBottom: "3%", fontSize: "1.5vw" }}>CALL TODAY: {FreightServiceDetail.contact.call}</p>
                                    <p style={{ display: "block", marginBottom: "3%", wordBreak: "break-word", fontSize: "1.5vw" }}>WEB: {FreightServiceDetail.contact.web}</p>
                                    <p style={{ display: "block", marginBottom: "3%", wordBreak: "break-word", fontSize: "1.5vw" }}>EMAIL: {FreightServiceDetail.contact.email}</p>
                                    <p style={{ display: "block", marginBottom: "3%", wordBreak: "break-word", fontSize: "1.5vw" }}>LOCATION: {FreightServiceDetail.contact.location}</p>
                                </div>
                                <div style={{ height: "20%" }}>
                                    <MapModal
                                        // buttonTitle={`${
                                        //     FreightServiceDetail.title
                                        //     } MAP`}
                                        buttonTitle="SEE MAP"
                                        title={FreightServiceDetail.title}
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
                                            FreightServiceDetail.mapImage
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
export default FreightServiceDetail;


