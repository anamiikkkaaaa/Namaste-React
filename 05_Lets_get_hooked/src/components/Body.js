import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState} from 'react';
const Body = () => {

//local state variable scope: inside that function
const [listOfRestaurant, setListOfRestaurant] = useState(resList);

//normal js variable
let listOfRestaurants = [
{
"info": {
"id": "770309",
"name": "Keventers - Milkshakes & Desserts",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/8/0d7262b9-be26-461b-a713-4b28ec97fdfa_770309.JPG",
"costForTwo": "₹300 for two",
"cuisines": [
"Beverages",
"Ice Cream",
"Desserts",
"Healthy Food"
],
"avgRating": 4.4,
"deliveryTime": 27,
}
},
{
"info": {
"id": "123456",
"name": "Top N Town - Milkshakes & Desserts",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/8/0d7262b9-be26-461b-a713-4b28ec97fdfa_770309.JPG",
"costForTwo": "₹300 for two",
"cuisines": [
"Beverages",
"Ice Cream",
"Desserts",
"Healthy Food"
],
"avgRating": 4.2,
"deliveryTime": 27,
}
}
];
    return (
      <div className="body">
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
                const filteredListOfRestaurant = listOfRestaurant.filter(
                    (res)=>res.info.avgRating>4.3
                );
                setListOfRestaurant(filteredListOfRestaurant);
              console.log(listOfRestaurant);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className="res-container">
          {/**js map function below hence curly braces*/}
          {/** functional programming: map filter reduce*/}
          {listOfRestaurant.map((restaurant) => (
            <RestaurantCard resData={restaurant} key={restaurant.info.id} />
          ))}
        </div>
      </div>
    );
}

export default Body;

