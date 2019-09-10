import React from "react";
//import { connect } from "react-redux";
import SubsectionList from "../List/SubsectionList";

import EventDetail from "./EventDetail";

import { transportNamespace, eventNamespace, toTitleCase } from "../../../Constants";

class EventList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { render: '', description: "Home" }
    }


    events = [
        {
            id: 1,
            title: 'SP SPORT AWARDS',
            subTitle: 'Match',
            img_url: '/imgs/events/Events_Images_P.jpg',
            description: 'In March, Port Moresby plays host to the SP Sports Awards which recognises the outstanding achievements of Papua New Guinea’s sporting elite. Fifteen awards are handed out on the night including the Male and Female Athlete of the Year. Facebook: spsportsawards',
            details: {
                call: '+675 302 8200',
                website: null,
                email: 'info@sp.com.pg',
                location: 'Port Moresby, Papua New Guniea'
            }

        },
        {
            id: 2,
            title: 'GOGODALA CANOE FESTIVAL',
            img_url: '/imgs/events/Events_Images_P2.jpg',
            subTitle: 'April',
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
            title: 'THE MADANG FESTIVAL',
            img_url: '/imgs/events/Events_Images_P3.jpg',
            subTitle: 'JUNE',
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
            title: 'NATIONAL MASK FESTIVAL',
            img_url: '/imgs/events/Events_Images_P4.jpg',
            subTitle: 'JULY',
            description: 'In July, the National Mask Festival in Rabaul brings the variety of the Papua New Guinean masks to one single celebration. The festival usually runs for four or five days and provides visitors with a fantastic array of performances including fire-eaters, singers, drummers, and more.',
            detials: {
                call: '675 982 8697',
                website: 'www.enb.travel',
                email: '',
                location: 'Rabaul, Papua New Guniea'
            }
        },
        {


            id: 5,
            title: 'MONA FESTIVAL',
            img_url: '/imgs/events/E3A_-_Mona_Festival_P5.jpg',
            subTitle: 'JULY',
            description: 'Mona Festival, the largest cultural event in Bougainville, only launched in 2009. The festival is dedicated to the traditional warrior canoes called ‘Monas’. Occurring in July each year, this colourful festival is said to celebrate the cultural diversity and autonomy that inspires peace and reconciliation today.',
            detials: {
                call: '+675 71 626 393',
                website: 'www.bougainville.travel',
                email: 'bougainville.travel@abg.gov.pg',
                location: 'Buka, Papua New Guniea'
            }
        },

        {
            id: 6,
            title: 'DWU CULTURAL DAY',
            img_url: '/imgs/events/Events_Images_P5.jpg',
            subTitle: 'AUGUST',
            description: 'The Divine Word University Cultural Day is an annual event that sees students come together to perform and celebrate their cultural heritage.',
            detials: {
                call: '+675 422 2937',
                website: 'www.dwu.ac.pg',
                email: 'events@dwu.ac.pg',
                location: 'Madang Campus, Divine Word University, Papua New Guniea'
            }
        },

        {
            id: 7,
            title: 'MOUNT HAGEN SHOW',
            img_url: '/imgs/events/Events_Images_P6.jpg',
            subTitle: 'AUGUST',
            description: 'The Mount Hagen Show highlights the rich culture of the Highlands region in a wonderful display of sing-sings. The show attracts around 50,000 visitors each year and is one of PNG’s oldest shows, launching back in 1961. Occurring in August each year, the show provides an insight into the fascinating customs of the local tribes.',
            detials: {
                call: '+675 7308 1368',
                website: 'www.papuanewguinea.travel',
                email: 'howarigc@gmail.com',
                location: 'Mount Hagen, Papua New Guniea'
            }


        },
        {
            id: 8,
            title: 'SEPIK CROCODILE FESTIVAL',
            img_url: '/imgs/events/Events_Images_P7.jpg',
            subTitle: 'AUGUST',
            description: 'The Crocodile Festival is a three day event celebrating the local tribe’s cultural connection to the crocodile with the festival showcasing canoe racing and traditional performances.',
            detials: {
                call: '+675 7259 6349',
                website: 'www.papuanewguinea.travel',
                email: 'sepikjourneys.alois240@gmail.com',
                location: 'Ambunti, Papua New Guniea'
            }


        },
        {
            id: 9,
            title: 'ENGA FESTIVAL',
            img_url: '/imgs/events/Events_Images_P8.jpg',
            subTitle: 'AUGUST',
            description: 'One common dialect dominates the Enga Province, which makes it a particular drawcard for those visiting PNG. The Enga Festival is a time when locals can demonstrate to outsiders just how amazing their culture is. Discover the Engans’ famous sand painting, which is unique to the area, and the fantastic sing-sing men.',
            detials: {
                call: '+675 7226 8610',
                website: 'www.papuanewguinea.travel',
                email: 'www.engashow.com',
                location: 'Wabag Town, Papua New Guniea'
            }


        },
        {
            id: 10,
            title: 'FRANGIPANI FESTIVAL',
            img_url: '/imgs/events/Events_Images_P9.jpg',
            subTitle: 'SEPTEMBER',
            description: 'Occurring in September, the Frangipani Festival celebrates Independence Day. See the famous Baining Fire Dance, sing-sings, a float parade and more.',
            detials: {
                call: '+675 982 8697',
                website: 'www.enb.travel',
                email: 'www.engashow.com',
                location: 'Rabaul, Papua New Guniea'
            }


        },
        {
            id: 11,
            title: 'FRANGIPANI FESTIVAL',
            img_url: '/imgs/events/Events_Images_P10.jpg',
            subTitle: 'SEPTEMBER',
            description: 'The Hiri Moale Show has become a premier cultural event. Like everything in PNG, the show illustrates a rich and symbolic history that reflect on age-old stories and customs. During the show, Ela Beach comes to life with stilt houses, colourful canoes and hundreds of people singing, dancing and celebrating tradition.',
            detials: {
                call: '+675 320 0211',
                website: 'www.enb.travel',
                email: 'www.papuanewguinea.travel',
                location: 'Port Moresby, Papua New Guniea'
            }
        },
        {
            id: 12,
            title: 'GOROKA SHOW',
            img_url: '/imgs/events/Events_Images_P11.jpg',
            subTitle: 'SEPTEMBER',
            description: 'The Highlands region is famous for its primitive history, which included cannibalism and violent tribal wars. At the Goroka Show, descendants beat kundu drums and decorate themselves in unusual body paints and feathers to celebrate their unique heritage.',
            detials: {
                call: '675 532 2644',
                website: 'www.gorokaevents.com',
                email: 'gorokashow2014@gmail.com',
                location: 'Port Moresby, Papua New Guniea'
            }
        },
        {
            id: 13,
            title: 'MOROBE CULTURAL SHOW',
            img_url: '/imgs/events/Events_Images_P12.jpg',
            subTitle: 'OCTOBER',
            description: 'The Morobe Cultural Show is probably the most famous cultural show in PNG. It is held in October each year and provides visitors with agricultural information as well as showcases the largest group of sing-sings in PNG.',
            detials: {
                call: '+675 472 2887',
                website: 'www.morobeshow.org.pg',
                email: 'info@morobeshow.org.pg',
                location: 'Lae, Papua New Guniea'
            }
        },
        {
            id: 14,
            title: 'PNG KENU AND KUNDU FESTIVAL',
            img_url: '/imgs/events/Events_Images_P13.jpg',
            subTitle: 'NOVEMBER',
            description: 'With its rich connection to the water, the people of Milne Bay celebrate a canoe festival in November each year. Visitors will see war canoes and locally-made kundu drums in all their glory.',
            detials: {
                call: '+675 641 1503',
                website: '',
                email: 'kenukundusponsor@kulamail.net',
                location: 'Alotau, Papua New Guniea'
            }
        },
    ]

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
                    data={this.events}
                    // imageSrc={this.eventData.imgSrc}
                    to=''
                    namespace="events"
                    imageKey="imageServiceType"
                    isImageArray={true}

                    sideButtons={[
                        //{ title: "EVENTS", isLink: true, link: eventNamespace }
                    ]}
                    sideTitle="EVENTS"
                    mainTitle="CALENDAR"
                    evenDetailsProps={this.events}

                >

                </SubsectionList>

            </div>
        );
    }
}

export default EventList;


