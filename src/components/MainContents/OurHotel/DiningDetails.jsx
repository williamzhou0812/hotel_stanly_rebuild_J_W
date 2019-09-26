import React, { Fragment } from "react";

import { Link } from "react-router-dom";

import RestaurantListicon from "./icons/RestaurantListIcon.6a75108a.png";

import {
    DICIMAL_RADIX,
    diningNamespace,
    imageGallery,
    HeavyOrange,
    LightBlueButtonBackground,
    ExtraHeavyBlueGreen,
    LightOrange
} from "../../../Constants";

import SilverLeaf from "./img_logo/dinings/R25-DININGLOGO_P-silver-leaf.jpg";
import GreenHausRes from "./img_logo/dinings/R18-DININGLOGO_P-green_haus_res.jpg";
import MonsoonLoungeBar from "./img_logo/dinings/Our_Hotel_Section_Logo_Monsoon.jpg";
import MezzBar from "./img_logo/dinings/Our_Hotel_Section_Logo_Mezz.jpg";
import ThePoolDeck from "./img_logo/dinings/Our_Hotel_Section_Logo_PoolBar.jpg";
import ExecitiveClubLounge from "./img_logo/dinings/Our_Hotel_Section_Logo_ExecClub_2L7k0hP.jpg";
import RainforestCafe from "./img_logo/dinings/R24-DININGLOGO_P-RINGFOREST.jpg";
import GreenHausResImg1 from "./img_logo/dinings/details/Our Hotel Section_Imagesgreenhaus.jpg";

import "../List/MainSectionList.scss";
import "./OurHotel.scss";

const ourhotel_Dinings = [
    {
        id: 1,
        title_img: "",
        title: "GREEN HAUS RESTAURANT",
        img_url: GreenHausRes,
        description:
            `<p>Get your day off to a great start at Green Haus Restaurant, Port Moresby’s premier venue for casual dining. 
            Green Haus offers healthy options, live cooking stations, artisan breads, New Guinean coffee and homemade pastries as well as some traditional breakfast classics. 
            Enjoy a healthy start followed by a day of relaxing before returning to the Green Haus for an elegant buffet dinner.</p>
            <p>Open breakfast, lunch and dinner from 6am to 10pm.</p>`,
        details: {
            call: "+675 302 8888",
            location: "Located on the ground floor",
            cuisine: "Chinese & ThaiInternational Contemporary Cuisine",
            wifi: "Yes",
            secure_parking: "Yes",
            transport: "Yes",
            cards: "Amex, MC, Visa",
            price_guide: "K40, Main: K75 , Dessert: K40"
        }
    },
    {
        id: 2,
        title_img: "",
        title: "RAINFOREST CAFE",
        img_url: RainforestCafe,
        description:
            "Boasting an airy, light interior, the Rainforest Café is a casual yet stylish place to grab a snack or coffee. Kick back and relax or grab a homemade pastry on the go. Open daily 6am to 6.30pm.",
        details: {
            call: "+675 302 8888",
            location: "the Ground Floor",
            cuisine: "Café Cuisine",
            wifi: "Yes",
            cards: "Amex, MC, Visa",
            price_guide: "K20, Main: K45, Dessert: K20"
        }
    },
    {
        id: 3,
        title_img: "",
        title: "MONSOON LOUNGE & BAR",
        img_url: MonsoonLoungeBar,
        description:
            "Offering relaxation and comfort along with a lively atmosphere, Monsoon Lounge is a sophisticated yet casual place for a drink with friends or just a different night out. Full table service, an extensive cocktail list and a delicious food menu designed from our culinary team places Monsoon among the top venues in Port Moresby. Open daily from 3pm until late.",
        details: {
            call: "+675 302 8888",
            location: "the Ground Floor",
            cuisine: "BAR & COCKTAIL LOUNGE",
            wifi: "Yes",
            cards: "AMEX, MC, Visa",
            price_guide: false
        }
    },
    {
        id: 4,
        title_img: "",
        title: "THE POOL DECK",
        img_url: ThePoolDeck,
        description:
            "A casual dining experience to rival a day at the beach, The Pool Deck enables guests to recover from a long work day or simply relax in a luxurious setting. The Pool Bar is open weekdays 11am to 7pm and weekends 11am to 9.30pm.",
        details: {
            call: " +675 302 8888",
            location: "on Level 5",
            cuisine: false,
            wifi: "Yes",
            cards: "AMEX, MC, Visa",
            price_guide: false
        }
    },
    {
        id: 5,
        title_img: "",
        title: "SILVER LEAF",
        img_url: SilverLeaf,
        description:
            "If you’re seeking a fine dining experience, then look no further than Silver Leaf Restaurant. Boasting an opulent, modern interior, stunning views of Port Moresby complete this culinary experience where the quality of ingredients and flavours are unsurpassed. Monday to Saturday: 18:00 – 22:30 Sunday: closed",
        details: {
            call: "+675 302 8888",
            location: "Level 19",
            cuisine: "Fine Dining",
            wifi: "Yes",
            cards: "Amex, MC, Visa",
            price_guide: "Entree: K50, Main: K95, Dessert: K50"
        }
    },
    {
        id: 6,
        title_img: "",
        title: "EXECITIVE CLUB LOUNGE",
        img_url: ExecitiveClubLounge,
        description:
            "The Executive Lounge provides complimentary additional services and facilities for guests who are private members or staying on Executive Lounge Floors and in elegant suites. These services include breakfast, and evening beverages and canapes. The Club lounge is open during the day for guests to work or relax in.",
        details: {
            call: "+675 302 8888",
            location: "on Level 19",
            cuisine: false,
            wifi: "Yes",
            cards: "AMEX, MC, Visa",
            price_guide: false
        }
    },    
    {
        id: 7,
        title_img: "",
        title: "MEZZ BAR",
        img_url: MezzBar,
        description:
            "An elegant bar hidden away above level 19, Mezz Bar is the perfect place to start or finish your night. An extensive selection of carefully designed cocktails combined with international wines and premium whiskeys makes this bar a unique place to visit. Open Monday to Saturday 3pm until late and closed on Sundays. Smart casual dress code.",
        details: {
            call: false,
            location: "AMEX, MC, Visa",
            cuisine: "BAR",
            wifi: "YES",
            cards: "AMEX, MC, Visa",
            price_guide: false
        }
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
    }
};

// temp images array for res
const images = [
    {
        imageFile: "http://192.168.0.160:7000/images/R24-DININGIMAGES_P.jpg"
    },
    {
        imageFile: "http://192.168.0.160:7000/images/R25-DININGIMAGES_P4.jpg"
    }
];

/// Image Garllery
const renderImages = () => {
    if (images.length > 1) {
        return imageGallery(images, "100%", "27vh");
    } else if (images.length === 1) {
        return (
            <div
                style={{
                    height: "50%",
                    backgroundImage: `url(${images[0].imageFile})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />
        );
    } else {
        return (
            <div
                style={{
                    height: "50%",
                    backgroundColor: HeavyOrange,
                    ...styles.horizontalVerticalCenter
                }}
            >
                <h1>NO IMAGE FOR THIS RESAURANT </h1>
            </div>
        );
    }
};

const DiningDetails = props => {
    const id = props.match.params.id;
    const _id = parseInt(id);
    const _DingingsDetails = ourhotel_Dinings[_id];
    const prev_id = (_id - 1 < 0) ?  ourhotel_Dinings.length -1 : _id - 1;
    const next_id = (_id + 1 >= ourhotel_Dinings.length) ? 0 : _id + 1;

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
                        to='/ourhotel/meeting'
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
                                    MEETINGS 
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
                        <img src={_DingingsDetails.img_url} style={{ height: '100%', width: '100%' }} />

                    </div>
                    <div style={{ height: "50%", width: "100%" }}>
                    <div
                            style={{
                                height: "57%",
                                backgroundColor: ExtraHeavyBlueGreen,
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
                                            backgroundImage: `url(${_DingingsDetails.img_url})`,
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
                                            Location:
                                            {_DingingsDetails.details.location}
                                        </p>
                                    )}

                                    <div>Button
                                        </div>
                                
                                </div>

                            </div>
                        </div>
                        <div
                            style={{
                                height: "40%",
                                backgroundColor: ExtraHeavyBlueGreen,
                                display: "flex"
                            }}
                        >
                            <div
                                style={{
                                    flexBasis: "50%",
                                    borderRight:
                                        "1px solid rgb(105,194,209)",
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
                                        // fontSize: "2vw"
                                    }}
                                >
                                    {_DingingsDetails.details.cuisine && (
                                        <div>
                                            CUISINE: {_DingingsDetails.details.cuisine}
                                        </div>
                                    )}
                                    {_DingingsDetails.details.wifi && (
                                        <div>WIFI: {_DingingsDetails.details.wifi} </div>
                                    )}
                                    {_DingingsDetails.details.cards && (
                                        <div>CARDS: {_DingingsDetails.details.cards} </div>
                                    )}
                                    {_DingingsDetails.details.cards && (
                                        <div>
                                            PRICE: {_DingingsDetails.details.price_guide}
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
