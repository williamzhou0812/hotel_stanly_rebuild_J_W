import React from 'react';
import { DECIMAL_RADIX, activityNamespace } from '../../../Constants';
import SubsectionList from '../List/SubsectionList';
import ActivityIcon from '../../Header/Navs/icons/ACTIVITIES_ICON.png';
import ActivityMapIcon from '../Hotel/icons/HotelsMapIcon.png';

class ActivityDestinationList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activities: [
                {
                    id: 1,
                    title: 'DIVING',
                    url: activityNamespace,
                    // lists: {
                    //     No1: '+675 641 1503',
                    //     No2: null,
                    //     No3: 'kenukundusponsor@kulamail.net',
                    //     No4: 'Alotau, Papua New Guniea'
                    // }
                    // list: [
                    //     {
                    //         id: 1,
                    //         Title: 'PORT MORESBY',
                    //         details: {
                    //             associate: 'The Dive Centre',
                    //             Phone: '+675 7202 1200',
                    //             email: 'info@divecentre.com.pg',
                    //             website: 'www.divecentre.com.pg',
                    //             overView: ' Susie’s Bommie, located just fifteen minutes from Port Moresby, is touted as world class because of its spectacular coral reef garden. With a seamount protruding 30 metres from the seabed, the site attracts a diverse range of marine life from the pygmy seahorse to pelagic varieties of fish. Other dives worth checking out are Pumpkin Patch, MV Pacific Gas, End Bommie and Eastern Fields.',
                    //         }

                    //     }, {
                    //         id: 2,
                    //         Title: 'TUFI',
                    //         details: {
                    //             associate: 'Tufi Dive Resort',
                    //             Phone: '+675 323 3462',
                    //             email: 'reservations@tufiresort.com',
                    //             website: 'www.tufidive.com',
                    //             overView: 'Tufi’s underwater world lights up in a kaleidoscope of colour, offering great visibility all year round to explore its fjords and WWII wrecks. For reef diving, divers can try Black Rocks, Cyclone Cay, Stewarts Reef and Shark Tip. Wreck diving offers the renowned Blackjack site.',
                    //         }

                    //     },

                    // ]
                },
                {
                    id: 2,
                    title: 'SURFING',
                    url: activityNamespace,
                    // list: [
                    //     {
                    //         id: 1,
                    //         subTitle: 'KAVIENG',
                    //         details: {
                    //             associate: 'The Dive Centre',
                    //             Phone: '+675 7202 1200',
                    //             email: 'info@divecentre.com.pg',
                    //             website: 'www.divecentre.com.pg',
                    //             overView: ' Susie’s Bommie, located just fifteen minutes from Port Moresby, is touted as world class because of its spectacular coral reef garden. With a seamount protruding 30 metres from the seabed, the site attracts a diverse range of marine life from the pygmy seahorse to pelagic varieties of fish. Other dives worth checking out are Pumpkin Patch, MV Pacific Gas, End Bommie and Eastern Fields.',
                    //         }

                    //     }, {
                    //         id: 2,
                    //         subTitle: 'WEWAK',
                    //         details: {
                    //             associate: 'Tufi Dive Resort',
                    //             Phone: '+675 323 3462',
                    //             email: 'reservations@tufiresort.com',
                    //             website: 'www.tufidive.com',
                    //             overView: 'Tufi’s underwater world lights up in a kaleidoscope of colour, offering great visibility all year round to explore its fjords and WWII wrecks. For reef diving, divers can try Black Rocks, Cyclone Cay, Stewarts Reef and Shark Tip. Wreck diving offers the renowned Blackjack site.',
                    //         }

                    //     },

                    // ]
                },
                {
                    id: 3,
                    title: 'TREEKKING',
                    url: activityNamespace,
                    // list: [
                    //     {
                    //         id: 1,
                    //         subTitle: 'KOKODA TRAIL',
                    //         details: {
                    //             associate: 'The Dive Centre',
                    //             Phone: '+675 7202 1200',
                    //             email: 'info@divecentre.com.pg',
                    //             website: 'www.divecentre.com.pg',
                    //             overView: ' Susie’s Bommie, located just fifteen minutes from Port Moresby, is touted as world class because of its spectacular coral reef garden. With a seamount protruding 30 metres from the seabed, the site attracts a diverse range of marine life from the pygmy seahorse to pelagic varieties of fish. Other dives worth checking out are Pumpkin Patch, MV Pacific Gas, End Bommie and Eastern Fields.',
                    //         }

                    //     }, {
                    //         id: 2,
                    //         subTitle: 'MT.HAGEN',
                    //         details: {
                    //             associate: 'Tufi Dive Resort',
                    //             Phone: '+675 323 3462',
                    //             email: 'reservations@tufiresort.com',
                    //             website: 'www.tufidive.com',
                    //             overView: 'Tufi’s underwater world lights up in a kaleidoscope of colour, offering great visibility all year round to explore its fjords and WWII wrecks. For reef diving, divers can try Black Rocks, Cyclone Cay, Stewarts Reef and Shark Tip. Wreck diving offers the renowned Blackjack site.',
                    //         }

                    //     },

                    // ]
                },
                {
                    id: 4,
                    title: 'FISHING',
                    url: activityNamespace,
                    // list: [
                    //     {
                    //         id: 1,
                    //         subTitle: 'FLY RIVER',
                    //         details: {
                    //             associate: 'The Dive Centre',
                    //             Phone: '+675 7202 1200',
                    //             email: 'info@divecentre.com.pg',
                    //             website: 'www.divecentre.com.pg',
                    //             overView: ' Susie’s Bommie, located just fifteen minutes from Port Moresby, is touted as world class because of its spectacular coral reef garden. With a seamount protruding 30 metres from the seabed, the site attracts a diverse range of marine life from the pygmy seahorse to pelagic varieties of fish. Other dives worth checking out are Pumpkin Patch, MV Pacific Gas, End Bommie and Eastern Fields.',
                    //         }

                    //     }, {
                    //         id: 2,
                    //         subTitle: 'LOWER RAMU RIVER',
                    //         details: {
                    //             associate: 'Tufi Dive Resort',
                    //             Phone: '+675 323 3462',
                    //             email: 'reservations@tufiresort.com',
                    //             website: 'www.tufidive.com',
                    //             overView: 'Tufi’s underwater world lights up in a kaleidoscope of colour, offering great visibility all year round to explore its fjords and WWII wrecks. For reef diving, divers can try Black Rocks, Cyclone Cay, Stewarts Reef and Shark Tip. Wreck diving offers the renowned Blackjack site.',
                    //         }

                    //     },

                    // ]
                },

            ]
        };
    }

    render() {
        const { activities } = this.state;
        let activitiesDetail = this.activities.list[parseInt(this.props.match.params.id)]
        return (
            <div>

                <h1>{activitiesDetail.title}</h1>
                {/* {
                    activities.map((t, i) => {
                        return (
                            <div
                                className="section--bottom--animation"
                                style={{ width: "100%", height: "100%", color: "white" }}
                            >
                                <div><h1>{t.url}</h1></div>
                                <SubsectionList
                                    numberOfEntries={4}
                                    //  data={this.t}
                                    //  data={this.activities}
                                    //  namespace={"activities/" + `${this.activitiesDetail.id}`}
                                    // namespace="activities/diving"
                                    imageKey="logo"
                                    isImageArray={false}
                                    sideButtons={[
                                        //{ title: "EVENTS", isLink: true, link: eventNamespace }
                                    ]}
                                    sideTitle="ACTIVITIES"
                                //   mainTitle={this.activities.title}

                                >

                                </SubsectionList>

                            </div >

                        );
                    }
                    )

                } */}


            </div>


        );
        //  let activitiesDetail = this.activities.list[parseInt(this.props.match.params.id)]

    }
}

export default ActivityDestinationList;
//     retrieveData() {
//         const id = parseInt(this.props.match.params.id, DECIMAL_RADIX);
//         const { activities } = this.props;
//         this.props.fetchActivityDestinationList(id, activities);
//     }
//     componentDidMount() {
//         this.retrieveData();
//     }
//     componentDidUpdate(prevProps) {
//         if (prevProps.match.params.id !== this.props.match.params.id) {
//             this.retrieveData();
//         }
//     }
//     componentWillUnmount() {
//         this.props.resetActivityDestinationList();
//     }
//     render() {
//         const { activity, status } = this.props;
//         return (
//             <div
//                 style={{ height: '100%' }}
//                 className="section--bottom--animation"
//             >
//                 {status === 200 && (
//                     <SubsectionList
//                         data={activity.activityDestinationActivity}
//                         imageKey="imageActivityDestination"
//                         isImageArray={true}
//                         sideButtons={[
//                             {
//                                 title: 'ALL ACTIVITIES',
//                                 icon: ActivityIcon,
//                                 isLink: true,
//                                 link: activityNamespace
//                             },
//                             {
//                                 title: `${activity.title.toUpperCase()} MAP`,
//                                 icon: ActivityMapIcon,
//                                 isMap: true
//                             }
//                         ]}
//                         sideTitle="ACTIVITIES"
//                         mainTitle={activity.title.toUpperCase()}
//                         namespace={`${activityNamespace}/${activity.id}`}
//                         randomise={false}
//                         maps={activity.mapActivity}
//                     />
//                 )}
//             </div>
//         );
//     }
// }

// const mapStateToProps = ({ activityList, activityDestinationList }) => {
//     const { activities } = activityList;
//     const { activity, status } = activityDestinationList;
//     return {
//         activities,
//         activity,
//         status
//     };
// };
// export default connect(mapStateToProps, actions)(ActivityDestinationList);
