import React from 'react';


import './OurHotel.scss';


// new import 

import RoomandSuites from './Our_Hotel_Section_Images_Pres.jpg';
import Dining  from './Our_Hotel_Section_Imagessilverleaf3.jpg';
import Facilities from './Our_Hotel_Section_Imagespool2.jpg';
import Meetting from './Our_Hotel_Section_Images2.jpg';

import SectionList from '../List/SectionList';

// const OurHotel_tempdata = [
//   {

//     rooms_and_suites: {
//        title: 'Rooms & SUITES',
//        image_url: './imgs/ourHotel/Our_Hotel_Section_Images_Pres.jpg'

//     },
//     dining: {
//       title: 'DINING',
//       image_url: ''

//     },
//     facilities: {
//       title: 'FACILITIES',
//       image_url: ''
//     },
//     meetings: {
//       title: 'MEETINGS',
//       image_url:''
//     }

//   }
// ];



// const useStyles = makeStyles(theme => ({
//     root: {
//       flexGrow: 1
//     },
//     root2: {
//         maxHeight: '90%',
//         overflow: 'auto',
//         color: 'white',
//         backgroundColor: '#0597A5',
//     },
//     root3: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       justifyContent: 'space-around',
//       overflow: 'hidden',
     
//       backgroundColor:  theme.palette.background.paper,
//     },
//     gridList: {
//       width: 1000,
//       height: 450,
//       overflowY: 'auto',
//     },
//     icon: {
//       color: 'rgba(255, 255, 255, 0.54)',
//     },
//     paper: {
//       padding: theme.spacing(2),
//       textAlign: 'center',
//       background: '#DD7823',
//       height: '100vh',
//       color: theme.palette.text.secondary,
//     },
//     paper2: {
//         padding: theme.spacing(0),
//         textAlign: 'center',
//         background: '#F9A01E',
//         height: '100vh',
//         color: 'white',
//       }
//   }));

  
const ourHotel = [
  {id: 1, title: 'ROOMS & SUITES', url: '/ourhotel/roomsuite'},
  {id: 2, title: 'DINING', url: '/ourhotel/dining'},
  {id: 3, title: 'FACILITIES', url: '/ourhotel/facilities' },
  {id: 4, title: 'MEETINGS', url: '/ourhotel/meeting' },
];
const images = [
  RoomandSuites,
  Dining,
  Facilities,
  Meetting

];


const OurHotel = (props) => { 
    // const classes = useStyles(); 
  
    return (
            <div style={{height: '54vh', whiteSpace:'nowrap' }} >
              <SectionList
                      data={ourHotel}
                      images={images}
                      title="OUR HOTEL"
                      namespace=""
                      linkFunction={(_, item) => {
                          return item.url;
                      }}
                      backgroundPositionValue="top"
                  ></SectionList>
            </div>
        // <div  className={classes.root}>
            

       
        //       <Grid container spacing={0}>
        //             <Grid item xs={2}>
        //                     <Paper className={classes.paper}> 
        //                             <h2> OUR HOTEL </h2>
        //                     </Paper>
                            
        //             </Grid>
        //             <Grid item xs={10}  >
        //               <div className={classes.root3} >
                      
        //                   <GridList  className={classes.gridList}>
                                
        //                         {OurHotel_tempdata.map(ourHotelData => (
        //                           <GridListTile key={ourHotelData.rooms_and_suites.image_url}>
        //                            <img src={ourHotelData.rooms_and_suites.image_url} alt={ourHotelData.rooms_and_suites.title}  style={{height: 600}} />

        //                             <GridListTileBar
        //                               title={ourHotelData.rooms_and_suites.title}
        //                               subtitle={<span>by: {ourHotelData.rooms_and_suites.title}</span>}
        //                               actionIcon={
        //                                 <IconButton aria-label={`info about ${ourHotelData.rooms_and_suites.title}`} className={classes.icon}>
        //                                   <InfoIcon />
        //                                 </IconButton>
        //                               }
        //                             />
        //                           </GridListTile>
        //                         ))}
        //                       </GridList>
        //                       </div>


        //             </Grid>
        //         </Grid>
            
          
           

        //  </div>  
        

    )

};


export  default OurHotel;