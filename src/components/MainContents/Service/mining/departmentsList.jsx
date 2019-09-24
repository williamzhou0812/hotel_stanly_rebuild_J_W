import React from "react";
//import { connect } from "react-redux";
import SubsectionList from "../../List/SubsectionList";
import IconsMines from "../../icons/MINING_ICON.png";
import listIcon from "../../icons/ListIcon.png";

//import EventDetail from "./EventDetail";

import {
    transportNamespace,
    eventNamespace,
    toTitleCase,
    serviceNamespace,
    miningNamespace
} from "../../../../Constants";

class DepartmentsList extends React.Component {
    constructor(props) {
        super(props);
        //  this.state = { render: "", description: "Home" };
    }
    departmentsData = [
        {
            id: "1",
            title: "Papua New Guinea Chamber of Trade & Industry",
            img_url: "/imgs/service/officialdepartments/S3B1-PNGCTI.jpg"
        },
        {
            id: "2",
            title: "Department of Labour & Industrial Relations",
            img_url:
                "/imgs/service/officialdepartments/S3B2-DepartmentOfLabour.jpg"
        },
        {
            id: "3",
            title: "Department of Mineral Policy & Geohazards Management",
            img_url: "/imgs/service/officialdepartments/S3B3-DMPGM.jpg"
        },
        {
            id: "4",
            title: "Mineral Resources Authority",
            img_url:
                "/imgs/service/officialdepartments/S3B4-MineralResourcesAuthority.jpg"
        },
        {
            id: "5",
            title: "Investment Promotion Authority",
            img_url:
                "/imgs/service/officialdepartments/S3B5-InvestmentPromotionAuthority.jpg"
        },
        {
            id: "6",
            title: "PNG Chamber of Mines and Petroleum",
            img_url:
                "/imgs/service/officialdepartments/S3B6-PNGChamberOfMinesAndPetroleum.jpg"
        },
        {
            id: "7",
            title: "DepartmentOfPetroleumAndEnergy",
            img_url:
                "/imgs/service/officialdepartments/S3B7-DepartmentOfPetroleumAndEnergy.jpg"
        }
    ];

    render() {
        return (
            <div style={{ width: "100%", height: "100%" }}>
                <SubsectionList
                    numberOfEntries={4}
                    data={this.departmentsData}
                    // imageSrc={this.eventData.imgSrc}
                    to=""
                    namespace="officialDepartment"
                    imageKey="imageServiceType"
                    //  isImageArray={true}
                    sideButtons={[
                        {
                            title: "SERVICES TYPES",
                            icon: listIcon,
                            isLink: true,
                            link: serviceNamespace
                        },
                        {
                            title: "MINING & RESOURCES",
                            icon: IconsMines,
                            isLink: true,
                            link: miningNamespace
                        }
                    ]}
                    sideTitle="SERVICES"
                    mainTitle="OFFICIAL DEPARTMENTS"
                    evenDetailsProps={this.departmentsData}
                ></SubsectionList>
            </div>
        );
    }
}

export default DepartmentsList;
