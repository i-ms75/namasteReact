// import restaurants from "../utils/restaurants";
import ResturantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
const Body = () =>
{
    const [filteredRestaurants, setfilteredRestaurants]=useState([]);
    const [restaurantData, setrestaurantData]=useState([]);
    const [searchText, setSearchText] = useState("")

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
       setfilteredRestaurants(data?.data?.cards[4]?.card.card?.gridElements?.infoWithStyle?.restaurants);
       setrestaurantData(data?.data?.cards[4]?.card.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(restaurantData);
    }


    return filteredRestaurants.length===0? <Shimmer/> :(
        <div className="bg-white dark:bg-black">
            <div className="filter">
                <div className="text-gray-700">
                <input type="text" className="bg-gray-500 my-4 p-1" value={searchText} onChange={(e) => {setSearchText(e.target.value)}  }/>
                <button className="px-4"
                    onClick={() => 
                        {
                            const filteredList=restaurantData.filter((res)=>
                            (
                                res.info.name.toLowerCase().includes(searchText)
                                
                            ));
                            setfilteredRestaurants(filteredList);
                        }}
                >
                    Search
                </button>
                </div>
                <button className="text-gray-400" onClick={()=>{
                    const filteredList= filteredRestaurants.filter(
                        (restaurant)=>restaurant.info.avgRating>4);
                    setfilteredRestaurants(filteredList);
                }}>Top Restaurants</button>    
            </div> 
            {/* //Restaurant Card */}
            <div className="text-gray-400 flex">
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