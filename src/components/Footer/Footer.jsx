import React, {Component} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Footer.scss';


class Footer extends Component  { 
   
    render() {
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
                     <img src="/imgs/ads/Interactive mode/2019 interactive ad Air Niugini.jpg" alt="" />
                </div> 
                <div >
                     <img src="/imgs/ads/Interactive mode/2019 interactive ad Asia Aromas.jpg" alt="" />
                </div> 
            
                <div >
                     <img src="/imgs/ads/Interactive mode/2019 Interactive ad Brian Bell.jpg" alt="" />
                </div> 
            
                <div >
                     <img src="/imgs/ads/Interactive mode/2019 interactive ad Budget.jpg" alt="" />
                </div> 
            
                <div >
                     <img src="/imgs/ads/Interactive mode/2019 Interactive ad JBG PNG.jpg" alt="" />
                </div> 
                <div >
                     <img src="/imgs/ads/Interactive mode/2019 interactive ad MadNESSphotography.jpg" alt="" />
                </div> 
                <div >
                     <img src="/imgs/ads/Interactive mode/2019 interactive ad PacificPalmsProperty.jpg" alt="" />
                </div> 
                <div >
                     <img src="/imgs/ads/Interactive mode/2019 interactive ad POM nature park.jpg" alt="" />
                </div> 
                <div >
                     <img src="/imgs/ads/Interactive mode/2019 Interactive ad Strickland.jpg" alt="" />
                </div> 
            
            
            </Slider>
     
        )
    }
  

}
  
           
    

export default Footer;