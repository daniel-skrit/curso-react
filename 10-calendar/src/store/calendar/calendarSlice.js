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
    onAddNewEvent: (state, { payload }) => {
      state.activeEvent = null;
      state.events.push(payload);
    },
    onUpdateEvent: (state, { payload }) => {
      state.activeEvent = null;
      state.events = state.events.map((event) => {
        if (event._id === payload._id) {
          console.log("hola");
          return payload;
        }
        return event;
      });
    },
    onDeleteEvent: (state) => {
      if (state.activeEvent) {
        state.events = state.events.filter(
          (event) => event._id !== state.activeEvent._id
        );
        state.activeEvent = null;
      }
    },
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent } =
  calendarSlice.actions;
