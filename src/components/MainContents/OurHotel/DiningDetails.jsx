import React, {Fragment} from 'react';

import { Link } from "react-router-dom";

import RestaurantListicon from './icons/RestaurantListIcon.6a75108a.png';

import  { 
    DICIMAL_RADIX, 
    diningNamespace, 
    imageGallery, 
    HeavyOrange,
    LightBlueButtonBackground,
    ExtraHeavyBlueGreen,
    LightOrange
} from  '../../../Constants';


import  SilverLeaf  from './img_logo/dinings/R25-DININGLOGO_P-silver-leaf.jpg';
import  GreenHausRes  from './img_logo/dinings/R18-DININGLOGO_P-green_haus_res.jpg';
import  MonsoonLoungeBar from './img_logo/dinings/Our_Hotel_Section_Logo_Monsoon.jpg';
import  MezzBar from './img_logo/dinings/Our_Hotel_Section_Logo_Mezz.jpg';
import  ThePoolDeck from './img_logo/dinings/Our_Hotel_Section_Logo_PoolBar.jpg';
import  ExecitiveClubLounge  from './img_logo/dinings/Our_Hotel_Section_Logo_ExecClub_2L7k0hP.jpg' ;
import  RainforestCafe from './img_logo/dinings/R24-DININGLOGO_P-RINGFOREST.jpg';


import '../List/MainSectionList.scss';
import "./OurHotel.scss";






const ourhotel_Dinings = [
    {
        id: 1,
        title_img: '',
        title: 'SILVER LEAF',
        img_url: SilverLeaf,
        description: 'If you’re seeking a fine dining experience, then look no further than Silver Leaf Restaurant. Boasting an opulent, modern interior, stunning views of Port Moresby complete this culinary experience where the quality of ingredients and flavours are unsurpassed. Monday to Saturday: 18:00 – 22:30 Sunday: closed',
        details: {
            call: '+675 302 8888',
            location: 'Level 19',
            cuisine: 'Fine Dining',
            wifi: 'Yes',
            cards: 'Amex, MC, Visa',
            price_guide: 'Entree: K50, Main: K95, Dessert: K50'


        }
    },
    {
        id: 2,
        title_img: '',
        title: 'GREEN HAUS RESTAURANT',
        img_url: GreenHausRes,
        description: 'Dine in the opulence of the Green Haus Restaurant located at the Stanley Hotel & Suite. Enjoy pastries, artisan bread and the fruity flavours of locally grown coffee. A buffet dinner finishes off the day with a sumptuous choice of cuisines. Open for breakfast, lunch and dinner.',
        details: {
            call: '+675 302 8888',
            location: 'the Ground Floor',
            cuisine: 'International Contemporary Cuisine',
            wifi: 'Yes',
            cards: 'Amex, MC, Visa',
            price_guide: 'K40, Main: K75 , Dessert: K40'

        }

    },
    {
        id: 3,
        title_img: '',
        title: 'MONSOON LOUNGE & BAR',
        img_url: MonsoonLoungeBar,
        description: 'Offering relaxation and comfort along with a lively atmosphere, Monsoon Lounge is a sophisticated yet casual place for a drink with friends or just a different night out. Full table service, an extensive cocktail list and a delicious food menu designed from our culinary team places Monsoon among the top venues in Port Moresby. Open daily from 3pm until late.',
        details: {
            call: '+675 302 8888',
            location: 'the Ground Floor',
            cuisine: 'BAR & COCKTAIL LOUNGE',
            wifi: 'Yes',
            cards: 'AMEX, MC, Visa',
            price_guide: false

        }

    },
    {
        id: 4,
        title_img: '',
        title: 'MEZZ BAR',
        img_url: MezzBar,
        description: 'An elegant bar hidden away above level 19, Mezz Bar is the perfect place to start or finish your night. An extensive selection of carefully designed cocktails combined with international wines and premium whiskeys makes this bar a unique place to visit. Open Monday to Saturday 3pm until late and closed on Sundays. Smart casual dress code.',
        details: {
            call: false,
            location: 'AMEX, MC, Visa',
            cuisine: 'BAR',
            wifi: 'YES',
            cards: 'AMEX, MC, Visa',
            price_guide: false

        }

    },
    {
        id: 5,
        title_img: '',
        title: 'THE POOL DECK',
        img_url: ThePoolDeck,
        description: 'A casual dining experience to rival a day at the beach, The Pool Deck enables guests to recover from a long work day or simply relax in a luxurious setting. The Pool Bar is open weekdays 11am to 7pm and weekends 11am to 9.30pm.',
        details: {
            call: ' +675 302 8888',
            location: 'on Level 5',
            cuisine: false,
            wifi: 'Yes',
            cards: 'AMEX, MC, Visa',
            price_guide: false


        }

    },
    {
        id: 6,
        title_img: '',
        title: 'EXECITIVE CLUB LOUNGE',
        img_url: ExecitiveClubLounge,
        description: 'The Executive Lounge provides complimentary additional services and facilities for guests who are private members or staying on Executive Lounge Floors and in elegant suites. These services include breakfast, and evening beverages and canapes. The Club lounge is open during the day for guests to work or relax in.',
        details: {
            call: '+675 302 8888',
            location: 'on Level 19',
            cuisine: false,
            wifi: 'Yes',
            cards: 'AMEX, MC, Visa',
            price_guide: false

        }

    },
    {
        id: 7,
        title_img: '',
        title: 'RAINFOREST CAFE',
        img_url: RainforestCafe,
        description: 'Boasting an airy, light interior, the Rainforest Café is a casual yet stylish place to grab a snack or coffee. Kick back and relax or grab a homemade pastry on the go. Open daily 6am to 6.30pm.',
        details: {
            call: '+675 302 8888',
            location: 'the Ground Floor',
            cuisine: 'Café Cuisine',
            wifi: 'Yes',
            cards: 'Amex, MC, Visa',
            price_guide: 'K20, Main: K45, Dessert: K20'


        }
    }
]



const styles = {
    horizontalVerticalCenter: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    contactDetailText: {
        textAlign: 'left',
        margin: 0,
        padding: 0,
        lineHeight: "130%",
        letterSpacing: "2px",
        fontSize: "0.8rem"
    }
};

// temp images array for res
const images = [
    {

        imageFile:  'http://192.168.0.160:7000/images/R24-DININGIMAGES_P.jpg',
    },
    {
        imageFile:  'http://192.168.0.160:7000/images/R25-DININGIMAGES_P4.jpg'
        
    }
  
]


/// Image Garllery 
const renderImages = () => {
    if (images.length > 1) {
        return imageGallery(images, "100%", "27vh");
    } else if (images.length === 1) {
        return (
            <div 
                style={{
                    height:"50%",
                    backgroundImage: `url(${images[0].imageFile})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}  
            />
            
        );
    } else { 
        return (
            <div 
                style={{
                    height: "50%",
                    backgroundColor: HeavyOrange,
                    ...styles.horizontalVerticalCenter
                }}
            >
                <h1>NO IMAGE FOR THIS RESAURANT </h1>
            </div> 
        )
    }

}

const DiningDetails = (props) => {

    const id = props.match.params.id;
    const _id = parseInt(id);
    console.log(_id);
    const _DingingsDetails = ourhotel_Dinings[_id];

    return ( 
      

     <div
         style={{
                    width: "100%",
                    height: "100%",
                    height: "54vh",
                    display: "flex",
                    color: "white"
                }}
                className="section--bottom--animation"
                >
                <div lassName="vertical-side"
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
                    <Link
                         style={{  
                                height: "14%", 
                                textDecoration: "none" 
                            }}
                            to='/ourhotel/dining'
                        >
                            <div  className="leftSide-menu--container">
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
                                        RESTAURANT LIST
                                     </p>
                                    <p
                                        className="menu-title"
                                  
                                    >
                                        
                                    </p>
                                </div>
                            </div>
                    </Link>

                    <div className="vertical-title ">
                        <span
                            style={{
                                transform: "rotate(-90deg)"
                            }}
                        >
                         DINING
                    </span>
                    </div>

                </div>

               <div style={{flex: 1}}>
                   {renderImages()}
               
                    <div style={{height: "25%", width: "100%", display: "flex"}} > 

                        <div    style={{
                                flexBasis: "50%",
                                backgroundImage: `url(${_DingingsDetails.img_url})`,
                                backgroundSize: "100%",
                                backgroundPosition: "center" }} />
                         
                        <div style={{flexBasis: "50%", backgroundColor: LightBlueButtonBackground}} >   
                            <div style={{
                                     height:"50%", 
                                     display: "flex", 
                                     flexDirection:"column",
                                     justifyContent:"flex-end",
                                     paddingBottom: "20px",
                                     paddingRight: "20px",
                                     overflowWrap: "break-word",
                                     wordBreak: "break-word",
                                     ...styles.horizontalVerticalCenter
                                     }} > 

                                    {_DingingsDetails.details.call && (
                                       <p style={styles.contactDetailText}> Call Today:{' '} {_DingingsDetails.details.call } </p>
                                    )}

                                    {_DingingsDetails.details.location && (
                                        <p style={styles.contactDetailText}> Location:{' '} {_DingingsDetails.details.location} </p>
                                    )}

                                     
                            </div>
                            {/* <div style={{   
                                    height:"50%",
                                    paddingLeft: 20,
                                    paddingRight: 20
                                  }} >
                                    <h1>MapModel</h1>

                            </div> */}

                        </div>
               
                          
                      
                    </div>

                    <div style={{
                        height:"25%",
                        display: "flex",
                        backgroundColor: ExtraHeavyBlueGreen
                    }}> 
                            <div style={{
                                flexBasis:"50%",
                                paddingTop: 20,
                                paddingLeft:35,
                                paddingRight: 20,
                                fontSize: "0.8rem",
                                lineHeight:"115%",
                                letterSpacing:"1px",
                                textAlign: "left",
                                overflowY: "auto",
                                maxHeight: "400px",
                                
                            }}>
                                <p> {_DingingsDetails.description} </p> 
                                {/* need find some makedown plugin */}
                            </div>
                            <div style={{
                                flexBasis: "50%",
                                paddingTop: 20,
                                paddingLeft: 35,
                                poddingRight: 20,
                                fontSize: "0,8",
                                lineHeight: "115%",
                                letterSpacing: "1px",
                                textAlign: "left"
,
                            }}>
                                {_DingingsDetails.details.cuisine && (
                                     <div> CUISINE:{' '} {_DingingsDetails.details.cuisine} </div>
                                )}
                                {_DingingsDetails.details.wifi && (
                                    <div>WIFI: {' '} {_DingingsDetails.details.wifi} </div>
                                )} 
                                {_DingingsDetails.details.cards && (
                                    <div>CARDS: {' '} {_DingingsDetails.details.cards} </div>
                                )} 
                                {_DingingsDetails.details.cards && (
                                    <div>PRICE: {' '} {_DingingsDetails.details.price_guide} </div>
                                )} 


                            </div>

                    </div>

               </div>
             
              
     </div>
          
            
              
    )
}

export default DiningDetails;