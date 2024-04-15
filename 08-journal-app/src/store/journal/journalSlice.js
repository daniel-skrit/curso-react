import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "name",
  initialState: {
    isSaving: false,
    messageSaved: "",
    notes: [],
    active: null,
    imageUrls: [],
    // active2: {
    //     id: "",
    //     title: "",
    //     body: "",
    //     date: "",
    //     imageUrls: []
    // }
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptynNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
      state.messageSaved = ``;
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = ``;
    },
    updateNote: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) => {
        return note.id != action.payload.id ? note : action.payload;
      });
      state.messageSaved = `${action.payload.title}, actualizada correctamente`;
    },

    setPhotosToActiveNote: (state, action) => {
      if (state.active.imageURLS != null) {
        state.active.imageURls = [];
      }
      state.active.imageUrls = [...state.active.imageURls, ...action.payload];
      state.isSaving = false;
    },
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
  savingNewNote,
  setPhotosToActiveNote,
} = journalSlice.actions;
