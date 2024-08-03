import { useState, useEffect } from 'react';
import './style.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Home = () => {
  const [animationClass, setAnimationClass] = useState('left-animation');
  const isDarkMode = useSelector((state: RootState) => state.darkMode.value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationClass('');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`w-full  flex items-center h-[87.25vh] ${
        isDarkMode && 'bg-violet-900'
      }`}
    >
      <div
        className={`flex items-center  h-[70vh]  w-1/2 mt-8  mx-4 ${
          isDarkMode && 'bg-violet-900'
        }`}
      >
        <img
          src="/home_left.png"
          alt="book on hand"
          className={`h-full w-full object-contain hover-animation ${animationClass}`}
          id="animatedImage"
        />
      </div>
      <div className="right flex items-center  w-1/2 h-[70vh] mt-8 ml-2 ">
        <div
          className={`flex ${
            isDarkMode && 'bg-violet-950'
          } flex-col items-center justify-center w-full h-1/3 gap-4 bg-cyan-500 rounded-s-md`}
        >
          <h1 className="font-bold text-3xl text-white">
            Remain Curious Always
          </h1>
          <button
            className={` ${
              isDarkMode && 'bg-violet-600'
            } bg-blue-600  w-1/3 px-4 py-2 rounded-md text-white`}
          >
            Read free for 30 days
          </button>
          <h2 className="font-semibold text-white text-xl">
            Let's there be light. . .{' '}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
