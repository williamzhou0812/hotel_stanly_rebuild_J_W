

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
import Embassy from "../../../icons/ServicesIcons-Embassy.svg";
//import RestaurantListIcon from "./icons/RestaurantListIcon.png";
import MapModal from "../../../Maps/MapModal";
import Markdown from "../../../../../MarkDown";
import { border, borderBottom } from "@material-ui/system";


class EmbassyDetails extends React.Component {
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


    embassyData = [
        {
            id: '1',
            slideImages: '/imgs/embassies/S1-MAINLISTIMAGES_P2_A3NGcDD_Details_title.jpg',
            title: 'SOLOMON ISLANDS HIGH COMMISSION',
            img_url: '/imgs/embassies/S1-IMAGES16-solomon.jpg',
            mapImage: '/imgs/maps/S1C5---Port-Moresby-Map-SolomonIslands-HC.png',
            synopsis: 'Call or visit your embassy if you experience any travel issues.',
            contact: {
                call: '+675 323 4333',
                web: '',
                email: '',
                location: 'Unit 1, GB House Poreporena Freeway P. O. Box 8922, Boroko Port Moresby Papua New Guinea'
            }
        },
        {
            id: '2',
            slideImages: '/imgs/embassies/S1-MAINLISTIMAGES_P2_A3NGcDD_Details_title.jpg',
            title: 'AUSTRALIAN HIGH COMMISSION',
            img_url: '/imgs/embassies/S1-IMAGES12-australia.jpg',
            mapImage: '/imgs/maps/S1C1-Port-Moresby-Map-AUSTRALIAN-HC_KYHd0Ns.png',
            synopsis: 'Call or visit your embassy if you experience any travel issues.',
            contact: {
                call: '+675 7090 0100 (24 Hours)',
                web: 'www.png.embassy.gov.au',
                email: 'consular.portmoresby@dfat.gov.au',
                location: 'Godwit Road (Waigani) Port Moresby NCD Papua New Guinea'
            }
        },
        {
            id: '3',
            slideImages: '/imgs/embassies/S1-MAINLISTIMAGES_P2_A3NGcDD_Details_title.jpg',
            title: 'EMBASSY OF THE PHILIPPINES',
            img_url: '/imgs/embassies/S1-IMAGES10-phlipin.jpg',
            mapImage: '/imgs/maps/S1B7-Port-Moresby-Map-PhilippinesEmbassy.png',
            synopsis: 'Call or visit your embassy if you experience any travel issues.',
            contact: {
                call: '675 325 6577',
                web: '',
                email: 'portmoresby.pe@dfa.gov.ph',
                location: 'Lot 1, Section 440 Islander Village, Hohola'
            }
        },
        {
            id: '4',
            slideImages: '/imgs/embassies/S1-MAINLISTIMAGES_P2_A3NGcDD_Details_title.jpg',
            title: 'BRITISH HIGH COMMISSION',
            img_url: '/imgs/embassies/S1-IMAGES13-british-high.jpg',
            mapImage: '/imgs/maps/S1C2--Port-Moresby-Map-British-HC_AYw1OXB.png',
            synopsis: 'Call or visit your embassy if you experience any travel issues.',
            contact: {
                call: '+675 325 9444',
                web: 'www.nzembassy.com/papua-new-guinea',
                email: 'nzhcpmy@mfat.govt.nz',
                location: 'Magani Crescent P. O. Box 1051 Waigani, NCD Port Moresby Papua New Guinea'
            }
        },
        {
            id: '5',
            slideImages: '/imgs/embassies/S1-MAINLISTIMAGES_P2_A3NGcDD_Details_title.jpg',
            title: 'CHINESE EMBASSY',
            img_url: '/imgs/embassies/S1-IMAGES4-china.jpg',
            mapImage: '/imgs/maps/S1B2---Port-Moresby-Map-FRENCH-EMBASSY.png',
            synopsis: 'Call or visit your embassy if you experience any travel issues.',
            contact: {
                call: '+675 325 9827',
                web: 'pg.china-embassy.org',
                email: 'chinaemb_pg@mfa.gov.cn',
                location: 'Section 216, Lot 5, Sir John Guise Drive, Waigani, NCD, Papua New Guinea'
            }
        },
        {
            id: '6',
            slideImages: '/imgs/embassies/S1-MAINLISTIMAGES_P2_A3NGcDD_Details_title.jpg',
            title: 'FIJIAN HIGH COMMISSION',
            img_url: '/imgs/embassies/S1-IMAGES14-fujian.jpg',
            mapImage: '/imgs/maps/S1B2---Port-Moresby-Map-FRENCH-EMBASSY.png',
            synopsis: 'Call or visit your embassy if you experience any travel issues.',
            contact: {
                call: '+675 325 9827',
                web: 'pg.china-embassy.org',
                email: 'chinaemb_pg@mfa.gov.cn',
                location: 'Section 216, Lot 5, Sir John Guise Drive, Waigani, NCD, Papua New Guinea'
            }
        },
        {
            id: '7',
            slideImages: '/imgs/embassies/S1-MAINLISTIMAGES_P2_A3NGcDD_Details_title.jpg',
            title: 'JAPANESE EMBASSY',
            img_url: '/imgs/embassies/S1-IMAGES7-japan.jpg',
            mapImage: '/imgs/maps/S1B2---Port-Moresby-Map-FRENCH-EMBASSY.png',
            synopsis: 'Call or visit your embassy if you experience any travel issues.',
            contact: {
                call: '+675 321 1800',
                web: 'www.png.emb-japan.go.jp',
                email: 'infeoj@pm.mofa.go.jp',
                location: 'st & 2nd Floor, Cuthbertson House, Cuthbertson St. , Port Moresby, NCD, Papua New Guinea'
            }
        },
        {
            id: '8',
            slideImages: '/imgs/embassies/S1-MAINLISTIMAGES_P2_A3NGcDD_Details_title.jpg',
            title: 'THAI HONORARY CONSULATE GENERAL',
            img_url: '/imgs/embassies/S1-IMAGES9-thai.jpg',
            mapImage: '/imgs/maps/S1B2---Port-Moresby-Map-FRENCH-EMBASSY.png',
            synopsis: '',
            contact: {
                call: '',
                web: '',
                email: '',
                location: ''
            }
        },
        {
            id: '9',
            slideImages: '',
            title: 'INDONESIAN EMBASSY',
            img_url: '/imgs/embassies/S1-IMAGES6-indoneshiya.jpg',
            mapImage: '/imgs/maps/S1B2---Port-Moresby-Map-FRENCH-EMBASSY.png',
            synopsis: 'Call or visit your embassy if you experience any travel issues.',
            contact: {
                call: '+675 325 3116',
                web: 'www.kemlu.go.id/portmoresby',
                email: 'kbripom@daltron.com.pg',
                location: 'Sir John Giuse Drive Lot 1&2, Section 410, Kiroki Street Gordons 5, NCD'
            }
        },
        {
            id: '10',
            slideImages: '/imgs/embassies/S1-MAINLISTIMAGES_P2_A3NGcDD_Details_title.jpg',
            title: 'UNITED STATES OF AMERICA EMBASSY ',
            img_url: '/imgs/embassies/S1-IMAGES8-united-state.jpg',
            mapImage: '/imgs/maps/S1B2---Port-Moresby-Map-FRENCH-EMBASSY.png',
            synopsis: 'Call or visit your embassy if you experience any travel issues.',
            contact: {
                call: '+675 321 1455',
                web: 'pg.usembassy.gov',
                email: '',
                location: 'Douglas Street P. O. Box 1492 Port Moresby Papua New Guinea'
            }
        },
        {
            id: '11',
            slideImages: '/imgs/embassies/S1-MAINLISTIMAGES_P2_A3NGcDD_Details_title.jpg',
            title: 'NEW ZEALAND HIGH COMMISSION',
            img_url: '/imgs/embassies/S1-IMAGES15-new-zealand.jpg',
            mapImage: '/imgs/maps/S1B2---Port-Moresby-Map-FRENCH-EMBASSY.png',
            synopsis: 'Call or visit your embassy if you experience any travel issues.',
            contact: {
                call: ' +675 325 9444',
                web: 'www.nzembassy.com/papua-new-guinea',
                email: 'nzhcpmy@mfat.govt.nz',
                location: 'Magani Crescent P. O. Box 1051 Waigani, NCD Port Moresby Papua New Guinea'
            }
        },
        {
            id: '12',
            slideImages: '/imgs/embassies/S1-MAINLISTIMAGES_P2_A3NGcDD_Details_title.jpg',
            title: 'MALAYSIAN HIGH COMMISSION',
            img_url: '/imgs/embassies/S1-IMAGES18-malalaysla.jpg',
            mapImage: '/imgs/maps/S1B2---Port-Moresby-Map-FRENCH-EMBASSY.png',
            synopsis: 'Call or visit your embassy if you experience any travel issues.',
            contact: {
                call: '+675 325 2076',
                web: 'www.kln.gov.my/web/png_port-moresby/',
                email: 'mwportmoresby@kln.gov.my',
                location: 'Lot 16, Section 531 Rosewood Executive Residence Savannah Heights'
            }
        },
        {
            id: '13',
            slideImages: '/imgs/embassies/S1-MAINLISTIMAGES_P2_A3NGcDD_Details_title.jpg',
            title: 'FRENCH EMBASSY',
            img_url: '/imgs/embassies/S1-IMAGES5-francaise.jpg',
            mapImage: '/imgs/maps/S1B2---Port-Moresby-Map-FRENCH-EMBASSY.png',
            synopsis: 'Call or visit your embassy if you experience any travel issues.',
            contact: {
                call: '+675 321 5550',
                web: ' www.ambafrance-pg.org',
                email: 'cad.port-moresby-amba@diplomatie.gouv.fr',
                location: 'Defens Haus - 6th Floor - Corner Champion Parade & Hunter Street'
            }
        },
        {
            id: '14',
            slideImages: '/imgs/embassies/S1-MAINLISTIMAGES_P2_A3NGcDD_Details_title.jpg',
            title: 'SOUTH KOREAN EMBASSY',
            img_url: '/imgs/embassies/S1-IMAGES11-south-korea.jpg',
            mapImage: '/imgs/maps/S1B8-Port-Moresby-Map-SouthKoreaEmbassy.png',
            synopsis: 'Call or visit your embassy if you experience any travel issues.',
            contact: {
                call: '675 321 5822',
                web: 'png.mofa.go.kr',
                email: 'embpng@mofa.go.kr',
                location: 'Fourth Floor, Pacific MMI Building Section 21, Allotments 2 & 3, Champion Parade'
            }
        },
        {
            id: '15',
            slideImages: '/imgs/embassies/S1-MAINLISTIMAGES_P2_A3NGcDD_Details_title.jpg',
            title: 'HIGH COMMISSION OF INDIA',
            img_url: '/imgs/embassies/S1-IMAGES17-india.jpg',
            mapImage: '/imgs/maps/S1B2---Port-Moresby-Map-FRENCH-EMBASSY.png',
            synopsis: 'Call or visit your embassy if you experience any travel issues.',
            contact: {
                call: '+675 321 4291',
                web: 'www.hcipom.in/',
                email: 'hc.pmoresby@mea.gov.in',
                location: 'Lot 30, Sec 7, Lawes Road, Granville, NCD, Port Moresby'
            }
        }

    ]

    render() {
        let embassyDetail = this.embassyData[parseInt(this.props.match.params.id)]
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
                                src={ServiceTypesIcon}
                                alt="SERVICE TYPES ICON"
                            />
                            <div
                                className="menu-title"
                            >
                                SERVICE TYPES
                                </div>
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to="/Services/essential">
                        <div
                            className="leftSide-menu--container"
                        >
                            <img
                                className="leftSide-menu--img"
                                src={ESSENTIAL_ICON}
                                alt="ESSENTIAL SERVICES ICON"
                            />

                            <div
                                className="menu-title"

                            >
                                ESSENTIAL SERVICES
                                </div>
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to="/Services/essential/embassy">
                        <div
                            className="leftSide-menu--container"
                        >
                            <img
                                className="leftSide-menu--img"
                                src={Embassy}
                                alt="ESSENTIAL SERVICES ICON"
                            />

                            <div
                                className="menu-title"

                            >
                                EMBASSY LIST
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
                            < img style={{ height: "100%", width: "100%" }} src={embassyDetail.slideImages} />
                        </div>
                    </div>
                    <div className="services-main-content" style={{ height: "50%", width: "100%" }}>
                        <div style={{ height: "30%", width: "100%", display: "flex" }}>
                            <div className="main-top--left"
                                style={{
                                    flexBasis: "30%",
                                    backgroundImage: `url('${embassyDetail.img_url}')`,
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
                                <h4 style={{ display: "flex", fontSize: "3.2vw", paddingLeft: "5%", alignItems: "center", whiteSpace: "nowrap" }}>{embassyDetail.title}</h4>

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
                            <div className="main-bottom--left" style={{ padding: "3% 4%" }}>{embassyDetail.synopsis}</div>

                            <div className="main-bottom--right" style={{ padding: "3% 4%", borderLeft: "1px solid lightblue" }} >
                                <div style={{ height: "70%", overflow: "hidden" }}>
                                    <p style={{ display: "block", marginBottom: "3%", fontSize: "1.5vw" }}>CALL TODAY: {embassyDetail.contact.call}</p>
                                    <p style={{ display: "block", marginBottom: "3%", wordBreak: "break-word", fontSize: "1.5vw" }}>WEB: {embassyDetail.contact.web}</p>
                                    <p style={{ display: "block", marginBottom: "3%", wordBreak: "break-word", fontSize: "1.5vw" }}>EMAIL: {embassyDetail.contact.email}</p>
                                    <p style={{ display: "block", marginBottom: "3%", wordBreak: "break-word", fontSize: "1.5vw" }}>LOCATION: {embassyDetail.contact.location}</p>
                                </div>
                                <div style={{ height: "20%" }}>
                                    <MapModal
                                        buttonTitle={`${
                                            embassyDetail.title
                                            } MAP`}
                                        title={embassyDetail.title}
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
                                            embassyDetail.mapImage
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
export default EmbassyDetails;


