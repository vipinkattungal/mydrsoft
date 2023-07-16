import { configureStore } from "@reduxjs/toolkit";
import counterReducer from'./counterSlice'
import NoteReducer from "./NoteReducer";
import patients from "./patients";
export default configureStore({
    reducer:{
        counter:counterReducer,
        notes:NoteReducer,
        patients:patients
    },
})