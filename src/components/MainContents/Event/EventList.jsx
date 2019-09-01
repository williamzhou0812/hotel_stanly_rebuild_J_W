import React from "react";
//import { connect } from "react-redux";
import SubsectionList from "../List/SubsectionList";
// import EventDetail from "./EventDetail";
import { transportNamespace, eventNamespace, toTitleCase } from "../../../Constants";

class EventList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { render: '', description: "Home" }
    }
    events = [
        { id: 'SP-SPORTS-AWARDS', title: 'SP SPORTS AWARDS', url: eventNamespace + "/:serid", description: 'ertvyuioety uiotyru ', phone: "23456 768", email: "dsfgh@gh.fdgh", location: "PNG" },
        { id: 'GOGODALA-CANOE-FESTIVAL', title: 'GOGODALA CANOE FESTIVAL', url: eventNamespace + "/:serid", description: 'ertyuioetyuiotyru ', phone: "23456 768", email: "dsfgh@gh.fdgh", location: "PNG" },
        { id: 'THE-MADANG-FESTIVAL', title: 'THE MADANG FESTIVAL', url: eventNamespace + "/:serid", description: 'ertyuioetyuiotyru ', phone: "23456 768", email: "dsfgh@gh.fdgh", location: "PNG" },
        { id: 'NATIONAL-MASK-FESTIVAL', title: 'NATIONAL MASK FESTIVAL', url: eventNamespace + "/:serid", description: 'ertyuioetyuiotyru ', phone: "23456 768", email: "dsfgh@gh.fdgh", location: "PNG" }
    ];

    testFuc = () => {
        this.setState({ description: 'hello world'})
    }

    render() {
        return (
            <div
                style={{ width: "100%", height: "100%" }}
            >
                <SubsectionList
                    numberOfEntries={4} 
                    data={this.events}
                    // imageSrc={this.eventData.imgSrc}
                     to={this.events.url}
                    namespace="events"
                    imageKey="imageServiceType"
                    isImageArray={true}
                    anyName={this.testFuc}
                    sideButtons={[
                        //{ title: "EVENTS", isLink: true, link: eventNamespace }
                    ]}
                    sideTitle="EVENTS"
                    mainTitle="CALENDAR"
                    evenDetailsProps={this.events}

                ></SubsectionList>

            </div>
        );
    }
}

export default EventList;


