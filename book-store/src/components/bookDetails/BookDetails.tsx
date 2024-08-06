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
      <span className="back-navigate fixed z-[1001] left-5  top-24">
        <button onClick={() => navigate('/book')}>
          <TfiControlBackward className="bg-btn text-text rounded-md text-white shadow-md text-3xl p-2" />
        </button>
      </span>
      <div className="content flex flex-col items-center justify-center w-[90%] h-screen mt-20  p-4 rounded-md bg-description">
        {book ? (
          <div className="w-full h-screen bg-description flex flex-col justify-center items-center">
            <div className="img-container mb-2">
              <img
                src={coverImageUrl}
                alt={book?.title}
                className="object-cover w-[150px] h-[250px] rounded-md shadow-2xl"
              />
            </div>
            <div className="details w-full  flex flex-col items-center">
              <span className="text-2xl font-semibold text-text mb-2">
                Title:
              </span>
              <span className="text-2xl font-bold text-text mb-4">
                {book?.title}
              </span>
              <h1 className="text-2xl text-text font-semibold mb-2">
                Description:
              </h1>
              <p className="description text-center text-text">
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
