import { createSlice } from "@reduxjs/toolkit";
import { Children } from "react";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 1 },
  reducers: {
    increment(state) {
      state.counter += 1;
    },
    decrement(state) {
      state.counter--;
    },
    incrementBy(state, action) {
      state.counter += action.payload;
    },
  },
});

export const { increment, decrement, incrementBy } = counterSlice.actions;
// export default counterSlice.reducer;
