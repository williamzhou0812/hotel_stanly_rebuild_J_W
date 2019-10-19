import React from "react";
//import { connect } from "react-redux";
import SubsectionList from "../List/SubsectionList";
import { events } from "./EventData";

class EventList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { render: '', description: "Home" }
    }


    // testFuc = () => {
    //     this.setState({ description: 'hello world'})
    // }

    render() {
        return (
            <div
                style={{ width: "100%", height: "100%" }}
            >
                <SubsectionList
                    numberOfEntries={4}
                    data={events}
                    // imageSrc={this.eventData.imgSrc}
                    to=''
                    namespace="events"
                    imageKey="imageServiceType"
                    isImageArray={true}

                    sideButtons={[
                        //{ title: "EVENTS", isLink: true, link: eventNamespace }
                    ]}
                    sideTitle="EVENTS"
                    mainTitle="CALENDAR OF EVENTS"
                    evenDetailsProps={this.events}
                    thumbnailStyle={{ width: "316px", height: "138px"}}
                >

                </SubsectionList>

            </div>
        );
    }
}

export default EventList;


