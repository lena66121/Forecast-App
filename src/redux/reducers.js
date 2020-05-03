import {
  GET_WEATHER_SUCCESS,
  GET_WEATHER_ERROR,
  ADD_CITY_TO_HISTORY,
  GET_FORECAST_SUCCESS,
  GET_FORECAST_ERROR,
} from './actions';

export const currentCity = (state = [], { type, payload }) => {
  switch (type) {
    case GET_WEATHER_SUCCESS:
      return payload;
    case GET_WEATHER_ERROR:
      return payload;
    default:
      return state;
  }
};

export const forecastForFiveDays = (state = [], { type, payload }) => {
  switch (type) {
    case GET_FORECAST_SUCCESS:
      return payload;
    case GET_FORECAST_ERROR:
      return payload;
    default:
      return state;
  }
};

export const weatherHistory = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_CITY_TO_HISTORY:
      if (state.includes(payload.toLowerCase())) return [...state];
      if (state.length > 4) state.splice(0, 1);
      return [...state, payload.toLowerCase()];
    default:
      return state;
  }
};

export const error = (state = false, { type }) => {
  switch (type) {
    case GET_FORECAST_ERROR:
    case GET_WEATHER_ERROR:
      return true;
    case GET_FORECAST_SUCCESS:
    case GET_WEATHER_SUCCESS:
      return false;
    default:
      return state;
  }
};
