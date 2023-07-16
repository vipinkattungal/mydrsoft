import { createSlice } from "@reduxjs/toolkit";
export const counerSlice=createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        increment:(state) =>{
            state.value +=1
        },
        decrement:(state)=>{
            state.value -=1
        },
        incrementByValue:(state, action)=>{
            state.value += action.payload 
        }
    }
})
export const {increment,decrement,incrementByValue}=counerSlice.actions
export const selectCount = (state) => state.counter.value

export default counerSlice.reducer