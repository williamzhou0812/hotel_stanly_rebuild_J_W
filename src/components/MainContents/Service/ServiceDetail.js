import React from "react";
import {
    LightBlueGreen,
    imageGallery,
    HeavyOrange,
    serviceNamespace,
    LightBlueButtonBackground,
    ExtraHeavyBlueGreen,
    // LightOrange,
    removeHttp
} from "../../../Constants";
import ServiceTypesIcon from "../Dining/icons/RestaurantListIcon.png";
import { Link } from "react-router-dom";
import MapModal from "../Maps/MapModal";
import "../List/MainSectionList.scss";
import "./Service.css";
import { services } from "./ServiceData";
import ListIcon from "../icons/ListIcon.png";

class ServiceDetail extends React.Component {
    
    
    openMap() {
        this.setState({ map: true });
    }

    closeMap() {
        this.setState({ map: false });
    }
    renderImages(service_details) {
        const {  images } = service_details;
        if (images.length > 1) {
            return imageGallery(images, "100%", "23vh");
        }
        else if (images.length === 1) {
            return (<img src={images[0].imageFile} style={{ height: '100%', width: '100%' }} alt=""/>);
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
                    <h1>NO IMAGE FOR THIS SERVICE</h1>
                </div>
            );
        }
    }
    styles = {
        horizontalVerticalCenter: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        mapOrFindButtonStyle: {
            backgroundColor: LightBlueButtonBackground,
            display: "flex",
            width: "100%",
            padding: "4% 0",
            marginTop: "-5%",
            borderRadius: "5px",
            boxShadow: "0px 0px 10px 1px rgba(0,0,0,0.5)",
            color: "white",
            justifyContent: "center"
        },
        mapOrFindButtonText: {
            letterSpacing: "2px",
            fontSize: "18px",
            fontWeight: "bold"
        },
    };
    render() {
        // get service details
        const service_name = this.props.match.params.servicename;
        const service = services.find(item => item.name === service_name);
        const { service_types } = service;
        const sub_service_name = this.props.match.params.subservicename;
        const sub_service = service_types.find(item => item.id === sub_service_name);
        const sub_service_info_list = sub_service.services;
        const detail_id = parseInt(this.props.match.params.detailid);
        const service_details = sub_service_info_list.find(item => item.id === detail_id);


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
                        flexDirection: "column",
                        justifyContent: "center"
                    }}
                >
                    <Link
                        style={{
                            textDecoration: "none"
                        }}
                        to={serviceNamespace}
                    >
                        <div className="leftSide-menu--container">
                            <img
                                className="leftSide-menu--img"
                                src={ServiceTypesIcon}
                                alt="Service Types Icon"
                            />
                            <div className="menu-title">SERVICE TYPES</div>
                        </div>
                    </Link>
                    <Link
                        style={{
                            //  height: "14%",
                            textDecoration: "none"
                        }}
                        to={service.url}
                    >
                        <div className="leftSide-menu--container">
                            <img
                                className="leftSide-menu--img"
                                src={service.icon}
                                alt="Service Type Icon"
                            />
                            <div className="menu-title ">
                                {service.title}
                            </div>
                        </div>
                    </Link>
                    <Link
                        style={{
                            //  height: "14%",
                            textDecoration: "none"
                        }}
                        to={service.url + '/' + sub_service.id}
                    >
                        <div className="leftSide-menu--container">
                            <img
                                className="leftSide-menu--img"
                                src={sub_service.img_url}
                                alt="Service Type Icon"
                            />
                            <div className="menu-title ">
                                {sub_service.title}
                            </div>
                        </div>
                    </Link>
                    {false && (
                        <Link
                            style={{
                                //  height: "14%",
                                textDecoration: "none"
                            }}
                            to={`TBC`}
                        >
                            <div className="leftSide-menu--container">
                                <img
                                    className="leftSide-menu--img"
                                    src={ListIcon}
                                    alt="Service List Icon"
                                />
                                <div className="menu-title ">
                                    {"TBC".toUpperCase()}
                                </div>
                            </div>
                        </Link>
                    )}
                    <div
                        className="vertical-title"
                        style={{
                            height: "60%"
                        }}
                    >
                        <span
                            // className="verticalTitleMargin"
                            style={{ transform: "rotate(-90deg)" }}
                        >
                            SERVICES
                        </span>
                    </div>
                </div>
                {service_details && (
                    <div className='event-main'>
                        <div style={{ height: "42%", width: "100%" }}>
                            {this.renderImages(service_details)}
                        </div>
                        <div style={{ height: "58%", width: "100%" }}>
                            <div
                                style={{
                                    height: "26%",
                                    backgroundColor: LightBlueGreen,
                                    display: "flex"
                                }}
                            >
                                <div
                                style={{
                                    flexBasis: "33%",
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
                                                backgroundImage: `url('${service_details.img_url}')`,
                                                backgroundSize: "100%",
                                                backgroundPosition: "center"
                                            }}>
                                        </div>
                                    </div>
                                </div>
                                <div style={{
                                    flexBasis: "67%",
                                    padding: "0px 0px 0px 10px",
                                    border: "1px solid rgb(183, 223, 228",
                                    borderRightStyle: 'none'
                                }}
                                >
                                    <div className="middle-section--rightSide"
                                        style={{
                                            height: "100%",
                                            letterSpacing: "3px",
                                            fontSize: "28px",
                                            lineHeight: '40px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'left',
                                            textAlign: 'left',
                                            paddingLeft: '30px'


                                        }}
                                    >
                                        {service_details.title.toUpperCase()}
                                    
                                    </div>

                                </div>

                            </div>
                            <div
                                style={{
                                    height: "74%",
                                    backgroundColor: ExtraHeavyBlueGreen,
                                    display: "flex"
                                }}
                            >
                                <div
                                    style={{
                                        flexBasis: "50%",
                                        padding: "35px 20px 35px 50px",
                                        overflowY: "auto",
                                        borderRight:
                                                "1px solid rgb(105,194,209)",
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
                                            dangerouslySetInnerHTML={{__html: service_details.description}}
                                            style={{
                                                marginTop: 0,
                                                marginBottom: 0,
                                                lineHeight: '28px'
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                <div style={{
                                    flexBasis: "50%",
                                    padding: "35px 20px 35px 20px",
                                    overflowY: "auto",
                                }}
                                >
                                    {false && (<div style={{ height: "15%" }} />)}
                                    
                                    <div className="middle-section--rightSide"
                                        style={{
                                            height: "84%",
                                            letterSpacing: "1px",
                                            overflow: "scroll",
                                            display: "inline-table",
                                            width: "100%",
                                            lineHeight: '28px',
                                            paddingLeft: '20px'
                                            // fontSize: "2vw"
                                        }}
                                    >
                                        {service_details.phone && (
                                            <p>
                                                CALL TODAY: {service_details.phone}
                                            </p>
                                        )}
                                        {service_details.website && (
                                            <p>
                                            <div
                                                dangerouslySetInnerHTML={{__html: 'WEB: ' + removeHttp(
                                                    service_details.website
                                                )}}
                                            ></div>
                                            </p>
                                        )}
                                        {service_details.email && (
                                            <p>EMAIL: {service_details.email}</p>
                                        )}
                                        {service_details.address && (
                                            <p>
                                             <div
                                                dangerouslySetInnerHTML={{__html: service_details.address}}
                                            ></div>
                                            </p>
                                        )}
                                        
                                    </div>
                                    {service_details.mapImage && (
                                        <div>
                                            <div className="middle-section--btnContainer">
                                                <div className="middle-section--btnContainer--btn">
                                                    <MapModal
                                                        buttonTitle="SEE MAP"
                                                        title={service_details.title}
                                                        buttonStyle={
                                                            this.styles
                                                                .mapOrFindButtonStyle
                                                        }
                                                        textStyle={
                                                            this.styles
                                                                .mapOrFindButtonText
                                                        }
                                                        mapImage={service_details.mapImage}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );

    }
}


export default ServiceDetail;
