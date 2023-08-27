import {createSlice} from "@reduxjs/toolkit"


const  CartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem : (state, action)=>{
            
            state.items.push(action.payload);
        } ,
        removeItem : (state,action)=>{
            state.items.pop();
        },
        clearAll : (state)=>{
            state.items = []
        },
        addAll : (state, action)=>{
            state.items = action.payload
        },
        
    }
},
)

export const {addItem,removeItem,clearAll, addAll} = CartSlice.actions ;


export default CartSlice.reducer