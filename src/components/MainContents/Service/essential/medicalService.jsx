
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


const temp_medical_data = [
    {
        id: 1,
        title: 'EMS ASSIST (MEDIVAC SERVICE)',
        img_logo: '/imgs/service/medical/S1-IMAGES20.jpg',

    },
    {
        id: 2,
        title: 'PNG CHIROPRACTIC',
        img_logo: '/imgs/service/medical/S1-IMAGES21.jpg',

    },
    {
        id: 3,
        title: 'MEDEVAC PACIFIC (MEDIVAC SERVICE)',
        img_logo: '/imgs/service/medical/S1-IMAGES19.jpg',
    },

]

class MedicalService extends React.Component {
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
                            {temp_medical_data.map((medicalList, index) => {
                                return (
                                    <div style={{ ...this.styles.mainSectionRow }}>
                                        <div style={{ ...this.styles.mainIcon }}>
                                            <img style={{ width: "100%", height: "100%" }} src={medicalList.img_logo}
                                                alt={medicalList.title + " icon"} />
                                        </div>
                                        <div style={{ ...this.styles.mainTitleContainer }}>
                                            <Link style={{ textDecoration: "none" }} to={`/services/essential/medical/${index}`}>

                                                <h4 style={{ color: "white" }}>{medicalList.title}</h4>
                                            </Link>

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
export default MedicalService;






// import React, {Fragment} from 'react';
// import {Link} from 'react-router-dom';

// const temp_data_mediclService  = [
//     {
//         id: 1,
//         title: 'EMS ASSIST (MEDIVAC SERVICE)',
//         img_logo: '/imgs/service/medical/S1-IMAGES20.jpg',

//     },
//     {
//         id: 2,
//         title: 'PNG CHIROPRACTIC',
//         img_logo: '/imgs/service/medical/S1-IMAGES21.jpg',

//     },
//     {
//         id: 3,
//         title: 'MEDEVAC PACIFIC (MEDIVAC SERVICE)',
//         img_logo: '/imgs/service/medical/S1-IMAGES19.jpg',
//     },

// ]

// const MediclService = () => {

//     return (
//         <Fragment>
//             <div>Medicl Servic list page</div> 

//             {temp_data_mediclService.map((mediclData, index) => {
//                 return  (
//                     <div> 
//                         <ul>
//                             <Link to={`/services/essential/medicl/${index}`}>{mediclData.id} | <img src={mediclData.img_logo}  alt='' /> | {mediclData.title} |  </Link>
//                         </ul>
//                     </div>
//                 )
//             })}

//         </Fragment>


//     )
// };

// export default MedicalService;