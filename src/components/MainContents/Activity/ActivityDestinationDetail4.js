// import React from "react";
// import "../List/MainSectionList.css";
// import "./Activity.css";
// import {
//     DECIMAL_RADIX,
//     diningNamespace,
//     imageGallery,
//     HeavyOrange,
//     LightBlueButtonBackground,
//     ExtraHeavyBlueGreen,
//     LightOrange
// } from "../../../Constants";
// import { Link } from "react-router-dom";
// import RestaurantListIcon from "./icons/RestaurantListIcon.png";



// class ActivityDestinationDetail4 extends React.Component {

//     divingList = [
//         {
//             id: 1,
//             Title: 'PORT MORESBY',
//             img_url: '/imgs/activity/ACTIVITIES-DIVING-GALLERY_P.jpg',
//             // imagesrc: '/imgs/dining/restaurant_logos/R1-DININGLOGO-TEST4.png',
//             details: {
//                 associate: 'The Dive Centre',
//                 Phone: '+675 7202 1200',
//                 email: 'info@divecentre.com.pg',
//                 website: 'www.divecentre.com.pg',
//                 overView: ' Susie’s Bommie, located just fifteen minutes from Port Moresby, is touted as world class because of its spectacular coral reef garden. With a seamount protruding 30 metres from the seabed, the site attracts a diverse range of marine life from the pygmy seahorse to pelagic varieties of fish. Other dives worth checking out are Pumpkin Patch, MV Pacific Gas, End Bommie and Eastern Fields.',
//             }

//         }, {
//             id: 2,
//             Title: 'TUFI',
//             img_url: '/imgs/activity/ACTIVITIES-DIVING-GALLERY_T.jpg',
//             details: {
//                 associate: 'Tufi Dive Resort',
//                 Phone: '+675 323 3462',
//                 email: 'reservations@tufiresort.com',
//                 website: 'www.tufidive.com',
//                 overView: 'Tufi’s underwater world lights up in a kaleidoscope of colour, offering great visibility all year round to explore its fjords and WWII wrecks. For reef diving, divers can try Black Rocks, Cyclone Cay, Stewarts Reef and Shark Tip. Wreck diving offers the renowned Blackjack site.',
//             }

//         },

//     ]
//     render() {
//         let divingDetail = this.divingList[parseInt(this.props.match.params.id)]
//         //   const { restaurant, status } = this.props;
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
//                 <h2>4444444444444</h2>
//                 <div
//                     style={{
//                         backgroundColor: HeavyOrange,
//                         width: "14%",
//                         boxShadow: "9.899px 0px 7px 0px rgba(0,0,0,0.6)",
//                         zIndex: 1,
//                         display: "flex",
//                         flexDirection: "column"
//                     }}
//                 >
//                     <Link
//                         style={{
//                             textDecoration: "none"
//                         }}
//                         to={diningNamespace}
//                     >
//                         <div className="leftSide-menu--container">
//                             <img
//                                 className="leftSide-menu--img"
//                                 src={RestaurantListIcon}
//                                 alt="Restaurant List Icon"
//                             />
//                             <div className="menu-title">RESTAURANT LIST</div>
//                         </div>
//                     </Link>
//                     <Link
//                         style={{
//                             textDecoration: "none"
//                         }}
//                         to={diningNamespace}
//                     >
//                         <div className="leftSide-menu--container">
//                             <img
//                                 className="leftSide-menu--img"
//                                 src={RestaurantListIcon}
//                                 alt="Restaurant List Icon"
//                             />
//                             <div className="menu-title">RESTAURANT LIST</div>
//                         </div>
//                     </Link>
//                     <div className="vertical-title">
//                         <span style={{ transform: "rotate(-90deg)" }}>
//                             ACTIVITIES
//                         </span>
//                     </div>
//                 </div>


//                 <div style={{ flex: 1, width: "86%", height: "54vh", backgroundColor: "rgb(5, 151, 165)" }}>

//                     <div style={{ height: "40%" }}>
//                         <div style={{ height: "100%", width: "100%" }} className="slide-container">

//                             < img style={{ height: "100%", width: "100%" }} src={divingDetail.img_url} />
//                         </div>
//                     </div>

//                     <div style={{ height: "40%", display: "flex" }}>
//                         < img style={{ height: "100%", width: "100%" }} src={restaurantsDetail.slideImages} />
//                     </div>
//                     <div style={{ height: "20%" }} className="main-bottom" style={{ padding: "2%" }}>
//                     </div>
//                 </div >
//             </div>
//         );
//     }

// }
// export default ActivityDestinationDetail4;
