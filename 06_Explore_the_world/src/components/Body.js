import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //local state variable scope: inside that function
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const fetchData = async () => {
    const data = await fetch(
      //paste this url in from of swiggy api url 
      //to handle cors issue
      //from corsproxy.io
      //it has a limit, 40 something requests per minutes
      //so that we don't have to use cors extension
      //https://corsproxy.io/?url=https://example.com
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7509875&lng=75.8802639&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    //Optional chaining
    // In optional chaining (?.), you use it before a
    // property name to safely access it only if the
    // previous value isn’t null or undefined
    //returns undefined instead of throwing error

    setListOfRestaurant(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  //terniary operator
  return listOfRestaurant == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              //Filter the Restaurant cards and update the UI
              //searchText
              const filteredRestaurant = listOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredRestaurant(filteredRestaurant);
            }}
            className="search-btn"
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredListOfRestaurant = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredRestaurant(filteredListOfRestaurant);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;

// import RestaurantCard from "./RestaurantCard";
// import {useState, useEffect} from 'react';
// import Shimmer from "./Shimmer";

// const Body = () => {
//   //local state variable scope: inside that function
//   const [listOfRestaurant, setListOfRestaurant] = useState([]);

//   const fetchData = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7509875&lng=75.8802639&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     )

//     const json = await data.json();
//     console.log(json);
//     //Optional chaining
//     // In optional chaining (?.), you use it before a
//     // property name to safely access it only if the
//     // previous value isn’t null or undefined
//     //returns undefined instead of throwing error

//     setListOfRestaurant(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   //Conditional Rendering
//   if(listOfRestaurant==0){
//     return <Shimmer/>
//   }
//   return (
//     <div className="body">
//       <div className="filter">
//         <button
//           className="filter-btn"
//           onClick={() => {
//             const filteredListOfRestaurant = listOfRestaurant.filter(
//               (res) => res.info.avgRating > 4.3
//             );
//             setListOfRestaurant(filteredListOfRestaurant);
//           }}
//         >
//           Top Rated Restaurants
//         </button>
//       </div>

//       <div className="res-container">
//         {listOfRestaurant.map((restaurant) => (
//           <RestaurantCard resData={restaurant} key={restaurant.info.id} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;

// import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
// import {useState, useEffect} from 'react';
// const Body = () => {
//   //local state variable scope: inside that function
//   const [listOfRestaurant, setListOfRestaurant] = useState(resList);

//   const fetchData = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7509875&lng=75.8802639&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     )

//     const json = await data.json();
//     console.log(json);
//     //Optional chaining
//     setListOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="body">
//       <div className="filter">
//         <button
//           className="filter-btn"
//           onClick={() => {
//             const filteredListOfRestaurant = listOfRestaurant.filter(
//               (res) => res.info.avgRating > 4.3
//             );
//             setListOfRestaurant(filteredListOfRestaurant);
//           }}
//         >
//           Top Rated Restaurants
//         </button>
//       </div>

//       <div className="res-container">
//         {listOfRestaurant.map((restaurant) => (
//           <RestaurantCard resData={restaurant} key={restaurant.info.id} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;
