import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type UserType = {
    id: string;
    accessToken: string | null;
    displayName: string | null;
    email: string | null;
    emailVerified: boolean;
    photoUrl: string | null;
};

export type UpdateUserNameType = {
    displayName: string;
};

export type UpdateUserEmailType = {
    email: string;
};

const initialState: UserType = {
    id: '',
    accessToken: null,
    displayName: null,
    email: '',
    emailVerified: false,
    photoUrl: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<UserType>) => {
            state.id = action.payload.id;
            state.accessToken = action.payload.accessToken;
            state.displayName = action.payload.displayName;
            state.email = action.payload.email;
            state.emailVerified = action.payload.emailVerified;
            state.photoUrl = action.payload.photoUrl;
        },
        updateMail: (state, action: PayloadAction<UpdateUserEmailType>) => {
            state.email = action.payload.email;
        },
        updateName: (state, action: PayloadAction<UpdateUserNameType>) => {
            state.displayName = action.payload.displayName;
        },
        logout: (state) => {
             state.id = '';
             state.accessToken = null;
             state.displayName = null;
             state.email = '';
             state.emailVerified = false;
             state.photoUrl = null;
        },
    },
})

export const {
    login,
    updateMail,
    updateName,
    logout
} = authSlice.actions;

export default authSlice.reducer;