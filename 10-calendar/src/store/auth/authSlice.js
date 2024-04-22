import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: "checking", // authenticated, not-authenticated
        user: {},
        errorMessage: undefined
    },
    reducers: {
        checking: (state) => {
            state.status = "checking"
            state.user = {}
            state.errorMessage = undefined;
        },
        onLogin: (state, {payload}) => {
            state.status = "authenticated"
            state.errorMessage = undefined;
            state.user = payload;
        },
        onLogout: (state) => {
            state.status = "not-authenticated"
            state.errorMessage = undefined;
            state.user = {};
        }
    }
});


// Action creators are generated for each case reducer function
export const { checking, onLogin } =  authSlice.actions;