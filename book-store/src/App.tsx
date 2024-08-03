import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/Home/Home';
import BookListPage from './pages/booksListPage/BookListPage';
import BookDetails from './components/bookDetails/BookDetails';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/book"
          element={<BookListPage />}
        />
        <Route
          path="/book/:id"
          element={<BookDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
