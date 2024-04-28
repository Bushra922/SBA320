import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../store/weatherSlice';

const WeatherSearch = () => {
const [city, setCity] = useState('');
const dispatch = useDispatch();

const handleChange = (e) => {
    setCity(e.target.value);
    };

const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchWeather(city));
    setCity(''); // Clear input field after submission
    };

return (
    <div className="weather-search">
        <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={handleChange}
        />
        <button type="submit">Search</button>
        </form>
    </div>
    );
};

export default WeatherSearch;