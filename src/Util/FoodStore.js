import {configureStore} from "@reduxjs/toolkit"
import CartSlice from "./CartSlice"
  
const FoodStore = configureStore({
  reducer : {
    cart : CartSlice,
  }
})

export default FoodStore