import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated", // "checking" "not-authenticated", "authenticated"
    uid: null,
    email: null,
    displayname: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, payload) => {},
    logout: (state, payload) => {},
    checkingCredentials: (state) => {
      state.status = "checking";
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;
