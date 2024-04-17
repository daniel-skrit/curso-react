import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const tempEvent = {
  _id: new Date().getTime(),
  title: " Cumpleaños del jefe",
  notes: "adasda",
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColors: "#fafafa",
  user: { _id: "123", name: "Fernando" },
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    events: [tempEvent],
    activeEvent: null,
  },
  reducers: {
    onAddNewEvent: (state, {payload}) => {
      state.activeEvent = null;
      state.events.push(payload);
    },
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onSetActiveEvent, onAddNewEvent } = calendarSlice.actions;
