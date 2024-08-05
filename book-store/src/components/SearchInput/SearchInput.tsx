import { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { fetchSearchBooks } from '../../api/searchApi';
import { useNavigate } from 'react-router-dom';
import { setBooks } from '../../slices/bookslice';

const SearchInput = () => {
  const [query, setQuery] = useState<string>('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isDarkMode = useSelector((state: RootState) => state.darkMode.value);
  // console.log(books);
  // console.log(books);

  const handleSearchBooks = async () => {
    if (query.trim() === '') {
      navigate('/');
    }
    try {
      const data = await fetchSearchBooks(query);
      console.log(data?.docs);
      dispatch(setBooks(data?.docs || []));
      navigate('/book');
    } catch (error) {
      console.error('Failed to fetch search results:', error);
    }
  };

  return (
    <div className="searchbox  w-1/3 flex items-center">
      <input
        type="text"
        placeholder="Search your favourite book"
        className={`py-3 w-full px-3 rounded-md outline-none border ${
          isDarkMode
            ? ' bg-violet-800 text-white border-gray-600'
            : 'bg-white text-black border-gray-500'
        }`}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSearchBooks();
        }}
      />
      <IoIosSearch className="text-2xl -ml-10" />
    </div>
  );
};

export default SearchInput;
