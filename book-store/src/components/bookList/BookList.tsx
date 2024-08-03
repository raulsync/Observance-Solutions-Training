import { Link } from 'react-router-dom';
import { IBook } from '../../slices/bookslice';

interface IProps {
  books: IBook[];
}

const BookList: React.FC<IProps> = ({ books }) => {
  console.log(books, 'BookList Page');

  return (
    <div className=" my-3 flex flex-col gap-3 items-center m-auto justify-center w-full bg-cyan-100 ">
      {books
        ?.filter((book) => book.cover_i)
        ?.map((book) => (
          <div
            key={book.key}
            className=" flex flex-row rounded-md shadow-md items-center bg-white w-full h-40"
          >
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
              alt={book.title}
              className="book-cover h-36 rounded-md ml-2 object-contain"
            />
            <div className="book-details ml-5 flex flex-col items center gap-4">
              <h3 className="font-bold text-black">{book.title}</h3>
              {book.author_name && (
                <p className="font-semibold text-gray-400">
                  by {book.author_name}
                </p>
              )}
              {/* {console.log('BookList :', book.key)}
              {console.log('after splitting', book.key.split('/').pop())} */}
              <div className="book-detail-btn">
                <Link to={`/book/${book.key.split('/').pop()}`}>
                  <button className="bg-blue-500 px-4 rounded-md h-8 text-white">
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
