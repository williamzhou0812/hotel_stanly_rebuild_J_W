import {
    retailNamespace,
    essentialNamespace,
    transportNamespace,
    miningNamespace
} from "../../../Constants";
import BankIcon from "../icons/Services_Icons-Bank.svg";
import EmbassyIcon from "../icons/Services_Icons-Embassy.svg";
import CommissionsIcon from "../icons/Services_Icons-Embassy.svg";
import MedicalIcon from "../icons/Services_Icons-Medical.svg";
import SecurityIcon from "../icons/Services_Icons-Security.svg";

import FreightIcon from "../icons/Services_Icons-Freight.svg";
import CarHireIcon from "../icons/Services_Icons-CarHire.svg";
import AirTransportIcon from "../icons/Services_Icons-AirTransport-05.svg";

import MinesIcon from "../icons/Services Icons-Mines.svg";
import OfficialDepartmentsIcon from "../icons/Services Icons-OfficialDepartments.svg";
import AricultureIcon from "../icons/Services_Icons-Agriculture.svg";
import PetroleumIcon from "../icons/Services_Icons-Petroleum.svg";


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
        img_url: EmbassyIcon,
        isIcon: true
    },
    {
        id: "HighCommissions",
        serviceTypes: "essentials",
        title: "HIGH COMMISIONS",
        url: essentialNamespace + "/:serid",
        img_url: CommissionsIcon,
        isIcon: true
    },
    {
        id: "EmergencyMedicalServices",
        serviceTypes: "essentials",
        title: "EMERGENCY MEDICAL SERVICES",
        url: essentialNamespace + "/:serid",
        img_url: MedicalIcon,
        isIcon: true
    },
    {
        id: "Security",
        serviceTypes: "essentials",
        title: "SECURITY",
        url: essentialNamespace + "/:serid",
        img_url: SecurityIcon,
        isIcon: true
    }
];

export const transportData = [
    {
        id: "AirTransportService",
        serviceTypes: "transport",
        title: "AIR TRANSPORT SERVICES (PASSNEGER)",
        url: transportNamespace + "/:serid",
        img_url: AirTransportIcon,
        isIcon: true
    },
    {
        id: "FreightServices",
        serviceTypes: "transport",
        title: "FREIGHT SERVICES",
        url: transportNamespace + "/:serid",
        img_url: FreightIcon,
        isIcon: true
    },
    {
        id: "VehicleHire",
        serviceTypes: "transport",
        title: "VEHICLE HIRE",
        url: transportNamespace + "/:serid",
        img_url: CarHireIcon,
        isIcon: true
    }
];

export const  miningData = [
    {
        id: "Mines",
        serviceTypes: "mining",
        title: "MINES",
        url: miningNamespace + "/:serid",
        img_url: MinesIcon,
        isIcon: true
    },
    {
        id: "OfficialDepartments",
        serviceTypes: "mining",
        title: "OFFICIAL DEPARTMENTS",
        url: miningNamespace + "/:serid",
        img_url: OfficialDepartmentsIcon,
        isIcon: true
    },
    {
        id: "Petroleum",
        serviceTypes: "mining",
        title: "PETROLEUM & GAS IN PNG",
        url: miningNamespace + "/:serid",
        img_url: PetroleumIcon,
        isIcon: true
    },
    {
        id: "Argiculture",
        serviceTypes: "mining",
        title: "AGRICULTURE",
        url: miningNamespace + "/:serid",
        img_url: AricultureIcon,
        isIcon: true
    }
];

export const retailData = [
    {
        id: 1,
        serviceTypes: "retail",
        title: "BRIAN BELL",
        url: miningNamespace + "/:serid",
        img_url: '/imgs/service/Retail/Retail/S4A-BrianBell.jpg'
    },
    {
        id: 2,
        serviceTypes: "retail",
        title: "KEYNOTE MUSIC",
        url: miningNamespace + "/:serid",
        img_url: '/imgs/service/Retail/Retail/S4B-KeynoteMusic.jpg'
    },
    {
        id: 3,
        serviceTypes: "retail",
        title: "STRICKLAND REAL ESATE",
        url: miningNamespace + "/:serid",
        img_url: '/imgs/service/Retail/Retail/S4C-StricklandRealEstate.jpg'
    },
    {
        id: 4,
        serviceTypes: "retail",
        title: "PRYDE FURNITURE",
        url: miningNamespace + "/:serid",
        img_url: '/imgs/service/Retail/Retail/S4D-PrydeFurniture.jpg'
    },
    {
        id: 5,
        serviceTypes: "retail",
        title: "RH TRADING",
        url: miningNamespace + "/:serid",
        img_url: '/imgs/service/Retail/Retail/S4E-RHTrading.jpg'
    },
    {
        id: 6,
        serviceTypes: "retail",
        title: "BNG TRADING",
        url: miningNamespace + "/:serid",
        img_url:'/imgs/service/Retail/Retail/S4F-BNGTrading.jpg'
    },
    {
        id: 7,
        serviceTypes: "retail",
        title: "PACIFIC PALMS PROPERTY",
        url: miningNamespace + "/:serid",
        img_url: '/imgs/service/Retail/Retail/S4G-PacificPalms.jpg'
    },
    {
        id: 8,
        serviceTypes: "retail",
        title: "VISION CITY MEGA MALL",
        url: miningNamespace + "/:serid",
        img_url: '/imgs/service/Retail/Retail/S4H-VisionCity.jpg'
    },
    {
        id: 9,
        serviceTypes: "retail",
        title: "MADNESS PHOTOGRAPHY",
        url: miningNamespace + "/:serid",
        img_url: '/imgs/service/Retail/Retail/S4I-MadnessPhotography.jpg'
    },
]

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