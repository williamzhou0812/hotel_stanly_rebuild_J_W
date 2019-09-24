import React from "react";
import SubsectionList from "../List/SubsectionList";
import { DECIMAL_RADIX, activityNamespace } from "../../../Constants";
import activityListIcon from "../../../components/MainContents/icons/ACTIVITIES_ICON.png";
import mapIcon from "../../../components/MainContents/icons/MapIcon.png";

class ActivityDestinationList1 extends React.Component {
    divingList = [
        {
            id: 1,
            title: "PORT MORESBY",
            img_url: "/imgs/activity/ACTIVITIES-DIVING-GALLERY_P.jpg",
            mapActivity: "./images/maps/activities/A1-map.png",
            overView:
                " Susie’s Bommie, located just fifteen minutes from Port Moresby, is touted as world class because of its spectacular coral reef garden. With a seamount protruding 30 metres from the seabed, the site attracts a diverse range of marine life from the pygmy seahorse to pelagic varieties of fish. Other dives worth checking out are Pumpkin Patch, MV Pacific Gas, End Bommie and Eastern Fields.",

            details: {
                associate: "The Dive Centre",
                Phone: "+675 7202 1200",
                email: "info@divecentre.com.pg",
                website: "www.divecentre.com.pg"
            }
        },
        {
            id: 2,
            title: "MADANG",
            img_url: "/imgs/activity/ACTIVITIES-DIVING-GALLERY_T.jpg",
            mapActivity: "./images/maps/activities/A1-map.png",
            overView:
                "Madang serves up an exciting dive at Planet Rock which features a volcanic seamount and a number of amazing sea creatures such as the renowned clown fish, hammerhead sharks and pelagic species. Magic Passage is the most popular site for divers to the region. The combination of fish such as rainbowfish, bannerfish and silvery jacks provides a cavalcade of stunning colour along with the hard and soft corals.",

            details: [
                {
                    associate: "Jais Aben Resort",
                    Phone: "+675 423 3111",
                    email: "jaisaben@global.net.pg",
                    website: "www.jaisabenresort.com"
                },
                {
                    associate: "Niugini Dive Adventures",
                    Phone: "+675 422 2655",
                    email: "nda@mtspng.com",
                    website: "www.niuginidive.com"
                }
            ]
        },

        {
            id: 3,
            title: "TUFI",
            img_url: "/imgs/activity/ACTIVITIES-DIVING-GALLERY_P2.jpg",
            mapActivity: "./images/maps/activities/A1-map.png",
            overView:
                "Tufi’s underwater world lights up in a kaleidoscope of colour, offering great visibility all year round to explore its fjords and WWII wrecks. For reef diving, divers can try Black Rocks, Cyclone Cay, Stewarts Reef and Shark Tip. Wreck diving offers the renowned Blackjack site.",

            details: {
                associate: "Tufi Dive Resort",
                Phone: "+675 323 3462",
                email: "reservations@tufiresort.com",
                website: "www.tufidive.com"
            }
        },
        {
            id: 4,
            title: " MILNE BAY",
            img_url: "/imgs/activity/ACTIVITIES-DIVING-GALLERY_P3.jpg",
            mapActivity: "./images/maps/activities/A1-map.png",
            overView:
                " Like most sites in PNG, Tania’s Reef in Milnes Bay is flush with colourful",

            details: [
                {
                    associate: "Doini Island Plantation Resort",
                    Phone: "+61 434 060 530",
                    email: "teresa.levy@rocketmail.com",
                    website: "www.doiniisland.com"
                },
                {
                    associate: "Tawali Resort",
                    Phone: "+675 7364 0607",
                    email: "reservations@tawali.com",
                    website: "www.tawali.com"
                }
            ]
        },
        {
            id: 5,
            title: " WEST NEW BRITAIN - Kimbe Bay",
            img_url: "/imgs/activity/ACTIVITIES-DIVING-GALLERY_P4.jpg",
            mapActivity: "./images/maps/activities/A1-map.png",
            overView:
                "Zero is the most accessible wreck in West New Britain. In WWII, the aircraft ran out of fuel and was force-landed close to shore so that the pilot could alight safely. The wreck stayed hidden for almost 57 years and was eventually discovered by a spear fisherman. Other popular sites include South Emma, Fathers Reef and Susan’s  Reef which offer reef diving among brightly coloured coral, red whip gorgonians and other amazing sea creatures. ",

            details: [
                {
                    associate: "Walindi Resort",
                    Phone: "+675 7234 8460",
                    email: "resort@walindifebrina.com",
                    website: "www.walindifebrina.com"
                },
                {
                    associate: "Liamo Reef Resort",
                    Phone: "+675  983 4368",
                    email: "reservations@liamoreefresort.com",
                    website: "www.liamoreefresort.com"
                }
            ]
        },
        {
            id: 6,
            title: " EAST NEW BRITAIN - KOKOPO",
            img_url: "/imgs/activity/ACTIVITIES-DIVING-GALLERY_P5.jpg",
            mapActivity: "./images/maps/activities/A1-map.png",
            overView:
                "The WWII wrecks that litter the reefs surrounding East New Britain offer excellent visibility all year round. Simpson Harbour is excellent for war wrecks and the Beehives also offer great diving. The most accessible wreck  in the region is Zero which lies within proximity to Walindi. South Emma, Fathers Reef and Susans Reef all offer their own unique reef diving among brightly coloured coral, red whip gorgonians and other amazing sea creatures.",

            details: [
                {
                    associate: "Rabaul-Kokopo Dive",
                    Phone: "+675 7947 4892",
                    email: "admin@rabaul-kokopodive.com",
                    website: "rabaul-kokopodive.com"
                },
                {
                    associate: "Kokopo Beach Bungalow Resort",
                    Phone: "+675 982 8788",
                    email: "reservations@kbb.com.pg",
                    website: "www.kbb.com.pg"
                },
                {
                    associate: "Rapopo Plantation Resort",
                    Phone: "+675 982 9944",
                    email: "reservations@rapopo.com",
                    website: "www.rapopo.com"
                }
            ]
        },
        {
            id: 7,
            title: "NEW IRELAND - KAVIENG",
            img_url: "/imgs/activity/ACTIVITIES-DIVING-GALLERY_P6.jpg",
            mapActivity: "./images/maps/activities/A1-map.png",
            overView:
                "Diving spots are plentiful in the region, with WWII wrecks dotted throughout Kavieng Harbour. Near Nusa Island lies the famed Echuca Patch and Der Yang wreck. Between the north of New Ireland and New Hanover, the region is flush with superb dive sites. Albatross Passage, New Ireland’s most renowned dive site, features stunning marine life.",

            details: [
                {
                    associate: "Lissenung Resort",
                    Phone: "+675 7234 5834",
                    email: "info@lissenung.com",
                    website: "www.lissenung.com"
                },
                {
                    associate: "Nusa Island Retreat",
                    Phone: "+675 7231 8302",
                    email: "info@nusaislandretreat.com",
                    website: "www.nusaislandretreat.com"
                },
                {
                    associate: "Niugini Dive Adventures",
                    Phone: "+675 422 2655",
                    email: "nda@madangresort.com",
                    website: "www.niuginidive.com"
                }
            ]
        }
    ];
    render() {
        return (
            <div
                className="section--bottom--animation"
                style={{ width: "100%", height: "100%", color: "white" }}
            >
                <SubsectionList
                    numberOfEntries={4}
                    data={this.divingList}
                    namespace={activityNamespace + "/1"}
                    //   namespace={namespace + "/id"}
                    imageKey="logo"
                    isImageArray={false}
                    sideButtons={[
                        {
                            title: "ALL ACTIVITIES",
                            icon: activityListIcon,
                            isLink: true,
                            link: activityNamespace
                        },
                        { title: "DIVING MAP", icon: mapIcon, isMap: true }
                    ]}
                    sideTitle="DIVING"
                    mainTitle="DIVING AREAS"
                    maps={this.divingList.mapActivity}
                ></SubsectionList>
            </div>
        );
    }
}
export default ActivityDestinationList1;
