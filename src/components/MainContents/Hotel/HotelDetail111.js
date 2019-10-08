import React from "react";
import { connect } from "react-redux";
import {
    DECIMAL_RADIX,
    accomodationNamespace,
    HeavyOrange,
    LightBlueButtonBackground,
    imageGallery,
    renderRating,
    ExtraHeavyBlueGreen,
    LightOrange
} from "../Constants";
import { Link } from "react-router-dom";
import AllAreasIcon from "../Destination/icons/AllAreas.png";
import HotelListIcon from "./icons/HotelListIcon.png";
import MapModal from "../Maps/MapModal";
import Markdown from "../Markdown";
import "../List/MainSectionList.css";
import "./Hotel.css";

class HotelDetail extends React.Component {
    destIndex = -1;
    constructor(props) {
        super(props);
        const accommodation = { ...this.getHotelDetail() };
        this.state = {
            accommodation
        };
    }

    getHotelDetail() {
        const { accommodations } = this.props;
        const destid = parseInt(this.props.match.params.destid, DECIMAL_RADIX);
        const accoid = parseInt(this.props.match.params.accoid, DECIMAL_RADIX);
        let destIndex;
        if (this.destIndex > -1) {
            destIndex = this.destIndex;
        } else {
            destIndex = accommodations.findIndex(element => {
                return element.id === destid;
            });
            this.destIndex = destIndex;
        }
        const accoIndex = accommodations[
            destIndex
        ].accomodationDestination.findIndex(element => {
            return element.id === accoid;
        });
        return accommodations[destIndex].accomodationDestination[accoIndex];
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.accoid !== prevProps.match.params.accoid) {
            this.setState({
                accommodation: { ...this.getHotelDetail() }
            });
        }
    }

    styles = {
        horizontalVerticalCenter: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    };

    renderImages() {
        const { imageAccomodation: images } = this.state.accommodation;
        if (images.length > 1) {
            return imageGallery(images, "100%", "22.68vh");
        } else if (images.length === 1) {
            return (
                <div
                    style={{
                        height: "42%",
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
                        height: "42%",
                        backgroundColor: HeavyOrange,
                        ...this.styles.horizontalVerticalCenter
                    }}
                >
                    <h1>NO IMAGE FOR THIS HOTEL</h1>
                </div>
            );
        }
    }

    renderMaps() {
        const { mapAccomodation: maps } = this.state.accommodation;
        if (maps.length === 2) {
            const map1 = maps[0];
            const map2 = maps[1];
            return (
                <div className="hotels-btn">
                    <MapModal
                        title={map1.title}
                        buttonStyle={{
                            backgroundColor: LightBlueButtonBackground,
                            marginTop: "5%",
                            borderRadius: "5px",
                            boxShadow: "0px 0px 10px 1px rgba(0,0,0,0.5)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                        textStyle={{
                            fontSize: "18px",
                            padding: "3% 0",
                            color: "white",
                            fontWeight: "bold"
                        }}
                        mapImage={map1.mapImage}
                        rootStyle={{}}
                    />
                    <MapModal
                        title={map2.title}
                        buttonStyle={{
                            backgroundColor: LightBlueButtonBackground,
                            marginTop: "5%",
                            borderRadius: "5px",
                            boxShadow: "0px 0px 10px 1px rgba(0,0,0,0.5)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                        textStyle={{
                            fontSize: "18px",
                            padding: "3% 0",
                            color: "white",
                            fontWeight: "bold"
                        }}
                        mapImage={map2.mapImage}
                        rootStyle={{}}
                    />
                </div>
            );
        } else if (maps.length === 1) {
            const map1 = maps[0];
            return (
                <MapModal
                    title={map1.title}
                    buttonStyle={{
                        backgroundColor: LightBlueButtonBackground,
                        width: "100%",
                        padding: "3% 0",
                        marginTop: "5%",
                        marginBottom: "5%",
                        borderRadius: "5px",
                        fontSize: "3vw",
                        fontWeight: 500,
                        boxShadow: "0px 0px 10px 1px rgba(0,0,0,0.5)",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                    textStyle={{}}
                    mapImage={map1.mapImage}
                    rootStyle={{}}
                />
            );
        } else {
            return <div />;
        }
    }

    render() {
        const { accommodations } = this.props;
        const destName =
            this.destIndex > -1 &&
            accommodations[this.destIndex].title.toUpperCase();
        const destID = this.destIndex > -1 && accommodations[this.destIndex].id;
        const { accommodation } = this.state;
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
                        height: "100%",
                        boxShadow: "9.899px 0px 7px 0px rgba(0,0,0,0.6)",
                        zIndex: 1,
                        display: "flex",
                        flexDirection: "column"
                    }}
                >
                    <Link
                        style={{
                            //   height: "14%",
                            textDecoration: "none"
                        }}
                        to={accomodationNamespace}
                    >
                        <div className="leftSide-menu--container">
                            <img
                                className="leftSide-menu--img"
                                src={AllAreasIcon}
                                alt="All Areas Icon"
                            />
                            <div className="menu-title">ALL AREAS</div>
                        </div>
                    </Link>
                    <Link
                        style={{
                            //  height: "14%",
                            textDecoration: "none"
                        }}
                        to={`${accomodationNamespace}/${destID}`}
                    >
                        <div className="leftSide-menu--container">
                            <img
                                className="leftSide-menu--img"
                                src={HotelListIcon}
                                alt="Hotel List Icon"
                            />
                            <div className="menu-title">{destName} HOTELS</div>
                        </div>
                    </Link>
                    <div className="vertical-title">
                        <span style={{ transform: "rotate(-90deg)" }}>
                            HOTELS
                        </span>
                    </div>
                </div>
                {!!accommodation && (
                    <div style={{ width: "86%", height: "100%" }}>
                        {this.renderImages()}
                        <div style={{ height: "58%" }}>
                            <div style={{ height: "26%", display: "flex" }}>
                                <div
                                    style={{
                                        flexBasis: "33%",
                                        backgroundImage: `url('${
                                            accommodation.logo
                                        }')`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center"
                                    }}
                                />
                                <div
                                    style={{
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        flex: 1,
                                        backgroundColor: LightBlueButtonBackground
                                    }}
                                >
                                    <div className="hotel-title">
                                        {accommodation.title.toUpperCase()}
                                    </div>
                                    <div className="hotel-rating ">
                                        {renderRating(accommodation.rating, 38)}
                                    </div>
                                </div>
                            </div>
                            <div
                                style={{
                                    height: "74%",
                                    display: "flex",
                                    backgroundColor: ExtraHeavyBlueGreen
                                }}
                            >
                                <div
                                    style={{
                                        width: "50%",
                                        height: "92%",
                                        padding: "3% 3% 0 5%"
                                    }}
                                >
                                    <div
                                        className="middle-section--leftSide "
                                        style={{
                                            height: "100%"
                                        }}
                                    >
                                        <Markdown
                                            source={accommodation.description}
                                        />
                                        {/* </div> */}
                                    </div>
                                </div>
                                <div
                                    style={{
                                        width: "50%",
                                        padding: "3% 3% 0 5%"
                                    }}
                                >
                                    <div className="middle-section--rightSide">
                                        {accommodation.phone && (
                                            <p>
                                                CALL TODAY:{" "}
                                                {accommodation.phone}
                                            </p>
                                        )}
                                        {accommodation.website && (
                                            <p>WEB: {accommodation.website}</p>
                                        )}
                                        {accommodation.email && (
                                            <p>EMAIL: {accommodation.email}</p>
                                        )}
                                        {accommodation.address && (
                                            <p>
                                                LOCATION:{" "}
                                                {accommodation.address}
                                            </p>
                                        )}
                                        {this.renderMaps()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = ({ accommodationList }) => {
    const { accommodations } = accommodationList;
    return {
        accommodations
    };
};

export default connect(
    mapStateToProps,
    null
)(HotelDetail);
