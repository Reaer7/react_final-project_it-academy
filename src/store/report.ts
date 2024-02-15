import { createSlice } from "@reduxjs/toolkit";
import { DownloadReportType } from "./firebaseTypes";

const initialState: DownloadReportType = {
    item: {
        id: '',
        name: '',
        urlPhoto: '',
        description: '',
        speakerId: ''
    },
    isLoading: false,
}

export const reportSlice = createSlice({
    name: 'report',
    initialState,
    reducers: {
        isLoadingStart: (state) => {
            state.isLoading = true;
        },
        isLoadingEnd: (state) => {
            state.isLoading = false;
        },
        loadReport: (state, action) => {
            state.item = action.payload;
        }
    }
});

export const { isLoadingStart, isLoadingEnd, loadReport } = reportSlice.actions;
