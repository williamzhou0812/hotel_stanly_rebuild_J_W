import React, { Fragment } from 'react';
import DownButton from "../../../MainContents/Destination/icons/DownExploreButton.png";
import UpButton from "../../../MainContents/Destination/icons/UpExploreButton.png";
import { Link } from "react-router-dom";
import ServiceTypesIcon from "../icons/ServiceTypesIcon.png";
import ESSENTIAL_ICON from "../icons//ESSENTIAL_ICON.png"
import PropTypes from "prop-types";
import {
    SUBSECTION_LIST_ENTRIES,
    MediumOrange,
    shiftArray,
    HeavyBlue,
    HeavyOrange,
    LightOrange,
    getRandomImage,
    LightBlue,
    randomiseButKeepOrder,
    addNullItemToData
} from "../../../../Constants";
import SidebarMapModel from "./../../Maps/SidebarMapModel";
import "../../List/MainSectionList.scss";
import { borderBottom } from '@material-ui/system';
import { lightBlue } from '@material-ui/core/colors';


const temp_embassy_data = [
    {
        id: '1',
        title: 'SOLOMON ISLANDS HIGH COMMISSION',
        img_logo: '/imgs/embassies/S1-IMAGES16-solomon.jpg'
    },
    {
        id: '2',
        title: 'AUSTRALIAN HIGH COMMISSION',
        img_logo: '/imgs/embassies/S1-IMAGES12-australia.jpg'
    },
    {
        id: '3',
        title: 'EMBASSY OF THE PHILIPPINES',
        img_logo: '/imgs/embassies/S1-IMAGES10-phlipin.jpg'
    },
    {
        id: '4',
        title: 'BRITISH HIGH COMMISSION',
        img_logo: '/imgs/embassies/S1-IMAGES13-british-high.jpg'
    },
    {
        id: '5',
        title: 'CHINESE EMBASSY',
        img_logo: '/imgs/embassies/S1-IMAGES4-china.jpg'
    },
    {
        id: '6',
        title: 'FIJIAN HIGH COMMISSION',
        img_logo: '/imgs/embassies/S1-IMAGES14-fujian.jpg'
    },
    {
        id: '7',
        title: 'JAPANESE EMBASSY',
        img_logo: '/imgs/embassies/S1-IMAGES7-japan.jpg'
    },
    {
        id: '8',
        title: 'THAI HONORARY CONSULATE GENERAL',
        img_logo: '/imgs/embassies/S1-IMAGES9-thai.jpg'
    },
    {
        id: '9',
        title: 'INDONESIAN EMBASSY',
        img_logo: '/imgs/embassies/S1-IMAGES6-indoneshiya.jpg'
    },
    {
        id: '10',
        title: 'UNITED STATES OF AMERICA EMBASSY ',
        img_logo: '/imgs/embassies/S1-IMAGES8-united-state.jpg'
    },
    {
        id: '11',
        title: 'NEW ZEALAND HIGH COMMISSION',
        img_logo: '/imgs/embassies/S1-IMAGES15-new-zealand.jpg'
    },
    {
        id: '12',
        title: 'MALAYSIAN HIGH COMMISSION',
        img_logo: '/imgs/embassies/S1-IMAGES18-malalaysla.jpg'
    },
    {
        id: '13',
        title: 'FRENCH EMBASSY',
        img_logo: '/imgs/embassies/S1-IMAGES5-francaise.jpg'
    },
    {
        id: '14',
        title: 'SOUTH KOREAN EMBASSY',
        img_logo: '/imgs/embassies/S1-IMAGES11-south-korea.jpg'
    },
    {
        id: '15',
        title: 'HIGH COMMISSION OF INDIA',
        img_logo: '/imgs/embassies/S1-IMAGES17-india.jpg'
    }

]


class Embassy extends React.Component {
    constructor(props) {
        super(props);

        console.log(props.data);


        const { data, randomise } = this.props;

        this.goUp = this.goUp.bind(this);
        this.goDown = this.goDown.bind(this);
    }
    goUp() {
        let items = this.data.slice();
        items = shiftArray(items, 1);
        this.setState({
            data: items
        });
    }
    goDown() {
        let items = this.data.slice();
        items = shiftArray(items, -1);
        this.setState({
            data: items
        });
    }
    styles = {
        mainSectionRow: {
            display: "flex",
            alignItems: "left",
            justifyContent: "center",
            height: "25%",
            width: "100%",
            borderBottom: "1px solid lightBlue",
        },
        mainIcon: {
            width: "30%",
            height: "100%",
            //  padding: "3%"
        },
        mainTitleContainer: {
            width: "70%",
            height: "100%",
            paddingLeft: "3%",
            alignItems: "center",
            display: "flex",

        },
        horizontalVerticalCenter: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }
    }

    render() {
        return (

            <div style={{ height: "54vh" }}>


                <div style={{ width: "100%", height: "100%", display: "flex" }}>
                    <div className="left-vertical-nav"
                        style={{
                            backgroundColor: HeavyOrange,
                            width: "14%",
                            height: "100%",
                            boxShadow: "9.899px 0px 7px 0px rgba(0,0,0,0.6)",
                            zIndex: 1,
                            display: "flex",
                            flexDirection: "column"
                        }}
                    >
                        <div
                        >
                            <Link style={{ textDecoration: "none" }} to="/Services">
                                <div
                                    className="leftSide-menu--container"

                                >

                                    <img
                                        className="leftSide-menu--img"
                                        src={ServiceTypesIcon}
                                        alt="SERVICE TYPES ICON"
                                    />

                                    <div
                                        className="menu-title"

                                    >
                                        SERVICE TYPES
                                </div>
                                </div>
                            </Link>
                            <Link style={{ textDecoration: "none" }} to="/Services/essential">
                                <div
                                    className="leftSide-menu--container"

                                >

                                    <img
                                        className="leftSide-menu--img"
                                        src={ESSENTIAL_ICON}
                                        alt="ESSENTIAL SERVICES ICON"
                                    />

                                    <div
                                        className="menu-title"

                                    >
                                        ESSENTIAL SERVICES
                                </div>
                                </div>
                            </Link>
                        </div>
                        <div
                            className="vertical-title"

                        >
                            <span style={{ transform: "rotate(-90deg)" }}>
                                SERVICES
                                </span>
                        </div>
                    </div>

                    <div className="main-section" >
                        <div className="main-section--top">
                            <div
                                className="main-section--top--title"
                                style={{

                                    ...this.styles.horizontalVerticalCenter

                                }}
                            >
                                ESSENTIAL SERVICES
                             </div>
                            <div className="main-section--upBtn"
                                style={{
                                    height: "6%",
                                    backgroundColor: MediumOrange,
                                    ...this.styles.horizontalVerticalCenter
                                }}
                                onClick={this.goUp}
                            >
                                <img src={UpButton} style={{ width: "5%" }} alt="Up" />
                            </div>
                        </div>

                        <div className="main-section--middle">
                            {temp_embassy_data.map((embassyList, index) => {
                                return (
                                    <div style={{ ...this.styles.mainSectionRow }}>
                                        <div style={{ ...this.styles.mainIcon }}>
                                            <img style={{ width: "100%", height: "100%" }} src={embassyList.img_logo}
                                                alt={embassyList.title + " icon"} />
                                        </div>
                                        <div style={{ ...this.styles.mainTitleContainer }}>
                                            <Link style={{ textDecoration: "none" }} to={`/services/essential/embassy/${index}`}>

                                                <h4 style={{ color: "white" }}>{embassyList.title}</h4>
                                            </Link>
                                            {/* <img src={embassyList.img_logo} alt='' /> */}
                                        </div>

                                    </div>

                                );
                            })}
                        </div>
                        <div className="main-section--bottom"
                            style={{
                                height: "6%",
                                backgroundColor: MediumOrange,
                                ...this.styles.horizontalVerticalCenter
                            }}
                            onClick={this.goDown}
                        >
                            <img
                                src={DownButton}
                                style={{ width: "5%" }}
                                alt="Down"
                            />
                        </div>

                    </div>



                </div>


            </div >


        );
    }
}
export default Embassy;




// const Embassy = () => {

//     return (
//         <div> 
//             <h1> Here is main Embressy list page</h1>

//             { temp_embassy_data.map((embassyList, index) => {
//                 return  (
//                     <div> 
//                         <ul>
//                             <Link to={`/services/essential/embassy/${index}`}> 
//                                 <img src={embassyList.img_logo} alt='' /> | {embassyList.title} </Link>
//                         </ul>
//                     </div>
//                 )
//             })}
//         </div>
//     );
// };

// export default Embassy;