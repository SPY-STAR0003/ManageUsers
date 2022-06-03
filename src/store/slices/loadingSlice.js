

import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
    name : "loading",
    initialState : {
        showLoading : false,
    },
    reducers : {
        changeShowLoading : state => {
            state.showLoading
                ?   state.showLoading = false
                :   state.showLoading = true
        }
    }
}) 

export const { changeShowLoading } = loadingSlice.actions;

export default loadingSlice.reducer;