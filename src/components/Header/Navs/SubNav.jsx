// Tow colm 
// left with : About our hotel nav link to About our hotel page 

// next link show up the time and date

import React from 'react';
import { NavLink } from "react-router-dom";
import {
  videosNamespace,
  hotelDetailNamespace
} from "../../../Constants";

import Clock from "../../../components/MainContents/Clock/Clock";

import './SubNav.scss';


class SubNav extends React.Component {

  checkActive = (match, location) => {
    //some additional logic to verify if current link is active
    if(!location) return false;
    const {pathname} = location;
    // process check when match is provided
    if (match) {
        if (match.isExact)
        return true;
        if (pathname.indexOf(match.url) >= 0)
            return true;
    }
    else if (pathname.indexOf(videosNamespace) >= 0) {
      // highlight when last visit was hotel detail
      if (this.props.lastPathname && 
        this.props.lastPathname.indexOf(hotelDetailNamespace) >= 0)
        return true;
    }

    return pathname === "/";
  }

  render() {
    return (
      <div style={{ width: "100%", height: "3vh" }}>
        <div className="subNav-container" >
          {/* <div className="subNav-container--search">
            <div></div>
          </div> */}
          <NavLink 
            className="subNav-container--about"
            to="/hoteldetail" 
            exact
            isActive={this.checkActive}
            activeClassName="subNav-container--about-active">
             ABOUT OUR HOTEL
          </NavLink>          
          <div className="subNav-container--clock">
            <Clock />



          </div>
        </div>
      </div>
    );
  }

}
export default SubNav;
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles(theme => ({
//     root: {
//       flexGrow: 1,
//     },
//     paperLeft: {
//       padding: theme.spacing(2),
//       textAlign: 'center',
//       color: theme.palette.text.secondary,
//       background: '#0D6D79',
//       marginTop: '-5px',
//       cursor: 'pointer',
//       borderStyle:''

//     },
//     paperRight: {
//         padding: theme.spacing(2),
//         textAlign: 'center',
//         color: theme.palette.text.secondary,
//         background: '#1997A4',
//         marginTop: '-5px',
//         borderStyle:''

//       }
//   }));


// const SubNavs  = () => {
//    const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Grid container spacing={0}>


//         <Grid item xs={6}>
//           <Link to="/hoteldetail" style={{ textDecoration: 'none' }}> 
//             <Paper className={classes.paperLeft}>

//               <img src="./imgs/SearchIcon.png" alt='' /> 
//                 <p>ABOUT OUR HOTEL</p>


//             </Paper>
//           </Link>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper className={classes.paperRight}>
//             <p>03:08PM | AUGUST 2019</p>
//           </Paper>
//         </Grid>


//       </Grid>
//     </div>
//   );
// }

//export default SubNavs;


