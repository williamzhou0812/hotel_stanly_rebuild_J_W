import React from 'react'

import SectionList from "../List/SectionList";
import { activityNamespace } from '../../../Constants';
import AV1 from './images/ACTIVITIES-DIVING-GALLERY_P_RazKD51.jpg';
import AV2 from './images/ACTIVITIES-SURFING-GALLERYIMAGES_P.jpg';
import AV4 from './images/ACTIVITIES-TREKKING-HEADERIMAGE_P.jpg';
import AV3 from './images/ACTIVITIES-FISHING-GALLERYIMAGES_P.jpg';
import { activities } from './ActivityData';

class ActivityList extends React.Component {
   
    render() {
        const images = activities.map(item => {
            return item.images[0].imageFile
        });
        return (
            <div
                className="section--bottom--animation"
                style={{ width: '100%', height: '54vh' }}
            >
                <SectionList
                    data={activities}
                    images={images}
                    title="ACTIVITIES"
                    namespace="activities"
                // namespace={this.activities.title}
                />
            </div>
        );
    }
}


export default ActivityList;