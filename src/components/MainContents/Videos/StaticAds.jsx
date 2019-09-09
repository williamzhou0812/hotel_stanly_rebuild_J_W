import React from "react";
import ImageGallery from 'react-image-gallery';
import AdvImgOne from './5-Coral_Sea_Hotels_118x85mm_Ad_interactive-01.jpg';

const images = [
    {
      original: AdvImgOne,
      thumbnail: '',
    },
 
  ];


const StaticAds = () => {

    // http call to retive the imgae data 

   
    return ( 
        <div style={{width: '100%', height: '100%'}}>

                <ImageGallery  
                
                    items={images}
                    slideInterval={10000}
                    showThumbnails={false}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    autoPlay={true}
                    showNav={false}
                    renderItem={ (item, index)=> {
                        return (
                            <div className="image-gallery-image" >
                                <img 
                                    src={item.original}
                                    alt={index}
                                    sizes={item.sizes}
                                    style={{width: '100%', height: '33.3vh'}} />
                            </div>
                        )
                    }}

                />

        </div>
    )

};

export default  StaticAds;