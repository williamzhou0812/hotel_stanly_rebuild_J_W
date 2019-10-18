import React from "react";
import SubsectionList from "../List/SubsectionList";
import { activityNamespace } from "../../../Constants";
import activityListIcon from "../../../components/MainContents/icons/ACTIVITIES_ICON.png";
import mapIcon from "../../../components/MainContents/icons/MapIcon.png";
import { activities } from "./ActivityData";
import { randomNumber } from "../../../Constants";

class ActivityDestinationList extends React.Component {
    
    render() {
        // get the destination list
        const id = this.props.match.params.id;
        const _id = parseInt(id);
        const activity = activities.find(item => item.id === _id);
        const { destinations } = activity;

        // change title to Upper case
        const mod_destinations = destinations.map( item => {
            // get random image idx
            const random_idx = (activity.images.length === 1) ? 
            0 : randomNumber(0, activity.images.length - 1);
            const activity_img_url = activity.images[random_idx].imageFile;

            return { ...item, title: item.title.toUpperCase(), img_url: activity_img_url}
        })

        return (
            <div
                className="section--bottom--animation"
                style={{ width: "100%", height: "100%", color: "white" }}
            >
                <SubsectionList
                    numberOfEntries={4}
                    data={mod_destinations}
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
