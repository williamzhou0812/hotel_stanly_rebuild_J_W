import React, {Fragment} from 'react';
import Videos from './videoAdv';
import InternalAds from './InternalAds';
import StaticAds from './StaticAds';
 

const  mainComponent = () => {
    return (
        <Fragment>
            <div   >
                <div style={{height:"43%"}}>    
                     <Videos/>  
                    
                </div>
         
            
            </div>
            <div style={{marginTop: '-8px'}}>
                    <InternalAds /> 
            </div>
            <div >
                <StaticAds/>
            </div>
        </Fragment>
       
    )
}


export default mainComponent;