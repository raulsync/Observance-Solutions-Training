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
      className={`flex h-18 justify-between fixed z-[1000] shadow-md gap-2 items-center w-full  bg-background ${
        isDarkMode && 'dark'
      }  py-4 `}
    >
      <div className="logo h-14 w-40 flex items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Open_Library_logo.svg/768px-Open_Library_logo.svg.png"
          alt="store_logo"
          className="ml-2 h-full w-full cursor-pointer"
          onClick={() => navigate('/')}
        />
      </div>
      <SearchInput />
      <div className="theme-toggler">
        <MdDarkMode
          className="text-4xl -ml-14 cursor-pointer"
          onClick={() => dispatch(toggleDarkMode())}
        />
      </div>
    </div>
  );
};

export default Header;
