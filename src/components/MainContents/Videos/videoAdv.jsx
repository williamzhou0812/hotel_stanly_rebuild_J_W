import React, { useState } from 'react';


/// shuffle Array 

// const shuffle =  (array) => {

//     let tmp, current, top = array.length;

//     if (top) {
//         while(--top) {
//             current = Math.floor(Math.random() * (top + 1));
//             tmp = array[current];
//             array[current] = array[top];
//             array[top] = tmp;
//         }
//     }

//     return array;
 
// };
const temp_video_data = [
    {
        video: '/videos/Enga_Show_Promo_Video_Final_2.mp4'
    },
    {
        video: '/videos/NKW_Fresh_teaser_1_-_innovation-Up_to_4K.mp4'
    }
];

const Videos = () => {
    const _id = Math.floor(Math.random() * Math.floor(2) )

   
    
      
       

    // console.log(_id);
    return (
        
    
        <div style={{background: 'back', width: '100%', height: '100%'}} > 
           
            <video src={temp_video_data[_id].video} autoPlay  type="video/mp4"  style={{width: '100%'}} /> 
         
        
        </div>
      
    )
}



export default Videos;