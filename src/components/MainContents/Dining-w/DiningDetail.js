import React from "react";
//import * as actions from "../actions/dining";
//import { connect } from "react-redux";
import {
    DECIMAL_RADIX,
    diningNamespace,
    imageGallery,
    HeavyOrange,
    LightBlueButtonBackground,
    ExtraHeavyBlueGreen,
    LightOrange
} from "../../../Constants";
import { Link } from "react-router-dom";
import RestaurantListIcon from "./icons/RestaurantListIcon.png";
import MapModal from "../Maps/MapModal";
import Markdown from "../../../MarkDown";
import "./Dining.scss";

class DiningDetail extends React.Component {
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
        }
    };
    restaurants = [
        {
            id: 1,
            title: "THE CELLAR REASTAURANT",
            subTitle: "Continental, Indian & Steak",
            img_url: '/imgs/dining/restaurant_logos/R28-DININGLOGO_P.jpg',
            imagesrc: '/imgs/dining/restaurant_logos/R28-DININGLOGO_FiAepOq.png',
            phone: '+675 302 8200',
            address: 'The Shady Rest Hotel, Taurama Road, Boroko',
            synopsis: 'Boasting an exciting array of Asian and continental cuisine, The Cellar Restaurant is the place to be. Famous for its dosa lunches and all you can eat Curry Club Buffet, the restaurant is also known for its excellent coffee.',
            email: null,
            website: null,
            guide: {
                cuisine: 'Continental, Indian & Steak',
                takeaway: 'Yes',
                wifi: 'Yes',
                parking: 'Yes',
                courtesy: 'Yes',
                cards: 'MC,Visa',
                price: 'Entree: K12, Main: K25, Dessert: K10',
            }

        },
        {
            id: 2,
            title: "ASIA AROMAS",
            subTitle: "Chinese & Thai",
            img_url: '/imgs/dining/restaurant_logos/R1-DININGLOGO-Portrait_pLBb5ny.jpg',
            Gimg: 'imgs/dining/R2-_DININGIMAGES_P.jpg',
            imagesrc: '/imgs/dining/restaurant_logos/R1-DININGLOGO-TEST4.png',
            phone: '+675 321 4780',
            address: 'Steamships Plaza, Downtown, Port Moresby',
            synopsis: 'Asia Aromas serves up a delicious blend of Thai and Chinese cuisine. Enjoy fine food, great service and spectacular views. Open Monday to Saturday, 11am to 2pm and 5pm to 10pm, and Sunday 10.30pm to 2.30pm.',
            guide: {
                cuisine: 'Chinese & Thai',
                takeaway: 'Yes',
                wifi: 'No',
                parking: 'Yes',
                courtesy: 'No',
                cards: 'Amex,MC,Visa',
                price: 'K16, Main: K30, Dessert: K12',
                location: 'The SHady Rest Hotel, Taurama Road, Boroko',
            }

        },
        {
            id: 3,
            title: "CUPPA",
            subTitle: "Café Cuisine",
            img_url: '/imgs/dining/restaurant_logos/R2-DININGLOGO_P.jpg',
            imagesrc: '/imgs/dining/restaurant_logos/R2-DININGLOGO_FiAepOq.png',
            phone: '+675 302 8666',
            address: 'Shop G48, Vision City Megamall, 4027 Waigani, National Capital, Papua New Guinea',
            synopsis: 'Cuppa’s relaxed vibe offers the perfect place to catch up over great coffee. Enjoy refreshments such as Cuppa’s big breakfasts, pasta, soup, sandwiches and more. Open 7 days, 9am to 9pm. Free wifi available. ',
            email: null,
            website: null,
            guide: {
                cuisine: 'Café Cuisine',
                takeaway: 'Yes',
                wifi: 'No',
                parking: 'Yes',
                courtesy: 'Yes',
                cards: 'Amex,MC,Visa',
                price: 'Entree: K18, Main: K32, Dessert: K12',
            }

        },
    ];

    render() {
        let restaurantsDetail = this.restaurants[parseInt(this.props.match.params.id)]
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
                <div
                    style={{
                        backgroundColor: HeavyOrange,
                        width: "14%",
                        boxShadow: "9.899px 0px 7px 0px rgba(0,0,0,0.6)",
                        zIndex: 1,
                        display: "flex",
                        flexDirection: "column"
                    }}
                >
                    <Link
                        style={{
                            textDecoration: "none"
                        }}
                        to={diningNamespace}
                    >
                        <div className="leftSide-menu--container">
                            <img
                                className="leftSide-menu--img"
                                src={RestaurantListIcon}
                                alt="Restaurant List Icon"
                            />
                            <div className="menu-title">RESTAURANT LIST</div>
                        </div>
                    </Link>
                    <div className="vertical-title">
                        <span style={{ transform: "rotate(-90deg)" }}>
                            DINING
                        </span>
                    </div>
                </div>


                <div style={{ flex: 1, width: "100%", height: "54vh", backgroundColor: "rgb(5, 151, 165)" }}>

                    <div style={{ height: "50%" }}>
                        {/* <img src="/img/dining/R2-_DININGIMAGES_P.jpg" /> */}
                        <img src={restaurantsDetail.imagesrc} alt=''   style={{width: "100%", height: "100%"}} /> 
                    </div>
                    <div style={{ height: "25%", display: "flex" }}>
                        <div className="main-top--left"
                            style={{
                                flexBasis: "50%",
                                backgroundImage: `url('${restaurantsDetail.img_url}')`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}
                        />
                        <div
                            className="main-top--right"
                            style={{
                                flexBasis: "50%",
                                backgroundColor: LightBlueButtonBackground
                            }}
                        >
                            <div
                                style={{
                                    height: "50%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-end",
                                    paddingBottom: 20,
                                    padding: "5%",

                                    overflowWrap: "break-word",
                                    wordWrap: "break-word",
                                    ...this.styles.horizontalVerticalCenter
                                }}
                            >
                                {restaurantsDetail.phone && (
                                    <p>CALL TODAY: {restaurantsDetail.phone}</p>
                                )}
                                {/* {restaurantsDetail.details.website && (
                                    <p>{restaurantsDetail.details.website}</p>
                                )} */}
                                {restaurantsDetail.address && (
                                    <p>{restaurantsDetail.address}</p>
                                )}
                            </div>
                            <div>
                                {/* <button>{restaurantsDetail.title + "MAP"}</button> */}
                                <div
                                    style={{
                                        //  height: "50%",
                                        padding: "0 5%"
                                    }}
                                >
                                    <MapModal
                                        buttonTitle={`${
                                            restaurantsDetail.title
                                            } MAP`}
                                        title={restaurantsDetail.title}
                                        buttonStyle={{
                                            backgroundColor: HeavyOrange,
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
                                    // mapImage={
                                    //     restaurantsDetail.mapRestaurant[0]
                                    //         .mapImage
                                    // }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ height: "25%" }} className="main-bottom" style={{ padding: "2%" }}>
                        <div className="main-bottom--left">{restaurantsDetail.synopsis}</div>
                        <div className="main-bottom--right">
                            {restaurantsDetail.guide.cuisine && (
                                <div>
                                    CUISINE: {restaurantsDetail.guide.cuisine}
                                </div>
                            )}
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between"
                                }}
                            >
                                {restaurantsDetail.guide.takeaway && (
                                    <span>
                                        TAKEAWAY:{" "}
                                        {restaurantsDetail.guide.takeaway}
                                    </span>
                                )}
                                {restaurantsDetail.guide.wifi && (
                                    <span>
                                        WIFI: {restaurantsDetail.guide.wifi}
                                    </span>
                                )}
                                {restaurantsDetail.guide.parking && (
                                    <span>
                                        PARKING: {restaurantsDetail.guide.parking}
                                    </span>
                                )}
                            </div>
                            {restaurantsDetail.guide.courtesy && (
                                <div>
                                    COURTESY TRANSPORT:{" "}
                                    {restaurantsDetail.guide.courtesy}
                                </div>
                            )}
                            {restaurantsDetail.guide.cards && (
                                <div>
                                    CARDS ACCEPTED: {restaurantsDetail.guide.cards}
                                </div>
                            )}
                            {restaurantsDetail.guide.price && (
                                <div>
                                    PRICE GUIDE:
                                        <br />
                                    {restaurantsDetail.guide.price}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {/* {restaurantsDetail.mapRestaurant.length > 0 && (
                                <div
                                    style={{
                                        //  height: "50%",
                                        padding: "0 5%"
                                    }}
                                >
                                    <MapModal
                                        buttonTitle={`${
                                            restaurantsDetail.title
                                            } MAP`}
                                        title={restaurantsDetail.title}
                                        buttonStyle={{
                                            backgroundColor: HeavyOrange,
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
                                            restaurantsDetail.mapRestaurant[0]
                                                .mapImage
                                        }
                                    />
                                </div>
                            )} */}
            </div>

        );
    }
}
export default DiningDetail;
