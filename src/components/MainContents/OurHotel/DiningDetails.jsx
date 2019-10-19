import React from "react";

import { Link } from "react-router-dom";

import RestaurantListicon from "./icons/RestaurantListIcon.6a75108a.png";

import {
    imageGallery,
    HeavyOrange,
    ExtraHeavyBlueGreen,
    LightBlueGreen
} from "../../../Constants";

import MapModal from "../Maps/MapModal";

import SilverLeaf from "./img_logo/dinings/R25-DININGLOGO_P-silver-leaf.jpg";
import GreenHausRes from "./img_logo/dinings/R18-DININGLOGO_P-green_haus_res.jpg";
import MonsoonLoungeBar from "./img_logo/dinings/Our_Hotel_Section_Logo_Monsoon.jpg";
import MezzBar from "./img_logo/dinings/Our_Hotel_Section_Logo_Mezz.jpg";
import ThePoolDeck from "./img_logo/dinings/Our_Hotel_Section_Logo_PoolBar.jpg";
import ExecitiveClubLounge from "./img_logo/dinings/Our_Hotel_Section_Logo_ExecClub_2L7k0hP.jpg";
import RainforestCafe from "./img_logo/dinings/R24-DININGLOGO_P-RINGFOREST.jpg";
import GreenHausResImg1 from "./img_logo/dinings/details/Our Hotel Section_Imagesgreenhaus.jpg";
import RainforestCafeImg1 from "./img_logo/dinings/details/Our Hotel Section_Imagesrainforest.jpg";
import MonsoonLoungBarImg1 from "./img_logo/dinings/details/Our Hotel Section_Imagesmonsoon.jpg";
import TheePoolDeckImg1 from "./img_logo/dinings/details/Our Hotel Section_Imagespool2.jpg";
import SilverLeafImg1 from "./img_logo/dinings/details/Our Hotel Section_ImagesDining.jpg";
import ExecutiveClubLoungeImg1 from "./img_logo/dinings/details/Our Hotel Section_Images4.jpg";
import MezzBarImg1 from "./img_logo/dinings/details/Our Hotel Section_Images3.jpg";

import "../List/MainSectionList.scss";
import "./OurHotel.scss";

const ourhotel_Dinings = [
    {
        id: 1,
        title_img: GreenHausResImg1,
        title: "GREEN HAUS RESTAURANT",
        img_url: GreenHausRes,
        description:
            `<p>Get your day off to a great start at Green Haus Restaurant, Port Moresby’s premier venue for casual dining. 
            Green Haus offers healthy options, live cooking stations, artisan breads, New Guinean coffee and homemade pastries as well as some traditional breakfast classics. 
            Enjoy a healthy start followed by a day of relaxing before returning to the Green Haus for an elegant buffet dinner.</p>
            <p>Open breakfast, lunch and dinner from 6am to 10pm.</p>`,
        details: {
            call: "+675 302 8888",
            location: "Located on the Ground Floor",
            cuisine: "International Contemporary Cuisine",
            wifi: "Yes",
            takeaway: "No",
            secure_parking: "Yes",
            transport: "Yes",
            cards: "Amex, MC, Visa",
            price_guide: "K40, Main: K75 , Dessert: K40"
        },
        mapImage: '/imgs/dining/maps/R17-Green-Haus.png',
        images: [         { imageFile: '/imgs/ourHotel/H2-Dining/H2A-Green Haus/Our Hotel Section_Imagesgreenhaus.jpg' },
        { imageFile: '/imgs/ourHotel/H2-Dining/H2A-Green Haus/Our Hotel Section_Imagesgreenhaus2.jpg' },
        { imageFile: '/imgs/ourHotel/H2-Dining/H2A-Green Haus/Our Hotel Section_Imagesgreenhaus3.jpg' },
        { imageFile: '/imgs/ourHotel/H2-Dining/H2A-Green Haus/Our Hotel Section_Imagesgreenhaus4.jpg' }     ]
    },
    {
        id: 2,
        title_img: RainforestCafeImg1,
        title: "RAIN FOREST CAFE",
        img_url: RainforestCafe,
        description:
            `<p>Flooded with natural light, The Rain Forest Cafe is an ideal meeting place for social and business interactions. 
            The cafe serves up endless options to tempt your taste buds with homemade cakes, muffins, pastries, cookies and great coffee.</p>
            <p>Open daily 6am to 6.30pm.</p>`,
        details: {
            call: "+675 302 8888",
            location: "Located on the Ground Floor",
            cuisine: "Café Cuisine",
            wifi: "Yes",
            takeaway: "Yes",
            secure_parking: "Yes",
            transport: "Yes",
            cards: "Amex, MC, Visa",
            price_guide: "K20, Main: K45, Dessert: K20"
        },
        mapImage: '/imgs/dining/maps/R23-Rainforest-Cafe.png',
        images: [         { imageFile: '/imgs/ourHotel/H2-Dining/H2B-Rain Forest/Our Hotel Section_Imagesrainforest.jpg' }     ]
    },
    {
        id: 3,
        title_img: MonsoonLoungBarImg1,
        title: "MONSOON LOUNGE AND BAR",
        img_url: MonsoonLoungeBar,
        description:
            `<p>Offering relaxation and comfort along with a lively atmosphere, Monsoon Lounge is a sophisticated yet casual place for a drink with friends or just a different night out. Full table service, an extensive cocktail list and a delicious food menu designed from our culinary team places Monsoon among the top venues in Port Moresby</p>
            <p>Open daily from 3pm until late.</p>`,
        details: {
            call: "+675 302 8888",
            location: "Located on the Ground Floor",
            cuisine: "Bar/Cocktail lounge",
            wifi: "Yes",
            takeaway: "No",
            secure_parking: "Yes",
            transport: "Yes",
            cards: "AMEX, MC, Visa",
            price_guide: false
        },
        mapImage: '',
        images: [         { imageFile: '/imgs/ourHotel/H2-Dining/H2C-Monsoon/Our Hotel Section_Imagesmonsoon.jpg' },
        { imageFile: '/imgs/ourHotel/H2-Dining/H2C-Monsoon/Our Hotel Section_ImagesMonsoon2.jpg' } ,
        { imageFile: '/imgs/ourHotel/H2-Dining/H2C-Monsoon/Our Hotel Section_Imagesmonsoon3.jpg' }      ]
    },
    {
        id: 4,
        title_img: TheePoolDeckImg1,
        title: "THE POOL DECK",
        img_url: ThePoolDeck,
        description:
            `<p>A casual dining experience to rival a day at the beach, The Pool Deck enables guests to recover from a long work day or simply relax in a luxurious setting</p>
            <p>The Pool Bar is open weekdays 11am to 7pm and weekends 11am to 9.30pm.</p>`,
        details: {
            call: " +675 302 8888",
            location: "Located on Level 5",
            cuisine: "Bar/Cocktail lounge",
            wifi: "Yes",
            takeaway: "No",
            secure_parking: "Yes",
            transport: "Yes",
            cards: "AMEX, MC, Visa",
            price_guide: false
        },
        mapImage: '',
        images: [         { imageFile: '/imgs/ourHotel/H2-Dining/H2D-Pool Cafe/Our Hotel Section_Imagespool2.jpg' }     ]
    },
    {
        id: 5,
        title_img: SilverLeafImg1,
        title: "SILVER LEAF",
        img_url: SilverLeaf,
        description:
            `<p>With lavish interiors and breathtaking views of the city, our fine dining restaurant is the place for any occasion. This 60 seater restaurant provides guests with an unprecedented dining experience offering simplicity, quality and consistency in all aspects of food, wine and service. Open Monday to Saturday 6pm to 10pm and closed on Sundays.</p>
            <p>Bookings are essential - email dine@thestanleypng.com or contact the hotel operator. A smart casual dress code for guests dining at Silver Leaf must be adhered to.</p>`,
        details: {
            call: "+675 302 8888",
            location: "Located on Level 19",
            cuisine: "Fine Dining",
            wifi: "Yes",
            takeaway: "No",
            secure_parking: "Yes",
            transport: "Yes",
            cards: "Amex, MC, Visa",
            price_guide: "Entree: K50, Main: K95, Dessert: K50"
        },
        mapImage: '/imgs/dining/maps/R24-Silver-Leaf-Restaurant.png',
        images: [         { imageFile: '/imgs/ourHotel/H2-Dining/H2E-Silverleaf/Our Hotel Section_ImagesDining.jpg' } ,
        { imageFile: '/imgs/ourHotel/H2-Dining/H2E-Silverleaf/Our Hotel Section_ImagesDining2.jpg' } ,
        { imageFile: '/imgs/ourHotel/H2-Dining/H2E-Silverleaf/Our Hotel Section_Imagessilverleaf2.jpg' } ,
        { imageFile: '/imgs/ourHotel/H2-Dining/H2E-Silverleaf/Our Hotel Section_Imagessilverleaf3.jpg' } ,
        { imageFile: '/imgs/ourHotel/H2-Dining/H2E-Silverleaf/Our Hotel Section_Imagessilverleaf4.jpg' } ,
        { imageFile: '/imgs/ourHotel/H2-Dining/H2E-Silverleaf/Our Hotel Section_Imagessilverleaf5.jpg' } ,
        { imageFile: '/imgs/ourHotel/H2-Dining/H2E-Silverleaf/Our Hotel Section_Imagessilverleaf6.jpg' }     ]
    },
    {
        id: 6,
        title_img: ExecutiveClubLoungeImg1,
        title: "EXECITIVE CLUB LOUNGE",
        img_url: ExecitiveClubLounge,
        description:
            `<p>The Executive Lounge provides complimentary additional services and facilities for guests who are private members or staying on Executive Lounge Floors and in elegant suites. These services include breakfast, and evening beverages and canapés.</p>
            <p>The Club lounge is open during the day for guests to work or relax in.</p>`,
        details: {
            call: "+675 302 8888",
            location: "Located on Level 19",
            cuisine: "Bar, Casual dining",
            wifi: "Yes",
            takeaway: "No",
            secure_parking: "Yes",
            transport: "Yes",
            cards: "AMEX, MC, Visa",
            price_guide: false
        },
        mapImage: '',
        images: [         { imageFile: '/imgs/ourHotel/H2-Dining/H2F-Executive club/Our Hotel Section_Images4.jpg' }     ]
    },    
    {
        id: 7,
        title_img: MezzBarImg1,
        title: "MEZZ BAR",
        img_url: MezzBar,
        description:
            `<p>An elegant bar hidden away above level 19, Mezz Bar is the perfect place to start or finish your night. An extensive selection of carefully designed cocktails combined with international wines and premium whiskeys makes this bar a unique place to visit.</p>
            <p>Open Monday to Saturday 3pm until late and closed on Sundays.</p><p>Smart casual dress code.</p>`,
        details: {
            call: "+675 302 8888",
            location: "Located on Level 19",
            cuisine: "Bar",
            wifi: "Yes",
            takeaway: "No",
            secure_parking: "Yes",
            transport: "Yes",
            cards: "AMEX, MC, Visa",
            price_guide: false
        },
        mapImage: '',
        images: [         { imageFile: '/imgs/ourHotel/H2-Dining/H2G-Mezz Bar/Our Hotel Section_Images3.jpg' }     ]
    }
    
];

const styles = {
    horizontalVerticalCenter: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    contactDetailText: {
        textAlign: "left",
        margin: 0,
        padding: 0,
        lineHeight: "130%",
        letterSpacing: "2px",
        fontSize: "0.8rem"
    },
    mapOrFindButtonStyle: {
        backgroundColor: HeavyOrange,
        display: "flex",
        width: "100%",
        padding: "5% 0",
        marginTop: "-5%",
        borderRadius: "5px",
        boxShadow: "0px 0px 10px 1px rgba(0,0,0,0.5)",
        color: "white",
        justifyContent: "center"
    },
    mapOrFindButtonText: {
        letterSpacing: "2px",
        fontSize: "18px",
        fontWeight: "bold",
        marginTop: "4px"
    }
};

/// Image Garllery
const renderImages = (restaurant) => {
    const {  images } = restaurant;
    if (images.length > 1) {
        return imageGallery(images, "100%", "27vh");
    }
    else if (images.length === 1) {
        return (<img src={images[0].imageFile} style={{ height: '100%', width: '100%' }} alt="" />);
    }
    else {
        return (
            <div
                style={{
                    backgroundColor: HeavyOrange,
                    height: "100%",
                    padding: "30px"
                }}
            >
                <h1>NO IMAGE FOR THIS RESTAURANT</h1>
            </div>
        );
    }
}


const DiningDetails = props => {
    const id = props.match.params.id;
    const _id = parseInt(id);
    const _DingingsDetails = ourhotel_Dinings.find(item => item.id === _id);   

    return (
        <div style={{
                width: "100%",
                height: "54vh",
                display: "flex",
                color: "white"
            }}
            className="section--bottom--animation"
        >
            <div className="vertical-side"
                style={{
                    backgroundColor: HeavyOrange,
                    width: "14%",
                    height: "100%",
                    boxShadow: "9.899px 0px 7px 0px rgba(0,0,0,0.6)",
                    zIndex: 1,
                    flexDirection: "column",
                    display: "flex"
                }}
            >
                <div >
                    <Link
                        style={{ height: "14%", textDecoration: "none" }}
                        to='/ourhotel/dining'
                    >
                        <div className="leftSide-menu--container">
                            <img
                                className="leftSide-menu--img"
                                src={RestaurantListicon}
                                alt="RestaurantListIcon"
                            />
                            <div
                                style={{
                                    letterSpacing: "2px"
                                }}
                            >
                                <p
                                    className="menu-title"
                                
                                >
                                    DINING 
                                </p>
                                <p
                                    className="menu-title"
                                
                                >
                                    
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="vertical-title ">
                    <span
                        style={{
                            transform: "rotate(-90deg)"
                        }}
                    >
                        OUR HOTEL
                </span>
                </div>
            </div>
            <div >
                <div className='event-main'>
                    <div style={{ height: "50%", width: "100%" }}>
                        {renderImages(_DingingsDetails)}
                    </div>
                    <div style={{ height: "50%", width: "100%" }}>
                    <div
                            style={{
                                height: "50%",
                                backgroundColor: LightBlueGreen,
                                display: "flex"
                            }}
                        >
                            <div
                                style={{
                                    flexBasis: "50%",
                                    borderRight:
                                        "1px solid rgb(105,194,209)",
                                    padding: "0px"
                                }}
                            >
                                
                                <div className="middle-section--leftSide"
                                    style={{
                                        height: "100%",
                                        padding: "0px"
                                    }}
                                >
                                    <div style={{
                                            width: "100%",
                                            height: "100%",
                                            backgroundImage: `url('${_DingingsDetails.img_url}')`,
                                            backgroundSize: "100%",
                                            backgroundPosition: "center"
                                        }}>
                                    </div>
                                </div>
                            </div>
                            <div style={{
                                flexBasis: "50%",
                                padding: "25px 0px 0px 25px"
                            }}
                            >
                                <div className="middle-section--rightSide"
                                    style={{
                                        height: "38%",
                                        letterSpacing: "1px",
                                        overflow: "scroll",
                                        display: "inline-table"
                                    }}
                                >
                                    {_DingingsDetails.details.call && (
                                        <p className="contact-details">
                                            Call Today: {_DingingsDetails.details.call}
                                        </p>
                                    )}

                                    {_DingingsDetails.details.location && (
                                        <p className="contact-details">
                                            {_DingingsDetails.details.location}
                                        </p>
                                    )}

                                    {_DingingsDetails.mapImage && (
                                    <div style={{marginTop: "70px"}}>
                                        <div className="middle-section--btnContainer">
                                            <div className="middle-section--btnContainer--btn">
                                                <MapModal
                                                    buttonTitle={_DingingsDetails.title.toUpperCase() + " MAP"}
                                                    title={_DingingsDetails.title}
                                                    buttonStyle={
                                                        styles
                                                            .mapOrFindButtonStyle
                                                    }
                                                    textStyle={
                                                        styles
                                                            .mapOrFindButtonText
                                                    }
                                                    mapImage={_DingingsDetails.mapImage}
                                                />
                                            </div>
                                        </div>
                                    </div>)}
                                
                                </div>

                            </div>
                        </div>
                        <div
                            style={{
                                height: "50%",
                                backgroundColor: ExtraHeavyBlueGreen,
                                display: "flex"
                            }}
                        >
                            <div
                                style={{
                                    flexBasis: "50%",
                                    padding: "25px 0px 0px 35px",
                                    overflowY: "auto"
                                }}
                            >
                                {false && (<div
                                    className="middle-section--innerTitle"
                                    style={{
                                        height: "15%"
                                    }}
                                >
                                    
                                    {/* <span>{eventDetail.month}</span> */}
                                </div>)}
                                <div className="middle-section--leftSide"
                                    style={{
                                        height: "75%",
                                        overflow: "scroll",
                                        display: "inline-table"
                                    }}
                                >
                                    <div
                                        dangerouslySetInnerHTML={{__html: _DingingsDetails.description}}
                                        style={{
                                            marginTop: 0,
                                            marginBottom: 0
                                        }}
                                    ></div>
                                </div>
                            </div>
                            <div style={{
                                flexBasis: "50%",
                                padding: "25px 0px 0px 25px"
                            }}
                            >
                                {false && (<div style={{ height: "15%" }} />)}
                                
                                <div className="middle-section--rightSide"
                                    style={{
                                        height: "38%",
                                        letterSpacing: "1px",
                                        overflow: "scroll",
                                        display: "inline-table",
                                        width: "100%"
                                        // fontSize: "2vw"
                                    }}
                                >
                                    {_DingingsDetails.details.cuisine && (
                                        <div>
                                            CUISINE: {_DingingsDetails.details.cuisine}
                                        </div>
                                    )}
                                    <div style={{
                                            display: "inline-table",
                                            width: "35%"
                                        }}>
                                        <div>TAKEAWAY: {_DingingsDetails.details.takeaway} </div>
                                    </div>
                                    <div style={{
                                            display: "inline-table",
                                            width: "30%"
                                        }}>
                                        <div>WIFI: {_DingingsDetails.details.wifi} </div>
                                    </div>
                                    <div style={{
                                            display: "inline-table",
                                            width: "35%"
                                        }}>
                                        <div>PARKING: {_DingingsDetails.details.secure_parking} </div>
                                    </div>
                                    
                                    {_DingingsDetails.details.transport && (
                                        <div>COURTESY TRANSPORT: {_DingingsDetails.details.transport} </div>
                                    )}
                                    {_DingingsDetails.details.cards && (
                                        <div>CARDS ACCEPTED: {_DingingsDetails.details.cards} </div>
                                    )}
                                    {_DingingsDetails.details.price_guide && (
                                        <div>
                                            PRICE GUIDE:<br/> {_DingingsDetails.details.price_guide}
                                        </div>
                                    )}
                                    
                                </div>

                            </div>
                        </div>
                    </div>
                </div>



            </div >
        </div >
       )
};

export default DiningDetails;
