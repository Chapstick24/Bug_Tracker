import {createSlice} from "@reduxjs/toolkit"


const slice = createSlice({
    name: "user",
    initialState:[{}],
    reducers:{
        getUser:(state)=>{
            state.push({name: "Joey Bug"})
            state.push({name: "Jonny Guy"})
        }
    }

})

export default slice.reducer;

export const {getUser} = slice.actions;