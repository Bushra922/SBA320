import React from 'react';
import { useSelector } from 'react-redux';

const WeatherInfo = () => {
const weather = useSelector((state) => state.weather);

    return (
    <div className="weather-info">
        {weather.loading && <p>Loading...</p>}
        {weather.error && <p>{weather.error}</p>}
        {weather.data && (
        <div>
        <h2>Weather in {weather.data.name}</h2>
        <p>Temperature: {weather.data.main.temp}°C</p>
        <p>Description: {weather.data.weather[0].description}</p>
        <p>Humidity: {weather.data.main.humidity}%</p>
        <p>Wind Speed: {weather.data.wind.speed} m/s</p>
        </div>
        )}
    </div>
    );
};

export default WeatherInfo;