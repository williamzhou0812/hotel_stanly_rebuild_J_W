import React from 'react';

import RestaurantListicon from './icons/RestaurantListIcon.6a75108a.png';
import { Link } from "react-router-dom";

import StandTwin  from './img_logo/Our_Hotel_Section_Imagesstandard.jpg';
import DeluxeKing  from './img_logo/Our_Hotel_Section_Images_Pres_d1uSXpj.jpg';
import ExedutiveKing  from './img_logo/Our_Hotel_Section_Images_AuBae3aKing.jpg';
import CornerSuite from './img_logo/Our_Hotel_Section_Images-JUNIOR-SUITE.jpg';
import JuniorSuite from './img_logo/Our_Hotel_Section_Imagesstandard.jpg';
import Persidential from './img_logo/Our_Hotel_Section_Images_Pres_d1uSXpj.jpg';


import '../List/MainSectionList.scss';
import "./OurHotel.scss";



import {
    eventNamespace,
    accomodationNamespace,
    HeavyOrange,
    LightBlueButtonBackground,
    ExtraHeavyBlueGreen,
} from "../../../Constants";



const ourhotel_room_suite = [
    {
        id: 1,
        title_img: '',
        title: 'STANDARD TWIN',
        img_url: StandTwin,
        description: 'All rooms come with two Queen-sized beds, a work desk, monsoon shower and face either north with a fabulous view overlooking the pool, or south overlooking the Owen Stanley Mountain Range.',
        details: {
            size: '34sqm',
            bed: 'Two Queens',
            location: 'From 5th to 8th floors',
            occpancy: 'Two adults and Two children, or Three adults'
        }
       
    },
    {
        id: 2,
        title_img: '',
        title: 'DELUXE KING',
        img_url: DeluxeKing,
        description: 'Our modern Deluxe rooms come with one King-sized bed, a work desk, a spacious bathroom with monsoon shower head and offer views of either the pool or Waigani skyline at night and the Owen Stanley Mountain Range in the morning.',
        details: {
            size: '34sqm',
            bed: 'One King',
            location: 'From 9th to 12th floors',
            occpancy: 'Two Adults'
        }
       

    },
    {
        id: 3,
        title_img: '',
        title: 'EXECUTIVE KING',
        img_url: ExedutiveKing,
        description: 'Located on high floors and the rooms come with one King-sized bed, a work desk, a spacious bathroom with monsoon shower head and offer views of either the pool or Waigani skyline at night and the Owen Stanley Mountain Range in the morning. Guests receive access to the Executive Club Lounge services and facilities.',
        details: {
            size: '34sqm',
            bed: 'One King',
            location: 'From 14th to 18th floors',
            occpancy: 'Two Adults'
        }

    },
    {
        id: 4,
        title_img: '',
        title: 'CORNER SUITE',
        img_url: CornerSuite,
        description: `The Corner Suites feature a sumptuous living experience with views of Waigani skyline and the Owen Stanley Mountains. 
                        Separate sleeping and living area
                        Elegant stand-alone tub and glass-enclosed monsoon shower
                        Complimentary access to Executive Club Lounge services and facilities`,
        details: {
            size: '68sqm',
            bed: 'One Super King',
            location: 'From 5th to 18th floors',
            occpancy: 'Two Adults'
        }

       

    },
    {
        id: 5,
        title_img: '',
        title: 'JUNIOR SUITE',
        img_url: JuniorSuite,
        description: `Luxuriously spacious, this elegant suite in The Stanley Hotel and Suites is ideal for work or entertaining and offers top-floor views of the pool area.

                        A large dining room that can seat up to 8 guests.
                        A kitchenette.
                        Complimentary access to Executive Club Lounge services and facilities.
                        The luxurious marble bathroom offers an extra-large soaking tub and separate walk-in shower.
                        Direct lift access to/from the basement car park, and the ability to interconnect with the Presidential Suite *Only two rooms on this floor for the ultimate security`,
        details: {
            size: '130sqm',
            bed: 'one Super King and One King',
            location: '20th Floor',
            occpancy: 'Two Adults and One child, or Four Adults'
        }

    },
    {
        id: 6,
        title_img: '',
        title: 'PRESIDENTIAL SUITE',
        img_url: Persidential,
        description: `Enjoy the grand living spaces, stunning top-floor views of the Own Stanley Mountain ranges and National Stadium from this expansive luxury suite in The Stanley Hotel & Suites.

                        <u>Elegant</u> dining room that can seat up to 14 guests
                        Full kitchen for private dining and preparation
                        Complimentary access to Executive Club Lounge services and facilities
                        Expansive marble bathroom overlooking the mountains with double vanity, separate monsoon shower and oversized Jacuzzi bathtub for ultimate comfort
                        Direct lift access to/from the basement car park, and the ability to interconnect with the Junior Suite *Only two rooms on this floor for the ultimate security`,
        details: {
            size: '340sqm',
            bed: 'One Super King and Two Queen',
            location: '20th Floor',
            occpancy: 'Two Adults and Two Children, or Four Adults'
        }

    }
]


const styles = {
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

const RoomSuiteDetails = (props) => {

    const id = props.match.params.id;
    const _id = parseInt(id);
    console.log(_id);
    const _RoomSuiteDetails = ourhotel_room_suite[_id];

    return (
     <div
                style={{
                    width: "100%",
                    height: "54vh",
                    display: "flex",
                    color: "white"
                }}
                className="section--bottom--animation"
            >
                <div className="vertical-side"
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
                            to='/ourhotel/roomsuite'
                        >
                            <div className="leftSide-menu--container">
                                <img
                                    className="leftSide-menu--img"
                                    src={RestaurantListicon}
                                    alt="RestaurantListIcon"
                                />
                                <div
                                    style={{
                                        letterSpacing: "2px"
                                    }}
                                >
                                    <p
                                        className="menu-title"
                                  
                                    >
                                        ROOMS & SUITES
                                     </p>
                                    <p
                                        className="menu-title"
                                  
                                    >
                                        
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="vertical-title ">
                        <span
                            style={{
                                transform: "rotate(-90deg)",
                                whiteSpace: "nowrap"
                            }}
                        >
                            OUR HOTEL
                    </span>
                    </div>
                </div>
                <div >
                    <div className='event-main'>
                        <div style={{ height: "50%", width: "100%" }}>
                            <img src={_RoomSuiteDetails.img_url} style={{ height: '100%', width: '100%' }} />

                        </div>
                        <div style={{ height: "50%", width: "100%" }}>
                            <div style={{ height: "13%", display: "flex" }}>
                                <div
                                    className="event-nextPre-btn"
                                    style={{
                                        ...styles.horizontalVerticalCenter
                                    }}
                                   
                                >
                                    <span>PREVIOUS </span>
                                </div>
                                <div
                                    className="event-title"
                                    style={{
                                        ...styles.horizontalVerticalCenter
                                    }}
                                >
                                    <span>{_RoomSuiteDetails.title}</span>
                                </div>
                                <div
                                    className="event-nextPre-btn"
                                    style={{
                                        ...styles.horizontalVerticalCenter
                                    }}
                            
                                >
                                    <span>NEXT</span>
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
                                        padding: "25px 0px 0px 35px"
                                    }}
                                >
                                {false && (
                                    <div
                                        className="middle-section--innerTitle"
                                        style={{
                                            height: "15%"
                                        }}
                                    >
                                      
                                        {/* <span>{eventDetail.month}</span> */}
                                    </div>
                                )}
                                    <div className="middle-section--leftSide"
                                        style={{
                                            height: "75%",
                                            overflow: "scroll",
                                            display: "inline-table"
                                        }}
                                    >
                                        <div
                                            dangerouslySetInnerHTML={{__html: _RoomSuiteDetails.description}}
                                            style={{
                                                marginTop: 0,
                                                marginBottom: 0
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                <div style={{
                                    flexBasis: "50%",
                                    padding: "25px 0px 0px 25px"
                                }}
                                >
                                    {false && <div style={{ height: "15%" }} />}
                                   
                                    <div className="middle-section--rightSide"
                                        style={{
                                            height: "38%",
                                            letterSpacing: "1px",
                                            overflow: "scroll",
                                            display: "inline-table",
                                            // fontSize: "2vw"
                                        }}
                                    >
                                        {_RoomSuiteDetails.details.size && (
                                            <p>Size: {_RoomSuiteDetails.details.size} </p>
                                        )}
                                        {_RoomSuiteDetails.details.bed && (
                                            <p>Bed: {_RoomSuiteDetails.details.bed} </p>
                                        )}
                                        {_RoomSuiteDetails.details.location && (
                                            <p>Location: {_RoomSuiteDetails.details.location} </p>)}

                                        {_RoomSuiteDetails.details.occpancy && (
                                            <p>Occupancy: {_RoomSuiteDetails.details.occpancy} </p>
                                        )}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>



                </div >
            </div >
    )
}

export default RoomSuiteDetails;