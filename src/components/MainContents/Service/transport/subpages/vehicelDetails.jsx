

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
import ListIcon from "../../../icons/ListIcon.png";
import CarHire from "../../../icons/ServicesIcons-CarHire.svg";
import MapModal from "../../../Maps/MapModal";
//import Markdown from "../../../../../MarkDown";
import { border, borderBottom } from "@material-ui/system";


class SecurityDetails extends React.Component {
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

    vehicleHireData = [
        {
            id: 1,
            slideImages: '/imgs/service/S2C-Images_QTCDF7B.jpg',
            title: 'HERTZ (PORT MORESBY AIRPORT)',
            img_url: '/imgs/service/transport/logoImg/S2LOGOS19-hertz.jpg',
            synopsis: 'Enjoy a day trip to the beautiful Variata National Park or a week-long getaway to explore more of this wonderful nation. Whatever your transport needs, Hertz car rentals has you covered.',
            contact: {
                call: '+675 7363 0995',
                web: 'www.hertz.com.au/p/hire-a-car/papua-new-guinea',
                email: '',
                location: 'Section 37, Lot 10, Jackson Rd'
            }
        },
        {
            id: 2,
            slideImages: '/imgs/service/S2C-Images_QTCDF7B.jpg',
            title: 'BUDGET RENT A CAR',
            img_url: '/imgs/service/transport/logoImg/S2LOGOS16-budget.jpg',
            synopsis: 'Regardless of whether you\'re in PNG for leisure or business, Budget has all your car rental needs covered. “New Cars ... Old Fashioned Service.“  ',
            contact: {
                call: '+675 323 6244',
                web: 'www.budget.com.pg',
                email: 'reservations@budget.com.pg',
                location: 'Port Moresby, Lae, Goroka, Mt. Hagen and Tabubil locations'
            }
        },
        {
            id: 3,
            slideImages: '/imgs/service/S2C-Images_QTCDF7B.jpg',
            title: 'EUROPCAR',
            img_url: '/imgs/service/transport/logoImg/S2LOGOS17-europcar.jpg',
            synopsis: 'Europcar offers affordable and reliable car rentals for visitors to PNG. Explore more of the incredible landscapes and culture of this fascinating nation with Europcar.',
            contact: {
                call: '',
                web: 'www.europcar.com.au/places/papua-new-guinea',
                email: '',
                location: 'Port Moresby Jacksons Intl Airport, Arrival Hall, 7 Mile Jacksons Road, Port Moresby, Papua New Guinea.'
            }
        },
        {
            id: 4,
            slideImages: '/imgs/service/S2C-Images_QTCDF7B.jpg',
            title: 'CITY CAB',
            img_url: '/imgs/transport/logoImg/S2LOGOS22-cityCab.jpg',
            synopsis: 'City Cab is Mt Hagen\'s sole taxi service.',
            contact: {
                call: '+675 690 4431',
                web: '',
                email: '',
                location: 'Mount Hagen'
            }
        },
        {
            id: 5,
            slideImages: '/imgs/service/S2C-Images_QTCDF7B.jpg',
            title: 'TRAVELLERS RENT-A-CAR',
            img_url: '/imgs/service/transport/logoImg/S2LOGOS21-travellers.jpg',
            synopsis: 'Travellers Rent-a-Car is a locally owned car rental company offering transport services to both leisure and executive travellers. Delivering the best rentals for PNG\'s road and climate conditions.',
            contact: {
                call: '+675 422 3412',
                web: 'travellersrentacar.com',
                email: 'travellersrentacar@reservations.com',
                location: 'Madang, Lae & Port Moresby Locations'
            }
        },
        {
            id: 6,
            slideImages: '/imgs/service/S2C-Images_QTCDF7B.jpg',
            title: 'FRANGIPANI',
            img_url: '/imgs/service/transport/logoImg/S2LOGOS18-frang.jpg',
            synopsis: 'Frangipani car hire provides a pleasurable and reliable experience when exploring the stunning and fascinating region of East New Britain. Customer service and satisfaction guaranteed.',
            contact: {
                call: '+675 982 9311',
                web: 'www.facebook.com/pg/Frangipani-Car-Hires',
                email: '',
                location: 'P.O Box 133 Kokopo'
            }
        },
        {
            id: 7,
            slideImages: '/imgs/service/S2C-Images_QTCDF7B.jpg',
            title: 'AVIS - NATIONWIDE RENT-A-CAR',
            img_url: '/imgs/service/transport/logoImg/S2LOGOS15-avis.jpg',
            synopsis: 'Frangipani car hire provides a pleasurable and reliable experience when exploring the stunning and fascinating region of East New Britain. Customer service and satisfaction guaranteed.',
            contact: {
                call: '',
                web: '',
                email: '',
                location: ''
            }
        },
        {
            id: 8,
            slideImages: '/imgs/service/S2C-Images_QTCDF7B.jpg',
            title: 'IZARHLAMBORN HIRE CARS',
            img_url: '/imgs/service/transport/logoImg/S2LOGOS20-izarhlamborn.jpg',
            synopsis: 'A rental car service located in Madang.',
            contact: {
                call: ' +675 422 0433',
                web: '',
                email: '',
                location: 'PO Box 739 Madang, Modilon Rd, Madang'
            }
        }

    ]

    render() {
        let vehicleHireDetail = this.vehicleHireData[parseInt(this.props.match.params.id)]
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
                    <Link style={{ textDecoration: "none" }} to="/Services/essential">
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
                    <Link style={{ textDecoration: "none" }} to="/Services/essential/vehicle-hire">
                        <div
                            className="leftSide-menu--container"
                        >
                            <img
                                className="leftSide-menu--img"
                                src={CarHire}
                                alt="CarHire ICON"
                            />

                            <div
                                className="menu-title"

                            >
                                VEHICLE HIRE
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
                            < img style={{ height: "100%", width: "100%" }} src={vehicleHireDetail.slideImages} />
                        </div>
                    </div>
                    <div className="services-main-content" style={{ height: "50%", width: "100%" }}>
                        <div style={{ height: "30%", width: "100%", display: "flex" }}>
                            <div className="main-top--left"
                                style={{
                                    flexBasis: "30%",
                                    backgroundImage: `url('${vehicleHireDetail.img_url}')`,
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
                                <h4 style={{ display: "flex", fontSize: "3.2vw", paddingLeft: "5%", alignItems: "center", whiteSpace: "nowrap" }}>{vehicleHireDetail.title}</h4>

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
                            <div className="main-bottom--left" style={{ padding: "3% 4%" }}>{vehicleHireDetail.synopsis}</div>

                            <div className="main-bottom--right" style={{ padding: "3% 4%", borderLeft: "1px solid lightblue" }} >
                                <div style={{ height: "70%", overflow: "hidden" }}>
                                    <p style={{ display: "block", marginBottom: "3%", fontSize: "1.5vw" }}>CALL TODAY: {vehicleHireDetail.contact.call}</p>
                                    <p style={{ display: "block", marginBottom: "3%", wordBreak: "break-word", fontSize: "1.5vw" }}>WEB: {vehicleHireDetail.contact.web}</p>
                                    <p style={{ display: "block", marginBottom: "3%", wordBreak: "break-word", fontSize: "1.5vw" }}>EMAIL: {vehicleHireDetail.contact.email}</p>
                                    <p style={{ display: "block", marginBottom: "3%", wordBreak: "break-word", fontSize: "1.5vw" }}>LOCATION: {vehicleHireDetail.contact.location}</p>
                                </div>
                                <div style={{ height: "20%" }}>
                                    <MapModal
                                        // buttonTitle={`${
                                        //     vehicleHireDetail.title
                                        //     } MAP`}
                                        buttonTitle="SEE MAP"
                                        title={vehicleHireDetail.title}
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
                                            vehicleHireDetail.mapImage
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
export default SecurityDetails;


