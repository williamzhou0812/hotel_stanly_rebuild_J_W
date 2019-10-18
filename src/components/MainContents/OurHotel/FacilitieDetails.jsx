import React from 'react';

import RestaurantListicon from './icons/RestaurantListIcon.6a75108a.png';
import { Link } from "react-router-dom";

import  ZENSPA from './img_logo/facilities/Our_Hotel_Section_Images6-zen-spa.jpg';
import  FITENESSCENTER  from './img_logo/facilities/Our_Hotel_Section_Imagesgym_e5xGEtm-fitness-center.jpg';
import  THEPOOL  from './img_logo/facilities/Our_Hotel_Section_Imagespool_JVQx0Ft-the-pool.jpg';
import  WOMEMARKING from './img_logo/facilities/Our_Hotel_Section_ImagesOwens_FkykBdv-women-marking .jpg';



import '../List/MainSectionList.scss';
import "./OurHotel.scss";



import {
    HeavyOrange,
    LightBlueButtonBackground,
    ExtraHeavyBlueGreen,
} from "../../../Constants";



const ourhotel_Facilities = [
    {
        id: 1,
        title: 'ZEN SPA',
        img_url: ZENSPA,
        description: `<p>Float away from all your cares and worries in this opulent and serene setting that promises to indulge the senses.</p>
            <p>The SPA has highly trained masseurs on staff who are experienced in a range of massage techniques such as Swedish, deep tissue and sports massage.</p> 
            <p>Combine your massage with a spa treatment to complete your pampering and relaxation.</p>`,
        details: {
            location: 'on Level 3',
            openhour: '10AM – 10PM'
        }
        
    },
    {
        id: 2,
        title: 'FITNESS CENTRE',
        img_url: FITENESSCENTER,
        description: `<p>Located on the fifth level adjacent to the pool. We offer a full range of aerobic machines, free weights and cable weight equipment to please any gym junky, with a separate training room for group fitness sessions.</p> 
            <p>We can write you a training program or provide a Personal Trainer if desired.</p>`,
        details: {
            location: 'on Level 5',
            openhour: '5:00 AM – 10PM',
            openhour_title: 'Gym Hours'
        }

    },
    {
        id: 3,
        title: 'THE POOL',
        img_url: THEPOOL,
        description: `<p>Enjoy the hotel’s 3,000 square meter pool deck area and pool boasting a 40-meter lap pool.</p>
            <p>Whether for leisure or fitness, this stylish outside area is the perfect place to relax and unwind. </p>
            <p>Why not pull up a deck chair and catch up on some much-loved reading?</p>
            <p>If you’re in need of some refreshments, the Pool Deck has all your needs covered, from delicious fish and chips to ice cream or an iced cold beverage.</p>`,
        details: {
       
            location: 'on Level 5',
            openhour: '',
            note: 'This area is open from 5am until 10pm.'
        }
     

    },
    {
        id: 4,
        title: 'OWEN\'S MARKET',
        img_url: WOMEMARKING,
        description: `<p>Did you forget to pack something? Owen’s market has everything you need!</p>
        <p>We stock anything from fresh produce, snacks, toiletries, drinks to fresh meat, food and beverage gourmet items, in-house made delicatessen and even our famous roast chicken!</p>
        `,
        details: {
       
            location: 'the Ground Floor',
            openhour: '08:00 – 20:00'
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

const FacilitieDetails = (props) => {

    const id = props.match.params.id;
    const _id = parseInt(id);
    const _facilitiesDetails = ourhotel_Facilities.find(item => item.id === _id);
    const currentIdx = ourhotel_Facilities.indexOf(_facilitiesDetails);
    const prev_idx = (currentIdx - 1 < 0) ?  ourhotel_Facilities.length -1 : currentIdx - 1;
    const next_idx = (currentIdx + 1 >= ourhotel_Facilities.length) ? 0 : currentIdx + 1;
    const prev_id = ourhotel_Facilities[prev_idx].id;
    const next_id = ourhotel_Facilities[next_idx].id;

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
                            to='/ourhotel/facilities'
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
                                        FACILITIES
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
                                whiteSpace: 'nowrap'
                            }}
                        >
                            OUR HOTEL
                    </span>
                    </div>
                </div>
                <div >
                    <div className='event-main'>
                        <div style={{ height: "50%", width: "100%" }}>
                            <img src={_facilitiesDetails.img_url} style={{ height: '100%', width: '100%' }} alt=""/>

                        </div>
                        <div style={{ height: "50%", width: "100%" }}>
                            <div style={{ height: "13%", display: "flex" }}>
                                <Link
                                    className="event-nextPre-btn"
                                    style={{
                                        ...styles.horizontalVerticalCenter
                                    }}
                                    to={'/ourhotel/facilities/' + prev_id}
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
                                    to={'/ourhotel/facilities/' + next_id}
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
                                        {_facilitiesDetails.details.location && (
                                            <p>Located: {_facilitiesDetails.details.location} </p>
                                        )}
                                        {_facilitiesDetails.details.openhour && (
                                            <p>{(_facilitiesDetails.details.openhour_title ? _facilitiesDetails.details.openhour_title : "Open")}: {_facilitiesDetails.details.openhour} </p>
                                        )}
                                        {_facilitiesDetails.details.note && (
                                            <p> {_facilitiesDetails.details.note} </p>
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

export default FacilitieDetails ;