import { createSlice } from "@reduxjs/toolkit";


const LocalCartData = createSlice({
    name : "localCart" ,
    initialState:{
        localStorage:[]
    },
    reducers:{
        AddLocalCartData : (state,action)=>{
    state.localStorage.push(action.payload)
        },
        RemoveFLocalCartData : (state,action)=>{
            state.localStorage.pop()
        }
    }
})