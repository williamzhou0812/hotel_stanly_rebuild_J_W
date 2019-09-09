import React from 'react';
import {Link} from 'react-router-dom';
import './MainLogo.scss';

const MainLogo = () => {

    return (
        <div className='mainLogo'> 
            <Link to="/videos">
             <img src='/imgs/main_logo.png' alt='TouchExplorePaPuaNewCuinea' /> 
             </Link>
        </div>
    )
}

export default MainLogo