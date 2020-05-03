import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './DetailedForecast.module.css';

const DetailedForecast = () => {
  const forecast = useSelector(state => state.forecast);

  return (
    <>
      <Link to="/" className={styles.returnButton}>
        &#x27F5;
      </Link>
      {forecast.length !== 0 && (
        <div className={styles.mainWrapper}>
          {forecast.list.map(item => {
            return (
              <div className={styles.itemWrapper} key={item.dt}>
                <p className={styles.time}>{`${moment(item.dt_txt).format(
                  'LT',
                )}`}</p>

                <img
                  alt="weather-img"
                  className={styles.icon}
                  src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                />
                <h2 className={styles.temp}>
                  {item.main.temp.toFixed()} &#8451;
                </h2>
                <p className={styles.humidity}>
                  <span role="img" aria-label="Drop">
                    &#128167;
                  </span>{' '}
                  {item.main.humidity}%
                </p>
                <p className={styles.weather}>{item.weather.main}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default DetailedForecast;
