import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearAll, addAll} from "../../Util/CartSlice"
import "./Cart.css"
import "./CartMedia.css"
import CartCards from "./CartCards"
import emptyCart from "../../Assets/empty-cart.jpg"
import { useEffect } from "react"



const  Carts = ()=>{
  const dispatch = useDispatch()
    const cartItems = useSelector((store) => store.cart.items)

    // const getCartItems = ()=>{
    //    const localCartData = localStorage.getItem("cartIterms");
    //    console.log(localCartData)
 
    //  }
  

    const [Carts , setCarts] = useState(cartItems);
    console.log(Carts,"useStateList")
    // console.log(cartItems,"cart")

    
   useEffect(()=>{
    // setCarts(cartItems)
    const localCartData = localStorage.getItem("cartIterms");
    if(localCartData !== '' && localCartData != '[]'){
      console.log('Old Cart',JSON.parse(localCartData));
      dispatch(addAll(JSON.parse(localCartData)))
      // setCarts(JSON.parse(localCartData));
    }

   },[])  


    useEffect(()=>{
              if(Carts.length>0){
                localStorage.setItem("cartIterms",JSON.stringify(Carts))
              }
    },[Carts])

   
    const ClearAllCarts =()=>{
     dispatch(clearAll())
     
    }
  
    if(Carts.length === 0) <div className="empty-cart-error"><img src={emptyCart} className="empty-cart-img" /><h1>Add Your food .....</h1></div>

    return ( <div className="cart-outer">
        <div className="cart-heder">
        <span className="cart-count-btn">Cart Items {cartItems.length}</span>
        <span className="cart-count-btn"><button className="clear-cart-btn" onClick={()=>ClearAllCarts()}>Clear Cart</button></span>
        </div>
            <div className="cart-inner">
          {Carts.map((items)=>{
            return (<CartCards key={items.id} items={items}/>)})}
            </div>
        </div>)
}

export default Carts

