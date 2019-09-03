import React, {Fragment} from 'react';


const temp_bankDetailsDatas = [
        {
            id: 1,
            title_img: '/imgs/service/S1-MAINLISTIMAGES_P_fCZCTBp.jpg',
            name: 'ANZ BANK' ,
            sub_img: '/imgs/service/bank/S1-IMAGES2.jpg',
            details: 'Spanning 28 markets across the Asia Pacific, ANZ provides a range of banking solutions. Talk to ANZ about your banking needs today.',
            contact: {
                call: '+675 321 1079',
                web: 'www.anz.com/papuanewguinea/en/personal/',
                email: 'csgdpg@anz.com',
                location: 'ANZ Papua New Guinea PO Box 1152, Port Moresby NCD'
            }       
        },
        {
            id: 2,
            title_img: '/imgs/service/S1-MAINLISTIMAGES_P_fCZCTBp.jpg',
            name: 'BANK OF SOUTH PACIFIC' ,
            sub_img: '/imgs/service/bank/S1-IMAGES.jpg',
            details: 'BSP is the leading bank in Papua New Guinea and the Pacific region with branches also in Fiji, Solomon Islands, Samoa, Tong, Cook Islands and Vanuatu. BSP PNG operates 42 full service branches, 13 Premium Service Centres, 42 sub branches, 239 Agencies, 301 ATM’s and over 9,700 EFTPOS terminals nationwide. BSP offers state-of-the-art mobile and internet banking services, providing access to business and personal banking anytime, anywhere – 24/7.',
            contact: {
                call: '+675 320 1212',
                web: 'www.bsp.com.p',
                email: 'servicebsp@bsp.com.pg',
                location: 'Various Locations PO Box 78 Port Moresby, Papua New Guinea'
            }            
        },
        {
            id: 3,
            title_img: '/imgs/service/S1-MAINLISTIMAGES_P_fCZCTBp.jpg',
            name: 'WESTPAC BANK ',
            sub_img: '/imgs/service/bank/S1-IMAGES3.jpg',
            details: 'Westpac Bank provides a range of banking solutions. Talk to Westpac Bank about your banking needs today.',
            contact: {
                call: '+675 322 0888',
                web: 'www.westpac.com.pg',
                email: '',
                location: 'Various Locations PO Box 706, Port Moresby, NCD, PNG'
            }              
        }
]


const BankDetails = (props) => {


    const [id] = props.match.params.id;

    const bankDetail = temp_bankDetailsDatas[parseInt(id)];
    
   
    return ( 
        <Fragment>
            <div>
                <h3> bank singel Detail pages </h3>
                    <img src={bankDetail.title_img} alt='' /> 
                <ul>
                    
                    <li> <img src={bankDetail.sub_img} alt='' />  | {bankDetail.name}  </li>
                    <li>{bankDetail.details}</li>

                    <li> call: {bankDetail.contact.call} </li>
                    <li> web: {bankDetail.contact.web} </li>
                    <li>email: {bankDetail.contact.email} </li>
                    <li>lcoatioin: {bankDetail.contact.location}</li>

                </ul>
            
            </div>
        </Fragment>
      
    )
}

export default BankDetails;