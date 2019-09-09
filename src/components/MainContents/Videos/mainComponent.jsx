import React, {Fragment, useEffect} from 'react';
import styled, { keyframes} from 'styled-components';
import { rotateIn } from 'react-animations';
import Videos from './videoAdv';
import InternalAds from './InternalAds';
import StaticAds from './StaticAds';

const rotateInAni= keyframes`${rotateIn}`;

const RotateDiv = styled.div`
  animation: 3s ${rotateInAni};
`;

const  mainComponent = () => { 
    setTimeout(() => {
        console.log(`im time outat index page`)
        window.location.replace("http://localhost:3000/destinations");
    }, 10000)

    return (
        <Fragment>
            <RotateDiv> 
                <div >
                    <div style={{height:"43%"}}>    
                        <Videos/>  
                        
                    </div>
            
                
                </div>
                <div style={{marginTop: '-8px'}}>
                        <InternalAds /> 
                </div>
                {/* <div style={{marginTop: '-8px'}} >
                    <StaticAds/>
                </div> */}

            </RotateDiv>
        </Fragment>
       
    )
}


export default mainComponent;