import React from 'react';



const banksDatas = [
    {
        id: 1,
        name: 'ANZ BANK',
        logo:''
        
    },
    {
        id: 2,
        name: 'BANK OF SOUTH PACIFIC',
        logo: ''
    },
    {
        id: 3,
        name: 'WESTPAC BANK',
        logo: ''
    },
    {
        id: 4,
        name: 'Advertise you business here! For more information, contact: touchscreen@jbg.com.pg',
        logo: ''
    }
];

const Banks = (props) => {

    return ( 
        <div>
            {banksDatas.map( (bankList, index)  => {
                return (

                    <ul>
                        <li>{bankList.id} | {bankList.name}  | {bankList.logo} </li>
                    </ul> 
                )
            })}    
        </div> 
    )
}


export default Banks;