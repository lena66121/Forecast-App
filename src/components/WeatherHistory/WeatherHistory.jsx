import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getForecastForDay } from '../../services/api';
import styles from './WeatherHistory.module.css';

const WeatherHistory = () => {
  const dispatch = useDispatch();
  const history = useSelector(state => state.weatherHistory);

  const handleClick = e => {
    const city = e.target.name;
    dispatch(getForecastForDay(city));
  };

  return (
    <div className={styles.wrapper}>
      {history.map(item => (
        <button
          type="button"
          name={item}
          onClick={handleClick}
          className={styles.city}
          key={item}
        >
          {item[0].toUpperCase() + item.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default WeatherHistory;
