import { MdDarkMode } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import SearchInput from '../SearchInput/SearchInput';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../slices/themeSlice';
import { RootState } from '../../store/store';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.darkMode.value);

  return (
    <div
      className={`flex h-18 justify-between fixed z-[1000] shadow-md gap-2 items-center w-full bg-background ${
        isDarkMode && 'dark'
      } py-3 px-4 sm:py-4 sm:px-6 lg:px-8`}
    >
      <div className="logo h-12 w-28 sm:w-40 flex items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Open_Library_logo.svg/768px-Open_Library_logo.svg.png"
          alt="store_logo"
          className="h-full w-full cursor-pointer"
          onClick={() => navigate('/')}
        />
      </div>
      <SearchInput />
      <div className="theme-toggler">
        <MdDarkMode
          className="text-3xl sm:text-4xl cursor-pointer"
          onClick={() => dispatch(toggleDarkMode())}
        />
      </div>
    </div>
  );
};

export default Header;
