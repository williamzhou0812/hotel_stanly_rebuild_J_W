import {
    retailNamespace,
    essentialNamespace,
    transportNamespace,
    miningNamespace
} from "../../../Constants";
import BankIcon from "../icons/Services_Icons-Bank.svg";


export const essentialData = [
    {
        id: "Banks",
        serviceTypes: "essentials",
        title: "BANKS",
        url: essentialNamespace + "/:serid",
        img_url: BankIcon,
        isIcon: true
    },
    {
        id: "Embassies",
        serviceTypes: "essentials",
        title: "EMBASSIES",
        url: essentialNamespace + "/:serid",
        imgSrc: "./icons/._Services_Icons-Medical.svg"
    },
    {
        id: "Security",
        serviceTypes: "essentials",
        title: "SECURITY",
        url: essentialNamespace + "/:serid",
        imgSrc: "./icons/._Services_Icons-Medical.svg"
    },
    {
        id: "Medical",
        serviceTypes: "essentials",
        title: "MEDICAL",
        url: essentialNamespace + "/:serid",
        imgSrc: "./icons/._Services_Icons-Medical.svg"
    }
];

export const transportData = [
    {
        id: "Fright",
        serviceTypes: "transport",
        title: "FREIGHT SERVICES",
        url: transportNamespace + "/:serid",
        imgSrc: "./icons/._Services_Icons-Medical.svg"
    },
    {
        id: "Airline",
        serviceTypes: "transport",
        title: "PASSENGER AIRLINE SERVICES",
        url: transportNamespace + "/:serid",
        imgSrc: "./icons/._Services_Icons-Medical.svg"
    },
    {
        id: "Hire",
        serviceTypes: "transport",
        title: "VEHICLE HIRE",
        url: transportNamespace + "/:serid",
        imgSrc: "./icons/._Services_Icons-Medical.svg"
    },
    {
        id: "TransportInfo",
        serviceTypes: "transport",
        title: "MORE INFO",
        url: transportNamespace + "/:serid",
        imgSrc: "./icons/._Services_Icons-Medical.svg"
    }
];

export const  miningData = [
    {
        id: "Mines",
        serviceTypes: "mining",
        title: "MINES",
        url: miningNamespace + "/:serid",
        imgSrc: "./icons/._Services_Icons-Medical.svg"
    },
    {
        id: "Agriculture",
        serviceTypes: "mining",
        title: "AGRICULTURE",
        url: miningNamespace + "/:serid",
        imgSrc: "./icons/._Services_Icons-Medical.svg"
    },
    {
        id: "Petroleum",
        serviceTypes: "mining",
        title: "PETROLEUM & GAS",
        url: miningNamespace + "/:serid",
        imgSrc: "./icons/._Services_Icons-Medical.svg"
    },
    {
        id: "Departments",
        serviceTypes: "mining",
        title: "OFFICIAL DEPARTMENTS",
        url: miningNamespace + "/:serid",
        imgSrc: "./icons/._Services_Icons-Medical.svg"
    }
];

export const retailData = []

export const services = [

    { id: 1, name: "essential", title: "ESSENTIAL SERVICES", image_url: "/imgs/service/selections/EssentialServices.jpg",
        url: essentialNamespace, service_types: essentialData},
    { id: 2, name: "transport", title: "CAR HIRE & TRANSPORT", image_url: "/imgs/service/selections/CarHireTransport.jpg",
        url: transportNamespace, service_types: transportData },
    { id: 3, name: "mining", title: "MINING & RESOURCES", image_url: "/imgs/service/selections/MinesResources.jpg",
        url: miningNamespace, service_types: miningData },
    { id: 4, name: "retail", title: "RETAIL & SERVICES", image_url: "/imgs/service/selections/RetailServices.jpg",
        url: retailNamespace, service_types: retailData }


] 