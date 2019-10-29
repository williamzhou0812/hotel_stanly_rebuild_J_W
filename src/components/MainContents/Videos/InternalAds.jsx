import React from 'react';

import ImageGallery from 'react-image-gallery';



const images = [
    {
      original: '/imgs/ads/internal/190523JBGINTERNALADS5_QVwQqkl.jpg',
    },
    {
        original: '/imgs/ads/internal/190523JBGINTERNALADS3.jpg',
    },
    {
        original: '/imgs/ads/internal/190523JBGINTERNALADS6_NZu8HSE.jpg',
    }

  ];


const InternalAds  = () => { 

    return ( 
        <div style={{width: '100%', height: '100%'}} > 
            <ImageGallery 
                items={images} 
                slideInterval={10000}
                showThumbnails={false}
                showFullscreenButton={false}
                autoPlay={true}
                showNav={false}
                isRTL={true}
                showPlayButton={false}
                renderItem={ (item, index)  => {
                    return (
                        <div className='image-gallery-image'>
                            <img src={item.original}
                                alt= {index}
                               
                                style={{width: '100%', height: '8.88vh'}} />
                        </div>
                    )
                }}
            />
        </div>
    );

};

export default InternalAds;