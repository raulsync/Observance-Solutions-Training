import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import SearchInput from './SearchInput';
import WeatherInfo from './WeatherInfo';

interface WeatherData {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    cloud: number;
    humidity: number;
    wind_kph: number;
    precip_mm: number;
  };
}

const WeatherContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  backdrop-filter: blur(10px);
  ${(props) =>
    props.background && `background-image: url(${props.background});`}
`;

const Weather: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [backgroundImage, setBackgroundImage] = useState('');
  const [city, setCity] = useState('');

  const fetchWeather = async (query: string) => {
    try {
      const response = await axios.get<WeatherData>(
        'https://api.weatherapi.com/v1/current.json',
        {
          params: {
            key: '0bab7dd1bacc418689b143833220304',
            q: query,
          },
        },
      );
      setWeatherData(response.data);
      updateBackground(response.data.current.condition.text);
    } catch (error) {
      console.error('Error fetching weather data', error);
    }
  };

  const updateBackground = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        setBackgroundImage('/sunny-weather.jpg');
        break;
      case 'light rain shower':
        setBackgroundImage('/cloudy-weather.jpg');
        break;
      case 'clear':
        setBackgroundImage('/sunny-weather.jpg');
        break;
      case 'patchy rain nearby':
        setBackgroundImage('/rainy-weather.jpg');
        break;
      default:
        setBackgroundImage('snowy-weather.jpg');
        break;
    }
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchWeather(city);
  };

  useEffect(() => {
    fetchWeather('auto:ip');
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <WeatherContainer background={backgroundImage}>
      <SearchInput
        city={city}
        setCity={setCity}
        handleSearch={handleSearch}
      />
      <WeatherInfo
        location={weatherData.location}
        current={weatherData.current}
      />
    </WeatherContainer>
  );
};

export default Weather;
