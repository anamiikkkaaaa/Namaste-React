import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_LIST_API } from "../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    
    const data = await fetch(RESTAURANT_LIST_API);
    const json = await data.json();

    const resInfo = json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setListOfRes(resInfo);
    setFilteredRes(resInfo);

  };

  useEffect(() => {
    
    fetchData();
  }, []);

  return listOfRes == 0 ? <Shimmer/> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input 
          className="search-box"
          type="text"
          value={searchText}
          onChange = {(e)=>{
            setSearchText(e.target.value);
          }}
          >
          </input>
          <button 
          className="search-btn"
          onClick = {()=>{
            const filteredRestaurant = listOfRes.filter((res)=>{
              return res.info.name.toLowerCase().includes(searchText.toLowerCase());
            })
            setFilteredRes(filteredRestaurant);
          }}
          >
          Search 
          </button>
        </div>
        <button 
        className="filter-btn"
        onClick = {()=>{
          const filteredRestaurant = listOfRes.filter((res)=>{
            return res.info.avgRating>4.1;
          })
          setFilteredRes(filteredRestaurant);
        }}
        >
        Filter Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRes.map((res)=>(
          <Link to={"/restaurant/"+res.info.id} key={res.info.id}><RestaurantCard resData = {res}></RestaurantCard></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
