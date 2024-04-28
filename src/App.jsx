import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import WeatherSearch from './components/WeatherSearch';
import WeatherInfo from './components/WeatherInfo';
import './index.css';

const App = () => {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
    </div>
  );
};

export default App;