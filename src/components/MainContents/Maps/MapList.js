import React, {Fragment, useState} from "react";
import UpButton from "../../MainContents/Destination/icons/UpExploreButton.png";
import DownButton from "../../MainContents/Destination/icons/DownExploreButton.png";
import {
    SUBSECTION_LIST_ENTRIES,
    MediumOrange,
    shiftArray,
    HeavyBlue,
    HeavyOrange,
    LightOrange,
    LightBlue,
    MAX_ZOOM_LEVEL,
    MAP_HEIGHT,
    MAP_WIDTH,
    HOVER_DELAY
} from "../../../Constants";
import { Modal } from "react-bootstrap";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CloseIcon from "@material-ui/icons/CloseOutlined";
import ReactImageMagnify from "react-image-magnify";
import "../../MainContents/List/MainSectionList.scss";

import MapModal from './MapModal';
// Import TEMP MAP IMAGES

import PNG from './mapsImg/Port-Moresby-Map-PORTMORESBY.png';
import PORT_MORESBBY from './mapsImg/Port-Moresby-Map-PORTMORESBY.png';
// import PORT_MORESBBY_AIRPORT from './mapsImg/PortMoresbyAirportMap.png';
import LAE_MAP from './mapsImg/Lae-Map-LAE.png';
import MADANG_MAP from './mapsImg/Madang-Map-MADANG.png';

import  MOUNTHAGEN from './mapsImg/Mount-Hagen-Map-MOUNTHAGEN.png';

import KOKAPU from './mapsImg/Kokopo-Map-KOKOPO.png';

import GOROKA from './mapsImg/Goroka-Map-GOROKA.png';
import ALOTI from './mapsImg/Alotau-Map-ALOTAU.png';
import KIVI from './mapsImg/Kavieng-Map-KAVIENG.png';
import KIMBE from './mapsImg/Alotau-Map-ALOTAU.png';

import WEWK from './mapsImg/Wewak-Map-WEWAK.png';
import BUKA from './mapsImg/BUKA-PNG-Map_y8cFpiC.png';
import SubsectionList from "../List/SubsectionList";
import { setServers } from "dns";

import './Maps.scss';

// BUKA MAP
// Autonomous Region of Bougainville
// const temp_mapList_Data = [
//     {
//             title: 'PAPUA NEW GUNIEA MAP',
//             img_url: PNG,
//             map: false
//           },
//           {
//             title: 'PORT MORESBY AIRPORT',
//             img_url: PORT_MORESBBY
//           },
//           {
        
//             title: 'PORT MORESBY MAP National Capital District',
//             img_url: PORT_MORESBBY_AIRPORT
//           },
//           {
        
//             title: 'LAE MAP Morobe',
//             img_url: LAE_MAP
//           },
//           {
//             title: 'MADANG MAP Madang',
//             img_url: MADANG_MAP
//           },
//           {
//             title: 'MOUNT HAGEN MAP Western Highlands',
//             img_url: MOUNTHAGEN
//           },
//           {
//             title: 'KOKPO MAP East New Britain',
//             img_url: KOKAPU
//           },
//           {
//             title: 'GOROKA MAP Eastern Highlands',
//             img_url: GOROKA
//           },
//           {
//             title: 'ALOTAU MAP Milne Bay Province',
//             img_url: ALOTI
//           },
//           {
//             title: 'KIMBE MAP West New Britain',
//             img_url: KIMBE
//           },
//           {
//             title: 'KAVILENG MAP New Ireland Province',
//             img_url: KIVI
//           },
//           {
//             title: 'WEWAK MAP East Sepik Province',
//             img_url: WEWK
//           },
//           {
//             title: 'BUKA MAP Autonomous Region of Bougainville',
//             img_url: BUKA
//           }
        
// ];




const styles = {
    horizontalVerticalCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}


// State 



/// Function goes herer 

// const goUp = () => {

//        //

// }

// const goDown = () => {
//     // 
// }



// const closeMap = (index) => {
//     //map close
//     console.log('close Map ' + index)
// }
 
class  MapList extends React.Component { 

            state = {
               
                mapList : [
                         {
                            title: 'PAPUA NEW GUNIEA MAP',
                            img_url: PNG,
                            map: false,
                          },
                          {
                            title: 'PORT MORESBY AIRPORT',
                            img_url: PORT_MORESBBY,
                            map: false

                          },
                        //   {
                        
                        //     title: 'PORT MORESBY MAP National Capital District',
                        //     img_url: PORT_MORESBBY_AIRPORT,
                        //     map: false

                        //   },
                          {
                        
                            title: 'LAE MAP Morobe',
                            img_url: LAE_MAP,
                            map: false

                          },
                          {
                            title: 'MADANG MAP Madang',
                            img_url: MADANG_MAP,
                            map: false

                          },
                          {
                            title: 'MOUNT HAGEN MAP Western Highlands',
                            img_url: MOUNTHAGEN,
                            map: false

                          },
                          {
                            title: 'KOKPO MAP East New Britain',
                            img_url: KOKAPU,
                            map: false

                          },
                          {
                            title: 'GOROKA MAP Eastern Highlands',
                            img_url: GOROKA,
                            map: false

                          },
                          {
                            title: 'ALOTAU MAP Milne Bay Province',
                            img_url: ALOTI,
                            map: false

                          },
                          {
                            title: 'KIMBE MAP West New Britain',
                            img_url: KIMBE,
                            map: false

                          },
                          {
                            title: 'KAVILENG MAP New Ireland Province',
                            img_url: KIVI,
                            map: false

                          },
                          {
                            title: 'WEWAK MAP East Sepik Province',
                            img_url: WEWK,
                            map: false

                          },
                          {
                            title: 'BUKA MAP Autonomous Region of Bougainville',
                            img_url: BUKA,
                            map: false

                          }
                        
                ],
                data: [],
                map: false
    }

         
        


goUp = () => {

       //

}

goDown = () => {
    // 
}



closeMap = (index) => {
    //map close
    this.setState({
        mapList: [

            ...this.state.mapList.slice(0, index),
            {...this.state.mapList[index], map: false},
            ...this.state.mapList.slice(index + 1)
        ] 

    })
    console.log('close Map ' + index)
}

openMap  = (index) =>  {

        // check click handel Index number 
         console.log(index); 

         // Stroe Singler data

         let mapDetail = this.state.mapList[index];

         // check MapDetail 

         console.log(mapDetail)

         // upData Currente State

        this.setState({
            mapList: [

                ...this.state.mapList.slice(0, index),
                {...this.state.mapList[index], map: true},
                ...this.state.mapList.slice(index + 1)
            ] 

        })

        
       console.log(this.state.mapList);

      //  data: mapDetail,
            // map: true

        // get Array index id and show on the map 
    
        
        // console.log('setstate ', index)
        // console.log(this.state.data[index].map)
        // this.setState({
         
        //       data: [
        //          ...this.state.data,
        //         { ...this.state.data, maps: true }
                  
        //       ]
              
            
        //  })
        //  console.log(this.state)
       
    }
    render() {
        const { mapList } = this.state;
        const itemHeight = `${100 / SUBSECTION_LIST_ENTRIES}%`;

        return (
            <Fragment> 
               
               <div className="section--bottom--animation" 
                    style={{width:"100%", height:"100%", display:"flex"}}
               >    
                    <div
                        style={{
                            backgroundColor: HeavyOrange,
                            width: "14%",
                            boxShadow: '9.899px 0px 7px 0px rgba(0,0,0,0.6)',
                            zIndex:1,
                            display: 'flex',
                            flexDirection: 'column'
                        }} 
        
                    >
                            <div
                                style={{
                                    flex: 1,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems:' center',
                                    color:'white',
                                    fontSize: '40pt',
                                    fontWeight: 500,
                                    fontSize: "4vw",
                                    letterSpacing: '10px'
                                }}  
                            >
                                <span style={{transform: 'rotate(-90deg)'}}>MAPS</span> 
                            </div>
                    </div>
                    <div style={{width: '86%'}}>
                        <div style={{
                            height: '8%',
                            backgroundColor: LightOrange,
                            color: 'white',
                            ...styles.horizontalVerticalCenter,
                            fontSize: '20pt',
                            letterSpacing: 5
                        }}>
                             LIST OF MAPS
                        </div>
                        <div style={{ 
                            height: '6%',
                            backgroundColor: MediumOrange,
                            ...styles.horizontalVerticalCenter
    
                        }}
                            onClick={this.goUp}
                        >
                            <img  src={UpButton} style={{width: '5%'}} alt="up" />
                            
    
                        </div>
                        <div   style={{height: '54vh', overflow:'hidden'}} >
                                <div style={{
                                        height: '100%',
                                      
                                        overflow:'auto',
                                        marginRight: '-30px',
    
                                }}>
                                        { mapList.map((item, index)=> {
                                            const isLastItem = index === mapList.length - 1;
    
                                                return ( 
                                                    
                                                    <div style={{height: itemHeight, margin: 0}} 
                                                         key={`${index}`}
                                                    >
                                                        <div style={{
                                                            height: '100%',
                                                            color: 'white',
                                                            display:'flex',
                                        
                                                        }}
                                                            onClick={() => this.openMap(index)}
                                                        >
                                                            <div 
                                                                style={{
                                                                    width: '33%',
                                                                    backgroundImage:`url(${item.img_url})`,
                                                                    backgroundSize: "cover",
                                                                    backgroundPosition: "center",
                                                                    borderBottom: isLastItem ? 'none' : `1px solid ${LightBlue}`
                                                                }}
                                                            />
                                                             <div style={{
                                                                 width: "67%",
                                                                 backgroundColor: HeavyBlue,
                                                                 display: 'flex',
                                                                 alignItems: 'center',
                                                                 paddingLeft: 35,
                                                                 fontSize: '24px',
                                                                 letterSpacing: '3px',
                                                                 borderBottom: isLastItem ? 'none' : '1px solid rgb(183, 223, 228)'
                                                             }} >
                                                                <div style={{ 
                                                                    height: "100%",
                                                                    display: "flex",
                                                                    flexDirection: "column",
                                                                    justifyContent: "center",
                                                                    alignItems: "center",
                                                                    fontSize: "2.1vw"
                                                                }}>
                                                                        {item.title.toUpperCase()}
                                                                 </div>
    
                                                             </div>
    
                                                        </div>
                                                        <Modal  style={{margin:0, width:"100vw"}}
                                                                show={mapList[index].map}
                                                                onHide={() => this.closeMap(index)}
                                                                dialogClassName="map-modal"
                                                            >
                                                                <Modal.Body>
                                                                    <div
                                                                        style={{ 
                                                                    
                                                                            position: 'absolute',
                                                                            right: 0,
                                                                            top: 0
                                                                        }}  
                                                                    >
                                                                        <MuiThemeProvider>
                                                                            <CloseIcon 
                                                                                onClick={() => this.closeMap(index)}
                                                                                color="white"
                                                                                style={{
                                                                                    padding: 0,
                                                                                    height: 32,
                                                                                    width: 32
                                                                                }}
                                                                            /> 
                                                                        </MuiThemeProvider>
                                                                    </div>
                                                                    <div 
                                                                        style={{
                                                                            backgroundColor: HeavyOrange,
                                                                            fontSize: '20pt',
                                                                            padding: 20,
                                                                            textAlign: 'center'
                                                                        }}
                                                                    >
                                                                        MAP OF <br/>
                                                                        {item.title.toUpperCase()}
                                                                    </div>
                                                                    <ReactImageMagnify 
                                                                    
                                                                        {...{
                                                                            smallImage: {
                                                                                alt: `Map of ${item.title.toUpperCase()}`,
                                                                                isFluidWidth: true,
                                                                                src: item.img_url
                                                                            },
                                                                            largeImage: { 
                                                                                src: item.img_url,
                                                                                width: MAX_ZOOM_LEVEL * MAP_WIDTH,
                                                                                height: MAX_ZOOM_LEVEL * MAP_HEIGHT
                                                                            },
                                                                            hoverOfDelayInMs: HOVER_DELAY,
                                                                            enlargedImagePosition: 'over',
                                                                            isHintEnabled: true,
                                                                            isActivatedOnTouch: true,
                                                                            shouldHideHintAfterFirstActivation: false,
                                                                            hintTexMouse: 'Long-Touch to Zoom'
                                                                        }}
                                                                     
                                                                        
                                                                    /> 
                                                                       <div style={{
                                                                           backgroundColor: 'rgb(13, 109. 121)',
                                                                           color: 'rgb(107,193,209)',
                                                                           padding: 5,
                                                                           textAlign: 'center'
                                                                           }} 
                                                                        >
                                                                            TAP OUTSIDE OF MAP TO CLOSE  
                                                                       </div>
    
                                                                </Modal.Body>
    
    
                                                            </Modal>
    
    
                                                    </div>
    
                                                  
                                              
                                                );
                                            })}
    
                                </div>
                        </div>
                        <div style={{
                            height: '6%',
                            backgroundColor: MediumOrange,
                            ...styles.horizontalVerticalCenter
                    }}
                        onClick={this.goDown}
                     > 
                     <img src={DownButton}
                          style={{width: '5%'}}
                          alt="Down"
                     />
                    </div>
    
                    </div>
                 
    
               </div> 
    
    
              
    
            </Fragment>
        )

    }

   
}

export default MapList;