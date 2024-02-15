import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { speakerSlice } from "./speaker";
import { reportSlice } from "./report";
import { speakersSlice } from "./speakers";

export const store = configureStore({
    reducer: combineReducers({
        auth: authSlice.reducer,
        speaker: speakerSlice.reducer,
        speakers: speakersSlice.reducer,
        report: reportSlice.reducer,
    }),
});

export const actions = {
    auth: authSlice.actions,
    speaker: speakerSlice.actions,
    speakers: speakersSlice.actions,
    report: reportSlice.actions,
};

export type RootState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;