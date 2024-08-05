import axios from 'axios';
import { useEffect, useState } from 'react';
import { TfiControlBackward } from 'react-icons/tfi';
import { useNavigate, useParams } from 'react-router-dom';

interface IState {
  title: string;
  description: string | { value: string };
  covers?: number[];
}

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<IState | null>(null);
  const navigate = useNavigate();

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

  const getDescription = (description: string | { value: string }) => {
    if (typeof description === 'string') {
      return description;
    } else if (
      description &&
      typeof description === 'object' &&
      'value' in description
    ) {
      return description.value;
    }
    return 'No description available.';
  };

  const coverImageUrl = book?.covers
    ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`
    : 'https://via.placeholder.com/150';

  return (
    <div className="book-details-container relative w-full h-full mx-auto p-4 bg-zinc-400 flex flex-col items-center justify-center">
      <span className="back-navigate fixed z-[1001] left-44 top-24">
        <button onClick={() => navigate('/book')}>
          <TfiControlBackward className="bg-blue-400 rounded-md text-white shadow-md text-3xl p-2" />
        </button>
      </span>
      <div className="content flex flex-col items-center justify-center w-[70%] h-full mt-20 bg-cyan-200 p-4 rounded-md shadow-lg">
        {book ? (
          <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="img-container mb-4">
              <img
                src={coverImageUrl}
                alt={book?.title}
                className="object-cover rounded-md shadow-2xl"
              />
            </div>
            <div className="details w-full h-[38.8vh] flex flex-col items-center">
              <span className="text-2xl font-semibold text-gray-700 mb-2">
                Title:
              </span>
              <span className="text-2xl font-bold mb-4">{book?.title}</span>
              <h1 className="text-2xl font-semibold mb-2">Description:</h1>
              <p className="description text-center">
                {getDescription(book?.description)}
              </p>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default BookDetails;
