import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';


const banksDatas = [
    {
        id: 1,
        name: 'ANZ BANK',
        logo:'/imgs/service/bank/S1-IMAGES2.jpg'
        
    },
    {
        id: 2,
        name: 'BANK OF SOUTH PACIFIC',
        logo: '/imgs/service/bank/S1-IMAGES.jpg'
    },
    {
        id: 3,
        name: 'WESTPAC BANK',
        logo: '/imgs/service/bank/S1-IMAGES3.jpg'
    }
];

const Banks = (props) => {

  
     
    return ( 
        <Fragment>
            <div>BANK List Page</div>
            {banksDatas.map((banklist, index) => {
                return (
                    <ul>
                      
                        <Link to={`/services/essential/0/${index}`}><img src={banklist.logo} alt={banklist.name} /> {banklist.name}</Link>
                    </ul>
                )
            })}
            
        </Fragment>
       
    )
}


export default Banks;