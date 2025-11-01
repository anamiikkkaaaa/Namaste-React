import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {/**js map function below hence curly braces*/}
                {/** functional programming: map filter reduce*/}
                {
                    resList.map(restaurant => (
                    <RestaurantCard resData = {restaurant} key={restaurant.info.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body;
