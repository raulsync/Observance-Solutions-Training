import { Link } from 'react-router-dom';
import { IBook } from '../../slices/bookslice';

interface IProps {
  books: IBook[];
}

const BookList: React.FC<IProps> = ({ books }) => {
  console.log(books, 'BookList Page');

  return (
    <div
      className={`mt-10 flex flex-col gap-4 items-center m-auto justify-center w-full sm:w-[80%] md:w-[60%] lg:w-[50%] bg-background px-4`}
    >
      {books
        ?.filter((book) => book.cover_i)
        ?.map((book) => (
          <div
            key={book.key}
            className="flex flex-row rounded-md shadow-md items-center bg-card w-full h-40 sm:h-48 md:h-56 p-2"
          >
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
              alt={book.title}
              className="book-cover h-32 sm:h-36 md:h-40 rounded-md object-contain"
            />
            <div className="book-details ml-3 sm:ml-5 flex flex-col justify-center gap-2 sm:gap-4">
              <h3 className="font-bold text-cardtext text-base sm:text-lg md:text-xl">
                {book.title}
              </h3>
              {book.author_name && (
                <p className="font-semibold text-cardtext text-sm sm:text-base md:text-lg">
                  by {book.author_name}
                </p>
              )}
              <div className="book-detail-btn">
                <Link to={`/book/${book.key.split('/').pop()}`}>
                  <button className="bg-btn2 px-3 sm:px-4 rounded-md h-8 sm:h-10 text-text text-sm sm:text-base">
                    Book Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BookList;
