import restaurants from "../utils/restaurants";
import ResturantCard from "./RestaurantCard";
import { useState } from "react";
const Body = () =>
{
    const [filteredRestaurants, setfilteredRestaurants]=useState(restaurants);
    return(
        <div className="body">
            <div className="filter">
                <button className="filterButton" onClick={()=>{
                    const filteredList= filteredRestaurants.filter(
                        (restaurant)=>restaurant.info.avgRating>4.5);
                    setfilteredRestaurants(filteredList);
                }}>Top Restaurants</button>    
            </div> 
            {/* //Restaurant Card */}
            <div className="resturant-container">
                {
                    filteredRestaurants.map((restaurant)=>
                    (
                        <ResturantCard key={restaurant.info.id} restaurantsData={restaurant}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;