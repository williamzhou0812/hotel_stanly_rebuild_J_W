import React from 'react';

import ImageGallery from 'react-image-gallery';



const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
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