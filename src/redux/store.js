import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  currentCity,
  weatherHistory,
  forecastForFiveDays,
  error,
} from './reducers';

const rootReducer = combineReducers({
  weather: currentCity,
  forecast: forecastForFiveDays,
  weatherHistory,
  error,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
