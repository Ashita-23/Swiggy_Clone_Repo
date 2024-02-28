
import "./MenuHeader.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuOfferList from "./MenuOfferList";
// import {Swiggy_IMAGE_CDN_URL} from "../../Util/ApiConfig"
const MenuHeader  = () => {

    const [menuHeader, setMenuHeader] = useState([]);
    const [resInfo, setResInfoHeader] = useState([]);
    const [MenuOffers, setMenuOffers] = useState([]);
    // console.log(menuHeader,"MenuHeader ")
    // console.log(MenuOffers,"MenuOffers ")
    // console.log(resInfo,"MenuHeader resInfo")
    const restaurantId = useParams();
    useEffect(() => {
        getMenuInfo();
      }, []);
    
    async function getMenuInfo() {
        const Swiggy_MENU_API_URL =
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.38704&lng=77.2821787&restaurantId=" +
          restaurantId.id +
          "&submitAction=ENTER";
        const MenuList = await fetch(Swiggy_MENU_API_URL);
        const Json = await MenuList.json();
        console.log(Json, "main Menu Data")
        // console.log(Json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards,"menu list for chacking")
    
        setResInfoHeader(Json?.data?.cards[2]?.card?.card?.info);
        setMenuHeader(Json?.data?.cards[0]?.card?.card);
        setMenuOffers(
          Json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
        );
      }
    console.log(menuHeader.text,"MheadInfo")
    return(<div>
      <div>
     <h1>{menuHeader.text}</h1></div>
     <div className="">
        {/* <p>{resInfo.name}</p> */}
        <p>{resInfo.cuisines}</p>
        <p>{resInfo.areaName}</p>
        <p><i className="fa-solid fa-person-biking"></i> {resInfo?.feeDetails?.message}</p>

    </div>
    <div>
         <span>{menuHeader.avgRatingString}</span><br/>
         <span>{menuHeader.totalRatingsString
}</span>
 <p>{menuHeader?.feeDetails?.message}</p> 
    </div>
 <MenuOfferList menuOffers = {MenuOffers}/>
    </div>)
}

export default MenuHeader