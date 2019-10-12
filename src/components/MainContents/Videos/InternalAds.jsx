import React from 'react';

import { imageGallery } from '../../../Constants'; 
import Slider from 'react-slick';

const InternalAds  = () => { 
    const  settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        cssEase:"linear"

    };

       
    return (
        
        <Slider {...settings}>
            <div >
                <img src="/imgs/ads/internal/190523JBGINTERNALADS6_NZu8HSE.jpg" alt="" />
            </div> 
            <div >
                <img src="/imgs/ads/internal/190523JBGINTERNALADS5_QVwQqkl.jpg" alt="" />
            </div> 
        
            <div >
                <img src="/imgs/ads/internal/190523JBGINTERNALADS2.jpg" alt="" />
            </div> 
        
        </Slider>

    )


}
  

export default InternalAds;