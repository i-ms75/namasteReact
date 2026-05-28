import { CDN_URL } from "../utils/constants";
const ResturantCard = (props) =>
{
   const {restaurantsData}=props;
   console.log("resturant data: "+restaurantsData.info.name)
    return (
        <div className="resturant-card">
            <img src={CDN_URL+restaurantsData.info.cloudinaryImageId}/>
            <h3>Restaurant {restaurantsData.info.name}</h3>
            <h4>{restaurantsData.info.cuisines.join(",")}</h4>
            <h4>Rating {restaurantsData.info.avgRatingString}</h4>
            <h4>Delivery time {restaurantsData.info.sla.deliveryTime}</h4>
            <h4>Cost {restaurantsData.info.costForTwo}</h4>
        </div>
    )
}

export default ResturantCard;