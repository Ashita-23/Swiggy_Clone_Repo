

import "./cardsCounter.css"

const RestaurantCounter = () =>{
    return(<>
        <div className="Counter-outer">
            <div className="search-outer">
            <div className="search-box">
                <input type="text" placeholder="Search" className="search-input" /> 
                <button className="input-btn"><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <div className="btn-group">
                    <button className="btn">Relevance</button>
                    <button className="btn">Delivery Time</button>
                    <button className="btn">Rating</button>
                </div>
            </div>
            <div className="card-display-outer">

            </div>
        </div>
    </>)
}

export default RestaurantCounter