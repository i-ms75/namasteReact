import restaurants from "../utils/restaurants";
import ResturantCard from "./RestaurantCard";
const Body = () =>
{
    return(
        <div className="body">
            <div className="search"> Search </div> 
            {/* //Restaurant Card */}
            <div className="resturant-container">
                {/* <h2>{console.log("res data from body: "+ restaurants[0].info.name)}</h2> */}
                {/* <ResturantCard restaurantsData={restaurants[0]}/> */}
                {
                    restaurants.map((restaurant)=>
                    (
                        <ResturantCard key={restaurant.info.id} restaurantsData={restaurant}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;