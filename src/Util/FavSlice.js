import {createSlice} from "@reduxjs/toolkit"



const FavItem = createSlice({
    name:"favItem",
    initialState:{
        items:[]
},

reducers:{
  AddFavItem:(state, action) => {
    state.items.push(action.payload);
  },
  ReFavItem:(state,action) => {
    const removeFav = action.payload 
    state.items = state.items.filter((items)=>items.id !== removeFav)
  },
  AddAllFavItems:(state,action)=>{
    state.items.push(action.payload);
  }
}
})

export const  {AddFavItem,ReFavItem,AddAllFavItems} = FavItem.actions

export default FavItem.reducer