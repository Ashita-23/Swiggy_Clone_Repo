
export   function getFilterList(inputText,allRestaurant){
    console.log(inputText,"inputText")
    // console.log(allRestaurant,"ARL")
  const filterItems = allRestaurant.filter((Restaurants)=>Restaurants?.data?.data?.name?.toLowerCase().includes(inputText.toLowerCase())) ;
  console.log(filterItems)
return filterItems
}

export   function getFastDelivery(allRestaurant) {
    console.log(allRestaurant);
    const fastDelivery = allRestaurant.filter(
      (cards) => cards?.data?.data?.deliveryTime < 40
    );
    return fastDelivery;
  }

  export   function getTopRatedcards(allRestaurant) {
    // console.log(allRestaurant,"00")
    const topRated = allRestaurant?.filter(
      (cards) => cards?.data?.data?.avgRating > 3.7 
    );
    return topRated;
  }