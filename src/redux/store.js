import { configureStore } from '@reduxjs/toolkit';
import {
  currentCity,
  weatherHistory,
  forecastForFiveDays,
  error,
} from './reducers';

const store = configureStore({
  reducer: {
    weather: currentCity,
    forecast: forecastForFiveDays,
    weatherHistory,
    error,
  },
});

export default store;
