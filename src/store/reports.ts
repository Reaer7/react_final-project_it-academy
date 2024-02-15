import { createSlice } from "@reduxjs/toolkit";
import { ReportsType } from "./firebaseTypes";

const initialState: ReportsType = {
    items: [],
    isLoading: false
}

export const reportsSlice = createSlice({
    name: 'reports',
    initialState,
    reducers: {
        isLoadingStart: (state) => {
            state.isLoading = true;
        },
        isLoadingEnd: (state) => {
            state.isLoading = false;
        },
        loadReports: (state, action) => {
            state.items = action.payload;
        }
    }
});

export const { isLoadingStart, isLoadingEnd, loadReports } = reportsSlice.actions;
