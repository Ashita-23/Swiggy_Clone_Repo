import { useEffect, useState } from "react";
import "./cardsCounter.css";
import RestaurantsCards from "./RestaurantsCards";
import { Swiggy_API_URL } from "../../Util/ApiConfig";
// import ErrorInSearch from "../../ErrorCompos/searchTextError";
import CardsShimmer from "../ShimmerComponents/CardsShimmer";

const RestaurantCounter = () => {
  const [allRestaurant, setAllRestaurant] = useState([]);
  //  console.log(allResturant,"all")
  const [resturantList, setResturantList] = useState([]);
  //  console.log(resturantList,"copy")
  const [inputText, setInputText] = useState(" ");

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
    console.log(allRestaurant,"ARL")
  const filterItems = allRestaurant.filter((Restaurants)=>Restaurants?.data?.data?.name?.toLowerCase().includes(inputText)) ;
console.log(filterItems , "filterItems")  ;
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

  return (
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
            <button type="submit" className="input-btn" onClick={()=>{
                    const filterList = getFilterList(inputText,allRestaurant);
                   (filterList === 0)? setResturantList(allRestaurant): setResturantList(filterList)}}>
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
                (fastDeliveryCards.length === 0)? setResturantList(allRestaurant): setResturantList(fastDeliveryCards);}} >
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

        {
          resturantList?.map((cards)=>{
          
            return resturantList.length === 0 ?  ( <CardsShimmer/> ) : ( <RestaurantsCards resturantLists={cards} key={cards?.data?.data?.id}/>);
          })}

        </div>
      </div>
    </>
  );
};

export default RestaurantCounter;
