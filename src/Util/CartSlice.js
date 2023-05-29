import {createSlice} from "@reduxjs/toolkit"


const  CartSlice = createSlice({
    name:"cart",
    initialState:{
        iterms:[]
    },
    reducers:{
        addItem : (state, action)=>{
            state.iterms.push(action.payload);
        } ,
        removeItem : (state,action)=>{
            state.iterms.pop();
        },
        clearAll : (state)=>{
            state.iterms = []
        }
    }
})

export const {addItem,removeItem,clearAll} = CartSlice.actions ;

export default CartSlice.reducer