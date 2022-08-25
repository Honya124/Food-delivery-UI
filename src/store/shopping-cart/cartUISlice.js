import {createSlice} from '@reduxjs/toolkit'

const cartUISlice=createSlice({
    name:"cartUI",
    initialState:{cartIsVisivle:false},
    reducers:{
     toggle(state){
       state.cartIsVisivle= !state.cartIsVisivle
     }
    }
})

export const toggleActions=cartUISlice.actions
export default cartUISlice