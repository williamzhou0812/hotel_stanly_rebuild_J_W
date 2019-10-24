import React from "react";
import {
    serviceNamespace
} from "../../../Constants";
import ListIcon from "../icons/ListIcon.png";
import SubsectionList from "../List/SubsectionList";
import { services } from "./ServiceData";
class ServiceList extends React.Component {
    
    render() {
        const service_name = this.props.match.params.servicename;
        const service = services.find(item => item.name === service_name);
        const { service_types } = service;
        const sub_service_name = this.props.match.params.subservicename;
        const sub_service = service_types.find(item => item.id === sub_service_name);
        const sub_service_info_list = sub_service.services;

        // change title to Upper case
        const mod_sub_service_info_list = sub_service_info_list.map( item => {
            return { ...item, title: item.title.toUpperCase()}
        })

        return (
            <div
                className="section--bottom--animation"
                style={{ width: "100%", height: "100%", color: "white" }}
            >
                <SubsectionList
                    numberOfEntries={4}
                    data={mod_sub_service_info_list}

                    namespace={service.sub_url + '/' +sub_service_name}
                    imageKey="logo"
                    isImageArray={true}
                    sideButtons={[
                        { title: "SERVICE TYPES", isLink: true, link: serviceNamespace, icon: ListIcon },
                        { title: service.title.toUpperCase(), isLink: true, link: service.sub_url, icon: service.icon }
                    ]}
                    sideTitle="SERVICES"
                    mainTitle={sub_service.title.toUpperCase()}
                    thumbnailStyle={{ width: "316px", height: "206.5px", paddingLeft: '80px', paddingTop: '50px'}}
                    iconStyle={{width: '100%', height:'auto', maxWidth: '170px', maxHeight:'120px'}}
                    titleWrap={true}
                >

                </SubsectionList>

            </div >
        );

    }
}
export default ServiceList;
