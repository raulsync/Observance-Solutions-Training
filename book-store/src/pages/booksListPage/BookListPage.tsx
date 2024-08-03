import { useSelector } from 'react-redux';
import { TfiControlBackward } from 'react-icons/tfi';

import BookList from '../../components/bookList/BookList';
import { RootState } from '../../store/store';
import { useNavigate } from 'react-router-dom';

const BookListPage = () => {
  const navigate = useNavigate();

  const books = useSelector((state: RootState) => state.books.books);
  return (
    <div className="w-[50%] m-auto bg-slate-300 relative ">
      <div className="absolute top-3 w-full">
        <span className="back-navigate">
          <button onClick={() => navigate('/')}>
            <TfiControlBackward className=" bg-blue-400 rounded-md text-white shadow-md font-bold text-3xl" />
          </button>
        </span>
        <BookList books={books} />
      </div>
    </div>
  );
};

export default BookListPage;
