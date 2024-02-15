import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { UpdateUserEmailType, UpdateUserNameType, UserType } from "./firebaseTypes";

const getUserFromLocalStorage = (): UserType | undefined => {
    if (isLocalStorageAvailable()) {
        const userString: string | null = localStorage.getItem("user");
        if (userString) {
            return JSON.parse(userString);
        }
    } else {
        return {
            id: '',
            accessToken: null,
            displayName: null,
            email: '',
            emailVerified: false,
            photoUrl: null,
        };
    }
}

const initialState: UserType = <UserType>{
    ...getUserFromLocalStorage()
}

function isLocalStorageAvailable() {
    try {
        localStorage.setItem("test", "test");
        localStorage.removeItem("test");
        return true;
    } catch (error) {
        return false;
    }
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

            if (isLocalStorageAvailable()) {
                localStorage.setItem("user", JSON.stringify(action.payload));
            }
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

            if (isLocalStorageAvailable()) {
                localStorage.removeItem("user");
            }
        },
    },
})

export const { login, updateMail, updateName, logout } = authSlice.actions;