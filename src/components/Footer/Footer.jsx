import React, {Component} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Footer.scss';
import { randomiseItems } from "../../Constants";

const ads = [
    "/imgs/ads/Interactive mode/2019 interactive ad Air Niugini.jpg",
    "/imgs/ads/Interactive mode/2019 interactive ad Asia Aromas.jpg",
    "/imgs/ads/Interactive mode/2019 Interactive ad Brian Bell.jpg",
    "/imgs/ads/Interactive mode/2019 interactive ad Budget.jpg",
    "/imgs/ads/Interactive mode/2019 Interactive ad JBG PNG.jpg",
    "/imgs/ads/Interactive mode/2019 interactive ad MadNESSphotography.jpg",
    "/imgs/ads/Interactive mode/2019 interactive ad PacificPalmsProperty.jpg",
    "/imgs/ads/Interactive mode/2019 interactive ad POM nature park.jpg",
    "/imgs/ads/Interactive mode/2019 Interactive ad Strickland.jpg"

];

class Footer extends Component  { 
    constructor(props) {
        super(props);
        const shuffled = randomiseItems(ads);
        this.state = {
            random_ads: shuffled
        }
    }
    
    render() {
        const { random_ads } = this.state;
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
            <div className="slider-holder">
                    <Slider {...settings}>
                        {random_ads.map((item, i) => {
                            return (
                                <div key={i}>
                                    <img src={item} alt="" />
                                </div>
                            )
                        })}
                    </Slider>
                </div>

        );

       
    }
  

}
  
           
    

export default Footer;