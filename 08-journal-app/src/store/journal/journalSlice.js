import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "name",
  initialState: {
    isSaving: true,
    messageSaved: "",
    notes: [],
    active: null,
    // active2: {
    //     id: "",
    //     title: "",
    //     body: "",
    //     date: "",
    //     imageUrls: []
    // }
  },
  reducers: {
    addNewEmptynNote: (state, action) => {},
    setActiveNote: (state, action) => {},
    setNotes: (state, action) => {},
    setSaving: (state) => {},
    updateNote: (state, action) => {},
    deleteNodeById: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const {
  addNewEmptynNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
} = journalSlice.actions;
