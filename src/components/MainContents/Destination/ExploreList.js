import React from "react";
import SubsectionList from "../List/SubsectionList";
import {
    DarkHeavyBlue,
    eventNamespace,
    activityNamespace,
    randomiseItems,
    destinationNamespace,
    serviceNamespace,
    diningNamespace
} from "../../../Constants";
import BackToIcon from './icons/BackIcon.png';
import activityListIcon from "../../../components/MainContents/icons/ACTIVITIES_ICON.png";
import EventsIcon from "../../Header/Navs/icons/EVENTS_ICON.png";
import DiningIcon from "../../Header/Navs/icons/DINING_ICON.png";
import "./ExploreList.scss";

// import data
import { destinations } from "./DestinationData";
import { services } from "../Service/ServiceData";
import { activities } from "../Activity/ActivityData";
import { events } from "../Event/EventData";
import {restaurants } from "../Dining/DiningData";

class ExploreList extends React.Component {
    constructor(props) {
        super(props);

        // retrieve destination details
        const id = this.props.match.params.id;
        const _id = parseInt(id);
        const destinationsDetail = destinations.find(item => item.id === _id);
        const explore_list = randomiseItems(this.collectExploreData(destinationsDetail));

        // store state
        this.state = {
            destinationsDetail,
            explore_list
        }
    }

    collectExploreData(destination) {
        // filter service 
        let explore_list = [];
        services.forEach(item => {
            // retrieve service type info
            const { name ,title, icon, service_types } = item;
            service_types.forEach(service_type_item => {
                const { id: service_type_id, services, serviceTypes } = service_type_item;
                const filtered = services.filter(service_item => service_item.destination_id === destination.id)
                const explore_data = filtered.map(service_item => {
                    // retail service has a very specific url structure
                    const service_item_url = (serviceTypes === 'retail') ? 
                    serviceNamespace + '/' + name + '/' + service_type_id + '?id=' + service_item.id :
                    serviceNamespace + '/' + name + '/' + service_type_id + '/' + service_item.id
          
                    return {
                    id: 'serviceitem_' + service_item.id,
                    url: service_item_url,
                    title: service_item.title.toUpperCase(),
                    img_url: icon,
                    icon_title: title.toUpperCase(),
                    isIcon: true
                }});
                // add to collection
                explore_list = [...explore_list, ...explore_data];
            })
        });
        // filter activities
        activities.forEach(item => {
            const { id: activity_id, destinations: activity_destinations, title: activityTitle} = item;
            const filtered = activity_destinations.filter( activity_item => activity_item.destination_id === destination.id);
            const explore_data = filtered.map(activity_item => { return {
                id: 'activityitem_' + activity_item.id,
                url: activityNamespace + '/' + activity_id + '/' + activity_item.id,
                title: activityTitle + " IN " + activity_item.title.toUpperCase(),
                img_url: activityListIcon,
                icon_title: "ACTIVITIES",
                isIcon: true
            }});
            // add to collection
            explore_list = [...explore_list, ...explore_data]; 
        });
        // filter events
        events.forEach(item => {
            if (item.destination_id === destination.id) {
                const explore_data = {
                    id: 'eventitem_' + item.id,
                    url: eventNamespace + '/' + item.id,
                    title: item.title.toUpperCase(),
                    img_url: EventsIcon,
                    icon_title: "EVENT",
                    isIcon: true
                };
                // add to collection
                explore_list = [...explore_list, explore_data]; 
            }
        });
        // filter dinings
        restaurants.forEach(item => {
            if (item.destination_id === destination.id) {
                const explore_data = {
                    id: 'diningitem_' + item.id,
                    url: diningNamespace + '/' + item.id,
                    title: item.title.toUpperCase(),
                    img_url: DiningIcon,
                    icon_title: "DINING",
                    isIcon: true
                };
                // add to collection
                explore_list = [...explore_list, explore_data]; 
            }
        });



        return explore_list;
    }

    render() {
        // get state data 
        const { destinationsDetail, explore_list } = this.state;
        // create output
        return (
            <div className="explorelist" style={{width:'100%', height: '100%', whiteSpace: 'nowarp'}}>
              
            
                <SubsectionList
                    numberOfEntries={4}
                    data={explore_list}
                    namespace={destinationNamespace + "/" + destinationsDetail.id}
                    
                    imageKey="imageServiceType"
                    isImageArray={true}
                    sideButtons={[
                        { title: 'BACK TO OVERVIEW', isLink: true, link: destinationNamespace + "/" + destinationsDetail.id, icon: BackToIcon}
                    ]}
                    sideTitle="EXPLORE"
                    mainTitle={destinationsDetail.title}
                    evenDetailsProps={explore_list}                
                    thumbnailStyle={{ width: "97px", height: "63px", backgroundColor: DarkHeavyBlue, borderBottom: '1px solid rgb(4, 60, 66)'}}
                    iconStyle={{width: '100%', height:'auto', maxWidth: '50px', maxHeight:'50px', marginLeft: '25px', marginTop: '8px'}}
                    iconTitleStyle={{backgroundColor: DarkHeavyBlue, height: '63px', width: '207px'}}
                    urlKey="url"
                    itemTitleStyle={{fontSize: '1.98vw'}}
                    itemTitleDivStyle={{paddingLeft: '18px', width: '620px', letterSpacing: 'normal'}}
                >
                    
                </SubsectionList> 
    
            </div> 
        )
    }
}

export default ExploreList;
