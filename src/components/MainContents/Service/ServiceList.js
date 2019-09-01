import React from 'react'
//import { connect } from "react-redux";
import { essentialNamespace, getServiceTypeListBasedLocation, DECIMAL_RADIX, getServiceTypeDetailBasedLocation, serviceNamespace } from '../../Constants';
import ServiceTypesIcon from '../Dining/icons/RestaurantListIcon.png';
import ServiceBranch from './ServiceBranch';
import SubsectionList from "../List/SubsectionList";

class ServiceList extends React.Component {
    constructor(props) {
        super(props);
    }
    bankData = [
        { id: 'ANZ', serviceTypes: 'banks', title: 'ANZ BANK', url: essentialNamespace + "/:serid" + "/:serid", imgSrc: './icons/MinesResources.png' },
        { id: 'Westpac', serviceTypes: 'banks', title: 'WESTPAC BANK', url: essentialNamespace + "/:serid" + "/:serid", imgSrc: './icons/._Services_Icons-Medical.svg' },
        { id: 'South Pacific', serviceTypes: 'banks', title: 'BANK OF SOUTH PACIFIC', url: essentialNamespace + "/:serid" + "/:serid", imgSrc: './icons/._Services_Icons-Medical.svg' },
        { id: 'BanksInfo', serviceTypes: 'banks', title: 'MORE INFO', url: essentialNamespace + "/:serid" + "/:serid", imgSrc: './icons/._Services_Icons-Medical.svg' }
    ];
    EmbassyData = [
        { id: 'Indonesian Embassy', serviceTypes: 'embassy', title: 'INDONESIAN EMBASSY', url: essentialNamespace + "/:serid", imgSrc: './icons/._Services_Icons-Medical.svg' },
        { id: 'French Embassy', serviceTypes: 'embassy', title: 'FRENCH EMBASSY', url: essentialNamespace + "/:serid", imgSrc: './icons/._Services_Icons-Medical.svg' },
        { id: 'Malaysian Embassy', serviceTypes: 'embassy', title: 'MALAYSIAN', url: essentialNamespace + "/:serid", imgSrc: './icons/._Services_Icons-Medical.svg' },
        { id: 'Chinese Embassy', serviceTypes: 'embassy', title: 'CHINESE EMBASSY', url: essentialNamespace + "/:serid", imgSrc: './icons/._Services_Icons-Medical.svg' }
    ];
    // miningData = [
    //     { id: 1, serviceTypes: 'mining', title: 'MINES', url: miningNamespace + "/:serid", imgSrc: './icons/._Services_Icons-Medical.svg' },
    //     { id: 2, serviceTypes: 'mining', title: 'AGRICULTURE', url: miningNamespace + "/:serid", imgSrc: './icons/._Services_Icons-Medical.svg' },
    //     { id: 3, serviceTypes: 'mining', title: 'PETROLEUM & GAS', url: miningNamespace + "/:serid", imgSrc: './icons/._Services_Icons-Medical.svg' },
    //     { id: 4, serviceTypes: 'mining', title: 'OFFICIAL DEPARTMENTS', url: miningNamespace + "/:serid", imgSrc: './icons/._Services_Icons-Medical.svg' }
    // ];
    // retailData = [
    //     { id: 1, serviceTypes: 'mining', title: 'MINES', url: miningNamespace + "/:serid", imgSrc: './icons/._Services_Icons-Medical.svg' },
    //     { id: 2, serviceTypes: 'mining', title: 'AGRICULTURE', url: miningNamespace + "/:serid", imgSrc: './icons/._Services_Icons-Medical.svg' },
    //     { id: 3, serviceTypes: 'mining', title: 'PETROLEUM & GAS', url: miningNamespace + "/:serid", imgSrc: './icons/._Services_Icons-Medical.svg' },
    //     { id: 4, serviceTypes: 'mining', title: 'OFFICIAL DEPARTMENTS', url: miningNamespace + "/:serid", imgSrc: './icons/._Services_Icons-Medical.svg' }
    // ];


    render() {

        if (this.props.location.pathname.includes("banks")) {
            // const essentialData =
            return (
                <div style={{ height: "54vh" }}>
                    <SubsectionList
                        numberOfEntries={4}
                        data={this.bankData}
                        imageSrc={this.bankData.imgSrc}
                        to={this.bankData.url}
                        namespace="banks"
                        imageKey="imageServiceType"
                        isImageArray={true}
                        // sideButtons={[
                        //     { title: "SERVICE TYPES", icon: ServiceTypesIcon, isLink: true, link: serviceNamespace }
                        // ]}
                        sideTitle="SERVICES"
                        mainTitle="BANKS"
                    />

                </div>

            );

            // } else if (this.props.location.pathname.includes(essentialNamespace)) {
            //     return (
            //         <div style={{ height: "54vh" }}>
            //             <SubsectionList
            //                 numberOfEntries={4}
            //                 data={this.essentialData}
            //                 imageSrc={this.essentialData.imgSrc}
            //                 to={this.essentialData.url}
            //                 namespace="essential"
            //                 imageKey="imageServiceType"
            //                 isImageArray={true}
            //                 sideButtons={[
            //                     { title: "SERVICE TYPES", icon: ServiceTypesIcon, isLink: true, link: serviceNamespace }
            //                 ]}
            //                 sideTitle="SERVICES"
            //                 mainTitle="ESSENIIAL SERVICES"
            //             />

            //         </div>);

            // } else if (this.props.location.pathname.includes(miningNamespace)) {
            //     return (
            //         <div style={{ height: "54vh" }}>
            //             <SubsectionList
            //                 numberOfEntries={4}
            //                 data={this.miningData}
            //                 imageSrc={this.miningData.imgSrc}
            //                 to={this.miningData.url}
            //                 namespace="mining"
            //                 imageKey="imageServiceType"
            //                 isImageArray={true}
            //                 sideButtons={[
            //                     { title: "SERVICE TYPES", icon: ServiceTypesIcon, isLink: true, link: serviceNamespace }
            //                 ]}
            //                 sideTitle="SERVICES"
            //                 mainTitle="MINING SERVICES"
            //             />

            //         </div>);
        }
        else {
            return (
                <div>AAAAAA</div>
            )
        }
    }


}
//export default connect(mapStateToProps, null)(ServiceList);
export default ServiceList;