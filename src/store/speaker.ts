import { createSlice } from "@reduxjs/toolkit";
import { DownloadSpeakerType } from "./firebaseTypes";

const initialState: DownloadSpeakerType = {
    item: {
        id: '',
        name: '',
        urlPhoto: '',
        jobTitle: '',
        title: ''
    },
    isLoading: false,
}

export const speakerSlice = createSlice({
    name: 'speaker',
    initialState,
    reducers: {
        isLoadingStart: (state) => {
            state.isLoading = true;
        },
        isLoadingEnd: (state) => {
            state.isLoading = false;
        },
        loadSpeaker: (state, action) => {
            state.item = action.payload;
        }
    }
});

export const { isLoadingStart, isLoadingEnd, loadSpeaker } = speakerSlice.actions;
