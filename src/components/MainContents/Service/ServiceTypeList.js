import React from "react";
//import { connect } from "react-redux";
import {
    miningNamespace,
    essentialNamespace,
    transportNamespace,
    retailNamespace,
    getServiceTypeListBasedLocation,
    getServiceTypeDetailBasedLocation,
    serviceNamespace
} from "../../Constants";
import SubsectionList from "../List/SubsectionList";
import ServiceTypesIcon from "../Dining/icons/RestaurantListIcon.png";

class ServiceTypeList extends React.Component {
    constructor(props) {
        super(props);
    }
    essentialData = [
        {
            id: "Banks",
            serviceTypes: "essentials",
            title: "BANKS",
            url: essentialNamespace + "/:serid",
            imgSrc: "./icons/MinesResources.png"
        },
        {
            id: "Embassies",
            serviceTypes: "essentials",
            title: "EMBASSIES",
            url: essentialNamespace + "/:serid",
            imgSrc: "./icons/._Services_Icons-Medical.svg"
        },
        {
            id: "Security",
            serviceTypes: "essentials",
            title: "SECURITY",
            url: essentialNamespace + "/:serid",
            imgSrc: "./icons/._Services_Icons-Medical.svg"
        },
        {
            id: "Medical",
            serviceTypes: "essentials",
            title: "MEDICAL",
            url: essentialNamespace + "/:serid",
            imgSrc: "./icons/._Services_Icons-Medical.svg"
        }
    ];
    transportData = [
        {
            id: "Fright",
            serviceTypes: "transport",
            title: "FREIGHT SERVICES",
            url: transportNamespace + "/:serid",
            imgSrc: "./icons/._Services_Icons-Medical.svg"
        },
        {
            id: "Airline",
            serviceTypes: "transport",
            title: "PASSENGER AIRLINE SERVICES",
            url: transportNamespace + "/:serid",
            imgSrc: "./icons/._Services_Icons-Medical.svg"
        },
        {
            id: "Hire",
            serviceTypes: "transport",
            title: "VEHICLE HIRE",
            url: transportNamespace + "/:serid",
            imgSrc: "./icons/._Services_Icons-Medical.svg"
        },
        {
            id: "TransportInfo",
            serviceTypes: "transport",
            title: "MORE INFO",
            url: transportNamespace + "/:serid",
            imgSrc: "./icons/._Services_Icons-Medical.svg"
        }
    ];
    miningData = [
        {
            id: "Mines",
            serviceTypes: "mining",
            title: "MINES",
            url: miningNamespace + "/:serid",
            imgSrc: "./icons/._Services_Icons-Medical.svg"
        },
        {
            id: "Agriculture",
            serviceTypes: "mining",
            title: "AGRICULTURE",
            url: miningNamespace + "/:serid",
            imgSrc: "./icons/._Services_Icons-Medical.svg"
        },
        {
            id: "Petroleum",
            serviceTypes: "mining",
            title: "PETROLEUM & GAS",
            url: miningNamespace + "/:serid",
            imgSrc: "./icons/._Services_Icons-Medical.svg"
        },
        {
            id: "Departments",
            serviceTypes: "mining",
            title: "OFFICIAL DEPARTMENTS",
            url: miningNamespace + "/:serid",
            imgSrc: "./icons/._Services_Icons-Medical.svg"
        }
    ];

    render() {
        if (this.props.location.pathname.includes(transportNamespace)) {
            // const essentialData =
            return (
                <div style={{ height: "54vh" }}>
                    <SubsectionList
                        numberOfEntries={4}
                        data={this.transportData}
                        imageSrc={this.transportData.imgSrc}
                        to={this.transportData.url}
                        namespace="transport"
                        imageKey="imageServiceType"
                        isImageArray={true}
                        sideButtons={[
                            {
                                title: "SERVICE TYPES",
                                icon: ServiceTypesIcon,
                                isLink: true,
                                link: serviceNamespace
                            }
                        ]}
                        sideTitle="SERVICES"
                        mainTitle="Transport SERVICES"
                    />
                </div>
            );
        } else if (this.props.location.pathname.includes(essentialNamespace)) {
            return (
                <div style={{ height: "54vh" }}>
                    <SubsectionList
                        numberOfEntries={4}
                        data={this.essentialData}
                        imageSrc={this.essentialData.imgSrc}
                        to={this.essentialData.url}
                        namespace="essential"
                        imageKey="imageServiceType"
                        isImageArray={true}
                        sideButtons={[
                            {
                                title: "SERVICE TYPES",
                                icon: ServiceTypesIcon,
                                isLink: true,
                                link: serviceNamespace
                            }
                        ]}
                        sideTitle="SERVICES"
                        mainTitle="ESSENIIAL SERVICES"
                    />
                </div>
            );
        } else if (this.props.location.pathname.includes(miningNamespace)) {
            return (
                <div style={{ height: "54vh" }}>
                    <SubsectionList
                        numberOfEntries={4}
                        data={this.miningData}
                        imageSrc={this.miningData.imgSrc}
                        to={this.miningData.url}
                        namespace="mining"
                        imageKey="imageServiceType"
                        isImageArray={true}
                        sideButtons={[
                            {
                                title: "SERVICE TYPES",
                                icon: ServiceTypesIcon,
                                isLink: true,
                                link: serviceNamespace
                            }
                        ]}
                        sideTitle="SERVICES"
                        mainTitle="MINING SERVICES"
                    />
                </div>
            );
        } else {
            return <div>gggggg</div>;
        }
    }
}
export default ServiceTypeList;
