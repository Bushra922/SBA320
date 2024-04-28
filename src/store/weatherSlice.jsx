import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the initial state for weather data
const initialState = {
  data: null,
  loading: false,
  error: null,
};

// Define the API base URL and your API key
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'adfc997bbff35689c5e953118cb6dde2';

// Define the asynchronous action creator to fetch weather data
export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=adfc997bbff35689c5e953118cb6dde2&units=metric`);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Define the weather slice with reducers for handling loading, success, and error states
const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default weatherSlice.reducer;
