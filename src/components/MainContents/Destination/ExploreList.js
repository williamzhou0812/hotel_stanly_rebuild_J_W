import React from "react";
import SubsectionList from "../List/SubsectionList";
import {
    DarkHeavyBlue,
    shiftArray,
    ExtraHeavyBlueGreen,
    HeavyBlue,
    randomiseItems,
    destinationNamespace,
    serviceNamespace
} from "../../../Constants";
import BackToIcon from './icons/BackIcon.png';
// import data
import { destinations } from "./DestinationData";
import { services } from "../Service/ServiceData";

class ExploreList extends React.Component {
    constructor(props) {
        super(props);

        // retrieve destination details
        const id = this.props.match.params.id;
        const _id = parseInt(id);
        const destinationsDetail = destinations.find(item => item.id == _id);
        const explore_list = this.collectExploreData(destinationsDetail);

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
                const { id: service_type_id, services } = service_type_item;
                const filtered = services.filter(service_item => service_item.destination_id === destination.id)
                const explore_data = filtered.map(service_item => { return {
                    id: 'serviceitem_' + service_item.id,
                    url: serviceNamespace + '/' + name + '/' + service_type_id + '/' + service_item.id,
                    title: service_item.title.toUpperCase(),
                    img_url: icon,
                    icon_title: title.toUpperCase(),
                    isIcon: true
                }});
                // add to collection
                explore_list = [...explore_list, ...explore_data];
            })
        });
        console.log('--------------------');
        console.log(explore_list);


        return explore_list;
    }

    render() {
        // get state data 
        const { destinationsDetail, explore_list } = this.state;
        // create output
        return (
            <div style={{width:'100%', height: '100%', whiteSpace: 'nowarp'}}>
              
            
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
                    thumbnailStyle={{ width: "97.75px", height: "63px", backgroundColor: DarkHeavyBlue, borderBottom: '1px solid rgb(4, 60, 66)'}}
                    iconStyle={{width: '100%', height:'auto', maxWidth: '50px', maxHeight:'50px', marginLeft: '25px', marginTop: '8px'}}
                    iconTitleStyle={{backgroundColor: DarkHeavyBlue, height: '63px', width: '207px'}}
                    urlKey="url"
                >
                    
                </SubsectionList> 
    
            </div> 
        )

        /*
        const { data } = this.state;
        const itemHeight =
            this.props.data.length >= 13
                ? "7.7%"
                : `${100 / this.props.data.length}%`;
        return (
            <div
                style={{ width: "100%", height: "100%" }}
                className="section--bottom--animation"
            >
                <div
                    style={{
                        height: "6%",
                        backgroundColor: MediumOrange,
                        ...this.styles.horizontalVerticalCenter
                    }}
                    onClick={this.goUp}
                >
                    <img src={UpButton} style={{ width: "5%" }} alt="Up" />
                </div>
                <div style={{ height: "88%", overflow: "hidden" }}>
                    <div
                        style={{
                            height: "100%",
                            overflowY: "auto",
                            marginRight: "-30px"
                        }}
                    >
                        <div
                            style={{
                                height: "100%",
                                overflow: "auto",
                                paddingRight: "30px"
                            }}
                        >
                            {data.map((item, index) => {
                                return (
                                    <Link
                                        to={item.linkTo}
                                        key={`${item.id}-${index}`}
                                        style={{
                                            height: itemHeight,
                                            color: "white",
                                            display: "flex",
                                            textDecoration: "none"
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "33%",
                                                backgroundColor: ExtraHeavyBlueGreen,
                                                display: "flex",
                                                borderRight:
                                                    "1px solid rgb(4,60,66)",
                                                borderBottom:
                                                    "1px solid rgb(4,60,66)"
                                            }}
                                        >
                                            <div
                                                className="explore"
                                                style={{
                                                    width: "32%",
                                                    ...this.styles
                                                        .horizontalVerticalCenter
                                                }}
                                            >
                                                <img
                                                    src={item.icon}
                                                    style={{ width: "43%" }}
                                                    alt=""
                                                />
                                            </div>
                                            <div
                                                className="explore--title"
                                                style={{
                                                    ...this.styles
                                                        .horizontalVerticalCenter
                                                }}
                                            >
                                                {item.type}
                                            </div>
                                        </div>
                                        <div className="explore--name">
                                            {item.title.toUpperCase()}
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        height: "6%",
                        backgroundColor: MediumOrange,
                        ...this.styles.horizontalVerticalCenter
                    }}
                    onClick={this.goDown}
                >
                    <img src={DownButton} style={{ width: "5%" }} alt="Down" />
                </div>
            </div>
        );*/
    }
}

export default ExploreList;
