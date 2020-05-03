export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
export const GET_WEATHER_ERROR = 'GET_WEATHER_ERROR';
export const ADD_CITY_TO_HISTORY = 'ADD_CITY_TO_HISTORY';
export const GET_FORECAST_SUCCESS = 'GET_FORECAST_SUCCESS';
export const GET_FORECAST_ERROR = 'GET_FORECAST_ERROR';

export const forecastSuccess = city => ({
  type: GET_WEATHER_SUCCESS,
  payload: city,
});

export const forecastError = err => ({
  type: GET_WEATHER_ERROR,
  payload: err,
});

export const addCityToHistory = city => ({
  type: ADD_CITY_TO_HISTORY,
  payload: city,
});

export const forecastForFiveDaysSuccess = city => ({
  type: GET_FORECAST_SUCCESS,
  payload: city,
});

export const forecastForFiveDaysError = err => ({
  type: GET_FORECAST_ERROR,
  payload: err,
});
