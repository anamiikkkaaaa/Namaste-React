import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState([]);
  const [resDetails, setResDetails] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const { resId } = useParams();

  const url = MENU_API+resId;
  //console.log(url);
  const fetchMenu = async () => {
    const data = await fetch(url);

    const json = await data.json();

    //console.log(json);
    const resIntro = json.data?.cards[2]?.card?.card?.info;
    const itemCards =
      json.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards;

    setResDetails(resIntro);
    setResInfo(itemCards);
    //console.log(resInfo);
  };

  if (resInfo == null) return <Shimmer />;
  console.log(resInfo);

  //const {name, cuisines, costForTwo, deliveryTime} = resInfo?.card.card.info;

  return (
    <div className="menu">
      <h1>{resDetails.name}</h1>
      <p>
        {resDetails.cuisines} - {resDetails.costForTwo}
      </p>
      <h1>Menu</h1>
      {resInfo.map((cards) => {
        return (
          <div className="menu" key={cards.card.info.id}>
            <ul>
              <li>{cards.card.info.name}</li>
              <li>{cards.card.info.defaultPrice}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
