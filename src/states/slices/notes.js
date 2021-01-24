import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  notes: [],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    getNotes: (state) => {
      state.loading = true;
    },
    getNotesSuccess: (state, { payload }) => {
      state.notes = payload;
    },
  },
});
