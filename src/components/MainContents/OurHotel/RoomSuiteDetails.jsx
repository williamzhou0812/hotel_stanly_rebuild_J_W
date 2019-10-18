import React from 'react';

import RestaurantListicon from './icons/RestaurantListIcon.6a75108a.png';
import { Link } from "react-router-dom";


import '../List/MainSectionList.scss';
import "./OurHotel.scss";



import {
    imageGallery,
    HeavyOrange,
    LightBlueButtonBackground,
    ExtraHeavyBlueGreen,
} from "../../../Constants";



const ourhotel_room_suite = [
    {
        id: 1,
        title_img: '',
        title: 'STANDARD TWIN',
        description: 'All rooms come with two Queen-sized beds, a work desk, monsoon shower and face either north with a fabulous view overlooking the pool, or south overlooking the Owen Stanley Mountain Range.',
        details: {
            size: '34sqm',
            bed: 'Two Queens',
            location: 'From 5th to 8th floors',
            occpancy: 'Two adults and Two children, or Three adults'
        },
        images: [
            { imageFile: '/imgs/ourHotel/H1-Rooms and Suites/H1A-Standard/Our Hotel Section_Imagesstandard.jpg' }
        ]
       
    },
    {
        id: 2,
        title_img: '',
        title: 'DELUXE KING',
        description: 'Our modern Deluxe rooms come with one King-sized bed, a work desk, a spacious bathroom with monsoon shower head and offer views of either the pool or Waigani skyline at night and the Owen Stanley Mountain Range in the morning.',
        details: {
            size: '34sqm',
            bed: 'One King',
            location: 'From 9th to 12th floors',
            occpancy: 'Two Adults'
        },
        images: [
            { imageFile: '/imgs/ourHotel/H1-Rooms and Suites/H1B-Deluxe/Our Hotel Section_ImagesDeluxe.jpg' }
        ]
       

    },
    {
        id: 3,
        title_img: '',
        title: 'EXECUTIVE KING',
        description: 'Located on high floors and the rooms come with one King-sized bed, a work desk, a spacious bathroom with monsoon shower head and offer views of either the pool or Waigani skyline at night and the Owen Stanley Mountain Range in the morning. Guests receive access to the Executive Club Lounge services and facilities.',
        details: {
            size: '34sqm',
            bed: 'One King',
            location: 'From 14th to 18th floors',
            occpancy: 'Two Adults'
        },
        images: [
         //   { imageFile: '/imgs/ourHotel/H1-Rooms and Suites/H1C-Executive/Our Hotel Section_Images.jpg' },
            { imageFile: '/imgs/ourHotel/H1-Rooms and Suites/H1C-Executive/Our Hotel Section_Images5.jpg' }
        ]

    },
    {
        id: 4,
        title_img: '',
        title: 'CORNER SUITE',
        description: `The Corner Suites feature a sumptuous living experience with views of Waigani skyline and the Owen Stanley Mountains. 
                        <ul>
                            <li>Separate sleeping and living area</li>
                            <li>Elegant stand-alone tub and glass-enclosed monsoon shower</li>
                            <li>Complimentary access to Executive Club Lounge services and facilities</li>
                        </ul>`,
        details: {
            size: '68sqm',
            bed: 'One Super King',
            location: 'From 5th to 18th floors',
            occpancy: 'Two Adults'
        },
        images: [
            { imageFile: '/imgs/ourHotel/H1-Rooms and Suites/H1D-Corner/Our Hotel Section_ImagesCorner.jpg' },
            { imageFile: '/imgs/ourHotel/H1-Rooms and Suites/H1D-Corner/Our Hotel Section_Imagessuite.jpg' }
        ]

       

    },
    {
        id: 5,
        title_img: '',
        title: 'JUNIOR SUITE',
        description: `Luxuriously spacious, this elegant suite in The Stanley Hotel and Suites is ideal for work or entertaining and offers top-floor views of the pool area.
                        <ul>
                            <li>A large dining room that can seat up to 8 guests.</li>
                            <li>A kitchenette.</li>
                            <li>Complimentary access to Executive Club Lounge services and facilities.</li>
                            <li>The luxurious marble bathroom offers an extra-large soaking tub and separate walk-in shower.</li>
                            <li>Direct lift access to/from the basement car park, and the ability to interconnect with the Presidential Suite *Only two rooms on this floor for the ultimate security</li>
                        </ul>`,
        details: {
            size: '130sqm',
            bed: 'One Super King and One King',
            location: '20th Floor',
            occpancy: 'Two Adults and One child, or Four Adults'
        },
        images: [
            { imageFile: '/imgs/ourHotel/H1-Rooms and Suites/H1E-Junior/Our Hotel Section_Images.jpg' }
        ]

    },
    {
        id: 6,
        title_img: '',
        title: 'PRESIDENTIAL SUITE',
        description: `Enjoy the grand living spaces, stunning top-floor views of the Own Stanley Mountain ranges and National Stadium from this expansive luxury suite in The Stanley Hotel &amp; Suites.
                        <ul>
                            <li>Elegant dining room that can seat up to 14 guests</li>
                            <li>Full kitchen for private dining and preparation</li>
                            <li>Complimentary access to Executive Club Lounge services and facilities</li>
                            <li>Expansive marble bathroom overlooking the mountains with double vanity, separate monsoon shower and oversized Jacuzzi bathtub for ultimate comfort</li>                        
                            <li>Direct lift access to/from the basement car park, and the ability to interconnect with the Junior Suite *Only two rooms on this floor for the ultimate security</li>
                        </ul>`,
        details: {
            size: '340sqm',
            bed: 'One Super King and Two Queen',
            location: '20th Floor',
            occpancy: 'Two Adults and Two Children, or Four Adults'
        },
        images: [
            { imageFile: '/imgs/ourHotel/H1-Rooms and Suites/H1F-Presidential/Our Hotel Section_Images_Pres.jpg' },
            { imageFile: '/imgs/ourHotel/H1-Rooms and Suites/H1F-Presidential/Our Hotel Section_Imagespresidential.jpg' }
        ]

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



/// Image Garllery
const renderImages = (rooms) => {
    const {  images } = rooms;
    if (images.length > 1) {
        return imageGallery(images, "100%", "27vh");
    }
    else if (images.length === 1) {
        return (<img src={images[0].imageFile} style={{ height: '100%', width: '100%' }} alt=""/>);
    }
    else {
        return (
            <div
                style={{
                    backgroundColor: HeavyOrange,
                    height: "100%",
                    padding: "30px"
                }}
            >
                <h1>NO IMAGE FOR THIS ROOM</h1>
            </div>
        );
    }
}


const RoomSuiteDetails = (props) => {

    const id = props.match.params.id;
    const _id = parseInt(id);
    const _RoomSuiteDetails = ourhotel_room_suite.find(item => item.id === _id);
    const currentIdx = ourhotel_room_suite.indexOf(_RoomSuiteDetails);
    const prev_idx = (currentIdx - 1 < 0) ?  ourhotel_room_suite.length -1 : currentIdx - 1;
    const next_idx = (currentIdx + 1 >= ourhotel_room_suite.length) ? 0 : currentIdx + 1;
    const prev_id = ourhotel_room_suite[prev_idx].id;
    const next_id = ourhotel_room_suite[next_idx].id;

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
                                        ROOMS &amp; SUITES
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
                            {renderImages(_RoomSuiteDetails)}
                        </div>
                        <div style={{ height: "50%", width: "100%" }}>
                            <div style={{ height: "13%", display: "flex" }}>
                                <Link
                                    className="event-nextPre-btn"
                                    style={{
                                        ...styles.horizontalVerticalCenter
                                    }}
                                    to={'/ourhotel/roomsuite/' + prev_id}
                                >
                                    <span>PREVIOUS</span>
                                </Link>
                                <div
                                    className="event-title"
                                    style={{
                                        ...styles.horizontalVerticalCenter
                                    }}
                                >
                                    <span>{_RoomSuiteDetails.title}</span>
                                </div>
                                <Link
                                    className="event-nextPre-btn"
                                    style={{
                                        ...styles.horizontalVerticalCenter
                                    }}
                                    to={'/ourhotel/roomsuite/' + next_id}
                                >
                                    <span>NEXT</span>
                                </Link>
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
                                        padding: "25px 0px 0px 35px",
                                        overflowY: "auto"
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