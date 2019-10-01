import React from 'react';

import RestaurantListicon from './icons/RestaurantListIcon.6a75108a.png';
import { Link } from "react-router-dom";


import  MTWIL from './img_logo/meeting/Our_Hotel_Section_Images2_1ckFKEE-MT-WILHELM.jpg';
import  MTVIC  from './img_logo/meeting/Our_Hotel_Section_Images2_unGoJbX-MT-VIC.jpg';
import  KOKO  from './img_logo/meeting/Our_Hotel_Section_Imagesballroom2_EPgBbAS-KOKO.jpg';
import  BOARDROOM from './img_logo/meeting/Our_Hotel_Section_Imagesmeeting4-boardroom.jpg';



import '../List/MainSectionList.scss';
import "./OurHotel.scss";



import {
    eventNamespace,
    accomodationNamespace,
    HeavyOrange,
    LightBlueButtonBackground,
    ExtraHeavyBlueGreen,
} from "../../../Constants";



const ourhotel_Meeting = [
    {
        id: 1,
        title: 'BOARDROOM',
        img_url: BOARDROOM,
        description: `The Boardroom conveniently located in the hotel lobby, next to the Business Centre, is perfectly suited for a business meeting or intimate discussions for up to 12 people.`,
        details: {
            contact: '+675 302 8888 for more information'
        }
     
        
    },
    {
        id: 2,
        title: 'MT WELHELM',
        img_url: MTWIL,
        description: `<p>A suite of smaller meeting rooms with direct access onto a large outdoor terrace.</p>
            <p>Rooms have the flexibility to accommodation whatever your requirements may be; theatre, classroom, boardroom, u-shape, cabaret, banqueting or cocktail.</p>
            <p>The rooms can cater for meetings for 20 people or for you to 60 people.</p>`,
        details: {
            contact: '+675 302 8888 for more information'
        }
       

    },
    {
        id: 3,
        title: 'MT VICTORIA',
        img_url: MTVIC,
        description: `<p>A suite of smaller meeting rooms featuring natural lighting.</p>
            <p>Rooms have the flexibility to accommodation whatever your requirements may be; theatre, classroom, boardroom, u shape, cabaret, banqueting or cocktail.</p>
            <p>The rooms can cater for meetings for 20 people or for you to 60 people.</p>`,
        details: {
            contact: '+675 302 8888 for more information'
        }
     

    },
    {
        id: 4,
        title: 'KOKODA BALLROOM',
        img_url: KOKO,
        description: `<p>The signature space of The Stanley’s Meeting Spaces; 
            a 1630 square meter room is the largest column free banquet space in Port Moresby.</p>
            <p>The Kokoda can be minimised to smaller zones in various configurations.</p>
            <p>Whether you are planning a grand wedding, an intimate cocktail party or an important seminar, The Stanley offers tailored packages for every occasion.</p>`,
        details: {
            contact: '+675 302 8888 for more information'
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



const MeetingDetails = (props) => {

    const id = props.match.params.id;
    const _id = parseInt(id);
    const _facilitiesDetails = ourhotel_Meeting.find(item => item.id == _id);
    const currentIdx = ourhotel_Meeting.indexOf(_facilitiesDetails);
    const prev_idx = (currentIdx - 1 < 0) ?  ourhotel_Meeting.length -1 : currentIdx - 1;
    const next_idx = (currentIdx + 1 >= ourhotel_Meeting.length) ? 0 : currentIdx + 1;
    const prev_id = ourhotel_Meeting[prev_idx].id;
    const next_id = ourhotel_Meeting[next_idx].id;

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
                            to='/ourhotel/meeting'
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
                                        MEETINGS 
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
                                transform: "rotate(-90deg)"
                            }}
                        >
                            OUR HOTEL
                    </span>
                    </div>
                </div>
                <div >
                    <div className='event-main'>
                        <div style={{ height: "50%", width: "100%" }}>
                            <img src={_facilitiesDetails.img_url} style={{ height: '100%', width: '100%' }} />

                        </div>
                        <div style={{ height: "50%", width: "100%" }}>
                            <div style={{ height: "13%", display: "flex" }}>
                                
                                <Link
                                    className="event-nextPre-btn"
                                    style={{
                                        ...styles.horizontalVerticalCenter
                                    }}
                                    to={'/ourhotel/meeting/' + prev_id}
                                >
                                    <span>PREVIOUS</span>
                                </Link>
                                <div
                                    className="event-title"
                                    style={{
                                        ...styles.horizontalVerticalCenter
                                    }}
                                >
                                    <span>{_facilitiesDetails.title}</span>
                                </div>
                                
                                <Link
                                    className="event-nextPre-btn"
                                    style={{
                                        ...styles.horizontalVerticalCenter
                                    }}
                                    to={'/ourhotel/meeting/' + next_id}
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
                                    {false && (<div
                                        className="middle-section--innerTitle"
                                        style={{
                                            height: "15%"
                                        }}
                                    >
                                      
                                        {/* <span>{eventDetail.month}</span> */}
                                    </div>)}
                                    <div className="middle-section--leftSide"
                                        style={{
                                            height: "75%",
                                            overflow: "scroll",
                                            display: "inline-table"
                                        }}
                                    >
                                        <div
                                            dangerouslySetInnerHTML={{__html: _facilitiesDetails.description}}
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
                                    {false && (<div style={{ height: "15%" }} />)}
                                   
                                    <div className="middle-section--rightSide"
                                        style={{
                                            height: "38%",
                                            letterSpacing: "1px",
                                            overflow: "scroll",
                                            display: "inline-table",
                                            // fontSize: "2vw"
                                        }}
                                    >
                                        {_facilitiesDetails.details.contact && (
                                            <p>Please contact {_facilitiesDetails.details.contact} </p>
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

export default MeetingDetails ;