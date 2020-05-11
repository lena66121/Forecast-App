import { createAction } from '@reduxjs/toolkit';

export const forecastSuccess = createAction('GET_WEATHER_SUCCESS');
export const forecastError = createAction('GET_WEATHER_ERROR');
export const addCityToHistory = createAction('ADD_CITY_TO_HISTORY');
export const forecastForFiveDaysSuccess = createAction('GET_FORECAST_SUCCESS');
export const forecastForFiveDaysError = createAction('GET_FORECAST_ERROR');
