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
  ReFavItem:(state) => {
    state.items.pop();
  },
  AddAllFavItems:(state,action)=>{
    state.items.push(action.payload);
  }
}
})

export const  {AddFavItem,ReFavItem,AddAllFavItems} = FavItem.actions

export default FavItem.reducer