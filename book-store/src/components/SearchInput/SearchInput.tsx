import { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { useSelector } from 'react-redux';

const SearchInput = () => {
  const [query, setQuery] = useState<string>('');
  const isDarkMode = useSelector((state) => state.darkMode.value);

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
      />
      <IoIosSearch className="text-2xl -ml-10" />
    </div>
  );
};

export default SearchInput;
