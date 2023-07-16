import { createSlice } from "@reduxjs/toolkit";
import PatientSatisfactionForm from "../component/Dashbord/components/patientSatisfactionForm";
import { act } from "react-dom/test-utils";
const patients = createSlice({
    name:"Patient",
    initialState:{
        value:[]
    },
    reducers:{
        addPatient:(state, action)=>{
            state.value.push(action.payload)
        }
    }
})
export const {addPatient} =patients.actions
export default patients.reducer