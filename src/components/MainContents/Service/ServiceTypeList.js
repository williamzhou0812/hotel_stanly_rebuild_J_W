import React from "react";
import {
    serviceNamespace
} from "../../../Constants";
import ListIcon from "../icons/ListIcon.png";
import SubsectionList from "../List/SubsectionList";
import { services } from "./ServiceData";
class ServiceTypeList extends React.Component {
    
    render() {
        const service_name = this.props.match.params.servicename;
        const service = services.find(item => item.name === service_name);
        const { service_types } = service;
       
        return (
            <div
                className="section--bottom--animation"
                style={{ width: "100%", height: "100%", color: "white" }}
            >
                <SubsectionList
                    numberOfEntries={4}
                    data={service_types}

                    namespace={service.sub_url}
                    imageKey="logo"
                    isImageArray={false}
                    sideButtons={[
                        { title: "SERVICE TYPES", isLink: true, link: serviceNamespace, icon: ListIcon }
                    ]}
                    sideTitle="SERVICES"
                    mainTitle={service.title.toUpperCase()}
                    thumbnailStyle={{ width: "316px", height: "206.5px", paddingLeft: '80px', paddingTop: '50px'}}
                    iconStyle={{width: '100%', height:'auto', maxWidth: '170px', maxHeight:'120px'}}
                >

                </SubsectionList>

            </div >
        );

    }
}
export default ServiceTypeList;
