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
import Markdown from "../../../MarkDown";
import "../List/MainSectionList.scss";
import "./Service.css";
import { services } from "./ServiceData";
import ListIcon from "../icons/ListIcon.png";

class ServiceBranch extends React.Component {
    constructor(props) {
        super(props);

        const service_name = 'retail';
        const service = services.find(item => item.name == service_name);
        const { service_types } = service;
        const sub_service_name = this.props.match.params.subservicename;
        const sub_service = service_types.find(item => item.id === sub_service_name);
        const sub_service_info_list = sub_service.services;
        const index = 0;
        
        this.state = {
            service_name,
            service,
            service_types,
            sub_service_name,
            sub_service,
            sub_service_info_list,
            index
        };
        /*
        const { data, serviceTypeData, id } = this.props;
        const branches = data[serviceTypeData.listKey];
        let branchIndex = 0;
        if (id) {
            branchIndex = branches.findIndex(branch => {
                return branch.id === id;
            });
        }
        this.state = {
            branches,
            branchIndex: branchIndex !== -1 ? branchIndex : 0,
            map: false
        };*/
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
        }
    };
    renderImages(service_details) {
        const {  images } = service_details;
        if (images.length > 1) {
            return imageGallery(images, "100%", "23vh");
        }
        else if (images.length == 1) {
            return (<img src={images[0].imageFile} style={{ height: '100%', width: '100%' }} />);
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
        const { service_name,
            service,
            service_types,
            sub_service_name,
            sub_service,
            sub_service_info_list,
            index } = this.state;
        
        const service_details = sub_service_info_list[index];


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
                                            justifyContent: 'center',
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
                                            height: "38%",
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
                                        {false && /*service[serviceTypeData.mapKey]
                                            .length > 0 &&*/ (
                                            <MapModal
                                                rootStyle={{}}
                                                textStyle={{
                                                    width: "100%",
                                                    padding: "3% 0",
                                                    borderRadius: "5px",
                                                    fontSize: "20px",
                                                    fontWeight: 500,
                                                    boxShadow:
                                                        "0px 0px 10px 1px rgba(0,0,0,0.5)",
                                                    backgroundColor: LightBlueButtonBackground,

                                                    display: "inline-block",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}
                                                buttonTitle="SEE MAP"
                                                title={service.title}
                                                mapImage={
                                                    null
                                                    /*service[
                                                        serviceTypeData
                                                            .mapKey
                                                    ][0].mapImage*/
                                                }
                                            />
                                        )}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );

        /*
        return (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    color: "white"
                }}
            >
                <div
                    style={{
                        backgroundColor: HeavyOrange,
                        width: "14%",
                        boxShadow: "9.899px 0px 7px 0px rgba(0,0,0,0.6)",
                        zIndex: 1,

                        height: "100%",
                        flexDirection: "column",
                        display: "flex"
                    }}
                >
                    <Link
                        style={{

                            textDecoration: "none"
                        }}
                        to={serviceNamespace}
                    >
                        <div
                            style={{
                                borderStyle: "none none solid none",
                                borderColor: LightOrange,
                                paddingBottom: "20%"
                            }}
                        >
                            <img
                                className="leftSide-menu--img"
                                src={ServiceTypesIcon}

                                alt="Service Types Icon"
                            />
                            <div
                                className="menu-title"

                            >
                                SERVICE TYPES
                            </div>
                        </div>
                    </Link>
                    <Link
                        style={{

                            textDecoration: "none"
                        }}
                        to={serviceTypeData.namespace}
                    >
                        <div
                            style={{
                                borderStyle: "none none solid none",
                                borderColor: LightOrange,
                                paddingBottom: "20%"
                            }}
                        >
                            <img
                                className="leftSide-menu--img"
                                src={serviceTypeData.icon}
                                alt="Service Type Icon"
                            />
                            <div className="menu-title">
                                {serviceTypeData.title}
                            </div>
                        </div>
                    </Link>
                    <div className="vertical-title">
                        <span style={{ transform: "rotate(-90deg)" }}>
                            SERVICES
                        </span>
                    </div>
                </div>
                <div style={{ width: "86%" }}>
                    {this.renderImages()}
                    <div style={{ height: "58%" }}>
                        <div style={{ height: "26%", display: "flex" }}>
                            <div
                                style={{
                                    flexBasis: "33%",
                                    backgroundImage: `url('${branch.logo}')`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    borderWidth: "1px",
                                    borderStyle: "solid solid solid none",
                                    borderColor: "rgb(8,152,163)"
                                }}
                            />
                            <div
                                style={{
                                    flex: 1,
                                    backgroundColor: LightBlueButtonBackground,
                                    ...this.styles.horizontalVerticalCenter,
                                    borderWidth: "1px",
                                    borderStyle: "solid none solid solid",
                                    borderColor: "rgb(183,223,228)",
                                    fontSize: "2.3vw",

                                    fontWeight: "bold",
                                    letterSpacing: "3px"
                                }}
                            >
                                {data.title.toUpperCase()}
                            </div>
                        </div>
                        <div style={{ height: "74%", display: "flex" }}>
                            <div
                                style={{
                                    flexBasis: "50%",
                                    borderRight: "1px solid rgb(105,194,209)",
                                    padding: "4%",
                                    backgroundColor: ExtraHeavyBlueGreen
                                }}
                            >
                                <p className="middle-section--leftSide">
                                    <Markdown source={branch.description} />
                                </p>
                            </div>
                            <div style={{ width: "50%" }}>
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
                                                fontSize: "1.5vw",
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
                                                fontSize: "1.5vw",

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
                                                fontSize: "1.5vw"
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

                                            fontWeight: "500",

                                            fontSize: "1.5vw",
                                            letterSpacing: "1px"
                                        }}
                                    >
                                        {branch.title.toUpperCase()}
                                    </div>
                                </div>
                                <div
                                    style={{
                                        height: "72%",
                                        backgroundColor: ExtraHeavyBlueGreen
                                    }}
                                >
                                    <div
                                        style={{
                                            height: "69%",

                                            textAlign: "left",
                                            padding: "4%",

                                            fontSize: "1.5vw",
                                            letterSpacing: "1px",
                                            overflowWrap: "break-word",
                                            wordWrap: "break-word"
                                        }}
                                    >
                                        {branch.phone && (
                                            <div>
                                                CALL TODAY: {branch.phone}
                                            </div>
                                        )}
                                        {branch.website && (
                                            <div>
                                                WEB:{" "}
                                                {removeHttp(branch.website)}
                                            </div>
                                        )}
                                        {branch.email && (
                                            <div>EMAIL: {branch.email}</div>
                                        )}
                                        {branch.address && (
                                            <div>{branch.address}</div>
                                        )}
                                    </div>
                                    <div
                                        style={{
                                            height: "31%",
                                            ...this.styles
                                                .horizontalVerticalCenter
                                        }}
                                    >
                                        {branch[serviceTypeData.mapKey].length >
                                            0 && (
                                                <MapModal
                                                    buttonStyle={{
                                                        width: "94%",
                                                        margin: "3%"
                                                    }}
                                                    textStyle={{
                                                        width: "100%",
                                                        padding: "3%",
                                                        borderRadius: "5px",
                                                        fontSize: "1.5vw",

                                                        fontWeight: "bold",
                                                        boxShadow:
                                                            "0px 0px 10px 1px rgba(0,0,0,0.5)",
                                                        backgroundColor: LightBlueButtonBackground,
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center"
                                                    }}
                                                    buttonTitle="SEE MAP"
                                                    title={data.title}
                                                    mapImage={
                                                        branch[
                                                            serviceTypeData.mapKey
                                                        ][0].mapImage
                                                    }
                                                />
                                            )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        */
    }
}

export default ServiceBranch;
