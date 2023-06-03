import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import "./MenuCounter.css"
import "./MenuCounterMedia.css"
import MenuCards from "./MenuCards"
import CounterShimmer from "../ShimmerComponents/CounterShimmer"
import CardsShimmer from "../ShimmerComponents/CardsShimmer"
const MenuCounter = () =>{
const restaurantId = useParams() ;
// console.log(restaurantId)




    const [menu , setMenu] = useState([])
    // console.log(menu,"menu  ")

    useEffect(()=>{
        getMenuList()
    },[])

async function getMenuList(){
        const Swiggy_MENU_API_URL = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.38704&lng=77.2821787&restaurantId="+restaurantId.id+"&submitAction=ENTER";
      const MenuList = await fetch(Swiggy_MENU_API_URL) ;
      const Json = await MenuList.json()
    //   console.log(Json, "main")
    //   console.log(Json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1] , "ccopy")
      setMenu(Json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1])
    
    }

    return (!menu) ? <CounterShimmer/> : (<>
        <div className="menu-outer">
            <h1 className="menu-heading">{menu?.card?.card?.title}</h1>
            <div className="menu-inner">
  { menu?.card?.card?.itemCards?.map((menuLists)=>{
    {/* console.log(menu?.card?.card?.itemCards.length,"menuListslength") */}

    return menu?.card?.card?.itemCards.length===0 ? <CardsShimmer/>:(<MenuCards menuLists={menuLists}  key={menuLists?.card?.info?.id} ></MenuCards>)
  })
    }
            </div>
        </div>
    </>)
}

export default MenuCounter