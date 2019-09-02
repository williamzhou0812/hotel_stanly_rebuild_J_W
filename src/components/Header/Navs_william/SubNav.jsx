// Tow colm 
// left with : About our hotel nav link to About our hotel page 

// next link show up the time and date

import React  from 'react';
import { Link } from "react-router-dom";

import './SubNav.scss';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paperLeft: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      background: '#0D6D79',
      marginTop: '-5px',
      cursor: 'pointer',
      borderStyle:''
      
    },
    paperRight: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        background: '#1997A4',
        marginTop: '-5px',
        borderStyle:''
        
      }
  }));


const SubNavs  = () => {
   const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>

        
        <Grid item xs={6}>
          <Link to="/hoteldetail" style={{ textDecoration: 'none' }}> 
            <Paper className={classes.paperLeft}>
      
              <img src="./imgs/SearchIcon.png" alt='' /> 
                <p>ABOUT OUR HOTEL</p>
                
              
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paperRight}>
            <p>03:08PM | AUGUST 2019</p>
          </Paper>
        </Grid>
   
      
      </Grid>
    </div>
  );
}

export default SubNavs;


