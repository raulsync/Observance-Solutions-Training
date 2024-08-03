import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IBook {
  key: string;
  title: string;
  author_name?: string[];
  cover_i?: number;
}

interface IInitialState {
  books: IBook[];
}

const initialState: IInitialState = { books: [] };

const bookSlice = createSlice({
  name: 'bookList',
  initialState,
  reducers: {
    setBooks(state, action: PayloadAction<IBook[]>) {
      state.books = action.payload;
    },
  },
});

export const { setBooks } = bookSlice.actions;

export default bookSlice.reducer;
