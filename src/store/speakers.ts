import { createSlice } from "@reduxjs/toolkit";
import { SpeakersType } from "./firebaseTypes";

const initialState: SpeakersType = {
    items: [],
    isLoading: false,
}

export const speakersSlice = createSlice({
    name: 'speakers',
    initialState,
    reducers: {
        isLoadingStart: (state) => {
            state.isLoading = true;
        },
        isLoadingEnd: (state) => {
            state.isLoading = false;
        },
        loadSpeakers: (state, action) => {
            state.items = action.payload;
        }
    }
});

export const { isLoadingStart, isLoadingEnd, loadSpeakers } = speakersSlice.actions;
