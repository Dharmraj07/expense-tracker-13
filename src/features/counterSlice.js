import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"counter",
    initialState:{
        value:0,
    },
    reducers:{
        increment:(state)=>{
            state.value+=5;
        },
        decrement:(state)=>{
            state.value-=5;
        },
        incrementBy2: (state) => {
            state.value += 2;
        },
        decrementBy2: (state) => {
            state.value -= 2;
        },
    }
})

export const { increment, decrement,incrementBy2,decrementBy2 } = counterSlice.actions;
export default counterSlice.reducer;
