
import { useDispatch } from "react-redux"
import { removeItem } from "../../Util/CartSlice"
import "./CartCards.css"
const CartCards = ({items})=>{
console.log(items,"showcarts ")

const dispatch = useDispatch()

    const removeItemHandler = ()=>{
        dispatch(removeItem())
    }
    return(<>
          <div className="cartCard-outer" id={items?.id}>
           <div className="cartCards-details">
           <span className={items?.itemAttribute.vegClassifier === "VEG" ? "veg" : "nonVeg"}><i className="fa-solid fa-utensils"></i></span>
           <span className="category">{items?.category}</span>
            <span className="cart-name">{items?.name}</span>
             {/* <span className="description">{menuLists?.card?.info?.description}</span> */}
             <div className="cart-RPS-box">           
             <span className={items?.ratings?.aggregatedRating?.rating > "3.5 "? "cart-rating" :"cart-rating low-rating"}>
             <i className="fa-solid fa-star"></i> {items?.ratings?.aggregatedRating?.rating || " -- "}</span>
            <span className="cart-price">Rs.{items?.price/100}</span>
            <span className="cart-inStock">In Stock : {items?.inStock || "--"}</span></div>

           </div>
           <div className="cartCards-btn-img">
            <figure className="remove-from-cart-img"></figure>
            <button className="remove-from-cart-btn" onClick={()=>removeItemHandler()}>Remove</button>
           </div>
        </div>
    </>)
}

export default CartCards