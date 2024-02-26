import {createSlice} from "@reduxjs/toolkit"


const  CartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem : (state, action)=>{
            state.items.push(action.payload);
           let setItems =[]
            setItems.unshift(...state.items,action.payload)
            localStorage.setItem("cartItems",JSON.stringify(setItems))
            // console.log(action.payload,"......")
           const getLocalDataa = localStorage.getItem("cartItems")
        //    console.log(getLocalDataa,"getlocalData in slice")
           if(getLocalDataa !== null ){
            // 
        }

     
        console.log(getLocalDataa,"after seting data")
        //    console.log(getLocalDataa,"after seting data")
        } ,




        removeItem : (state,action)=>{
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