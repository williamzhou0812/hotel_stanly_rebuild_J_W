
import React, { Fragment } from 'react';
import DownButton from "../../../MainContents/Destination/icons/DownExploreButton.png";
import UpButton from "../../../MainContents/Destination/icons/UpExploreButton.png";
import { Link } from "react-router-dom";
import ListIcon from "../../icons/ListIcon.png";
import HireAndTransport from "../../icons/HireAndTransport.svg";
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
import "../../List/MainSectionList.scss";
import { borderBottom } from '@material-ui/system';
import { lightBlue } from '@material-ui/core/colors';

const vehicleHire_data = [
    {
        id: 1,
        title: 'HERTZ (PORT MORESBY AIRPORT)',
        img_logo: '/imgs/service/transport/logoImg/S2LOGOS19.jpg'
    },
    {
        id: 2,
        title: 'BUDGET RENT A CAR',
        img_logo: '/imgs/service/transport/logoImg/S2LOGOS16.jpg'
    },
    {
        id: 3,
        title: 'EUROPCAR',
        img_logo: '/imgs/service/transport/logoImg/S2LOGOS17.jpg'
    },
    {
        id: 4,
        title: 'CITY CAB',
        img_logo: '/imgs/service/transport/logoImg/S2LOGOS22.jpg'
    },
    {
        id: 5,
        title: 'TRAVELLERS RENT-A-CAR',
        img_logo: '/imgs/service/transport/logoImg/S2LOGOS21.jpg'
    },
    {
        id: 6,
        title: 'FRANGIPANI',
        img_logo: '/imgs/service/transport/logoImg/S2LOGOS18.jpg'
    },
    {
        id: 7,
        title: 'AVIS - NATIONWIDE RENT-A-CAR',
        img_logo: '/imgs/service/transport /logoImg/S2LOGOS15.jpg'
    },
    {
        id: 8,
        title: 'IZARHLAMBORN HIRE CARS',
        img_logo: '/imgs/service/transport/logoImg/S2LOGOS20.jpg'
    }

]



class vehicleHire extends React.Component {
    constructor(props) {
        super(props);

        console.log(props.data);


        const { data, randomise } = this.props;

        this.goUp = this.goUp.bind(this);
        this.goDown = this.goDown.bind(this);
    }
    goUp() {
        // let items = data.slice();
        // items = shiftArray(items, 1);
        // this.setState({
        //     data: items
        // });
    }
    goDown() {
        // let items = data.slice();
        // items = shiftArray(items, -1);
        // this.setState({
        //     data: items
        // });
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
            // padding: "3%"
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
        const {
            numberOfEntries,
            sideButtons,
            sideTitle,
            mainTitle,
            namespace,
        } = this.props;
        return (
            <div style={{ height: "54vh" }}>


                < div style={{ width: "100%", height: "100%", display: "flex" }}>

                    <div
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
                                        src={ListIcon}
                                        alt="SERVICE TYPES"
                                    />
                                    <div
                                        className="menu-title"
                                    >
                                        SERVICE TYPES
                                </div>
                                </div>
                            </Link>
                        </div>
                        <div
                        >
                            <Link style={{ textDecoration: "none" }} to="/Services">
                                <div
                                    className="leftSide-menu--container"
                                >
                                    <img
                                        className="leftSide-menu--img"
                                        src={HireAndTransport}
                                        alt="SERVICE TYPES"
                                    />
                                    <div
                                        className="menu-title"
                                    >
                                        CAR HIRE & TRANSPORT
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
                                    // height: "8%",
                                    // backgroundColor: LightOrange,

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
                            {vehicleHire_data.map((vehicleHireList, index) => {
                                return (
                                    <div style={{ ...this.styles.mainSectionRow }}>
                                        <div style={{ ...this.styles.mainIcon }}>
                                            <img style={{ width: "100%", height: "100%" }} src={vehicleHireList.img_logo}
                                                alt={vehicleHireList.title + " icon"} />
                                        </div>
                                        <div style={{ ...this.styles.mainTitleContainer }}>
                                            <Link style={{ textDecoration: "none" }} to={`/services/transport/vehicle-hire/${index}`}>

                                                <h4 style={{ color: "white" }}>{vehicleHireList.title}</h4>
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

export default vehicleHire;

// import React, {Fragment} from 'react';
// import {Link} from 'react-router-dom';


// const  vehicleHireList = [
//     {
//         id: 1,
//         title: 'HERTZ (PORT MORESBY AIRPORT)',
//         img_logo: '/imgs/transport/logoImg/S2LOGOS19-hertz.jpg'
//     },
//     {
//         id: 2,
//         title: 'BUDGET RENT A CAR',
//         img_logo: '/imgs/transport /logoImg/S2LOGOS16-budget.jpg'
//     },
//     {
//         id: 3,
//         title: 'EUROPCAR',
//         img_logo: '/imgs/transport /logoImg/S2LOGOS17-europcar.jpg'
//     },
//     {
//         id: 4,
//         title: 'CITY CAB',
//         img_logo: '/imgs/transport /logoImg/S2LOGOS22-cityCab.jpg'
//     },
//     {
//         id: 5,
//         title: 'TRAVELLERS RENT-A-CAR',
//         img_logo: '/imgs/transport /logoImg/S2LOGOS21-travellers.jpg'
//     },
//     {
//         id: 6,
//         title: 'FRANGIPANI',
//         img_logo: '/imgs/transport /logoImg/S2LOGOS18-frang.jpg'
//     },
//     {
//         id: 7,
//         title: 'AVIS - NATIONWIDE RENT-A-CAR',
//         img_logo: '/imgs/transport /logoImg/S2LOGOS15-avis.jpg'
//     },
//     {
//         id: 8,
//         title: 'IZARHLAMBORN HIRE CARS',
//         img_logo: '/imgs/transport /logoImg/S2LOGOS20-izarhlamborn.jpg'
//     }

// ]

// const VehicleHire = () => {
//     return (
//         <Fragment>
//             <div>
//                Here is VehicleHire detials pages
//             </div>

//             <ul>
//                 {vehicleHireList.map((vhList, index) => {
//                     return (
//                         <div>

//                             <Link to={`/services/transport/vehicle-hire/${index}`}> <img src={vhList.img_logo}  alt='' /> | {vhList.title} </Link>
//                         </div>
//                     )
//                 })}

//             </ul> 
//         </Fragment>

//     )
// }

// export default VehicleHire;