import { useSelector } from 'react-redux';
import { TfiControlBackward } from 'react-icons/tfi';

import BookList from '../../components/bookList/BookList';
import { RootState } from '../../store/store';
import { useNavigate } from 'react-router-dom';

const BookListPage = () => {
  const navigate = useNavigate();

  const books = useSelector((state: RootState) => state.books.books);
  return (
    <div className="w-full m-auto bg-background relative h-[100%] flex items-center flex-col px-4 sm:px-6 md:px-8">
      <div className="bg-background w-full max-w-3xl mx-auto">
        <span className="back-navigate left-2 top-32 z-50 fixed">
          <button onClick={() => navigate('/')}>
            <TfiControlBackward className="bg-btn rounded-md text-text shadow-md font-bold text-xl sm:text-2xl md:text-3xl" />
          </button>
        </span>
      </div>
      <div className="flex flex-col bg-background mt-16 items-center  w-full max-w-3xl mx-auto">
        <BookList books={books} />
      </div>
    </div>
  );
};

export default BookListPage;
