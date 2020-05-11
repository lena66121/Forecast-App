import { createReducer } from '@reduxjs/toolkit';
import {
  forecastSuccess,
  forecastError,
  addCityToHistory,
  forecastForFiveDaysSuccess,
  forecastForFiveDaysError,
} from './actions';

export const currentCity = createReducer([], {
  [forecastSuccess.type]: (state, action) => action.payload,
  [forecastError.type]: (state, action) => action.payload,
});

export const forecastForFiveDays = createReducer([], {
  [forecastForFiveDaysSuccess.type]: (state, action) => action.payload,
  [forecastForFiveDaysError.type]: (state, action) => action.payload,
});

export const weatherHistory = createReducer([], {
  [addCityToHistory.type]: (state, action) => {
    if (state.includes(action.payload.toLowerCase())) return [...state];
    if (state.length > 4) state.splice(0, 1);
    return [...state, action.payload.toLowerCase()];
  },
});

export const error = createReducer(false, {
  [forecastSuccess.type]: () => false,
  [forecastForFiveDaysSuccess.type]: () => false,
  [forecastError.type]: () => true,
  [forecastForFiveDaysError.type]: () => true,
});
