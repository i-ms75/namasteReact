// import restaurants from "../utils/restaurants";
import ResturantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
const Body = () =>
{
    const [filteredRestaurants, setfilteredRestaurants]=useState([]);

    useEffect(()=>
    {
        fetchLiveData();
    },[]);

   const fetchLiveData = async () =>
    {
        const restaurantsLlist = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        
        const data = await restaurantsLlist.json();

        setfilteredRestaurants(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        console.log(data?.data?.cards[4]?.card.card?.gridElements?.infoWithStyle?.restaurants);
    }


    return filteredRestaurants.length===0? <Shimmer/> :(
        <div className="body">
            <div className="filter">
                <button className="filterButton" onClick={()=>{
                    const filteredList= filteredRestaurants.filter(
                        (restaurant)=>restaurant.info.avgRating>4);
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