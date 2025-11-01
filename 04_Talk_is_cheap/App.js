import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * --Logo
 * --Nav Items
 * Body
 * --Search
 * --RestaurantContainer
 * ----RestaurantCard
 * ------Img
 * ------Name of Res, Star Rating, Cuisine, delivery time
 * Footer
 * --Copyright
 * --Links
 * --Address
 * --Contact
 */
// instead of props we can also write
//{resName, cuisine, ratings} inside ()


// const RestaurantCard = (props) => {
//     return (
//         <div className="res-card">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6_BRQq_qdgge0oOi-9NoaJFFxHfhO9MHDzQ&s"></img>
//             <h3>{props.resName}</h3>
//             <h3>{props.cuisine}</h3>
//             <h3>{props.ratings}</h3>
//         </div>
//     )
// }

// const Body = () => {
//     return (
//         <div className="body">
//             <div className="Search">Search</div>
//             <div className="res-container">
//                 <RestaurantCard/>
//                 <RestaurantCard resName="KFC" cuisine="American" ratings="4.3 stars Ratings"/>
//                 <RestaurantCard/>
//                 <RestaurantCard/>
//                 <RestaurantCard/>
//                 <RestaurantCard/>
//             </div>
//         </div>
//     )
// }

// const Header = () => {
//     return (
//         <div className="header">
//             <div>
//                 <img className="logo" src="https://marketplace.canva.com/EAGXsRURT9o/1/0/1600w/canva-yellow-and-brown-kitchen-food-logo-JrzZUwc_CLQ.jpg"/>
//             </div>
//             <div className="nav-items">
//                 <ul>
//                     <li>Home</li>
//                     <li>About Us</li>
//                     <li>Contact Us</li>
//                     <li>Cart</li>
//                 </ul>
//             </div>
//         </div>
//     )
// }

// const AppLayout = () => {
//     return (
//         <div className="app">
//             <Header/>
//             <Body/>
//         </div>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout/>);

//json file
const resObj = {
  data: {
    name: "Spice Villa",
    cuisine: ["Indian", "Chinese"],
    rating: "4.5",
    deliveryTime: "30 mins",
  },
};

const RestaurantCard = ({resData}) => {
    
    return (
        <div className="res-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6_BRQq_qdgge0oOi-9NoaJFFxHfhO9MHDzQ&s"></img>
            <h3>{resData.data.name}</h3>
            <h3>{resData.data.cuisine.join(", ")}</h3>
            <h3>{resData.data.rating}</h3>
            <h3>{resData.data.deliveryTime}</h3>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">
                <RestaurantCard resData ={resObj}/>
                <RestaurantCard resData ={resObj}/>
                <RestaurantCard resData ={resObj}/>
                <RestaurantCard resData ={resObj}/>
                <RestaurantCard resData ={resObj}/>
                <RestaurantCard resData ={resObj}/>
            </div>
        </div>
    )
}

const Header = () => {
    return (
        <div className="header">
            <div>
                <img className="logo" src="https://marketplace.canva.com/EAGXsRURT9o/1/0/1600w/canva-yellow-and-brown-kitchen-food-logo-JrzZUwc_CLQ.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
