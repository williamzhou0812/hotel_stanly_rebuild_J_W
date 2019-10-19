
import React  from "react";
import '../List/MainSectionList.scss';
import './Hotel.scss';

class HotelWelcome extends React.Component {

    render() {
     
        return (
            <div 
                style={{
                    width: "100%",
                  //  height: "100%",
                  height:"54vh",
                    display: "flex",
                  
                }}
              //  className="section--bottom--animation"
            >
                <div className="left-vertical-nav"
                  style={{flex:"1"}}
                >
                    <div className="vertical-title"
                        style={{
                            transform: "rotate(-90deg)",
                            width:"auto",
                            whiteSpace:"nowrap"
                        }}
                    >
                       
                        ABOUT OUR HOTEL
                        
                    </div>
                </div>

                    <div className="ourHotel-main">
                        <div className="ourHotel-main--img"
        
                        />
                        <div className="ourHotel-main--header" >
                            <div className="ourHotel-main--header--top" >
                                WELCOME TO
                            </div>
                            <div className="ourHotel-main--header--bottom"     
                            >
                                THE STANLEY HOTEL &amp; SUITES
                               
                            </div>
                        </div>
                        <div className="ourHotel-main--content">
                            <div className="ourHotel-main--content--left">
                                <p>The Stanley Hotel and Suites is situated in Waigani the Commercial and Government heart of Port Moresby.</p>
                                <p>The hotel is connected to Port Moresby only integrated shopping complex, Vision City Mega Mall, giving you direct access to a Bank, Nightclub, Cinema, Supermarket and Restaurants. All this without having to drive anywhere.</p>
                                <p>The Stanley Hotel and Suites is a true Luxury Hotel with superb dining and relaxation facilities. Our goal is to provide exceptional service and consistency in all we do. </p>
                                <p>Our well-appointed standard, and deluxe rooms, offer all the amenities you would expect of a first class hotel. For those looking for a little more luxury, our executive rooms with access to the exclusive Lounge will more than meet your expectations.</p>
                            </div>
                            <div className="ourHotel-main--content--left">
                                <p>Enjoy fabulous food in our Green Haus Restaurant, or a sumptuous snack in the Monsoon Lounge. For that special occasion dine at our 19th floor Silver Leaf Restaurant.</p>
                                <p>You can enjoy an early morning workout at the Gym or relax by the pool side on our extra-large day beds.</p>
                                <p>Our conference and meetings facilities are second to none, with our centre piece Ballroom, combined with eight smaller meeting rooms all of which can be set up in a myriad of combinations, anywhere from 10 to 1200 people.</p>
                                <p>Come and stay at The Stanley Hotel &amp; Suite where the forest meets the city...</p>
                            </div>
                        </div>
                    </div>
               
            </div>
        );
    }
}



export default HotelWelcome;