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
                    thumbnailStyle={{ width: "316px", height: "207px", paddingLeft: '60px', paddingTop: '50px'}}
                    iconStyle={{width: '170px', height:'auto'}}
                >

                </SubsectionList>

            </div >
        );

    }
}
export default ServiceTypeList;
