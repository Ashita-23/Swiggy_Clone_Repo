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
            console.log(state,"state")
            // console.log(action,"action")
            // let deletItem = state.indexOf(action.payload)
        //   state.splice( action.payload,1)
        const ItemsId  = action.payload

        state.items = state.items.filter((items)=>items.id!== ItemsId)
  
        },
        clearAll : (state)=>{
            state.items = []
        },
        addAll : (state, action)=>{
           state.items.push(action.payload)
        },
        
    }
},
)

export const {addItem,removeItem,clearAll, addAll} = CartSlice.actions ;


export default CartSlice.reducer