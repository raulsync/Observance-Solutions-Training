import { useSelector } from 'react-redux';
import { TfiControlBackward } from 'react-icons/tfi';

import BookList from '../../components/bookList/BookList';
import { RootState } from '../../store/store';
import { useNavigate } from 'react-router-dom';

const BookListPage = () => {
  const navigate = useNavigate();

  const books = useSelector((state: RootState) => state.books.books);
  return (
    <div className="w-full m-auto bg-zinc-300 relative h-screen flex items-center flex-col ">
      <div>
        <span className="back-navigate left-64 top-28 z-50 fixed ">
          <button onClick={() => navigate('/')}>
            <TfiControlBackward className=" bg-blue-400 rounded-md text-white shadow-md font-bold text-3xl" />
          </button>
        </span>
      </div>
      <div className="flex flex-col bg-zinc-300 mt-6 items-center w-full">
        <BookList books={books} />
      </div>
    </div>
  );
};

export default BookListPage;
