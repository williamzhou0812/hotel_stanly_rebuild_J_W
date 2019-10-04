import {
    retailNamespace,
    essentialNamespace,
    transportNamespace,
    miningNamespace
} from "../../../Constants";


export const services = [

    { id: 1, title: "ESSENTIAL SERVICES", image_url: "/imgs/service/selections/EssentialServices.jpg",
        url: essentialNamespace},
    { id: 2, title: "CAR HIRE & TRANSPORT", image_url: "/imgs/service/selections/CarHireTransport.jpg",
        url: transportNamespace },
    { id: 3, title: "MINING & RESOURCES", image_url: "/imgs/service/selections/MinesResources.jpg",
        url: miningNamespace },
    { id: 4, title: "RETAIL & SERVICES", image_url: "/imgs/service/selections/RetailServices.jpg",
        url: retailNamespace }


] 