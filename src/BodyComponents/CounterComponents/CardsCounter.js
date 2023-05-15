import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import "./cardsCounter.css";
import RestaurantsCards from "./RestaurantsCards";
import { Swiggy_API_URL } from "../../Util/ApiConfig";
import ErrorInSearch from "../../ErrorCompos/Errors";
import CounterShimmer from "../ShimmerComponents/CounterShimmer";
import CardsShimmer from "../ShimmerComponents/CardsShimmer";

const RestaurantCounter = () => {
  const [allRestaurant, setAllRestaurant] = useState([]);
   console.log(allRestaurant,"all")
  const [resturantList, setResturantList] = useState([]);
  //  console.log(resturantList,"copy")
  const [inputText, setInputText] = useState(" ");
  const [inputError,setInputError] = useState(false)

  

  useEffect(() => {
    getSwiggyData();
  }, [inputText]);

  async function getSwiggyData() {
    const Swiggy_API = await fetch(Swiggy_API_URL);
    const JsonData = await Swiggy_API.json();
    //    console.log(JsonData?.data?.cards)
    setAllRestaurant(JsonData?.data?.cards);
    setResturantList(JsonData?.data?.cards);
  }


  function getFilterList(inputText,allRestaurant){
    console.log(inputText,"inputText")
    // console.log(allRestaurant,"ARL")
  const filterItems = allRestaurant.filter((Restaurants)=>Restaurants?.data?.data?.name?.toLowerCase().includes(inputText.toLowerCase())) ;
  console.log(filterItems)
return filterItems
}

  function getFastDelivery(allRestaurant) {
    console.log(allRestaurant);
    const fastDelivery = allRestaurant.filter(
      (cards) => cards?.data?.data?.deliveryTime < 40
    );
    return fastDelivery;
  }

  function getTopRatedcards(allRestaurant) {
    // console.log(allRestaurant,"00")
    const topRated = allRestaurant?.filter(
      (cards) => cards?.data?.data?.avgRating > 3.5
    );
    return topRated;
  }


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
                ( topRatedCards.length === 0)? setResturantList(allRestaurant): setResturantList(topRatedCards); }}
            >
              Top Rating
            </button>
          </div>
        </div>
        <div className="card-display-outer">
        {/* <div className={!inputError ? "Errorhidden" : " Errorhidden Errorshow"}><ErrorInSearch/></div> */}
        <div className="card-display-inner">

        {
          resturantList?.map((cards)=>{
            return resturantList.length === 0 ?  ( <CardsShimmer/> ) : ( <Link to={"/restaurant/"+ cards?.data?.data?.id} ><RestaurantsCards resturantLists={cards} key={cards?.data?.data?.id}/> </Link>);
          })}

        </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantCounter;
