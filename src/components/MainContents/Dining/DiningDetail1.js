import React from "react";
import * as actions from "../actions/dining";
import { connect } from "react-redux";
import {
    DECIMAL_RADIX,
    diningNamespace,
    imageGallery,
    HeavyOrange,
    LightBlueButtonBackground,
    ExtraHeavyBlueGreen,
    LightOrange
} from "../Constants";
import { Link } from "react-router-dom";
import RestaurantListIcon from "./icons/RestaurantListIcon.png";
import MapModal from "../Maps/MapModal";
import Markdown from "../Markdown";
import "./Dining.css";

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

    componentDidMount() {
        const { restaurants } = this.props;
        const id = parseInt(this.props.match.params.id, DECIMAL_RADIX);
        this.props.fetchDiningDetail(id, restaurants);
    }

    componentDidUpdate(prevProps) {
        const { restaurants } = this.props;
        if (prevProps.match.params.id !== this.props.match.params.id) {
            const id = parseInt(this.props.match.params.id, DECIMAL_RADIX);
            this.props.fetchDiningDetail(id, restaurants);
        }
    }

    renderImages() {
        const { imageRestaurant: images } = this.props.restaurant;
        if (images.length > 1) {
            return imageGallery(images, "100%", "27vh");
        } else if (images.length === 1) {
            return (
                <div
                    style={{
                        height: "50%",
                        backgroundImage: `url('${images[0].imageFile}')`,
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
                        ...this.styles.horizontalVerticalCenter
                    }}
                >
                    <h1>NO IMAGE FOR THIS RESTAURANT</h1>
                </div>
            );
        }
    }
    styles = {
        horizontalVerticalCenter: {
            display: "flex",
            justifyContent: "center"
        }
    };
    render() {
        const { restaurant, status } = this.props;
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
                {status === 200 && (
                    <div style={{ flex: 1 }}>
                        {this.renderImages()}
                        <div style={{ height: "25%", display: "flex" }}>
                            <div
                                style={{
                                    flexBasis: "50%",
                                    backgroundImage: `url('${restaurant.logo}')`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}
                            />
                            <div
                                className="middle-top--right"
                                style={{
                                    flexBasis: "50%",
                                    backgroundColor: LightBlueButtonBackground
                                }}
                            >
                                <div
                                    style={{
                                        //  height: "50%",
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
                                    {restaurant.phone && (
                                        <p>CALL TODAY: {restaurant.phone}</p>
                                    )}
                                    {restaurant.website && (
                                        <p>{restaurant.website}</p>
                                    )}
                                    {restaurant.address && (
                                        <p>{restaurant.address}</p>
                                    )}
                                </div>
                                {restaurant.mapRestaurant.length > 0 && (
                                    <div
                                        style={{
                                            //  height: "50%",
                                            padding: "0 5%"
                                        }}
                                    >
                                        <MapModal
                                            buttonTitle={`${
                                                restaurant.title
                                            } MAP`}
                                            title={restaurant.title}
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
                                                restaurant.mapRestaurant[0]
                                                    .mapImage
                                            }
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div
                            style={{
                                height: "25%",
                                display: "flex",
                                backgroundColor: ExtraHeavyBlueGreen
                            }}
                        >
                            <div className="middle-bottom">
                                <Markdown source={restaurant.description} />
                            </div>
                            <div className="middle-bottom">
                                {restaurant.guide.cuisine && (
                                    <div>
                                        CUISINE: {restaurant.guide.cuisine}
                                    </div>
                                )}
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between"
                                    }}
                                >
                                    {restaurant.guide.takeaway && (
                                        <span>
                                            TAKEAWAY:{" "}
                                            {restaurant.guide.takeaway}
                                        </span>
                                    )}
                                    {restaurant.guide.wifi && (
                                        <span>
                                            WIFI: {restaurant.guide.wifi}
                                        </span>
                                    )}
                                    {restaurant.guide.parking && (
                                        <span>
                                            PARKING: {restaurant.guide.parking}
                                        </span>
                                    )}
                                </div>
                                {restaurant.guide.courtesy && (
                                    <div>
                                        COURTESY TRANSPORT:{" "}
                                        {restaurant.guide.courtesy}
                                    </div>
                                )}
                                {restaurant.guide.cards && (
                                    <div>
                                        CARDS ACCEPTED: {restaurant.guide.cards}
                                    </div>
                                )}
                                {restaurant.guide.price && (
                                    <div>
                                        PRICE GUIDE:
                                        <br />
                                        {restaurant.guide.price}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = ({ restaurantDetail, restaurantList }) => {
    const { restaurant, status } = restaurantDetail;
    const { restaurants } = restaurantList;
    return {
        restaurants,
        restaurant,
        status
    };
};
export default connect(
    mapStateToProps,
    actions
)(DiningDetail);
