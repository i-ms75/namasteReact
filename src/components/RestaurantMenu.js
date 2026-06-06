import { useParams } from "react-router";
import {MENU_DATA} from "../utils/Menu"


const RestaurantMenu = () =>
{
    const [restMenu, setrestMenu] = useState(MENU_DATA)
    // console.log(JSON.stringify(restMenu))
    const {resId}=useParams();
    console.log(resId);
    resInfo=useRestaurantMenu(resId);
    return (
        <div className="menu">
            <h1>{restMenu.data.cards[0].card.card.text}</h1>
            <h2>Cuisines: {restMenu.data.cards[2].card.card.info.cuisines.join(" , " )   }</h2>
            <h2>Menu: </h2>
            <div>  
                {
                    restMenu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.map((menuType, i)=>
                    (
                        <div key={i}><h2 >{menuType.card.card.title}</h2>
                        <ul>
                            {
                                // console.log("menuType Data:"+ JSON.stringify(menuType.card.card.imageId))
                                menuType.card.card.itemCards?.map(
                                    (item)=>
                                    (
                                        <li key={item.card.info.id}>{item.card.info.name} - Rs. {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
                                    )
                                )
                            }
                        </ul></div>
                        
                    ))
                }
            </div>
            <ul>
                    
                </ul>
            
        </div>
    )
}

export default RestaurantMenu;