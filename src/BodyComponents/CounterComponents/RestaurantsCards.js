import "./restaurantsCards.css"

const RestaurantsCards = ()=>{
return(<>
<div className="cards-outer">
    <figure className="image-box">
        <img    className="image"/>
    </figure>
    <div className="cards-detail">
        <span className="name-box">Name</span>
        <span className="cuisine-box">cuisine</span>
        <div className="MRP-box">
            <span className="rating-box">Rating</span>
            <span className="time-box">Delivery Time</span>
            <span className="Price-box">Price</span>
        </div>
        <div className="offer-and-view-box">
            <p className="offer-box">Offers</p>
            <button className="card-view-btn">Quick view</button>
        </div>
    </div>
</div>

</>)
}

export default RestaurantsCards