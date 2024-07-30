import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: false };

const themeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.value = !state.value;
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
