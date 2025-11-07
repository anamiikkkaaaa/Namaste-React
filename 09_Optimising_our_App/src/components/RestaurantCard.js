import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {

  const {
    name,
    cuisines,
    cloudinaryImageId,
    costForTwo,
    avgRating,
    id
  } = props.resData?.info;
  
  const {deliveryTime} = props.resData?.info?.sla;

  return (
    <div className="res-card">
      <img
        src= {CDN_URL + cloudinaryImageId}
        alt="res-logo"
        className="res-logo"
      ></img>
      <h5>{id}</h5>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
