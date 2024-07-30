import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from '../slices/themeSlice';

export default configureStore({
  reducer: {
    darkMode: darkModeReducer,
  },
});
