
import { useState } from "react"
import "./menuCards.css"
const MenuCards = ({menuLists})=>{
    // console.log(menuLists,"cards")

   


    return(<>
        <div className="menuCard-outer">
           <div className="menuCards-details">
           <span className={menuLists?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? "veg" : "nonVeg"}><i className="fa-solid fa-utensils"></i></span>
           <span className="category">{menuLists?.card?.info?.category}</span>
            <span className="menu-name">{menuLists?.card?.info?.name}</span>
             {/* <span className="description">{menuLists?.card?.info?.description}</span> */}
             <div className="menu-RPS-box">           
             <span className={menuLists?.card?.info?.ratings?.aggregatedRating?.rating > "3.5 "? "menu-rating" :"menu-rating low-rating"}><i className="fa-solid fa-star"></i> {menuLists?.card?.info?.ratings?.aggregatedRating?.rating || " -- "}</span>
            <span className="menu-price">Rs.{menuLists?.card?.info?.price/100}</span>
            <span className="menu-inStock">In Stock : {menuLists?.card?.info?.inStock || "--"}</span></div>

           </div>
           <div className="menuCards-btn-img">
            <figure className="add-to-cart-img"></figure>
            <button className="add-to-cart-btn">Add</button>
           </div>
        </div>
    </>)
}

export default MenuCards