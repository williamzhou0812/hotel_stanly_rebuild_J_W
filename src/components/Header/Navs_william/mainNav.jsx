import React from 'react';
import { Link } from 'react-router-dom'; 

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(0.7),
        flexGrow: 1,
        justifyContent:"center"
    },
    card: {
      width: 175,
      height: 150,
      maxWidth: 1980,
      background: '#0D6D79'
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    }
 
  }));

const MainNav = () => {
    const classes = useStyles();
  
 
    return (
        <div className={classes.root}>

            <Grid container spacing={1}> 

                <Grid item >
                    
                    <Card className={classes.card}>
                        <Link to="services">
                        <CardMedia
                        className={classes.media}
                        image="./imgs/mainNavicon/SERVICES_ICON.b3cd6c9f.png"
                        title="services"
                        />
                        <CardContent>
                        <Typography >
                            SERVICES
                        </Typography>
                        </CardContent>
                
                        </Link>
             
                    </Card>
                </Grid>
             

                <Grid item >
                    
                    <Card className={classes.card}>
                        <Link to="/maps/0">
                            <CardMedia
                            className={classes.media}
                            image="./imgs/mainNavicon/MAP_LIST_ICON.3589f924.png"
                            title="Paella dish"
                            />
                            <CardContent>
                            <Typography >
                            Maps
                            </Typography>
                            </CardContent>
                        </Link>
                    </Card>
                </Grid>

                <Grid item >
                    
                    <Card className={classes.card}>
                    
                        <CardMedia
                        className={classes.media}
                        image="./imgs/mainNavicon/ACTIVITIES_ICON.ec2ba613.png"
                        title="Paella dish"
                        />
                        <CardContent>
                        <Typography >
                            ACTIVITES
                        </Typography>
                        </CardContent>
                
                    </Card>
                </Grid>
                <Grid item >
                    
                    <Card className={classes.card}>
                    
                        <CardMedia
                        className={classes.media}
                        image="./imgs/mainNavicon/DESTINATIONS_ICON.1fde2389.png"
                        title="Paella dish"
                        />
                        <CardContent>
                        <Typography >
                            DESTINATIONS
                        </Typography>
                        </CardContent>
                
                    </Card>
                </Grid>
                <Grid item >
                    <Link to="/events" >
                            <Card className={classes.card}>
                            
                            <CardMedia
                            className={classes.media}
                            image="./imgs/mainNavicon/EVENTS_ICON.33f090dd.png"
                            title="Paella dish"
                            />
                            <CardContent>
                            <Typography >
                                EVENT
                            </Typography>
                            </CardContent>
                    
                        </Card>
                    </Link>
                  
                </Grid>
                <Grid item >
                    
                    <Card className={classes.card}>
                    
                        <CardMedia
                        className={classes.media}
                        image="./imgs/mainNavicon/DINING_ICON.c10cf25e.png"
                        title="Paella dish"
                        />
                        <CardContent>
                        <Typography >
                            DINING
                        </Typography>
                        </CardContent>
                
                    </Card>
                </Grid>


                <Grid item >
                    
                    <Card className={classes.card}>
                    <Link to="/ourhotel">
                    <CardMedia
                        className={classes.media}
                        image="./imgs/mainNavicon/ACCOMMODATION_ICON.050050c5.png"
                        title="Paella dish"
                        />
                        <CardContent>
                        <Typography >OUR HOTEL
                        </Typography>
                        </CardContent>
                    </Link>
          
                
                    </Card>
                </Grid>



            </Grid>

        </div>
    )
}


export default MainNav;