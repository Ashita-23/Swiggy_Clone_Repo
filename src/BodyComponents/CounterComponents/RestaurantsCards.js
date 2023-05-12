import "./restaurantsCards.css"
import {Swiggy_IMAGE_CDN_URL} from "../../Util/ApiConfig"


const RestaurantsCards = ({resturantLists})=>{
    const Data = resturantLists?.data?.data
   
return(<>
<div className="cards-outer" key={Data?.sla?.restaurantId} >
    <figure className="image-box">
        <img src={Swiggy_IMAGE_CDN_URL+Data?.cloudinaryImageId
}   className="image"/>
    </figure>
    <div className="cards-detail">
        <span className="name-box">{Data?.name}</span>
        <span className="cuisine-box">{Data?.cuisines?.join(",")}</span>
        <div className="MRP-box">
            <span className={Data?.avgRating < 4 ? "rating-box low-rating":"rating-box "}><i className="fa-solid fa-star"></i>{" "}{Data?.avgRating}</span>
            <span className="time-box">{Data?.slaString}</span>
            <span className="Price-box">{Data?.costForTwoString}</span>
        </div>
        <div className="offer-and-view-box">
            <p className="offer-box">{Data?.aggregatedDiscountInfo?.descriptionList[0]?.meta || ""}</p>
            <button className="card-view-btn">Quick view</button>
        </div>
    </div>
</div>

</>)
}

export default RestaurantsCards