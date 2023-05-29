
import { useDispatch, useSelector } from "react-redux"
import { clearAll} from "../../Util/CartSlice"
import "./Cart.css"
import CartCards from "./CartCards"



const  Carts = ()=>{

    const cartItems = useSelector((store) => store.cart.iterms)

    console.log(cartItems,"cart")

    const dispatch = useDispatch()
    const ClearAllCarts =()=>{
     dispatch(clearAll())
    }

    return(<>
        <div className="cart-outer">
        <div className="cart-heder">
        <span className="cart-count-btn">Cart Items {cartItems.length}</span>
        <span className="cart-count-btn"><button className="clear-cart-btn" onClick={()=>ClearAllCarts()}>Clear Cart</button></span>
        </div>
            <div className="cart-inner">
          {cartItems.map((items)=>{
            return(<CartCards key={items.id} items={items}/>)})}
            </div>
        </div>
    </>)
}

export default Carts