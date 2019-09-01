import React, {useState} from 'react';

import {Link, Route} from 'react-router-dom';

import './OurHotel.scss';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const OurHotel_tempdata = [
  {

    rooms_and_suites: {
       title: 'Rooms & SUITES',
       image_url: './imgs/ourHotel/Our_Hotel_Section_Images_Pres.jpg'

    },
    dining: {
      title: 'DINING',
      image_url: ''

    },
    facilities: {
      title: 'FACILITIES',
      image_url: ''
    },
    meetings: {
      title: 'MEETINGS',
      image_url:''
    }

  }
];


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    root2: {
        maxHeight: '90%',
        overflow: 'auto',
        color: 'white',
        backgroundColor: '#0597A5',
    },
    root3: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
     
      backgroundColor:  theme.palette.background.paper,
    },
    gridList: {
      width: 1000,
      height: 450,
      overflowY: 'auto',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      background: '#DD7823',
      height: '100vh',
      color: theme.palette.text.secondary,
    },
    paper2: {
        padding: theme.spacing(0),
        textAlign: 'center',
        background: '#F9A01E',
        height: '100vh',
        color: 'white',
      }
  }));

  


const OurHotel = (props) => { 
    const classes = useStyles(); 
  
    return (

        <div  className={classes.root}>
            

       
              <Grid container spacing={0}>
                    <Grid item xs={2}>
                            <Paper className={classes.paper}> 
                                    <h2> OUR HOTEL </h2>
                            </Paper>
                            
                    </Grid>
                    <Grid item xs={10}  >
                      <div className={classes.root3} >
                      
                          <GridList  className={classes.gridList}>
                                
                                {OurHotel_tempdata.map(ourHotelData => (
                                  <GridListTile key={ourHotelData.rooms_and_suites.image_url}>
                                   <img src={ourHotelData.rooms_and_suites.image_url} alt={ourHotelData.rooms_and_suites.title}  style={{height: 600}} />

                                    <GridListTileBar
                                      title={ourHotelData.rooms_and_suites.title}
                                      subtitle={<span>by: {ourHotelData.rooms_and_suites.title}</span>}
                                      actionIcon={
                                        <IconButton aria-label={`info about ${ourHotelData.rooms_and_suites.title}`} className={classes.icon}>
                                          <InfoIcon />
                                        </IconButton>
                                      }
                                    />
                                  </GridListTile>
                                ))}
                              </GridList>
                              </div>


                    </Grid>
                </Grid>
            
          
           

         </div>  
        

    )

};


export  default OurHotel;