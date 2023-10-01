
import { useDispatch, useSelector } from "react-redux"
import "./FavoriteCart.css"
import "./FavoriteCartMedia.css"
import { ReFavItem , AddAllFavItems } from "../../Util/FavSlice"
import { useState } from "react"
import { useEffect } from "react"
import {Swiggy_IMAGE_CDN_URL} from "../../Util/ApiConfig"

const FavoriteCart = ()=>{
    const dispatch = useDispatch()
const FavItems = useSelector((store)=>store.favItem.items)
// console.log(FavItems,"FCI")

const [allFavItems , setAllFavItems] = useState(FavItems)
console.log(allFavItems,"AFI")

// useEffect(()=>{
// const GetDataFromLH = localStorage.getItem("FavItems")
// console.log(JSON.parse(GetDataFromLH),"DFLH")
// const setToFavSlice = JSON.parse(GetDataFromLH)
// if(setToFavSlice.length!=="" && setToFavSlice.length != [] ){
//         dispatch(AddAllFavItems(setToFavSlice))
//     }else{
//             setAllFavItems(FavItems)
//         }

//         console.log(setToFavSlice.length
//             ,"STFS")
// },[])

useEffect(()=>{
    setAllFavItems(FavItems )
},[FavItems])

useEffect(()=>{
 if( FavItems.length>0){
    localStorage.setItem("FavItems",JSON.stringify( FavItems))
 }
},[ FavItems])



const FavItemRemove = (id) =>{
    dispatch(ReFavItem(id))
}

const RemoveAll = ()=>{
 localStorage.removeItem("FavItems")
}


 return(  <div className="fav_outer">
 <div className="fav_header">Items {FavItems .length}<button className="fav_btn" onClick={()=>RemoveAll()}>Clear All</button></div>
               <div className="fav_inner">

    {allFavItems.map((items)=>(   <div className="favCard-outer" id={items?.id}>
           <div className="favCard-details">
           {/* <span className={items?.itemAttribute.vegClassifier === "VEG" ? "veg" : "nonVeg"}><i className="fa-solid fa-utensils"></i></span> */}
           <span className="category">{items?.category}</span>
            <span className="favCard-name">{items?.name}</span>
             <div className="favCard-RPS-box">           
             <span className={items?.ratings?.aggregatedRating?.rating > "3.5 "? "favCard-rating" :"favCard-rating low-rating"}>
             <i className="fa-solid fa-star"></i> {items?.ratings?.aggregatedRating?.rating || " -- "}</span>
            <span className="favCard-price">Rs.{items?.price/100}</span>
            <span className="favCard-inStock">In Stock : {items?.inStock || "--"}</span></div>

           </div>
           <div className="favCard-btn-img">
            <figure className="remove-from-favCard-img"><img className="favCard-img" src={Swiggy_IMAGE_CDN_URL+ items?.imageId} /></figure>
            <button className="remove-from-favCard-btn" onClick={()=>FavItemRemove(items?.id)}>Remove</button>
           </div>
        </div>) )
   
      
    }

 </div>
</div>)
}

export default FavoriteCart