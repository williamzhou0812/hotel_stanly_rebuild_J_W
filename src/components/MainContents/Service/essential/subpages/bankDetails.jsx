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
//import RestaurantListIcon from "./icons/RestaurantListIcon.png";
import MapModal from "../../../Maps/MapModal";
import Markdown from "../../../../../MarkDown";
import { border, borderBottom } from "@material-ui/system";


class BankDetails extends React.Component {
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

    bankDatas = [
        {
            id: 1,
            slideImages: '/imgs/service/S1-MAINLISTIMAGES_P_fCZCTBp.jpg',
            title: 'ANZ BANK',
            img_url: '/imgs/service/bank/S1-IMAGES2.jpg',
            mapImage: '/imgs/maps/S1A2---Port-Moresby-Map-ANZ.png',
            synopsis: 'Spanning 28 markets across the Asia Pacific, ANZ provides a range of banking solutions. Talk to ANZ about your banking needs today.',
            contact: {
                phone: '+675 321 1079',
                web: 'www.anz.com/papuanewguinea/en/personal/',
                email: 'csgdpg@anz.com',
                location: 'ANZ Papua New Guinea PO Box 1152, Port Moresby NCD'
            }
        },
        {
            id: 2,
            slideImages: '/imgs/service/S1-MAINLISTIMAGES_P_fCZCTBp.jpg',
            title: 'BANK OF SOUTH PACIFIC',
            img_url: '/imgs/service/bank/S1-IMAGES.jpg',
            mapImage: '',
            synopsis: 'BSP is the leading bank in Papua New Guinea and the Pacific region with branches also in Fiji, Solomon Islands, Samoa, Tong, Cook Islands and Vanuatu. BSP PNG operates 42 full service branches, 13 Premium Service Centres, 42 sub branches, 239 Agencies, 301 ATM’s and over 9,700 EFTPOS terminals nationwide. BSP offers state-of-the-art mobile and internet banking services, providing access to business and personal banking anytime, anywhere – 24/7.',
            contact: {
                phone: '+675 320 1212',
                web: 'www.bsp.com.p',
                email: 'servicebsp@bsp.com.pg',
                location: 'Various Locations PO Box 78 Port Moresby, Papua New Guinea'
            }
        },
        {
            id: 3,
            slideImages: '/imgs/service/S1-MAINLISTIMAGES_P_fCZCTBp.jpg',
            title: 'WESTPAC BANK ',
            img_url: '/imgs/service/bank/S1-IMAGES3.jpg',
            mapImage: '/imgs/maps/S1A3---Port-Moresby-Map-WESTPAC.png',
            synopsis: 'Westpac Bank provides a range of banking solutions. Talk to Westpac Bank about your banking needs today.',
            contact: {
                phone: '+675 322 0888',
                web: 'www.westpac.com.pg',
                email: '',
                location: 'Various Locations PO Box 706, Port Moresby, NCD, PNG'
            }
        }
    ]
    render() {
        let bankDetail = this.bankDatas[parseInt(this.props.match.params.id)]
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
                    <Link style={{ textDecoration: "none" }} to="/Services/essential/banks">
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
                                BANKS LIST
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
                            < img style={{ height: "100%", width: "100%" }} src={bankDetail.slideImages} />
                        </div>
                    </div>
                    <div className="services-main-content" style={{ height: "50%", width: "100%" }}>
                        <div style={{ height: "30%", width: "100%", display: "flex" }}>
                            <div className="main-top--left"
                                style={{
                                    flexBasis: "30%",
                                    backgroundImage: `url('${bankDetail.img_url}')`,
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
                                <h4 style={{ display: "flex", fontSize: "3.2vw", paddingLeft: "5%", alignItems: "center", whiteSpace: "nowrap" }}>{bankDetail.title}</h4>

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
                            <div className="main-bottom--left" style={{ padding: "3% 4%" }}>{bankDetail.synopsis}</div>

                            <div className="main-bottom--right" style={{ padding: "3% 4%", borderLeft: "1px solid lightblue" }} >
                                <div style={{ height: "70%", overflow: "hidden" }}>
                                    <p style={{ display: "block", marginBottom: "3%", fontSize: "1.5vw" }}>CALL TODAY: {bankDetail.contact.phone}</p>
                                    <p style={{ display: "block", marginBottom: "3%", wordBreak: "break-word", fontSize: "1.5vw" }}>WEB: {bankDetail.contact.web}</p>
                                    <p style={{ display: "block", marginBottom: "3%", wordBreak: "break-word", fontSize: "1.5vw" }}>EMAIL: {bankDetail.contact.email}</p>
                                    <p style={{ display: "block", marginBottom: "3%", wordBreak: "break-word", fontSize: "1.5vw" }}>LOCATION: {bankDetail.contact.location}</p>
                                </div>
                                <div style={{ height: "20%" }}>
                                    <MapModal
                                        buttonTitle={`${
                                            bankDetail.title
                                            } MAP`}
                                        title={bankDetail.title}
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
                                            bankDetail.mapImage
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
export default BankDetails;


// const BankDetails = (props) => {


//     const [id] = props.match.params.id;

//     const bankDetail = temp_bankDetailsDatas[parseInt(id)];


//     return ( 
//         <Fragment>
//             <div>
//                 <h3> bank singel Detail pages </h3>
//                     <img src={bankDetail.title_img} alt='' /> 
//                 <ul>

//                     <li> <img src={bankDetail.sub_img} alt='' />  | {bankDetail.name}  </li>
//                     <li>{bankDetail.details}</li>

//                     <li> call: {bankDetail.contact.call} </li>
//                     <li> web: {bankDetail.contact.web} </li>
//                     <li>email: {bankDetail.contact.email} </li>
//                     <li>lcoatioin: {bankDetail.contact.location}</li>

//                 </ul>

//             </div>
//         </Fragment>

//     )
// }

// export default BankDetails;