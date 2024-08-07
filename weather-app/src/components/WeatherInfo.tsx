import styled from 'styled-components';

const WeatherInfoContainer = styled.div`
  width: 90%;
  height: 90vh;
  background: rgba(255, 255, 255, 0.2);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
`;

interface WeatherInfoProps {
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

const WeatherInfo: React.FC<WeatherInfoProps> = ({ location, current }) => {
  const { name, region, country } = location;
  const { temp_c, condition, cloud, humidity, wind_kph, precip_mm } = current;

  return (
    <WeatherInfoContainer>
      <h1>
        {name}, {region}, {country}
      </h1>
      <p>{new Date().toLocaleString()}</p>
      <WeatherIcon
        src={condition.icon}
        alt={condition.text}
      />
      <h2>{temp_c}°C</h2>
      <p>{condition.text}</p>
      <p>Cloud: {cloud}%</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind: {wind_kph} kph</p>
      <p>Precipitation: {precip_mm} mm</p>
    </WeatherInfoContainer>
  );
};

export default WeatherInfo;
