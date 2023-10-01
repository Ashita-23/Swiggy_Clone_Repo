import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./menuCounter.css";
import "./MenuCounterMedia.css";
import MenuHeader from "./MenuHeader";
import MenuCards from "./MenuCards";
import CounterShimmer from "../ShimmerComponents/CounterShimmer";
import MenuOfferList from "./MenuOfferList";
// import CardsShimmer from "../ShimmerComponents/CardsShimmer"
const MenuCounter = () => {
  const restaurantId = useParams();
  // console.log(restaurantId);

  const [menu, setMenu] = useState([]);
  const [filterMenu, setFilterMenu] = useState([]);   //make it more simple while optimizing our app
  const [menuHeader, setMenuHeader] = useState([]);
  const [menuOffers, setMenuOffers] = useState([]);
  const [accordion, setAccordion] = useState(false);

  // console.log(menu, "menu  ");
  // console.log(filterMenu, "filterMenu ");
  // console.log(menuHeader,"MenuHeader ")
  // console.log(menuOffers,"menuOffers ")

  useEffect(() => {
    getMenuList();
  }, []);

  async function getMenuList() {
    const Swiggy_MENU_API_URL =
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.38704&lng=77.2821787&restaurantId=" +
      restaurantId.id +
      "&submitAction=ENTER";
    const MenuList = await fetch(Swiggy_MENU_API_URL);
    const Json = await MenuList.json();
    // console.log(Json, "main Menu Data")

    setMenu(Json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    setMenuHeader(Json?.data?.cards[0]?.card?.card?.info);
    setMenuOffers(
      Json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
    );
  }

  useEffect(() => {
    const filterMI = FilterMList(menu);
    setFilterMenu(filterMI);
  }, [menu]);

  function FilterMList(menu) {
    // console.log(menu, "value");
    const newList = menu?.filter((menu) => menu?.card?.card?.itemCards);
    // console.log(newList, "NL");
    return newList;
  }

function AccordionHandler(){
  if(accordion === false){
    setAccordion(true)
  }else if (accordion === true){
    setAccordion(false)
  }
}


  return !menu ? (
    <CounterShimmer />
  ) : (
    <>
      <div className="menu-outer" key={"menu-outer"}>
        <MenuHeader menuHeader={menuHeader} />
        {/* <MenuOfferList menuOffers={menuOffers} /> */}

 
        <div className="menu-inner" key={"menu-inner"}>
          {filterMenu.map((menuLists) => {
            {/* console.log(menuLists, "ML"); */}
               {/* if(menuLists.length === null && 0 ) return  */}
            return (!menuLists  ) ? <div>No menu is here ..................!</div> :  (
              <>
                <div className="accordionContainor" key={menuLists?.card?.card?.itemCards?.card?.info?.id} >
                  <div className="accordion_header" onClick={()=>AccordionHandler()} >
                  <p>{menuLists.card.card.title || " "} {"("}{menuLists.card.card.itemCards.length}{")"} </p>
                   <p>{!accordion ?<i className="fa-solid fa-chevron-down"></i>  :<i className="fa-solid fa-chevron-up"></i>}</p>
                   </div>
                { !accordion ? " " : <div className="accordionBody" >
              
                          {menuLists?.card?.card?.itemCards.map((menuItems) => (<MenuCards menuItems={menuItems} key={menuItems?.card?.info?.id}></MenuCards>) )}
                  </div>}
                  
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MenuCounter;
