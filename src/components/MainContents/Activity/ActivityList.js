import React from 'react'

import SectionList from "../List/SectionList";
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