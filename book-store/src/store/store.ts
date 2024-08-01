import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from '../slices/themeSlice';
import booksReducer from '../slices/bookslice';

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    books: booksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
