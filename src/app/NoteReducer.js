import { createSlice } from "@reduxjs/toolkit";

const note =  createSlice({
    name:"note",
    initialState:{value:[]},
    reducers:{
        addNote:(state, action)=>{
            state.value.push(action.payload)
        },
        deleteNote:(state, action)=>{
            console.log(action.payload.id,"asdsa",);

    state.value = state.value.filter((user)=>user.id !==action.payload.id)

        }
    }
})
export const {addNote,deleteNote}=note.actions
export default note.reducer