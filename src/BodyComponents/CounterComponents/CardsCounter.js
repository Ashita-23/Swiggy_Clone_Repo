import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import { Swiggy_API_URL_New  } from "../../Util/ApiConfig";
import {getFilterList,getFastDelivery,getTopRatedcards} from "../../helper/HelperFunction"
import "./CardsCounter.css";
import "./CardsCounterMedia.css";
import RestaurantsCards, {PromotedRestaurantsCards} from "./RestaurantsCards";
// import ErrorInSearch from "../../ErrorCompos/Errors";
import CounterShimmer from "../ShimmerComponents/CounterShimmer";
import CardsShimmer from "../ShimmerComponents/CardsShimmer";

const RestaurantCounter = () => {

  const RestaurantsCardsPromoted = PromotedRestaurantsCards(RestaurantsCards)

  const [allRestaurant, setAllRestaurant] = useState([]);
  //  console.log(allRestaurant,"all")
  const [resturantList, setResturantList] = useState([]);
  //  console.log(resturantList,"copy")
  //  console.log(resturantList[4]?.info?.promoted
  //   ,"promoted")
  const [inputText, setInputText] = useState(" ");


  useEffect(() => {
    getSwiggyData();
  }, [inputText]);

  async function getSwiggyData() {
    const Swiggy_API = await fetch(Swiggy_API_URL_New );
    const JsonData = await Swiggy_API.json();
      //  console.log(JsonData ,  "new Api ")
      //  console.log(JsonData.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants ,  "new Api data")
    setAllRestaurant(JsonData.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setResturantList(JsonData.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
//early return
  if(!allRestaurant) return null;
  return  (resturantList.length===0) ? <CounterShimmer/> : (
    <>
      <div className="Counter-outer">
        <div className="search-outer">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search"
              className="search-input"
              value={inputText}
              onChange={(event) => setInputText(event.target.value)}
            />
            <button type="submit" className="input-btn" onClick={()=>{const filterList = getFilterList(inputText,allRestaurant);
                setResturantList(filterList);}}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <div className="btn-group">
            <button className="btn" onClick={()=>{
                setResturantList(allRestaurant)
            }} >Relevance</button>
            <button
              className="btn"
              onClick={() => {
                const fastDeliveryCards = getFastDelivery(allRestaurant);
                ( fastDeliveryCards.length === 0)? setResturantList(allRestaurant): setResturantList( fastDeliveryCards);}} >
              Delivery Time
            </button>
            <button
              className="btn"
              onClick={() => {
                const topRatedCards = getTopRatedcards(allRestaurant);
                ( topRatedCards.length === 0)? setResturantList(allRestaurant): setResturantList(topRatedCards); }}>
              Top Rating
            </button>
          </div>
        </div>
        <div className="card-display-outer">
        <div className="card-display-inner">
        {resturantList?.map((cards)=>{
            return resturantList.length === 0 ? ( <CardsShimmer/> ) : ( <Link to={"/restaurant/"+ cards?.info?.id} key={cards?.info?.id} >
            {cards?.info?.promoted ? <RestaurantsCardsPromoted resturantLists={cards}  />:<RestaurantsCards resturantLists={cards} />}
             </Link>);
          })}

        </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantCounter;
