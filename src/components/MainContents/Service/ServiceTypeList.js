import React from "react";
import {
    miningNamespace,
    essentialNamespace,
    transportNamespace,
    retailNamespace,
    getServiceTypeListBasedLocation,
    getServiceTypeDetailBasedLocation,
    serviceNamespace
} from "../../../Constants";
import ListIcon from "../icons/ListIcon.png";
import SubsectionList from "../List/SubsectionList";
import ServiceTypesIcon from "../Dining/icons/RestaurantListIcon.png";
import { services } from "./ServiceData";
class ServiceTypeList extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const service_name = this.props.match.params.servicename;
        const service = services.find(item => item.name == service_name);
        const { service_types } = service;
       
        return (
            <div
                className="section--bottom--animation"
                style={{ width: "100%", height: "100%", color: "white" }}
            >
                <SubsectionList
                    numberOfEntries={4}
                    data={service_types}

                    namespace={service.url}
                    imageKey="logo"
                    isImageArray={false}
                    sideButtons={[
                        { title: "SERVICE TYPES", isLink: true, link: serviceNamespace, icon: ListIcon }
                    ]}
                    sideTitle="SERVICES"
                    mainTitle={service.title.toUpperCase()}
                    thumbnailStyle={{ width: "316px", height: "207px"}}

                >

                </SubsectionList>

            </div >
        );


        /*
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
        }*/
    }
}
export default ServiceTypeList;
