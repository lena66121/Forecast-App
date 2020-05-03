import axios from 'axios';
import {
  forecastSuccess,
  forecastError,
  forecastForFiveDaysSuccess,
  forecastForFiveDaysError,
} from '../redux/actions';

const BASE_URL_WEATHER =
  'https://api.openweathermap.org/data/2.5/weather?&appid=59f803421c28d29b0126e20fa7f418ff&units=metric&q=';
const BASE_URL_FORECAST =
  'https://api.openweathermap.org/data/2.5/forecast?&appid=59f803421c28d29b0126e20fa7f418ff&units=metric&&units=metric&cnt=8&q=';

export const getForecastForDay = city => dispatch => {
  axios
    .get(BASE_URL_WEATHER + city)
    .then(res => {
      dispatch(forecastSuccess(res.data));
    })
    .catch(err => {
      dispatch(forecastError(err));
    });
};

export const getForecastForFiveDays = city => dispatch => {
  axios
    .get(BASE_URL_FORECAST + city)
    .then(res => {
      dispatch(forecastForFiveDaysSuccess(res.data));
    })
    .catch(err => {
      dispatch(forecastForFiveDaysError(err));
    });
};
