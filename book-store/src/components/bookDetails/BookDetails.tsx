import axios from 'axios';
import { useEffect, useState } from 'react';
import { TfiControlBackward } from 'react-icons/tfi';
import { useNavigate, useParams } from 'react-router-dom';

interface IState {
  title: string;
  description: string;
  covers?: number[];
}

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<IState | null>(null);
  const navigate = useNavigate();
  console.log('From Book Details', book);

  console.log(book);
  useEffect(() => {
    fetchBookDetails();
  }, [id]);

  const fetchBookDetails = async () => {
    try {
      const response = await axios.get(
        `https://openlibrary.org/works/${id}.json`,
      );
      setBook(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const coverImageUrl = book?.covers
    ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`
    : 'https://via.placeholder.com/150';
  return (
    <div className="book-details-container relative w-[50%] h-full mx-auto p-4 bg-slate-300 flex flex-col items-center">
      <span className="back-navigate absolute left-1 top-3 ">
        <button onClick={() => navigate('/book')}>
          <TfiControlBackward className=" bg-blue-400 rounded-md text-white shadow-md text-3xl" />
        </button>
      </span>
      {book ? (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="img-container">
            <img
              src={coverImageUrl}
              alt={book.title}
              className=" w-[150px] h-[200px] object-cover"
            />
          </div>
          <div className="details w-ful h-1/2 flex flex-col items-center">
            <span className="text-2xl font-semibold text-gray-700">Title:</span>
            <span className="text-2xl font-bold  mx-4">{book.title}</span>
            <h1 className="text-2xl font-semibold ">Description:</h1>
            <p className="description">
              {book?.description || 'No description available.'}
            </p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default BookDetails;
