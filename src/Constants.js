import React from "react";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
//  import LeftIcon from "material-ui/svg-icons/navigation/chevron-left";
//  import RightIcon from "material-ui/svg-icons/navigation/chevron-right";
//  import PlayIcon from "material-ui/svg-icons/av/play-arrow";
//  import PauseIcon from "material-ui/svg-icons/av/pause";
// import { ChevronLeftIcon, RightIcon, PlayIcon, PauseIcon } from '@material-ui/icons';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

 import ImageGallery from "react-image-gallery";
//import "../node_modules/react-image-gallery/styles/css/image-gallery-no-icon.css";
// import Rating from "react-rating";
// import FullStar from "material-ui/svg-icons/toggle/star";
// import EmptyStar from "material-ui/svg-icons/toggle/star-border";
import EssentialIcon from "./components/MainContents/Service/icons/ESSENTIAL_ICON.png";
import MiningIcon from "./components/MainContents/Service/icons/MINING_ICON.png";
import RetailIcon from "./components/MainContents/Service/icons/RETAIL_ICON.png";
import TransportIcon from "./components/MainContents/Service/icons/TRANSPORT_ICON.png";

//const RGBA color
export const HeavyOrange = "rgb(221, 120, 35)";
export const MediumOrange = "rgb(220, 156, 56)";
export const LightOrange = "rgb(225, 173, 56)";
export const HeavyBlue = "rgb(5, 151, 165)";
export const MediumBlue = "rgb(73, 175, 189)";
export const LightBlue = "rgba(73, 175, 189, 0.4)";
export const LightBlueButtonBackground = "rgb(1, 155, 167)";
export const ExtraHeavyBlueGreen = "rgb(5, 140, 155)";
export const SelectedBorderColor = "rgb(183, 223, 228)";
export const LightBlueGreen = "rgb(1, 155, 167)";
export const DarkHeavyBlue = "rgb(5, 140, 155)";



// CONSTANT FOR SPA ROUTING
export const accomodationNamespace = "/accomodations";
export const eventNamespace = "/events";
export const diningNamespace = "/dining";
export const destinationNamespace = "/destinations";
export const serviceNamespace = "/services";
export const triviaNamespace = "/trivia";
export const mapListNamespace = "/maplist";
export const activityNamespace = "/activities";
export const essentialNamespace = `${serviceNamespace}/essential`;
export const transportNamespace = `${serviceNamespace}/transport`;
export const retailNamespace = `${serviceNamespace}/retail`;
export const miningNamespace = `${serviceNamespace}/mining`;
export const airportMapNamespace = "/airportmap";
export const airportInfoNamespace = "/airportinfo";
export const searchResultNamespace = "/searchresult";
export const hotelDetailNamespace = "/hoteldetail";
export const directoryListNamespace = "/directorylist";
export const videosNamespace = "/videos";


export const SUBSECTION_LIST_ENTRIES = 6;
export const timezone = "Pacific/Port_Moresby";

export const HOVER_DELAY = 2000;
export const DECIMAL_RADIX = 10;
// export const SECTION_LIST_ENTRIES = 3;
// export const SUBSECTION_LIST_ENTRIES = 6;
// export const SEARCH_ENTRIES = 4;
export const SLIDE_INTERVAL = 5000; //Every 5 seconds change image in ImageGallery
// export const AD_SLIDE_INTERVAL = 7000; //Every 7 seconds change image in ImageGallery for Advertisements
export const IDLE_TIME = 90000; //1.5 Minutes TIMEOUT
export const MAX_ZOOM_LEVEL = 2;
export const MAP_WIDTH = 1080;
export const MAP_HEIGHT = 607.5;
export const MONTH_INDEX = {
    JANUARY: 1,
    FEBRUARY: 2,
    MARCH: 3,
    APRIL: 4,
    MAY: 5,
    JUNE: 6,
    JULY: 7,
    AUGUST: 8,
    SEPTEMBER: 9,
    OCTOBER: 10,
    NOVEMBER: 11,
    DECEMBER: 12
};



function gatherImages(images) {
    return images.map(image => {
        return { original: image.imageFile };
    });
}


export function getServiceTypeListBasedLocation(pathname, serviceTypes) {
    if (pathname.includes(essentialNamespace)) {
        return {
            title: "ESSENTIAL SERVICES",
            icon: EssentialIcon,
            namespace: essentialNamespace,
            listKey: "essentialServiceServiceType",
            imageKey: "imageEssentialService",
            mapKey: "mapEssentialService"
        };
    } else if (pathname.includes(miningNamespace)) {
        return {
            title: "MINING & RESOURCES",
            icon: MiningIcon,
            namespace: miningNamespace,
            listKey: "miningServiceType",
            imageKey: "imageMining",
            mapKey: "mapMining"
        };
    } else if (pathname.includes(retailNamespace)) {
        return {
            title: "RETAIL & SERVICES",
            icon: RetailIcon,
            namespace: retailNamespace,
            listKey: "retailServiceType",
            imageKey: "imageRetail",
            mapKey: "mapRetail"
        };
    } else if (pathname.includes(transportNamespace)) {
        return {
            title: "CAR HIRE & TRANSPORT",
            icon: TransportIcon,
            namespace: transportNamespace,
            listKey: "transportationServiceType",
            imageKey: "imageTransportation",
            mapKey: "mapTransportation"
        };
    }
}

export function getServiceTypeDetailBasedLocation(pathname) {
    if (pathname.includes(essentialNamespace)) {
        return {
            title: "ESSENTIAL SERVICES",
            icon: EssentialIcon,
            namespace: essentialNamespace,
            listKey: "essentialServiceServiceType",
            imageKey: "imageEssentialService",
            mapKey: "mapEssentialService"
        };
    } else if (pathname.includes(miningNamespace)) {
        return {
            title: "MINING & RESOURCES",
            icon: MiningIcon,
            namespace: miningNamespace,
            listKey: "miningServiceType",
            imageKey: "imageMining",
            mapKey: "mapMining"
        };
    } else if (pathname.includes(retailNamespace)) {
        return {
            title: "RETAIL & SERVICES",
            icon: RetailIcon,
            namespace: retailNamespace,
            listKey: "retailServiceType",
            imageKey: "imageRetail",
            mapKey: "mapRetail"
        };
    } else if (pathname.includes(transportNamespace)) {
        return {
            title: "CAR HIRE & TRANSPORT",
            icon: TransportIcon,
            namespace: transportNamespace,
            listKey: "transportationServiceType",
            imageKey: "imageTransportation",
            mapKey: "mapTransportation"
        };
    }
}

export function shiftArray(list, by) {
    let temp = Array.apply(null, Array(list.length)).map(
        Number.prototype.valueOf,
        0
    );
    if (list.length <= 1 || by === 0) {
        return list;
    }
    // console.log('Need to manipulate list of ', list);
    // console.log('Manipulate by ', by);
    list.forEach((item, i) => {
        let to = i + by;
        if (to >= list.length) {
            while (to >= list.length) {
                to -= list.length;
            }
        } else if (to < 0) {
            while (to < 0) {
                to += list.length;
            }
        }
        // console.log(`Item[${i}] moved to index ${to}`);
        temp[to] = item;
        // console.log('Current output array: ', temp);
        // console.log('\n\n');
    });
    return temp;
}

export function addNullItemToData(items, minNumber) {
    if (!items) {
        return [];
    }
    if (items.length === 0) {
        return [];
    }
    if (items.length < minNumber) {
        return items.concat(Array(minNumber - items.length).fill(null));
    } else {
        return [...items];
    }
}

export function getRandomImage(images, return_url = true) {
    let index;
    if (images.length === 1) {
        index = 0;
    } else if (images.length === 0) {
        return null;
    } else {
        index = Math.floor(Math.random() * images.length);
    }
    if (return_url) {
        return images[index].imageFile;
    } else {
        return images[index];
    }
}

function sortByKey(array, key) {
    return array.sort(function (a, b) {
        let x = a[key];
        let y = b[key];
        return x < y ? -1 : x > y ? 1 : 0;
    });
}

function separateItems(array, orderKey) {
    return [
        array.filter(item => item[orderKey] === 0),
        array.filter(item => item[orderKey] !== 0)
    ];
}
function insertItem(array, data, to) {
    array.splice(to, 0, data);
}

export function randomiseItems(array) {
    return shuffle(Array.from(array.keys())).map(item => array[item]);
}

export function shuffle(array) {
    let tmp,
        current,
        top = array.length;
    if (top)
        while (--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
        }
    return array;
}

function combineItems(randomised, constantItems, orderKey) {
    let output = randomiseItems(randomised);
    constantItems.forEach((item, _) => {
        if (item[orderKey] > 0) {
            insertItem(output, item, item[orderKey] - 1);
        }
    });
    return output;
}
export function randomiseButKeepOrder(items, orderKey = "order") {
    let temp = sortByKey(items, orderKey);
    let separated = separateItems(temp, orderKey);
    const randomised = separated[0];
    const constantItems = separated[1];
    return combineItems(randomised, constantItems, orderKey);
}


export function imageGallery(
    images,
    imageWidth,
    imageHeight,
    slideInterval = SLIDE_INTERVAL
) {
    return (
        // <img>Image gallery</img>
        <MuiThemeProvider>
            <ImageGallery
                items={gatherImages(images)}
                autoPlay={true}
                slideInterval={slideInterval}
                lazyLoad={true}
                renderLeftNav={(onClick, _disabled) => (
                    <ChevronLeftIcon
                        className="image-gallery-left-nav"
                        onClick={onClick}
                        color={HeavyOrange}
                        style={{ padding: 0, height: 64, width: 64, color: HeavyOrange }}
                    />
                )}
                renderRightNav={(onClick, _disabled) => (
                    <ChevronRightIcon
                        className="image-gallery-right-nav"
                        onClick={onClick}
                        color={HeavyOrange}
                        style={{ padding: 0, height: 64, width: 64, color: HeavyOrange }}
                    />
                )}
                renderPlayPauseButton={(onClick, isPlaying) => {
                    if (isPlaying) {
                        return (
                            <PauseIcon
                                className="image-gallery-play-button active"
                                onClick={onClick}
                                color={HeavyOrange}
                                style={{ padding: 0, height: 64, width: 64, color: HeavyOrange }}
                            />
                        );
                    } else {
                        return (
                            <PlayArrowIcon
                                className="image-gallery-play-button"
                                onClick={onClick}
                                color={HeavyOrange}
                                style={{ padding: 0, height: 64, width: 64, color: HeavyOrange }}
                            />
                        );
                    }
                }}
                renderItem={item => {
                    return (
                        <div className="image-gallery-image">
                            <img
                                src={item.original}
                                alt={item.originalAlt}
                                srcSet={item.srcSet}
                                sizes={item.sizes}
                                title={item.originalTitle}
                                style={{
                                    width: imageWidth,
                                    height: imageHeight
                                }}
                            />
                        </div>
                    );
                }}
                showThumbnails={false}
                showPlayButton={true}
                showFullscreenButton={false}
            />
        </MuiThemeProvider>
    );
}

export function removeHttp(website) {
    return website.replace(/^https?:\/\//i, "");
}

export function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
}