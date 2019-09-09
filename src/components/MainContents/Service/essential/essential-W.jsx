import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const essential_service_data = [
    {
        id: 0,
        title: 'BANKS',
        svgIcon: ''
    },
    {
        id: 1,
        title: 'MEDICL SERVICE',
        svgIcon: ''
    },
    {
        id: 2,
        title: 'EMBASSIES & HIGH COMMISSIONS',
        svgIcon: ''
    },
    {
        id: 3,
        title: 'SECURITY',
        svgIcon: ''
    }
]

const Essential = (props) => {

    console.log(props)



    return (
        <Fragment>
            <div>
                <h1>Left part of </h1>
            </div>
            <div>esential pages</div>

            <div>
                <Link to={`/services/essential/0`}>
                    {essential_service_data[0].id} |  {essential_service_data[0].title} |  {essential_service_data[0].svgIcon}
                </Link>

            </div>
            <div>
                <Link to={`/services/essential/medicl`}>
                    {essential_service_data[1].id} |  {essential_service_data[1].title} |  {essential_service_data[1].svgIcon}
                </Link>
            </div>
            <div>
                <Link to={`/services/essential/embassy`}>
                    {essential_service_data[2].id} |  {essential_service_data[2].title} |  {essential_service_data[2].svgIcon}
                </Link>
            </div>

            <div>
                <Link to={`/services/essential/security`}>
                    {essential_service_data[3].id} |  {essential_service_data[3].title} |  {essential_service_data[3].svgIcon}
                </Link>
            </div>







        </Fragment>


    )
}

export default Essential;