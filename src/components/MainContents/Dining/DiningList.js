import React from "react";

import SubsectionList from "../List/SubsectionList";
import { diningNamespace } from "../../../Constants";
import "../List/MainSectionList.scss";



class DiningList extends React.Component {
    restaurants = [
        {
            id: 1,
            title: "THE CELLAR REASTAURANT",
            subTitle: "Continental, Indian & Steak",
            img_url: '/imgs/dining/restaurant_logos/R28-DININGLOGO_P.jpg',
            imagesrc: '/imgs/dining/restaurant_logos/R28-DININGLOGO_FiAepOq.png',
            phone: '+675 302 8200',
            address: 'The Shady Rest Hotel, Taurama Road, Boroko',
            synopsis: 'Boasting an exciting array of Asian and continental cuisine, The Cellar Restaurant is the place to be. Famous for its dosa lunches and all you can eat Curry Club Buffet, the restaurant is also known for its excellent coffee.',
            email: null,
            website: null,
            guide: {
                cuisine: 'Continental, Indian & Steak',
                takeaway: 'Yes',
                wifi: 'Yes',
                parking: 'Yes',
                courtesy: 'Yes',
                cards: 'MC,Visa',
                price: 'Entree: K12, Main: K25, Dessert: K10',
            }

        },
        {
            id: 2,
            title: "ASIA AROMAS",
            subTitle: "Chinese & Thai",
            img_url: '/imgs/dining/restaurant_logos/R1-DININGLOGO-Portrait_pLBb5ny.jpg',
            imagesrc: '/imgs/dining/restaurant_logos/R1-DININGLOGO-TEST4.png',
            phone: '+675 321 4780',
            address: 'Steamships Plaza, Downtown, Port Moresby',
            synopsis: 'Asia Aromas serves up a delicious blend of Thai and Chinese cuisine. Enjoy fine food, great service and spectacular views. Open Monday to Saturday, 11am to 2pm and 5pm to 10pm, and Sunday 10.30pm to 2.30pm.',
            guide: {
                cuisine: 'Chinese & Thai',
                takeaway: 'Yes',
                wifi: 'No',
                parking: 'Yes',
                courtesy: 'No',
                cards: 'Amex,MC,Visa',
                price: 'K16, Main: K30, Dessert: K12',
                location: 'The SHady Rest Hotel, Taurama Road, Boroko',
            }

        },
        {
            id: 3,
            title: "CUPPA",
            subTitle: "Café Cuisine",
            img_url: '/imgs/dining/restaurant_logos/R2-DININGLOGO_P.jpg',
            imagesrc: '/imgs/dining/restaurant_logos/R2-DININGLOGO_FiAepOq.png',
            phone: '+675 302 8666',
            address: 'Shop G48, Vision City Megamall, 4027 Waigani, National Capital, Papua New Guinea',
            synopsis: 'Cuppa’s relaxed vibe offers the perfect place to catch up over great coffee. Enjoy refreshments such as Cuppa’s big breakfasts, pasta, soup, sandwiches and more. Open 7 days, 9am to 9pm. Free wifi available. ',
            email: null,
            website: null,
            guide: {
                cuisine: 'Café Cuisine',
                takeaway: 'Yes',
                wifi: 'No',
                parking: 'Yes',
                courtesy: 'Yes',
                cards: 'Amex,MC,Visa',
                price: 'Entree: K18, Main: K32, Dessert: K12',
            }

        },
    ];

    render() {
        // const { restaurants } = this.props;
        return (
            <div
                className="section--bottom--animation"
                style={{ width: "100%", height: "100%", color: "white" }}
            >
                <SubsectionList
                    numberOfEntries={4}
                    data={this.restaurants}
                    // to={this.restaurants.url}
                    namespace="dining"
                    imageKey="logo"
                    isImageArray={false}
                    sideButtons={[
                        //{ title: "EVENTS", isLink: true, link: eventNamespace }
                    ]}
                    sideTitle="DINING"
                    mainTitle="LIST OF RESTAURANTS"
                //     renderText={this.restaurants => {
                //         return (
                //             <div>
                //     <div className="subSection--link">
                //         {this.restaurants.title.toUpperCase()}
                //     </div>
                //     <div className="subSection--link">
                //         {this.restaurants.cuisine}
                //     </div>
                // </div>
                //     );
                // }}
                >

                </SubsectionList>

            </div >
        );
    }
}

export default DiningList;


// const mapStateToProps = ({ restaurantList }) => {
//     const { restaurants } = restaurantList;
//     return {
//         restaurants
//     };
// };
// export default connect(
//     mapStateToProps,
//     null
// )(DiningList);
