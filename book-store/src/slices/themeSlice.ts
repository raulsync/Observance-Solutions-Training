import { createSlice } from '@reduxjs/toolkit';

interface IThemeState {
  value: boolean;
}

const initialState: IThemeState = { value: false };

const themeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleDarkMode(state: IThemeState) {
      state.value = !state.value;

      if (state.value) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
