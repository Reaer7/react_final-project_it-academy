import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";

export const store = configureStore({
    reducer: combineReducers({
        auth: authSlice.reducer,
    }),
});

export const actions = {
    auth: authSlice.actions,
};

export type RootState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;