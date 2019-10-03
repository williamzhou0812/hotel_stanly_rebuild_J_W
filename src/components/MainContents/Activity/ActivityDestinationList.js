import React from "react";
import SubsectionList from "../List/SubsectionList";
import { DECIMAL_RADIX, activityNamespace } from "../../../Constants";
import activityListIcon from "../../../components/MainContents/icons/ACTIVITIES_ICON.png";
import mapIcon from "../../../components/MainContents/icons/MapIcon.png";
import { activities } from "./ActivityData";

class ActivityDestinationList extends React.Component {
    
    render() {
        // get the destination list
        const id = this.props.match.params.id;
        const _id = parseInt(id);
        const activity = activities.find(item => item.id == _id);
        const { destinations } = activity;

        return (
            <div
                className="section--bottom--animation"
                style={{ width: "100%", height: "100%", color: "white" }}
            >
                <SubsectionList
                    numberOfEntries={4}
                    data={destinations}
                    namespace={activityNamespace + '/' + _id }
                    imageKey="logo"
                    isImageArray={false}
                    sideButtons={[
                        {
                            title: "ALL ACTIVITIES",
                            icon: activityListIcon,
                            isLink: true,
                            link: activityNamespace
                        },
                        { title: activity.title + " MAP", icon: mapIcon, isMap: true, map: activity.map_image }
                    ]}
                    sideTitle="ACTIVITIES"
                    mainTitle={activity.title}
                    maps={destinations.mapActivity}
                    thumbnailStyle={{ width: "316px", height: "137.3px"}}
                ></SubsectionList>
            </div>
        );
    }
}
export default ActivityDestinationList;
