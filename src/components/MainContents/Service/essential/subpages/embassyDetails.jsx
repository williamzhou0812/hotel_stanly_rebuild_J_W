import React, {Fragment} from 'react';


const temp_embassy_data = [
    {
        id: '1',
        title_img: '/imgs/embassies/S1-MAINLISTIMAGES_P2_A3NGcDD_Details_title.jpg', 
        title : 'SOLOMON ISLANDS HIGH COMMISSION', 
        img_logo: '/imgs/embassies/S1-IMAGES16-solomon.jpg',
        details: 'Call or visit your embassy if you experience any travel issues.',
        contact: {
            call: '+675 323 4333',
            web: '',
            email: '',
            location: 'Unit 1, GB House Poreporena Freeway P. O. Box 8922, Boroko Port Moresby Papua New Guinea'
        }
    },
    {
        id: '2',
        title_img: '/imgs/embassies/S1-MAINLISTIMAGES_P2_A3NGcDD_Details_title.jpg',
        title : 'AUSTRALIAN HIGH COMMISSION', 
        img_logo: '/imgs/embassies/S1-IMAGES12-australia.jpg',
        details: 'Call or visit your embassy if you experience any travel issues.',
        contact: {
            call: '+675 7090 0100 (24 Hours)',
            web: 'www.png.embassy.gov.au',
            email: 'consular.portmoresby@dfat.gov.au',
            location: 'Godwit Road (Waigani) Port Moresby NCD Papua New Guinea'
        }
    },
    {
        id: '3',
        title_img: '/imgs/embassies/S1-MAINLISTIMAGES_P2_A3NGcDD_Details_title.jpg',
        title : 'EMBASSY OF THE PHILIPPINES', 
        img_logo: '/imgs/embassies/S1-IMAGES10-phlipin.jpg',
        details: 'Call or visit your embassy if you experience any travel issues.',
        contact: {
            call: '675 325 6577',
            web: '',
            email: 'portmoresby.pe@dfa.gov.ph',
            location: 'Lot 1, Section 440 Islander Village, Hohola'
        }
    },
    {
        id: '4',
        title_img: '/imgs/embassies/S1-MAINLISTIMAGES_P2_A3NGcDD_Details_title.jpg',
        title : 'BRITISH HIGH COMMISSION', 
        img_logo: '/imgs/embassies/S1-IMAGES13-british-high.jpg',
        details: 'Call or visit your embassy if you experience any travel issues.',
        contact: {
            call: '+675 325 9444',
            web: 'www.nzembassy.com/papua-new-guinea',
            email: 'nzhcpmy@mfat.govt.nz',
            location: 'Magani Crescent P. O. Box 1051 Waigani, NCD Port Moresby Papua New Guinea'
        }
    },
    {
        id: '5',
        title_img: '/imgs/embassies/S1-MAINLISTIMAGES_P2_A3NGcDD_Details_title.jpg',
        title : 'CHINESE EMBASSY',  
        img_logo: '/imgs/embassies/S1-IMAGES4-china.jpg',
        details: 'Call or visit your embassy if you experience any travel issues.',
        contact: {
            call: '+675 325 9827',
            web: 'pg.china-embassy.org',
            email: 'chinaemb_pg@mfa.gov.cn',
            location: 'Section 216, Lot 5, Sir John Guise Drive, Waigani, NCD, Papua New Guinea'
        }
    },
    {
        id: '6',
        title_img: '/imgs/embassies/S1-MAINLISTIMAGES_P2_A3NGcDD_Details_title.jpg',
        title: 'FIJIAN HIGH COMMISSION', 
        img_logo: '/imgs/embassies/S1-IMAGES14-fujian.jpg',
        details: 'Call or visit your embassy if you experience any travel issues.',
        contact: {
            call: '+675 325 9827',
            web: 'pg.china-embassy.org',
            email: 'chinaemb_pg@mfa.gov.cn',
            location: 'Section 216, Lot 5, Sir John Guise Drive, Waigani, NCD, Papua New Guinea'
        }
    },
    {
        id: '7',
        title_img: '/imgs/embassies/S1-MAINLISTIMAGES_P2_A3NGcDD_Details_title.jpg',
        title : 'JAPANESE EMBASSY',
        img_logo: '/imgs/embassies/S1-IMAGES7-japan.jpg',
        details: 'Call or visit your embassy if you experience any travel issues.',
        contact: {
            call: '+675 321 1800',
            web: 'www.png.emb-japan.go.jp',
            email: 'infeoj@pm.mofa.go.jp',
            location: 'st & 2nd Floor, Cuthbertson House, Cuthbertson St. , Port Moresby, NCD, Papua New Guinea'
        }
    },
    {
        id: '8',
        title_img: '/imgs/embassies/S1-MAINLISTIMAGES_P2_A3NGcDD_Details_title.jpg',
        title : 'THAI HONORARY CONSULATE GENERAL',
        img_logo: '/imgs/embassies/S1-IMAGES9-thai.jpg',
        details: '',
        contact: {
            call: '',
            web: '',
            email: '',
            location: ''
        }
    },
    {
        id: '9',
        title_img: '',
        title: 'INDONESIAN EMBASSY',
        img_logo: '/imgs/embassies/S1-IMAGES6-indoneshiya.jpg',
        details: 'Call or visit your embassy if you experience any travel issues.',
        contact: {
            call: '+675 325 3116',
            web: 'www.kemlu.go.id/portmoresby',
            email: 'kbripom@daltron.com.pg',
            location: 'Sir John Giuse Drive Lot 1&2, Section 410, Kiroki Street Gordons 5, NCD'
        }
    },
    {
        id: '10',
        title_img: '/imgs/embassies/S1-MAINLISTIMAGES_P2_A3NGcDD_Details_title.jpg',
        title: 'UNITED STATES OF AMERICA EMBASSY ',
        img_logo: '/imgs/embassies/S1-IMAGES8-united-state.jpg',
        details: 'Call or visit your embassy if you experience any travel issues.',
        contact: {
            call: '+675 321 1455',
            web: 'pg.usembassy.gov',
            email: '',
            location: 'Douglas Street P. O. Box 1492 Port Moresby Papua New Guinea'
        }
    },
    {
        id: '11',
        title_img: '/imgs/embassies/S1-MAINLISTIMAGES_P2_A3NGcDD_Details_title.jpg',
        title: 'NEW ZEALAND HIGH COMMISSION', 
        img_logo: '/imgs/embassies/S1-IMAGES15-new-zealand.jpg',
        details: 'Call or visit your embassy if you experience any travel issues.',
        contact: {
            call: ' +675 325 9444',
            web: 'www.nzembassy.com/papua-new-guinea',
            email: 'nzhcpmy@mfat.govt.nz',
            location: 'Magani Crescent P. O. Box 1051 Waigani, NCD Port Moresby Papua New Guinea'
        }
    },
    {
        id: '12',
        title_img: '/imgs/embassies/S1-MAINLISTIMAGES_P2_A3NGcDD_Details_title.jpg',
        title: 'MALAYSIAN HIGH COMMISSION' ,
        img_logo: '/imgs/embassies/S1-IMAGES18-malalaysla.jpg',
        details: 'Call or visit your embassy if you experience any travel issues.',
        contact: {
            call: '+675 325 2076',
            web: 'www.kln.gov.my/web/png_port-moresby/',
            email: 'mwportmoresby@kln.gov.my',
            location: 'Lot 16, Section 531 Rosewood Executive Residence Savannah Heights'
        }
    },
    {
        id: '13',
        title_img: '/imgs/embassies/S1-MAINLISTIMAGES_P2_A3NGcDD_Details_title.jpg',
        title: 'FRENCH EMBASSY',
        img_logo: '/imgs/embassies/S1-IMAGES5-francaise.jpg',
        details: 'Call or visit your embassy if you experience any travel issues.',
        contact: {
            call: '+675 321 5550',
            web: ' www.ambafrance-pg.org',
            email: 'cad.port-moresby-amba@diplomatie.gouv.fr',
            location: 'Defens Haus - 6th Floor - Corner Champion Parade & Hunter Street'
        }
    },
    {
        id: '14',
        title_img: '/imgs/embassies/S1-MAINLISTIMAGES_P2_A3NGcDD_Details_title.jpg',
        title: 'SOUTH KOREAN EMBASSY' ,
        img_logo: '/imgs/embassies/S1-IMAGES11-south-korea.jpg',
        details: 'Call or visit your embassy if you experience any travel issues.',
        contact: {
            call: '675 321 5822',
            web: 'png.mofa.go.kr',
            email: 'embpng@mofa.go.kr',
            location: 'Fourth Floor, Pacific MMI Building Section 21, Allotments 2 & 3, Champion Parade'
        }
    },
    {
        id: '15',
        title_img: '/imgs/embassies/S1-MAINLISTIMAGES_P2_A3NGcDD_Details_title.jpg',
        title: 'HIGH COMMISSION OF INDIA',
        img_logo: '/imgs/embassies/S1-IMAGES17-india.jpg',
        details: 'Call or visit your embassy if you experience any travel issues.',
        contact: {
            call: '+675 321 4291',
            web: 'www.hcipom.in/',
            email: 'hc.pmoresby@mea.gov.in',
            location: 'Lot 30, Sec 7, Lawes Road, Granville, NCD, Port Moresby'
        }
    }

]

const EmbassyDetails = (props) => {
    const  [id] = props.match.params.id;
    
    const _id = parseInt(id);

    const embassyData = temp_embassy_data[_id];

    return (
        <Fragment>

            <div>
                here is single details for amsbessy
            </div> 
            <img src={embassyData.title_img} /> 
            <ul>    
                <li><img src={embassyData.img_logo} alt='' /> | {embassyData.title}  </li>
                <li>{embassyData.details}</li>
                <li>{embassyData.contact.call}</li>
                <li>{embassyData.contact.web}</li>
                <li>{embassyData.contact.email}</li>
                <li>{embassyData.contact.location}</li>
            </ul>
            
        </Fragment>
    )
}

export default EmbassyDetails;