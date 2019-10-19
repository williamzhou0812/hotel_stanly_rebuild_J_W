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
import Iconsretail from "../../../icons/RETAIL_ICON.png";
import IconsDepartment from "../../../icons/Services_Icons-OfficialDepartments.svg";
//import RestaurantListIcon from "./icons/RestaurantListIcon.png";
import MapModal from "../../../Maps/MapModal";
import Markdown from "../../../../../MarkDown";
import { border, borderBottom, textAlign } from "@material-ui/system";

import "react-image-gallery/styles/scss/image-gallery.scss";
// import "~react-image-gallery/styles/css/image-gallery.css";

class RetailDetail extends React.Component {
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

    retailData = [
        {
            id: "1",
            slideImages: [
                { imagesFile: "/imgs/service/retail/S4A-HeaderImage1.jpg" },
                { imagesFile: "/imgs/service/retail/S4A-HeaderImage2.jpg" }
            ],
            //  slideImages: "/imgs/service/retail/S4A-HeaderImage1.jpg",
            //  '/imgs/service/retail/S4A-HeaderImage2.jpg',
            title: "Brian Bell",
            img_url: "/imgs/service/retail/retail/S4A-BrianBell.jpg",
            mapImage: "/imgs/service/maps/S4A-PNG-Map-BRIANBELL.png",
            synopsis:
                "Everything for your home and outdoors!  Retail Wholesale everything for your home",

            contact: {
                contactId: "BB Kokopo",
                call: "+675 982 9027",
                web: "www.brianbellonline.com",
                email: "bbsales@brianbell.com.pg",
                location: "William Road, Rabaul, ENBP"
            }
            //     contact: [{
            //         contactId:'BB Kokopo',
            //         call: '+675 982 9027',
            //         web: 'www.brianbellonline.com',
            //         email: 'bbsales@brianbell.com.pg',
            //         location: 'William Road, Rabaul, ENBP'
            //      },{
            //         contactId: 'BB Mount Hagen',
            //         call: '+675 542 1999',
            //         web: 'www.brianbellonline.com',
            //         email: 'bbsales@brianbell.com.pg',
            //         location: 'Paraka Place, Mt. Hagen, WHP'
            //       },{
            //         contactId: 'BB Lae',
            //         call: '+675 472 3200',
            //         web: 'www.brianbellonline.com',
            //         email: 'bbsales@brianbell.com.pg',
            //         location: 'Mangola Street, Lae'
            //       },{
            //         contactId: 'Homecentre Gordons',
            //         call: '+675 325 8469',
            //         web: 'www.brianbellonline.com',
            //         email: 'bbsales@brianbell.com.pg',
            //         location: 'Kennedy Road, Gordons'
            //       },{
            //         contactId: 'BB Plaza',
            //         call: '+675 325 5411',
            //         web: 'www.brianbellonline.com',
            //         email: 'bbsales@brianbell.com.pg',
            //         location: 'Turumu Street, Boroko, NCD'
            //       },{
            //         contactId: 'BB Madang',
            //         call: '+675 422 1899',
            //         web: 'www.brianbellonline.com',
            //         email: 'bbsales@brianbell.com.pg',
            //         location: 'Modilon Road, Madang, MP'
            //       },{
            //         contactId: 'BB Goroka',
            //         call: '+675 532 1622',
            //         web: 'www.brianbellonline.com',
            //         email: 'bbsales@brianbell.com.pg',
            //         location: ' Edward Street, Goroka, EHP'
            //       },{
            //         contactId: 'Vision City',
            //         call: '+675 325 5411',
            //         web: 'www.brianbellonline.com',
            //         email: 'bbsales@brianbell.com.pg',
            //         location: 'Waigani Drive'
            //       },{
            //         contactId: 'POM',
            //         call: '+675 325 5411',
            //         web: 'www.brianbellonline.com',
            //         email: 'bbsales@brianbell.com.pg',
            //         location: 'PO BOX 1228'
            //       }
            //   ]
        },
        {
            id: "2",
            //  slideImages: "/imgs/service/retail/S4-HeaderImage.jpg",
            slideImages: [
                { imagesFile: "/imgs/service/retail/S4-HeaderImage.jpg" }
            ],
            title: "Keynote Music",
            img_url: "/imgs/service/retail/retail/S4B-KeynoteMusic.jpg",
            mapImage: "/imgs/service/maps/S4B-PNG-Map-KEYNOTEMUSIC.png",
            synopsis:
                "Keynote Music is your one stop music stop: <br/>• Piano & digital keyboards • Guitars, amplifiers & accessories • Brass, woodwind, percussion instruments & accessories• Pro audio• Background music systems – design, installation & service• Public address systems (portable to large) – design, sales & service",
            contact: {
                call: "+675 325 8049",
                web: "www.keynote.com.pg",
                email: "sales@keynote.com.pg",
                location: "Port Moresby, Kokopo & Lae"
            }
        },
        {
            id: "3",
            slideImages: "/imgs/service/retail/S4-HeaderImage.jpg",
            title: "Strickland Real Estate",
            img_url: "/imgs/service/retail/retail/S4C-StricklandRealEstate.jpg",
            mapImage: "/imgs/service/maps/S4C-Port-Moresby-Map-STRICKLAND.png",
            synopsis: "Strickland Real Estate offers a variety of services:",
            // • Real Estate
            // • Consultants
            // • Sales
            // • Rent Collection
            // • Property Management
            // • General Maintenance
            // • Leasing
            // • Residential, Industrial, Commercial',
            contact: {
                call: "+675 320 0944",
                web: "www.sre.com.pg",
                email: "info@sre.com.pg",
                location:
                    "Section 15, Lot 7 MacGregor Street (opposite AON Haus) Port Moresby PO Box 1581, Boroko, NCD"
            }
        },
        {
            id: "4",
            slideImages: "/imgs/service/retail/S4-HeaderImage.jpg",
            title: "Pryde Furniture",
            img_url: "/imgs/service/retail/retail/S4D-PrydeFurniture.jpg",
            mapImage:
                "/imgs/service/maps/S4D-Port-Moresby-Map-PRYDEFURNITURE.png",
            synopsis:
                "Pryde Furniture is the pryde of Papua New Guinea:" +
                "• Home products" +
                "• Furniture & timber products" +
                "• Office fitouts" +
                "• Curtains & blinds " +
                "• Flooring",
            contact: {
                call: "+675 325 4233",
                web: "www.pryde.com.pg",
                email: "info@pryde.com.pg",
                location:
                    "Head Office & Showroom Section 61, Lot 11, Morata St, Gordons, Port Moresby"
            }
        },
        {
            id: "5",
            slideImages: "/imgs/service/retail/S4-HeaderImage.jpg",

            title: "RH Trading",
            img_url: "/imgs/service/retail/retail/S4E-RHTrading.jpg",
            mapImage: "",
            synopsis:
                "RH Trading Limited is a retail and wholesale company offering:",
            contact: {
                contactId: "Vision City, Mega Mall Branch - RH Hypermarket",
                call: "+675 302 8511",
                web: "www.rhtradingpng.com",
                email: "",
                location:
                    "Lot 7, 8, & 9 Section 429, Hohola P.O. Box 3655 Boroko, NCD,Papua New Guinea",
                mapImage:
                    "/imgs/service/maps/S4E-Port-Moresby-Map-RHhypermarket.png"
            }
            // • Groceries
            // • Fruit and vegetables
            // • Meat & seafood
            // • Deli goods
            // • Dairy
            // • Beverages
            // • Fashion apparel
            // • Hardware & garden products
            // • Sports equipment
            // • Toys

            // VISION CITY: Open Monday to Sunday 8:00am - 9:00pm
            // GORDONS BRANCH: Open Monday to Wednesday, Saturday & Sunday 8:00am - 7:30pm; Thursday & Friday 8:00am - 8:00pm
            // HOHOLA BRANCH: Open Monday – Sunday 8:00am – 7:00pm
            // LAE BRANCH: Open Monday to Friday 8:00am - 5:00pm; Saturday 8:00am - 12:00pm
            // ',
            //     contact: [{
            //         contactId:'Vision City, Mega Mall Branch - RH Hypermarket',
            //         call: '+675 302 8511',
            //         web: 'www.rhtradingpng.com',
            //         email: '',
            //         location: 'Lot 7, 8, & 9 Section 429, Hohola P.O. Box 3655 Boroko, NCD,Papua New Guinea',
            //    mapImage: '/imgs/service/maps/S4E-Port-Moresby-Map-RHhypermarket.png',
            //      },{
            //         contactId: 'Gordons Branch - RH Hypermarket Express',
            //         call: '+675 325 1122',
            //         web: 'www.rhtradingpng.com',
            //         email: 'rhtpom@rhtradingpng.com',
            //         location: 'Lot 1, Section 479, Kennedy Road,Gordons, P.O. Box 3655 Boroko,NCD, Papua New Guinea',
            //    mapImage: '/imgs/service/maps/S4E-Port-Moresby-Map-RHhypermarket.png',
            //       },{
            //         contactId: 'Hohola Branch - RH Hypermarket Express',
            //         call: '+ 675 325 1538',
            //         web: 'www.rhtradingpng.com',
            //         email: 'rhtpom@rhtradingpng.com',
            //         location: 'Lot 5,6 & 7, Section 1, Kamarere St. Hohola, P.O. BOX 3655 Boroko, NCD, Papua New Guinea',
            //    mapImage: '/imgs/service/maps/S4E-Port-Moresby-Map-RHhypermarket.png',
            //       },{
            //         contactId: 'Lae Branch - RH Hypermarket Express',
            //         call: '+675 325 1122',
            //         web: 'www.rhtradingpng.com',
            //         email: 'rhtpom@rhtradingpng.com',
            //         location: 'Lot 23, Section 50, Milfordhaven Rd. P.O. BOX 77, Morobe Province, Lae, Papua New Guinea',
            //    mapImage: '/imgs/service/maps/S4E4-PNG-Map-RHhypermarketLAE.png',
            //       }
            //   ]
        },
        {
            id: "6",
            slideImages: "/imgs/service/retail/S4-HeaderImage.jpg",
            // slideImages: [
            //     { imagesFile: "/imgs/service/retail/S4-HeaderImage.jpg" }
            // ],
            title: "BNG TRADING",
            img_url: "/imgs/service/retail/retail/S4F-BNGTrading.jpg",
            mapImage: "/imgs/service/maps/S4F-PNG-Map-BNGtrading-ALL.png",
            synopsis:
                "Operating since 1924, BNG Trading is the oldest and largest importer, distributor and marketer of grocery products in PNG. With a wide range of products covering food, beverage, health & beauty and non-food items, BNG represents some of the largest multi-national consumer companies in the world.The company has branches in Port Moresby, Lae, Kokopo and Kiunga supplying over 500 stores including grocers, wholesalers, foodservices, bakeries and mining camps.",
            contact: {
                contactId: "Port Moresby",
                call: "+675 323 3366",
                web: "www.bngtrading.com.pg",
                email: "pomsalesadmin@bngtrading.com.pg",
                location: ""
            }
            //     contact: [{
            //         contactId:'Port Moresby',
            //         call: '+675 323 3366',
            //         web: 'www.bngtrading.com.pg',
            //         email: 'pomsalesadmin@bngtrading.com.pg',
            //         location: ''
            //      },{
            //         contactId: 'Lae',
            //         call: '+675 472 4850',
            //         web: 'www.bngtrading.com.pg',
            //         email: 'laecustomerservice01@bngtrading.com.pg',
            //         location: ''
            //       },{
            //         contactId: 'Kokopo',
            //         call: '+675 982 8561',
            //         web: 'www.bngtrading.com.pg',
            //         email: 'bngkpomgr@global.net.pg',
            //         location: ''
            //       },{
            //         contactId: 'Klunga',
            //         call: '+675 7190 9926',
            //         web: 'www.bngtrading.com.pg',
            //         email: '',
            //         location: ''
            //       }
            //   ]
        },
        {
            id: "7",
            //slideImages: "/imgs/service/retail/S4-HeaderImage.jpg",
            // slideImages: [
            //     { imagesFile: "/imgs/service/retail/S4-HeaderImage.jpg" }
            // ],
            title: "PACIFIC PALMS PROPERTY",
            img_url: "/imgs/service/retail/retail/S4G-PacificPalms.jpg",
            mapImage: "",
            synopsis:
                "Now you can meet in private and work in world class surroundings at Pacific Palms Property’s latest development, Harbourside West Tower Serviced Offices, on the waterfront in downtown Port Moresby.Choose from a range of contemporary offices with modern, quality furnishings available on an hourly, daily or monthly basis at very reasonable rates.There is 24 hour security with ample, safe, on-site basement parking for peace of mind. Our staff are well trained and ready to assist with efficient administrative support and the offices are supported with quality amenities for your convenience, including a modern kitchen, breakout areas, meeting and training rooms, reception services, printers, security and housekeeping, leaving you free to concentrate on your business.",
            contact: {
                call: "",
                web: "www.pacificpalmsproperty.com.pg",
                email: "property@pacificpalmsproperty.com.pg",
                location: ""
            }
        },
        {
            id: "8",
            slideImages: [
                { imagesFile: "/imgs/service/retail/S4-HeaderImage.jpg" }
            ],
            title: "VISION CITY MEGA MALL",
            img_url: "/imgs/service/retail/retail/S4H-VisionCity.jpg",
            mapImage: "",
            synopsis:
                "Vision City Mega Mall is a modern, secure shopping mall in Port Moresby catering to all your shopping needs.",
            contact: {
                call: "+675 302 8555",
                web: "www.visioncity.com.pg",
                email: "",
                location: "Waigani Drive, Port Moresby"
            }
        },
        {
            id: "9",
            slideImages: [
                {
                    imageFile: "/imgs/service/retail/S4I-HeaderImage1.jpg"
                },
                {
                    imageFile: "/imgs/service/retail/S4J-S4I-HeaderImage2.jpg"
                },
                {
                    imageFile: "/imgs/service/retail/S4J-S4I-HeaderImage3.jpg"
                }
            ],
            // slideImages: "/imgs/service/retail/S4I-HeaderImage1.jpg",
            //  '/imgs/service/retail/S4I-HeaderImage2.jpg'
            //  '/imgs/service/retail/S4I-HeaderImage3.jpg'
            title: "MADNESS PHOTOGRAPHY",
            img_url: "/imgs/service/retail/retail/S4I-MadnessPhotography.jpg",
            mapImage: "",
            synopsis: "Need to stand out from the crowd?",
            contact: {
                call: "",
                web: "www.madnessphotography.com.au",
                email: "ness@madnessphotography.com.au",
                location: " "
            }
        },
        {
            id: "10",
            // slideImages: "/imgs/service/retail/S4J-HeaderImage1.jpg",
            slideImages: [
                {
                    imageFile: "/imgs/service/retail/S4J-HeaderImage1.jpg"
                },
                {
                    imageFile: "/imgs/service/retail/S4J-HeaderImage1.jpg"
                }
            ],
            title: "OFC",
            img_url: "/imgs/service/retail/retail/S4J-OFC.jpg",
            mapImage: "",
            synopsis:
                "We specialise in the areas of voice & cable networks; leading-edge pure-IP, hybrid and traditional telephone systems. OFC provides solutions for very large to very small - and will concept, design and deliver a solution to suit you and your business.",
            contact: {
                call: "+675 7550 1333",
                web: "",
                email: "",
                location: "P.O. Box 564 Waterfront, NCD, PNG"
            }
        }
    ];
    // images = [
    //     { imagesFile: "../images/S4A-HeaderImage3.jpg" },
    //     { imagesFile: "../images/S4A-HeaderImage4.jpg" }
    // ];

    // renderImages() {
    //     const event = this.getCurrentEvent();
    //     const { imageEvent: images } = event;
    //     if (this.images.length > 1) {
    //         return imageGallery(this.images, "100%", "27vh");
    //     } else if (this.images.length === 1) {
    //         return (
    //             <div
    //                 style={{
    //                     height: "50%",
    //                     backgroundImage: `url(${this.images[0].imageFile})`,
    //                     backgroundSize: "cover",
    //                     backgroundPosition: "center"
    //                 }}
    //             />
    //         );
    //     } else {
    //         return (
    //             <div
    //                 style={{
    //                     height: "50%",
    //                     backgroundColor: HeavyOrange
    //                     //  ...styles.horizontalVerticalCenter
    //                 }}
    //             >
    //                 <h1>NO IMAGE FOR THIS RESAURANT </h1>
    //             </div>
    //         );
    //     }
    // }

    render() {
        let retailDetail = this.retailData[
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
                        to="/Services/retail"
                    >
                        <div className="leftSide-menu--container">
                            <img
                                className="leftSide-menu--img"
                                src={Iconsretail}
                                alt="SERVICES ICON"
                            />

                            <div className="menu-title">RETAIL & SERVICES</div>
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
                                src={retailDetail.slideImages}
                            />
                        </div>
                    </div>
                    {/* {this.renderImages()} */}
                    {/* <imageGallery items={this.images} /> */}
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
                                    backgroundImage: `url('${retailDetail.img_url}')`,
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
                                    {retailDetail.title}
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
                                {retailDetail.synopsis}
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
                                        CALL TODAY: {retailDetail.contact.call}
                                    </p>
                                    <p
                                        style={{
                                            display: "block",
                                            marginBottom: "3%",
                                            wordBreak: "break-word",
                                            fontSize: "1.5vw"
                                        }}
                                    >
                                        WEB: {retailDetail.contact.web}
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
                                        {retailDetail.contact.email}
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
                                        {retailDetail.contact.location}
                                    </p>
                                </div>
                                <div style={{ height: "20%" }}>
                                    <MapModal
                                        buttonTitle="SEE MAP"
                                        title={retailDetail.title}
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
                                        mapImage={retailDetail.mapImage}
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
export default RetailDetail;
