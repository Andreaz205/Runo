import {createSlice} from "@reduxjs/toolkit";
import {setClicked} from "@/store/slider/slider.actions";

const initialState = {
    slideIndex: 0,
    clicked: false
}

export const sliderSlice = createSlice({
    name: 'slider',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(setClicked, (state, {payload}) => {
            state.clicked = payload
        })
    }
})