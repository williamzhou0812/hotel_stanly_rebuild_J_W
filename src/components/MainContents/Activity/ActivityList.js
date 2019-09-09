import React from 'react'

import SectionList from "../List/SectionList";
import { activityNamespace } from '../../../Constants';
import AV1 from './images/ACTIVITIES-DIVING-GALLERY_P_RazKD51.jpg';
import AV2 from './images/ACTIVITIES-SURFING-GALLERYIMAGES_P.jpg';
import AV3 from './images/ACTIVITIES-TREKKING-HEADERIMAGE_P.jpg';
import AV4 from './images/ACTIVITIES-FISHING-GALLERYIMAGES_P.jpg';

class ActivityList extends React.Component {
    activities = [
        {
            id: 1,
            title: 'DIVING',
            url: activityNamespace,
        },
        {
            id: 2,
            title: 'SURFING',
            url: activityNamespace,
        },
        {
            id: 3,
            title: 'TREKKING',
            url: activityNamespace,
        },
        // {
        //     id: 4,
        //     title: 'FISHING',
        //     url: activityNamespace,
        // },

    ];


    images = [
        AV1,
        AV2,
        AV3,
        AV4
    ];

    render() {

        return (
            <div
                className="section--bottom--animation"
                style={{ width: '100%', height: '54vh' }}
            >
                <SectionList
                    data={this.activities}
                    images={this.images}
                    title="ACTIVITIES"
                    namespace="activities"
                // namespace={this.activities.title}
                />
            </div>
        );
    }
}


export default ActivityList;