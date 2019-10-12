import React from "react";
import Slider from 'react-slick';
import AdvImgOne from './5-Coral_Sea_Hotels_118x85mm_Ad_interactive-01.jpg';



const StaticAds = () => {


    const  settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        cssEase:"linear"

    }
    return (
        
        <Slider {...settings}>
            <div >
                <img src="/imgs/footerImgs/5-Coral_Sea_Hotels_118x85mm_Ad_interactive-01.jpg" alt="" />
            </div> 
            <div >
                <img src="/imgs/footerImgs/16-11-18_Brian_Bell_Interactive.jpg" alt="" />
            </div> 
        
            <div >
                <img src="/imgs/footerImgs/17-11-28_Laguna_Hotel_Interactive.jpg" alt="" />
            </div> 
        
            <div >
                <img src="/imgs/footerImgs/18-03-09_Budget_Interactive.jpg" alt="" />
            </div> 
        
            <div >
                <img src="/imgs/footerImgs/2019_interactive_ad_MadNESSphotography.jpg" alt="" />
            </div> 
            <div >
                <img src="/imgs/footerImgs/2019_interactive_PacificPalmsProperty_01_01.jpg" alt="" />
            </div> 
            <div >
                <img src="/imgs/footerImgs/2019_Interactive_Static_Ad_JBG_Guest_Amenities_-_LOM5.jpg" alt="" />
            </div> 
            <div >
                <img src="/imgs/footerImgs/Coral_Seas_Hotels_w118mmx85mm_Interactive-01.jpg" alt="" />
            </div> 
        
        
        </Slider>
    
       )
   

};

export default  StaticAds;