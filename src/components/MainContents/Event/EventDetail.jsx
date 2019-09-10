import React from "react";
//import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CalendarIcon from "./icons/CalendarIcon.png";
import {
    eventNamespace,
    accomodationNamespace,
    HeavyOrange,
    LightBlueButtonBackground,
    ExtraHeavyBlueGreen,
} from "../../../Constants";
import MapModal from "../Maps/MapModal";

import "../List/MainSectionList.scss";
import "./Event.scss";


class EventDetail extends React.Component {
    constructor(props) {
        console.log(`hi wiliam props` + props.match)
        super();
        // this.onChangeLink = this.onChangeLink.bind(this);
        this.state = {
            description: "Hiii"
        }
    }

    events = [
        {
            id: 1,
            event_title: 'SP SPORT AWARDS',
            month: 'MARCH',
            img_url: '/imgs/events/Events_Images_P.jpg',
            mapImage: '/imgs/events/maps/SP-SPORTS-AWARDS-MAP.png',
            description: 'In March, Port Moresby plays host to the SP Sports Awards which recognises the outstanding achievements of Papua New Guinea’s sporting elite. Fifteen awards are handed out on the night including the Male and Female Athlete of the Year. Facebook: spsportsawards',
            details: {
                call: '+675 302 8200',
                websit: null,
                email: 'info@sp.com.pg',
                location: 'Port Moresby, Papua New Guniea'
            }

        },
        {
            id: 2,
            event_title: 'GOGODALA CANOE FESTIVAL',
            img_url: '/imgs/events/Events_Images_P2.jpg',
            mapImage: '/imgs/events/maps/GOGODALA-CANOE-FESTIVAL-MAP.png',
            month: 'April',
            description: 'The Gogodala people from the Middle Fly District in the Western Province are renowned for their flamboyant and ornately crafted canoes. Once upon a time, it was customary for tribes to settle disputes by racing canoes which the festival pays homage to.',
            details: {
                call: null,
                website: null,
                email: null,
                location: 'Balimo, Papua New Guniea'
            }
        },
        {
            id: 3,
            event_title: 'THE MADANG FESTIVAL',
            img_url: '/imgs/events/Events_Images_P3.jpg',
            mapImage: '/imgs/events/maps/THE-MADANG-FESTIVAL-MAP.png',
            month: 'JUNE',
            description: 'Showcasing cultural groups from the Madang Province, the Madang Festival celebrates the region’s rich culture with a colourful parade, live performances, canoe racing, sporting activities and stalls.',
            details: {
                call: '+675 422 3302',
                website: 'www.madangfestival.org',
                email: 'madangfestival@gmail.com',
                location: 'Madang, Papua New Guniea'
            }

        },
        {

            id: 4,
            event_title: 'NATIONAL MASK FESTIVAL',
            img_url: '/imgs/events/Events_Images_P4.jpg',
            mapImage: '',
            month: 'JULY',
            description: 'In July, the National Mask Festival in Rabaul brings the variety of the Papua New Guinean masks to one single celebration. The festival usually runs for four or five days and provides visitors with a fantastic array of performances including fire-eaters, singers, drummers, and more.',
            details: {
                call: '675 982 8697',
                website: 'www.enb.travel',
                email: null,
                location: 'Rabaul, Papua New Guniea'
            }
        },
        {


            id: 5,
            event_title: 'MONA FESTIVAL',
            img_url: '/imgs/events/E3A_-_Mona_Festival_P5.jpg',
            mapImage: '',
            month: 'JULY',
            description: 'Mona Festival, the largest cultural event in Bougainville, only launched in 2009. The festival is dedicated to the traditional warrior canoes called ‘Monas’. Occurring in July each year, this colourful festival is said to celebrate the cultural diversity and autonomy that inspires peace and reconciliation today.',
            details: {
                call: '+675 71 626 393',
                website: 'www.bougainville.travel',
                email: 'bougainville.travel@abg.gov.pg',
                location: 'Buka, Papua New Guniea'
            }
        },

        {
            id: 6,
            event_title: 'DWU CULTURAL DAY',
            img_url: '/imgs/events/Events_Images_P5.jpg',
            month: 'AUGUST',
            description: 'The Divine Word University Cultural Day is an annual event that sees students come together to perform and celebrate their cultural heritage.',
            details: {
                call: '+675 422 2937',
                website: 'www.dwu.ac.pg',
                email: 'events@dwu.ac.pg',
                location: 'Madang Campus, Divine Word University, Papua New Guniea'
            }
        },

        {
            id: 7,
            event_title: 'MOUNT HAGEN SHOW',
            img_url: '/imgs/events/Events_Images_P6.jpg',
            month: 'AUGUST',
            description: 'The Mount Hagen Show highlights the rich culture of the Highlands region in a wonderful display of sing-sings. The show attracts around 50,000 visitors each year and is one of PNG’s oldest shows, launching back in 1961. Occurring in August each year, the show provides an insight into the fascinating customs of the local tribes.',
            details: {
                call: '+675 7308 1368',
                website: 'www.papuanewguinea.travel',
                email: 'howarigc@gmail.com',
                location: 'Mount Hagen, Papua New Guniea'
            }


        },
        {
            id: 8,
            event_title: 'SEPIK CROCODILE FESTIVAL',
            img_url: '/imgs/events/Events_Images_P7.jpg',
            month: 'AUGUST',
            description: 'The Crocodile Festival is a three day event celebrating the local tribe’s cultural connection to the crocodile with the festival showcasing canoe racing and traditional performances.',
            details: {
                call: '+675 7259 6349',
                website: 'www.papuanewguinea.travel',
                email: 'sepikjourneys.alois240@gmail.com',
                location: 'Ambunti, Papua New Guniea'
            }


        },
        {
            id: 9,
            event_title: 'ENGA FESTIVAL',
            img_url: '/imgs/events/Events_Images_P8.jpg',
            month: 'AUGUST',
            description: 'One common dialect dominates the Enga Province, which makes it a particular drawcard for those visiting PNG. The Enga Festival is a time when locals can demonstrate to outsiders just how amazing their culture is. Discover the Engans’ famous sand painting, which is unique to the area, and the fantastic sing-sing men.',
            details: {
                call: '+675 7226 8610',
                website: 'www.papuanewguinea.travel',
                email: 'www.engashow.com',
                location: 'Wabag Town, Papua New Guniea'
            }


        },
        {
            id: 10,
            event_title: 'FRANGIPANI FESTIVAL',
            img_url: '/imgs/events/Events_Images_P9.jpg',
            month: 'SEPTEMBER',
            description: 'Occurring in September, the Frangipani Festival celebrates Independence Day. See the famous Baining Fire Dance, sing-sings, a float parade and more.',
            details: {
                call: '+675 982 8697',
                website: 'www.enb.travel',
                email: 'www.engashow.com',
                location: 'Rabaul, Papua New Guniea'
            }


        },
        {
            id: 11,
            event_title: 'FRANGIPANI FESTIVAL',
            img_url: '/imgs/events/Events_Images_P10.jpg',
            month: 'SEPTEMBER',
            description: 'The Hiri Moale Show has become a premier cultural event. Like everything in PNG, the show illustrates a rich and symbolic history that reflect on age-old stories and customs. During the show, Ela Beach comes to life with stilt houses, colourful canoes and hundreds of people singing, dancing and celebrating tradition.',
            details: {
                call: '+675 320 0211',
                website: 'www.enb.travel',
                email: 'www.papuanewguinea.travel',
                location: 'Port Moresby, Papua New Guniea'
            }
        },
        {
            id: 12,
            event_title: 'GOROKA SHOW',
            img_url: '/imgs/events/Events_Images_P11.jpg',
            month: 'SEPTEMBER',
            description: 'The Highlands region is famous for its primitive history, which included cannibalism and violent tribal wars. At the Goroka Show, descendants beat kundu drums and decorate themselves in unusual body paints and feathers to celebrate their unique heritage.',
            details: {
                call: '675 532 2644',
                website: 'www.gorokaevents.com',
                email: 'gorokashow2014@gmail.com',
                location: 'Port Moresby, Papua New Guniea'
            }
        },
        {
            id: 13,
            event_title: 'MOROBE CULTURAL SHOW',
            img_url: '/imgs/events/Events_Images_P12.jpg',
            month: 'OCTOBER',
            description: 'The Morobe Cultural Show is probably the most famous cultural show in PNG. It is held in October each year and provides visitors with agricultural information as well as showcases the largest group of sing-sings in PNG.',
            details: {
                call: '+675 472 2887',
                website: 'www.morobeshow.org.pg',
                email: 'info@morobeshow.org.pg',
                location: 'Lae, Papua New Guniea'
            }
        },
        {
            id: 14,
            event_title: 'PNG KENU AND KUNDU FESTIVAL',
            img_url: '/imgs/events/Events_Images_P13.jpg',
            month: 'NOVEMBER',
            description: 'With its rich connection to the water, the people of Milne Bay celebrate a canoe festival in November each year. Visitors will see war canoes and locally-made kundu drums in all their glory.',
            details: {
                call: '+675 641 1503',
                website: null,
                email: 'kenukundusponsor@kulamail.net',
                location: 'Alotau, Papua New Guniea'
            }
        },
    ]

    styles = {
        horizontalVerticalCenter: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2%"
        },

        mapOrFindButtonStyle: {
            backgroundColor: LightBlueButtonBackground,
            display: "flex",
            width: "100%",
            padding: "4% 0",
            display: "inline-bock",
            marginTop: "-5%",
            borderRadius: "5px",
            boxShadow: "0px 0px 10px 1px rgba(0,0,0,0.5)",
            color: "white",
            justifyContent: "center"
        },
        mapOrFindButtonText: {
            letterSpacing: "2px",
            fontSize: "18px",
            fontWeight: "bold"
        },
        removePaddingMargin: { margin: 0, padding: 0 }
    };

    render() {

        let eventDetail = this.events[parseInt(this.props.match.params.id)]


        return (
            <div
                style={{
                    width: "100%",
                    //   height: "100%",
                    height: "54vh",
                    display: "flex",
                    color: "white"
                }}
                className="section--bottom--animation"
            >
                <div className="left-vertical-nav"
                    style={{
                        backgroundColor: HeavyOrange,
                        width: "14%",
                        height: "100%",
                        boxShadow: "9.899px 0px 7px 0px rgba(0,0,0,0.6)",
                        zIndex: 1,
                        flexDirection: "column",
                        display: "flex"
                    }}
                >
                    <div >
                        <Link
                            style={{ height: "14%", textDecoration: "none" }}
                            to={eventNamespace}
                        >
                            <div className="leftSide-menu--container">
                                <img
                                    className="leftSide-menu--img"
                                    src={CalendarIcon}
                                    alt="Calendar Icon"
                                />
                                <div
                                    style={{
                                        letterSpacing: "2px"
                                    }}
                                >
                                    <p
                                        className="menu-title"
                                    //  style={this.styles.removePaddingMargin}
                                    >
                                        CALENDAR
                                     </p>
                                    <p
                                        className="menu-title"
                                    //  style={this.styles.removePaddingMargin}
                                    >
                                        OF EVENTS
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="vertical-title ">
                        <span
                            style={{
                                transform: "rotate(-90deg)"
                            }}
                        >
                            EVENTS
                    </span>
                    </div>
                </div>
                <div >
                    <div className='event-main'>
                        <div style={{ height: "50%", width: "100%" }}>
                            <img src={eventDetail.img_url} style={{ height: '100%', width: '100%' }} />

                        </div>
                        <div style={{ height: "50%", width: "100%" }}>
                            <div style={{ height: "13%", display: "flex" }}>
                                <div
                                    className="event-nextPre-btn"
                                    style={{
                                        ...this.styles.horizontalVerticalCenter
                                    }}
                                    onClick={this.prevEvent}
                                >
                                    <span>PREVIOUS EVENT</span>
                                </div>
                                <div
                                    className="event-title"
                                    style={{
                                        ...this.styles.horizontalVerticalCenter
                                    }}
                                >
                                    <span>{eventDetail.event_title}</span>
                                </div>
                                <div
                                    className="event-nextPre-btn"
                                    style={{
                                        ...this.styles.horizontalVerticalCenter
                                    }}
                                // onClick={this.nextEvent}
                                >
                                    <span>NEXT EVENT</span>
                                </div>
                            </div>
                            <div
                                style={{
                                    height: "87%",
                                    backgroundColor: ExtraHeavyBlueGreen,
                                    display: "flex"
                                }}
                            >
                                <div
                                    style={{
                                        flexBasis: "50%",
                                        borderRight:
                                            "1px solid rgb(105,194,209)",
                                        padding: "1% 1% 1% 4%"
                                    }}
                                >
                                    <div
                                        className="middle-section--innerTitle"
                                        style={{
                                            height: "15%"
                                        }}
                                    >
                                        {/* <span>{event.eventMonth}</span> */}
                                        <span>{eventDetail.month}</span>
                                    </div>
                                    <div className="middle-section--leftSide"
                                        style={{
                                            height: "75%",
                                            overflow: "scroll",
                                            display: "inline-table"
                                        }}
                                    >
                                        <p

                                            style={{
                                                marginTop: 0,
                                                marginBottom: 0
                                            }}
                                        >
                                            {/* <Markdown
                                            // source={event.description}
                                            source="dhj yru  ewkhrfkhr  kurhf a  yhgdf"
                                        /> */}

                                            {eventDetail.description}
                                        </p>
                                    </div>
                                </div>
                                <div style={{
                                    flexBasis: "50%",
                                    padding: "1%  2%"
                                }}
                                >
                                    <div style={{ height: "15%" }} />
                                  
                                    <div className="middle-section--rightSide"
                                        style={{
                                            height: "38%",
                                            letterSpacing: "1px",
                                            overflow: "scroll",
                                            display: "inline-table",
                                            // fontSize: "2vw"
                                        }}
                                    >
                                        {eventDetail.details.call && (
                                            <p>CALL TODAY: {eventDetail.details.call} </p>
                                        )}
                                        {eventDetail.details.website && (
                                            <p>WEBSITE: {eventDetail.details.website} </p>
                                        )}
                                        {eventDetail.details.email && (
                                            <p>EMAIL: {eventDetail.details.email} </p>)}

                                        {eventDetail.details.location && (
                                            <p>LOCATION: {eventDetail.details.location} </p>
                                        )}
                                    </div>
                                    <div className="middle-section--btnContainer">

                                        <div className="middle-section--btnContainer--btn">
                                            <MapModal
                                                buttonTitle="SHOW ON MAP"
                                                title="Event Title"
                                                //  title={event.title}
                                                buttonStyle={
                                                    this.styles
                                                        .mapOrFindButtonStyle
                                                }
                                                textStyle={
                                                    this.styles
                                                        .mapOrFindButtonText
                                                }
                                                mapImage={
                                                    eventDetail.mapImage
                                                }
                                            />
                                        </div>

                                        {/* <div
                                            className="middle-section--btnContainer--btn"
                                            style={{ marginTop: "7%" }}
                                        >
                                            <Link
                                                style={{
                                                    textDecoration: "none",
                                                    display: "inlineBlock"
                                                }}
                                                to={
                                                    accomodationNamespace +
                                                    "/" +
                                                    event.destination
                                                }
                                                to={
                                                    accomodationNamespace +
                                                    "/:id"

                                                }
                                            >
                                                <div
                                                    style={
                                                        this.styles
                                                            .mapOrFindButtonStyle
                                                    }
                                                >
                                                    <span
                                                        style={
                                                            this.styles
                                                                .mapOrFindButtonText
                                                        }
                                                    >
                                                        FIND A CLOSE HOTEL
                                                    </span>
                                                </div>
                                            </Link>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div >
            </div >
        );
    }
}
export default EventDetail;