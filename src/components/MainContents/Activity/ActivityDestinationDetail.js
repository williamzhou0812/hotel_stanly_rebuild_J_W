import React from "react";
//import { connect } from "react-redux";
//import * as actions from "../actions/activity";
import {
    DECIMAL_RADIX,
    activityNamespace,
    HeavyOrange,
    imageGallery,
    LightBlueButtonBackground,
    MediumOrange,
    LightOrange,
    ExtraHeavyBlueGreen,
    removeHttp
} from "../../../Constants.js";
import { Link } from "react-router-dom";
import ActivityIcon from "../MainTab/icons/ACTIVITIES_ICON.png";
import ActivityMapIcon from "../Hotel/icons/HotelsMapIcon.png";
import TourList from "./TourList";
import SidebarMapModel from "../Maps/SidebarMapModel";
import Markdown from "../Markdown";
import "../List/MainSectionList.css";
import "./Activity.css";

class ActivityDestinationDetail extends React.Component {
    activities = [
        {
            id: 1,
            title: 'DIVING',
            url: activityNamespace,
            subList: [
                {
                    id: 1,
                    subTitle: 'PORT MORESBY',
                    details: {
                        associate: 'The Dive Centre',
                        Phone: '+675 7202 1200',
                        email: 'info@divecentre.com.pg',
                        website: 'www.divecentre.com.pg',
                        overView: ' Susie’s Bommie, located just fifteen minutes from Port Moresby, is touted as world class because of its spectacular coral reef garden. With a seamount protruding 30 metres from the seabed, the site attracts a diverse range of marine life from the pygmy seahorse to pelagic varieties of fish. Other dives worth checking out are Pumpkin Patch, MV Pacific Gas, End Bommie and Eastern Fields.',
                    }

                }, {
                    id: 2,
                    subTitle: 'TUFI',
                    details: {
                        associate: 'Tufi Dive Resort',
                        Phone: '+675 323 3462',
                        email: 'reservations@tufiresort.com',
                        website: 'www.tufidive.com',
                        overView: 'Tufi’s underwater world lights up in a kaleidoscope of colour, offering great visibility all year round to explore its fjords and WWII wrecks. For reef diving, divers can try Black Rocks, Cyclone Cay, Stewarts Reef and Shark Tip. Wreck diving offers the renowned Blackjack site.',
                    }

                },

            ]
        },
        {
            id: 2,
            title: 'SURFING',
            url: activityNamespace,
            subList: [
                {
                    id: 1,
                    subTitle: 'KAVIENG',
                    details: {
                        associate: 'The Dive Centre',
                        Phone: '+675 7202 1200',
                        email: 'info@divecentre.com.pg',
                        website: 'www.divecentre.com.pg',
                        overView: ' Susie’s Bommie, located just fifteen minutes from Port Moresby, is touted as world class because of its spectacular coral reef garden. With a seamount protruding 30 metres from the seabed, the site attracts a diverse range of marine life from the pygmy seahorse to pelagic varieties of fish. Other dives worth checking out are Pumpkin Patch, MV Pacific Gas, End Bommie and Eastern Fields.',
                    }

                }, {
                    id: 2,
                    subTitle: 'WEWAK',
                    details: {
                        associate: 'Tufi Dive Resort',
                        Phone: '+675 323 3462',
                        email: 'reservations@tufiresort.com',
                        website: 'www.tufidive.com',
                        overView: 'Tufi’s underwater world lights up in a kaleidoscope of colour, offering great visibility all year round to explore its fjords and WWII wrecks. For reef diving, divers can try Black Rocks, Cyclone Cay, Stewarts Reef and Shark Tip. Wreck diving offers the renowned Blackjack site.',
                    }

                },

            ]
        },
        {
            id: 3,
            title: 'TREEKKING',
            url: activityNamespace,
            subList: [
                {
                    id: 1,
                    subTitle: 'KOKODA TRAIL',
                    details: {
                        associate: 'The Dive Centre',
                        Phone: '+675 7202 1200',
                        email: 'info@divecentre.com.pg',
                        website: 'www.divecentre.com.pg',
                        overView: ' Susie’s Bommie, located just fifteen minutes from Port Moresby, is touted as world class because of its spectacular coral reef garden. With a seamount protruding 30 metres from the seabed, the site attracts a diverse range of marine life from the pygmy seahorse to pelagic varieties of fish. Other dives worth checking out are Pumpkin Patch, MV Pacific Gas, End Bommie and Eastern Fields.',
                    }

                }, {
                    id: 2,
                    subTitle: 'MT.HAGEN',
                    details: {
                        associate: 'Tufi Dive Resort',
                        Phone: '+675 323 3462',
                        email: 'reservations@tufiresort.com',
                        website: 'www.tufidive.com',
                        overView: 'Tufi’s underwater world lights up in a kaleidoscope of colour, offering great visibility all year round to explore its fjords and WWII wrecks. For reef diving, divers can try Black Rocks, Cyclone Cay, Stewarts Reef and Shark Tip. Wreck diving offers the renowned Blackjack site.',
                    }

                },

            ]
        },
        {
            id: 4,
            title: 'FISHING',
            url: activityNamespace,
            subList: [
                {
                    id: 1,
                    subTitle: 'FLY RIVER',
                    details: {
                        associate: 'The Dive Centre',
                        Phone: '+675 7202 1200',
                        email: 'info@divecentre.com.pg',
                        website: 'www.divecentre.com.pg',
                        overView: ' Susie’s Bommie, located just fifteen minutes from Port Moresby, is touted as world class because of its spectacular coral reef garden. With a seamount protruding 30 metres from the seabed, the site attracts a diverse range of marine life from the pygmy seahorse to pelagic varieties of fish. Other dives worth checking out are Pumpkin Patch, MV Pacific Gas, End Bommie and Eastern Fields.',
                    }

                }, {
                    id: 2,
                    subTitle: 'LOWER RAMU RIVER',
                    details: {
                        associate: 'Tufi Dive Resort',
                        Phone: '+675 323 3462',
                        email: 'reservations@tufiresort.com',
                        website: 'www.tufidive.com',
                        overView: 'Tufi’s underwater world lights up in a kaleidoscope of colour, offering great visibility all year round to explore its fjords and WWII wrecks. For reef diving, divers can try Black Rocks, Cyclone Cay, Stewarts Reef and Shark Tip. Wreck diving offers the renowned Blackjack site.',
                    }

                },

            ]
        },

    ];

    render() {
        return (
            <div
                className="section--bottom--animation"
                style={{ width: "100%", height: "100%", color: "white" }}
            >
                <SubsectionList
                    numberOfEntries={4}
                    data={this.activities}

                    namespace={activities / this.activities.id}
                    imageKey="logo"
                    isImageArray={false}
                    sideButtons={[
                        //{ title: "EVENTS", isLink: true, link: eventNamespace }
                    ]}
                    sideTitle="ACTIVITIES"
                    mainTitle={this.activities.id}

                >

                </SubsectionList>

            </div >
        );
    }
}
export default ActivityDestinationDetail;

//     retrieveData() {
//         const id = parseInt(this.props.match.params.id, DECIMAL_RADIX);
//         const destid = parseInt(this.props.match.params.destid, DECIMAL_RADIX);
//         const { activities } = this.props;
//         this.props.fetchActivityDestinationDetail(id, destid, activities);
//     }
//     componentDidMount() {
//         this.retrieveData();
//     }
//     componentDidUpdate(prevProps) {
//         if (prevProps.match.params.destid !== this.props.match.params.destid) {
//             this.retrieveData();
//         }
//     }
//     componentWillUnmount() {
//         this.props.resetActivityDestinationDetail();
//     }
//     getPrevLink() {
//         const { activity, index } = this.props;
//         const { activityDestinationActivity: dests } = activity;
//         let output = `${activityNamespace}/${this.props.match.params.id}`;
//         if (index === 0) {
//             return `${output}/${dests[dests.length - 1].id}`;
//         } else {
//             return `${output}/${dests[index - 1].id}`;
//         }
//     }
//     getNextLink() {
//         const { activity, index } = this.props;
//         const { activityDestinationActivity: dests } = activity;
//         let output = `${activityNamespace}/${this.props.match.params.id}`;
//         if (index === dests.length - 1) {
//             return `${output}/${dests[0].id}`;
//         } else {
//             return `${output}/${dests[index + 1].id}`;
//         }
//     }
//     renderImages() {
//         const {
//             imageActivityDestination: images
//         } = this.props.activityDestination;
//         if (images.length > 1) {
//             return imageGallery(images, "100%", "22.68vh");
//         } else if (images.length === 1) {
//             return (
//                 <div
//                     style={{
//                         height: "42%",
//                         backgroundImage: `url(${images[0].imageFile})`,
//                         backgroundSize: "cover",
//                         backgroundPosition: "center"
//                     }}
//                 />
//             );
//         } else {
//             return (
//                 <div
//                     style={{
//                         height: "42%",
//                         backgroundColor: HeavyOrange,
//                         ...this.styles.horizontalVerticalCenter
//                     }}
//                 >
//                     <h1>NO IMAGE FOR THIS ACTIVITY DESTINATION</h1>
//                 </div>
//             );
//         }
//     }
//     renderTours() {
//         const {
//             tourActivityDestination: tours
//         } = this.props.activityDestination;
//         if (tours.length > 1) {
//             return <TourList data={tours} />;
//         } else if (tours.length === 1) {
//             const tour = tours[0];
//             return (
//                 <div
//                     className="tour"
//                     // style={{
//                     //     height: "100%",
//                     //     display: "flex",
//                     //     justifyContent: "center",
//                     //     padding: "1%",

//                     //     backgroundColor: "rgb(2,61,66)"
//                     // }}
//                 >
//                     <div className="tour--title">{tour.title}</div>
//                     {(tour.phone || tour.website) && (
//                         <div
//                             className="tour--details"
//                             style={{
//                                 ...this.styles.horizontalVerticalCenter
//                             }}
//                         >
//                             <p>{tour.phone && <div>PH: {tour.phone}</div>}</p>
//                             {tour.website && (
//                                 <p>W: {removeHttp(tour.website)}</p>
//                             )}
//                         </div>
//                     )}
//                     {tour.email && (
//                         <div
//                             className="tour--details"
//                             style={{
//                                 ...this.styles.horizontalVerticalCenter
//                             }}
//                         >
//                             E: {tour.email}
//                         </div>
//                     )}
//                 </div>
//             );
//         } else {
//             return (
//                 <div
//                     className="activity--advertise"
//                     style={{
//                         // backgroundColor: "rgb(2,61,66)",
//                         // height: "100%",
//                         ...this.styles.horizontalVerticalCenter
//                         //  fontSize: "22px",
//                         // fontSize: "2vw",
//                         // letterSpacing: "2px",
//                         // lineHeight: "110%"
//                     }}
//                 >
//                     Advertise your business here!
//                     <br />
//                     For more information, contact:
//                     <br />
//                     touchscreen@jbg.com.pg
//                 </div>
//             );
//         }
//     }

//     styles = {
//         horizontalVerticalCenter: {
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             padding: "2%"
//         }
//     };

//     render() {
//         const { activity, activityDestination: dest, status } = this.props;
//         const tours =
//             dest &&
//             dest.tourActivityDestination &&
//             dest.tourActivityDestination;
//         return (
//             <div
//                 style={{
//                     width: "100%",
//                     height: "100%",
//                     display: "flex",
//                     color: "white"
//                 }}
//                 className="section--bottom--animation"
//             >
//                 <div
//                     style={{
//                         backgroundColor: HeavyOrange,
//                         width: "14%",
//                         boxShadow: "9.899px 0px 7px 0px rgba(0,0,0,0.6)",
//                         zIndex: 1,
//                         flexDirection: "column",
//                         display: "flex"
//                     }}
//                 >
//                     <Link
//                         style={{
//                             //   height: "14%",
//                             textDecoration: "none"
//                         }}
//                         to={activityNamespace}
//                     >
//                         <div className="leftSide-menu--container">
//                             <img
//                                 className="leftSide-menu--img"
//                                 src={ActivityIcon}
//                                 alt="Activity Icon"
//                             />
//                             <div>
//                                 <p className="menu-title"> ALL ACTIVITIES </p>
//                             </div>
//                         </div>
//                     </Link>
//                     {status === 200 && (
//                         <div
//                             style={{
//                                 //  height: "28%",
//                                 textDecoration: "none"
//                             }}
//                         >
//                             <SidebarMapModel
//                                 item={{
//                                     title: `${activity.title.toUpperCase()} MAP`,
//                                     icon: ActivityMapIcon
//                                 }}
//                                 mainTitle={activity.title.toUpperCase()}
//                                 maps={activity.mapActivity}
//                             />

//                             <Link
//                                 to={
//                                     activityNamespace +
//                                     "/" +
//                                     this.props.match.params.id
//                                 }
//                             >
//                                 <div className="leftSide-menu--container">
//                                     <img
//                                         className="leftSide-menu--img"
//                                         src={activity.icon}
//                                         alt="Activity Icon"
//                                     />
//                                     <div>
//                                         <p className="menu-title">
//                                             {activity.title.toUpperCase()} AREAS
//                                         </p>
//                                     </div>
//                                 </div>
//                             </Link>
//                         </div>
//                     )}
//                     <div className="vertical-title">
//                         <span style={{ transform: "rotate(-90deg)" }}>
//                             ACTIVITIES
//                         </span>
//                     </div>
//                 </div>
//                 {status === 200 && (
//                     <div
//                         className="activity"
//                         // style={{ width: "86%", height: "100%" }}
//                     >
//                         {this.renderImages()}
//                         <div style={{ height: "58%" }}>
//                             <div
//                                 className="activity--title"
//                                 style={{
//                                     ...this.styles.horizontalVerticalCenter
//                                 }}
//                             >
//                                 <span> {activity.title.toUpperCase()}</span>
//                             </div>
//                             <div style={{ height: "11%", display: "flex" }}>
//                                 <Link
//                                     className="activity--nextPreBtn"
//                                     style={{
//                                         ...this.styles.horizontalVerticalCenter
//                                     }}
//                                     to={this.getPrevLink()}
//                                 >
//                                     <span>PREVIOUS LOCATION</span>
//                                 </Link>
//                                 <div
//                                     className="activity--subtitle"
//                                     style={{
//                                         ...this.styles.horizontalVerticalCenter
//                                     }}
//                                 >
//                                     <span>{dest.title.toUpperCase()}</span>
//                                 </div>
//                                 <Link
//                                     className="activity--nextPreBtn"
//                                     style={{
//                                         ...this.styles.horizontalVerticalCenter
//                                     }}
//                                     to={this.getNextLink()}
//                                 >
//                                     <span>NEXT LOCATION</span>
//                                 </Link>
//                             </div>
//                             <div
//                                 className="activity--description"
//                                 style={{
//                                     height: tours.length > 2 ? "36%" : "43%"
//                                 }}
//                             >
//                                 <Markdown source={dest.description} />
//                             </div>
//                             <div
//                                 className="activity--moreInfo"
//                                 style={{
//                                     ...this.styles.horizontalVerticalCenter
//                                 }}
//                             >
//                                 <span>FOR MORE INFORMATION CONTACT:</span>
//                             </div>
//                             <div
//                                 style={{
//                                     height: tours.length > 2 ? "30%" : "23%"
//                                 }}
//                             >
//                                 {this.renderTours()}
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         );
//     }
// }

// const mapStateToProps = ({ activityList, activityDestinationDetail }) => {
//     const { activities } = activityList;
//     const {
//         activity,
//         activityDestination,
//         status,
//         index
//     } = activityDestinationDetail;
//     return {
//         activities,
//         activity,
//         activityDestination,
//         index,
//         status
//     };
// };
// export default connect(
//     mapStateToProps,
//     actions
// )(ActivityDestinationDetail);
