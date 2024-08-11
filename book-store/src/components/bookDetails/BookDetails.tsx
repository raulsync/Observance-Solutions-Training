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
    <div className="book-details-container relative w-full h-full mx-auto p-4 bg-background flex flex-col items-center justify-center">
      <span className="back-navigate fixed z-[1001] left-4 top-24 sm:left-5 sm:top-24">
        <button onClick={() => navigate('/book')}>
          <TfiControlBackward className="bg-btn text-text rounded-md text-white shadow-md text-2xl sm:text-3xl p-2" />
        </button>
      </span>
      <div className="content flex flex-col items-center justify-center w-full sm:w-[90%] h-auto sm:h-screen mt-10 sm:mt-20 p-4 rounded-md bg-description">
        {book ? (
          <div className="w-full h-auto sm:h-screen bg-description flex flex-col justify-center items-center">
            <div className="img-container mb-4">
              <img
                src={coverImageUrl}
                alt={book?.title}
                className="object-cover w-[120px] h-[180px] sm:w-[150px] sm:h-[250px] rounded-md shadow-2xl"
              />
            </div>
            <div className="details w-full flex flex-col items-center text-center">
              <span className="text-xl sm:text-2xl font-semibold text-text mb-2">
                Title:
              </span>
              <span className="text-xl sm:text-2xl font-bold text-text mb-4">
                {book?.title}
              </span>
              <h1 className="text-xl sm:text-2xl text-text font-semibold mb-2">
                Description:
              </h1>
              <p className="description text-sm sm:text-base text-text">
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
