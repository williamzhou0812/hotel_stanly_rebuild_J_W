import React from "react";
//import Tab from "./Tab";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    NavLink
} from "react-router-dom";
import {
    accomodationNamespace,
    eventNamespace,
    diningNamespace,
    destinationNamespace,
    serviceNamespace,
    mapListNamespace,
    activityNamespace,

    airportInfoNamespace,
    shiftArray
} from "../../../Constants";
import AccommodationIcon from "./icons/ACCOMMODATION_ICON.png";
import ActivitiesIcon from "./icons/ACTIVITIES_ICON.png";
import DestinationsIcon from "./icons/DESTINATIONS_ICON.png";
import DiningIcon from "./icons/DINING_ICON.png";
import EventsIcon from "./icons/EVENTS_ICON.png";
import ServicesIcon from "./icons/SERVICES_ICON.png";
import MapListIcon from "./icons/MAP_LIST_ICON.png";
import "./mainNav.scss"
//import { connect } from "react-redux";
//import * as actions from "../actions";
//import "./Tab.scss";

class mainNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [
                {
                    name: "SERVICES",
                    path: serviceNamespace,
                    icon: ServicesIcon,
                    iconWidth: "70px"
                },
                {
                    name: "MAPS",
                    //   path: mapListNamespace,
                    path: "/maplist",
                    icon: MapListIcon,
                    iconWidth: "70px"
                },
                {
                    name: "ACTIVITIES",
                    path: activityNamespace,
                    icon: ActivitiesIcon,
                    iconWidth: "70px"
                },
                {
                    name: "DESTINATIONS",
                    path: '/destinations',
                    icon: DestinationsIcon,
                    iconWidth: "90px"
                },
                {
                    name: "EVENTS",
                    path: eventNamespace,
                    icon: EventsIcon,
                    iconWidth: "70px"
                },
                {
                    name: "DINING",
                    path: diningNamespace,
                    icon: DiningIcon,
                    iconWidth: "70px"
                },
                {
                    name: "HOTELS",
                    path: '/ourhotel',
                    icon: AccommodationIcon,
                    iconWidth: "70px"
                }
            ],
            sameClicked: false,
            performClick: false
        };

    }
    middle = 3;

    render() {
        const { tabs } = this.state;
        // const { pathname } = this.props.location;
        return (
            <div style={{ width: "100vw", height: "8vh" }}>
                <div style={{ width: "100%", height: "100%", display: "flex", boxShadow: "2px 5px 10px black", position: "relative" }}>
                    {tabs.map((t, i) => {
                        return (
                            <div className="item-tab not-selected">
                                <NavLink style={{ display: "inline-block", flexDirection: "column", width: "100%", height: "100%", textAlign: "center" }} to={t.path}>
                                    <div>
                                        <div style={{
                                            display: "inline-block",
                                            textAlign: "center"
                                        }}>
                                            <img
                                                alt=""
                                                src={t.icon
                                                }
                                                style={{

                                                    position: "relative",
                                                    width: !!t.iconWidth ? t.iconWidth : "50%",
                                                    // padding: "2%",
                                                    marginTop: "20%",
                                                    // margin: "0 auto",
                                                    display: "inline-block"

                                                }}
                                                className="tab--icon icon-img"
                                            />
                                        </div>
                                        <div
                                            style={{
                                                padding: 0
                                            }}
                                            className=" tabName-container"
                                        >
                                            <p>{t.name}</p>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                            // <Tab
                            //     key={i}
                            //     name={t.name}
                            //     icon={t.icon}
                            //     iconWidth={t.iconWidth}

                            // />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default mainNav;
        // export default connect(
        //     null,
        //     actions
        // )(MainTabList);



// import React from 'react';
// import { Link } from 'react-router-dom'; 

// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles(theme => ({
//     root: {
//         padding: theme.spacing(0.7),
//         flexGrow: 1,
//         justifyContent:"center"
//     },
//     card: {
//       width: 175,
//       height: 150,
//       maxWidth: 1980,
//       background: '#0D6D79'
//     },
//     media: {
//       height: 0,
//       paddingTop: '56.25%', // 16:9
//     }

//   }));

// const MainNav = () => {
//     const classes = useStyles();


//     return (
//         <div className={classes.root}>

//             <Grid container spacing={1}> 

//                 <Grid item >

//                     <Card className={classes.card}>
//                         <Link to="services">
//                         <CardMedia
//                         className={classes.media}
//                         image="./imgs/mainNavicon/SERVICES_ICON.b3cd6c9f.png"
//                         title="services"
//                         />
//                         <CardContent>
//                         <Typography >
//                             SERVICES
//                         </Typography>
//                         </CardContent>

//                         </Link>

//                     </Card>
//                 </Grid>


//                 <Grid item >

//                     <Card className={classes.card}>
//                         <Link to="/maps/0">
//                             <CardMedia
//                             className={classes.media}
//                             image="./imgs/mainNavicon/MAP_LIST_ICON.3589f924.png"
//                             title="Paella dish"
//                             />
//                             <CardContent>
//                             <Typography >
//                             Maps
//                             </Typography>
//                             </CardContent>
//                         </Link>
//                     </Card>
//                 </Grid>

//                 <Grid item >

//                     <Card className={classes.card}>

//                         <CardMedia
//                         className={classes.media}
//                         image="./imgs/mainNavicon/ACTIVITIES_ICON.ec2ba613.png"
//                         title="Paella dish"
//                         />
//                         <CardContent>
//                         <Typography >
//                             ACTIVITES
//                         </Typography>
//                         </CardContent>

//                     </Card>
//                 </Grid>
//                 <Grid item >

//                     <Card className={classes.card}>

//                         <CardMedia
//                         className={classes.media}
//                         image="./imgs/mainNavicon/DESTINATIONS_ICON.1fde2389.png"
//                         title="Paella dish"
//                         />
//                         <CardContent>
//                         <Typography >
//                             DESTINATIONS
//                         </Typography>
//                         </CardContent>

//                     </Card>
//                 </Grid>
//                 <Grid item >
//                     <Link to="/events" >
//                             <Card className={classes.card}>

//                             <CardMedia
//                             className={classes.media}
//                             image="./imgs/mainNavicon/EVENTS_ICON.33f090dd.png"
//                             title="Paella dish"
//                             />
//                             <CardContent>
//                             <Typography >
//                                 EVENT
//                             </Typography>
//                             </CardContent>

//                         </Card>
//                     </Link>

//                 </Grid>
//                 <Grid item >

//                     <Card className={classes.card}>

//                         <CardMedia
//                         className={classes.media}
//                         image="./imgs/mainNavicon/DINING_ICON.c10cf25e.png"
//                         title="Paella dish"
//                         />
//                         <CardContent>
//                         <Typography >
//                             DINING
//                         </Typography>
//                         </CardContent>

//                     </Card>
//                 </Grid>


//                 <Grid item >

//                     <Card className={classes.card}>
//                     <Link to="/ourhotel">
//                     <CardMedia
//                         className={classes.media}
//                         image="./imgs/mainNavicon/ACCOMMODATION_ICON.050050c5.png"
//                         title="Paella dish"
//                         />
//                         <CardContent>
//                         <Typography >OUR HOTEL
//                         </Typography>
//                         </CardContent>
//                     </Link>


//                     </Card>
//                 </Grid>



//             </Grid>

//         </div>
//     )
// }


// export default MainNav;