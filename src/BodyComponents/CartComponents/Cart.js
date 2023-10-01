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

  

    const [Carts , setCarts] = useState(cartItems);
    // console.log(Carts,"useStateList")
    console.log(Carts,"cart")

    
    useEffect(()=>{
      setCarts( cartItems)
    },[ cartItems])

   useEffect(()=>{
   
    const localCartData = localStorage.getItem("cartItems");
    if(localCartData !== " "  && localCartData !='[]'){
      console.log('Old Cart',JSON.parse(localCartData));
      // dispatch(addAll(JSON.parse(localCartData)))
      // setCarts(JSON.parse(localCartData));
    }},[])  



    useEffect(()=>{
              if(cartItems.length>0){
                localStorage.setItem("cartItems",JSON.stringify(cartItems ))
              }
    },[cartItems  ])
    console.log(localStorage,"LS")
   
    const ClearAllCarts =()=>{
     dispatch(clearAll())
     localStorage.removeItem("cartItems")
    }
  
    if(cartItems === null)  return <div className="empty-cart-error"><img src={emptyCart} className="empty-cart-img" /><h1>Add Your food item .....</h1></div>

    return ( <div className="cart-outer">
        <div className="cart-heder">
        <span className="cart-count-btn">Cart Items {cartItems === null && undefined ? 0 : Carts.length}</span>
        <span className="cart-count-btn"><button className="clear-cart-btn" onClick={()=>ClearAllCarts()}>Clear Cart</button></span>
        </div>
            <div className="cart-inner">
          {Carts.map((items)=>{
            return (<CartCards key={items.id} items={items}/>)})}
            </div>
        </div>)
}

export default Carts

