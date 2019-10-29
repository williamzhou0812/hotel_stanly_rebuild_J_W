import React from "react";
import {
    imageGallery,
    HeavyOrange,
    ExtraHeavyBlueGreen,
    LightBlueButtonBackground,
    removeHttp,
    serviceNamespace,
    LightBlueGreen
} from "../../../Constants";
import { Link } from "react-router-dom";
import ServiceTypesIcon from "../Dining/icons/RestaurantListIcon.png";
import MapModal from "../Maps/MapModal";
import "../List/MainSectionList.scss";
import "./Service.css";
import { services } from "./ServiceData";
const querystring = require('querystring');

class ServiceBranch extends React.Component {
    constructor(props) {
        super(props);

        const service_name = 'retail';
        const service = services.find(item => item.name === service_name);
        const { service_types } = service;
        const sub_service_name = this.props.match.params.subservicename;
        const sub_service = service_types.find(item => item.id === sub_service_name);
        const sub_service_info_list = sub_service.services;
        // default index
        let index = 0;
        if (this.props.location.search) {
            // get request id
            const query = querystring.parse(this.props.location.search.replace('?', ''));
            if (query.id) {
                // id is provided, search from given data list
                const requested = sub_service_info_list.find(item => item.id === parseInt(query.id));
                if (requested) {
                    index = sub_service_info_list.indexOf(requested);
                }
            }
        }
        
        this.state = {
            service_name,
            service,
            service_types,
            sub_service_name,
            sub_service,
            sub_service_info_list,
            index
        };
        this.openMap = this.openMap.bind(this);
        this.closeMap = this.closeMap.bind(this);
        this.prevBranch = this.prevBranch.bind(this);
        this.nextBranch = this.nextBranch.bind(this);
    }
    openMap() {
        this.setState({ map: true });
    }

    closeMap() {
        this.setState({ map: false });
    }
    prevBranch() {
        const { sub_service_info_list, index } = this.state;
        if (index === 0) {
            this.setState({ index: sub_service_info_list.length - 1 });
        } else {
            this.setState({ index: index - 1 });
        }
    }
    nextBranch() {
        const { index, sub_service_info_list } = this.state;
        if (index === sub_service_info_list.length - 1) {
            this.setState({ index: 0 });
        } else {
            this.setState({ index: index + 1 });
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
    render() {

        // get service details
        const { 
            service,
            sub_service,
            sub_service_info_list,
            index } = this.state;
        
        const service_details = sub_service_info_list[index];
        const right_div_height = (sub_service_info_list.length === 1 ) ? '80%' : '52%';


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
                    {/*}
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
                                src={sub_service.img_url}
                                alt="Service Type Icon"
                            />
                            <div className="menu-title ">
                                {sub_service.title}
                            </div>
                        </div>
                    </Link> */}
                    
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
                                        {sub_service.title.toUpperCase()}
                                    
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
                                    padding: "0px",
                                    overflowY: "auto",
                                }}
                                >
                                    {sub_service_info_list.length > 1 && (
                                    <div style={{ height: "28%" }}>
                                        <div
                                            style={{
                                                height: "50%",
                                                display: "flex"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    flex: 1,
                                                    ...this.styles
                                                        .horizontalVerticalCenter,
                                                    backgroundColor: LightBlueButtonBackground,
                                                    // fontSize: "20px",
                                                    fontSize: "20px",
                                                    letterSpacing: "2px"
                                                    // paddingTop: "10px"
                                                }}
                                                onClick={this.prevBranch}
                                            >
                                                PREVIOUS
                                            </div>
                                            <div
                                                style={{
                                                    flex: 1,
                                                    ...this.styles
                                                        .horizontalVerticalCenter,
                                                    backgroundColor:
                                                        "rgb(75,175,188)",
                                                    color: "rgb(0,109,121)",
                                                    fontSize: "20px",

                                                    letterSpacing: "2px"
                                                }}
                                            >
                                                LOCATION
                                            </div>
                                            <div
                                                style={{
                                                    flex: 1,
                                                    ...this.styles
                                                        .horizontalVerticalCenter,
                                                    backgroundColor: LightBlueButtonBackground,

                                                    letterSpacing: "2px",
                                                    fontSize: "20px"
                                                }}
                                                onClick={this.nextBranch}
                                            >
                                                NEXT
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                height: "50%",
                                                backgroundColor: "rgb(183,223,228)",
                                                color: "rgb(0,109,121)",
                                                ...this.styles
                                                    .horizontalVerticalCenter,
                                                    textAlign: 'center',
                                                fontWeight: "500",

                                                fontSize: "20px",
                                                letterSpacing: "1px"
                                            }}
                                        >
                                            {service_details.title.toUpperCase()}
                                        </div>
                                    </div>
                                    )}

                                    
                                    <div className="middle-section--rightSide"
                                        style={{
                                            height: right_div_height,
                                            letterSpacing: "1px",
                                            overflow: "scroll",
                                            display: "inline-table",
                                            width: "100%",
                                            lineHeight: '28px',
                                            padding: "35px 20px 35px 50px"
                                        }}
                                    >
                                        {service_details.phone && (
                                            <p>
                                                CALL TODAY: {service_details.phone}
                                            </p>
                                        )}
                                        {service_details.website && (
                                            <p>
                                                WEB:{" "}
                                                {removeHttp(
                                                    service_details.website
                                                )}
                                            </p>
                                        )}
                                        {service_details.email && (
                                            <p>EMAIL: {service_details.email}</p>
                                        )}
                                        {service_details.address && (
                                             <div
                                                dangerouslySetInnerHTML={{__html: service_details.address}}
                                            ></div>
                                        )}
                                        
                                    </div>
                                    {service_details.mapImage && (
                                        <div style={{padding: '0px 25px 0px 25px'}}>
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

export default ServiceBranch;
