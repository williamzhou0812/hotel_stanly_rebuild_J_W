// import React, { useState } from 'react';

// import { Link } from 'react-router-dom';

// import './Maps.scss';
// import PropTypes from 'prop-types';

// import { makeStyles } from '@material-ui/core/styles';

// import Paper from '@material-ui/core/Paper';

// import Grid from '@material-ui/core/Grid';

// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import Divider from '@material-ui/core/Divider';

// import Modal from 'react-bootstrap/Modal';
// import ModalDialog from 'react-bootstrap/ModalDialog';
// import ModalHeader from 'react-bootstrap/ModalHeader';
// import ModalTitle from 'react-bootstrap/ModalTitle';
// import ModalBody from 'react-bootstrap/ModalBody';
// import ModalFooter from 'react-bootstrap/ModalFooter';

// import Button from 'react-bootstrap/Button';

// import ReactImageZoom from 'react-image-zoom';


// const temp_mapData = [
//   {
//     location_name: 'PAPUA NEW GUNIEA MAP',
//     img_url: 'Port-Moresby-Map-PORTMORESBY.png'
//   },
//   {
//     location_name: 'PORT MORESBY AIRPORT',
//     img_url: 'PortMoresbyAirportMap.png'
//   },
//   {

//     location_name: 'PORT MORESBY MAP National Capital District',
//     img_url: 'Lae-Map-LAE.png'
//   },
//   {

//     location_name: 'LAE MAP Morobe',
//     img_url: 'Madang-Map-MADANG.png'
//   },
//   {
//     location_name: 'MADANG MAP Madang',
//     img_url: 'Madang-Map-MADANG.png'
//   },
//   {
//     location_name: 'MOUNT HAGEN MAP Western Highlands',
//     img_url: 'Madang-Map-MADANG.png'
//   },
//   {
//     location_name: 'KOKPO MAP East New Britain',
//     img_url: 'Madang-Map-MADANG.png'
//   },
//   {
//     location_name: 'GOROKA MAP Eastern Highlands',
//     img_url: 'Madang-Map-MADANG.png'
//   },
//   {
//     location_name: 'ALOTAU MAP Milne Bay Province',
//     img_url: 'Alotau-Map-ALOTAU.png'
//   },
//   {
//     location_name: 'KIMBE MAP West New Britain',
//     img_url: 'Kimbe-Map-KIMBE-2_djG3ysi.png'
//   },
//   {
//     location_name: 'KAVILENG MAP New Ireland Province',
//     img_url: 'Kavieng-Map-KAVIENG.png'
//   },
//   {
//     location_name: 'WEWAK MAP East Sepik Province',
//     img_url: 'Wewak-Map-WEWAK.png'
//   },
//   {
//     location_name: 'BUKA MAP Autonomous Region of Bougainville',
//     img_url: 'BUKA-PNG-Map_y8cFpiC.png'
//   }



// ];
// const MyVerticallyCenteredModal = (props) => {


//   console.log(props);
//   let mapData = props.mapDatas[parseInt(props.id)]
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           {mapData.location_name}

//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <img src={`/imgs/maps/${mapData.img_url}`} alt="" style={{ width: 200, height: 200 }} />



//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }




// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1
//   },
//   root2: {
//     maxHeight: '90%',
//     overflow: 'auto',
//     color: 'white',
//     backgroundColor: '#0597A5',
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     background: '#DD7823',
//     height: '100vh',
//     color: theme.palette.text.secondary,
//   },
//   paper2: {
//     padding: theme.spacing(0),
//     textAlign: 'center',
//     background: '#F9A01E',
//     height: '100vh',
//     color: 'white',
//   }
// }));

// // function ListItemLink(props) {
// //   return <ListItem button component="a" {...props} />;
// // }



// const Maps = (props) => {
//   const classes = useStyles();

//   console.log(props.match.params.id); // get index id from Routes


//   const [modalShow, setModalShow] = React.useState(false);




//   return (

//     <div className={classes.root}>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         id={props.match.params.id}
//         mapDatas={temp_mapData}
//         onHide={() => setModalShow(false)}
//       />
//       <Grid container spacing={0}>
//         <Grid item xs={2}>
//           <Paper className={classes.paper}>
//             <h2> MAPS </h2>
//             <h2></h2>
//           </Paper>

//         </Grid>
//         <Grid item xs={10}>
//           <Paper className={classes.paper2} >

//             <Divider />

//             <h1>LIST OF MAPS</h1>
//             <>
//               {/* <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button> */}


//             </>

//             <div className={classes.root2}>

//               <List component="nav" aria-label="main mailbox folders" >

//                 {temp_mapData.map((maplist, index) => {

//                   return (
//                     <Link to={`/maps/${index}`} key={index} onClick={() => setModalShow(true)} style={{ textDecoration: 'none', color: 'white' }}>
//                       <ListItem button >


//                         <ListItemIcon>
//                           <img src={`/imgs/maps/${maplist.img_url}`} alt="" style={{ width: 200, height: 200 }} />
//                         </ListItemIcon>
//                         {/* <ListItemText primary="PAPUA NEW GUNIEA MAP"  style={{textAlign: 'center'}}/> */}
//                         <div className="list_text">
//                           <h1>{maplist.location_name}</h1>

//                         </div>
//                       </ListItem>


//                     </Link>
//                   );
//                 })}








//               </List>


//             </div>
//           </Paper>
//         </Grid>
//       </Grid>



//     </div>


//   )
// };


// export default Maps;