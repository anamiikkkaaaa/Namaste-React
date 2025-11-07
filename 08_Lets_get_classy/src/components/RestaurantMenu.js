import { RESTAURANT_MENU_API } from "../utils/constants";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer.js";

const RestaurantMenu = () => {
  
  const [menuData, setMenuData] = useState(null);

  const [resData, setResData] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    
    const data = await fetch(RESTAURANT_MENU_API + resId);
    const json = await data.json();

    const resJsonData = json?.data?.cards[2]?.card?.card;
    const menuJsonData = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

    setResData(resJsonData);
    setMenuData(menuJsonData);

  };

  if (!resData || !menuData) return <Shimmer />;

  return (
    <div>
      <div>
        <h2>{resData.info.name}</h2>
        <p>
          {resData.info.cuisines.join(", ")} - {resData.info.costForTwo}
        </p>
        <h4>{resData.info.avgRating}</h4>
      </div>
      <div>
        <h2>Menu</h2>
        {menuData.map((item)=>{
            return <div className="menu" key = {item.card.info.id}>
                <ul>
                    <li>
                        {item.card.info.name} - {item.card.info.price}
                    </li>
                </ul>
            </div>
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
