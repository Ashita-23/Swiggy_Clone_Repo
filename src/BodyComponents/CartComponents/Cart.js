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
    console.log(cartItems," cartItems slice data")

  

    const [Carts , setCarts] = useState(  );
    console.log(Carts,"Carts useStateList")


    
    useEffect(()=>{
      setCarts( cartItems)
    },[ cartItems])

   useEffect(()=>{
   
    const localCartData = localStorage.getItem("cartItems");
    console.log(JSON.parse(localCartData),"getCartItem from localestorage")
   
    if(localCartData!==null && localCartData!== "[]" ){
      console.log('Old Cart',JSON.parse(localCartData));
      // const LocalData = JSON.parse(localCartData)
      dispatch(addAll(JSON.parse(localCartData)))
      // setCarts(JSON.parse(localCartData));
      // console.log( [(localCartData)[0] ],"from get data")
    
    }
  },[])  



    // useEffect(()=>{
    //           if(Carts.length>0){
    //             localStorage.setItem("cartItems",JSON.stringify(Carts ))
    //           }
    // },[Carts ])
    // console.log(localStorage,"set data in localstorage")
   
    const ClearAllCarts =()=>{
     dispatch(clearAll())
     localStorage.removeItem("cartItems")
    }
  
    if (Carts === null) return <div className="empty-cart-error"><img src={emptyCart} className="empty-cart-img" /><h1>Add Your food item .....</h1></div>
    // if(cartItems === null)  return <div className="empty-cart-error"><img src={emptyCart} className="empty-cart-img" /><h1>Add Your food item .....</h1></div>

    return ( <div className="cart-outer">
        <div className="cart-heder">
        {/* <span className="cart-count-btn">Cart Items {cartItems === null && undefined ? 0 : Carts.length}</span> */}
        <span className="cart-count-btn"><button className="clear-cart-btn" onClick={()=>ClearAllCarts()}>Clear Cart</button></span>
        </div>
            <div className="cart-inner">
          {Carts?.map((items)=>{
            return (<CartCards key={items.id} items={items}/>)})}
            </div>
        </div>)
}

export default Carts

