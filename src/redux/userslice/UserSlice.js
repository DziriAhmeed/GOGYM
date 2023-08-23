import { createSlice } from "@reduxjs/toolkit";

const initialState={
    name:'',
    phonenumber:'',
    email:'',
}
export const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.name=action.payload.name
            state.phonenumber=action.payload.phonenumber
            state.email=action.payload.email
            
        },
        updateUser:(state,action)=>{
            state[action.payload.key]=action.payload.value
        },
        logout:(state)=>{
            state=initialState
        }
    }
})
export const {setUser,updateUser,logout}=userSlice.actions

export default userSlice.reducer