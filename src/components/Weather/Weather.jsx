import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Weather.module.css';
import { getForecastForFiveDays } from '../../services/api';

const Weather = () => {
  const dispatch = useDispatch();
  const city1 = useSelector(state => state.weather.name);
  const data = useSelector(state => state.weather);

  const handleClick = () => {
    dispatch(getForecastForFiveDays(city1));
  };

  return (
    <div className={styles.mainWrapper}>
      {data.length !== 0 && (
        <>
          <h1 className={styles.title}>
            {data.name}, {data.sys.country}
          </h1>
          <img
            alt="weather-img"
            className={styles.icon}
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          />
          <h2 className={styles.temp}>{data.main.temp.toFixed()} &#8451;</h2>
          <div className={styles.temperatures}>
            <p className={styles.minMax}>
              {data.main.temp_min.toFixed()}&#xb0;
            </p>
            <p className={styles.minMax}>
              {data.main.temp_max.toFixed()}&#xb0;
            </p>
          </div>
          <p className={styles.weather}>{data.weather[0].main}</p>
          <Link to="/details" onClick={handleClick} className={styles.link}>
            More details
          </Link>
        </>
      )}
    </div>
  );
};

export default Weather;
