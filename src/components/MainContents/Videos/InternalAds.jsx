import React from 'react';

import ImageGallery from 'react-image-gallery';
import OutNow from './190523JBGINTERNALADS2.jpg';
import GBGBANNER from './190523JBGINTERNALADS5_QVwQqkl.jpg';
import  TOUCHHERER from './190523JBGINTERNALADS6_NZu8HSE.jpg';


const images = [
    {
      original: OutNow,
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: GBGBANNER,
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: TOUCHHERER,
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
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