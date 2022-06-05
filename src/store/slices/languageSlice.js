
import { createSlice } from "@reduxjs/toolkit";
import { englishLanguage } from "./languageSliceLayout/englishLanguage";
import { persianLanguage } from "./languageSliceLayout/persianLanguage";

const languageSlice = createSlice({
    name : "language",
    initialState : {
        values : persianLanguage,
        rtl : true,
    },
    reducers : {
        langEN : state => {
            state.values = englishLanguage;
            state.rtl = false;
            document.body.classList.add("leftToRightLanguages")
            document.body.classList.remove("rightToLeftLanguages")
        },
        langFA : state => {
            state.values = persianLanguage;
            state.rtl = true;
            document.body.classList.remove("leftToRightLanguages")
            document.body.classList.add("rightToLeftLanguages")
        }
    } 
})

export const { langEN , langFA } = languageSlice.actions;
export default languageSlice.reducer;
