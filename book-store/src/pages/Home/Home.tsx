import { useState, useEffect } from 'react';
import './style.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Home = () => {
  const [animationClass, setAnimationClass] =
    useState<string>('left-animation');
  const isDarkMode = useSelector((state: RootState) => state.darkMode.value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationClass('');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`w-full flex flex-col md:flex-row items-center bg-background text-text h-[100vh] ${
        isDarkMode ? 'dark' : ''
      }`}
    >
      <div className="flex items-center h-[40vh] md:h-[70vh] w-full md:w-1/2 mt-8 mx-4">
        <img
          src="/home_left.png"
          alt="book on hand"
          className={`h-full w-full object-contain hover-animation ${animationClass}`}
          id="animatedImage"
        />
      </div>
      <div className="right flex items-center bg-background w-full md:w-1/2 h-[50vh] md:h-[70vh] mt-4 md:mt-8 ml-2">
        <div
          className={`flex flex-col items-center justify-center w-full bg-primary h-full md:h-1/3 gap-4 md:gap-1 bg-cyan-500 rounded-md md:rounded-s-md p-4`}
        >
          <h1 className="font-bold text-2xl md:text-3xl text-text text-center">
            Remain Curious Always
          </h1>
          <button
            className={`bg-btn w-2/3 md:w-48 px-4 py-2 rounded-md text-text`}
          >
            Read free for 30 days
          </button>
          <h2 className="font-semibold text-text text-lg md:text-xl text-center">
            Let's there be light. . .
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
