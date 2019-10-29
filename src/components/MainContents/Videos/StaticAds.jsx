import React, {Component} from 'react';
import Slider from 'react-slick';
import { randomiseItems } from "../../../Constants";

const ads = [
    "/imgs/ads/Showcase mode/2019 Air Niugini.jpg",
    "/imgs/ads/Showcase mode/2019 Asia Aromas.jpg",
    "/imgs/ads/Showcase mode/2019 Brian Bell.jpg",
    "/imgs/ads/Showcase mode/2019 Budget.jpg",
    "/imgs/ads/Showcase mode/2019 JBG PNG.jpg",
    "/imgs/ads/Showcase mode/2019 MadNESSphotography.jpg",
    "/imgs/ads/Showcase mode/2019 PacificPalmsProperty.jpg",
    "/imgs/ads/Showcase mode/2019 POM Nature Park.jpg",
    "/imgs/ads/Showcase mode/2019 Strickland.jpg"   
];

class StaticAds extends Component  { 
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
            <div style={{height: '640px', overflow: 'hidden'}}>
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
           )
    }
    
}

export default  StaticAds;