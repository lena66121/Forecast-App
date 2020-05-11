import React from 'react';
import { useSelector } from 'react-redux';
import SearchInput from '../../components/SearchInput/SearchInput';
import Weather from '../../components/Weather/Weather';
import styles from './MainPage.module.css';

const MainPage = () => {
  const data = useSelector(state => state.weather);
  const error = useSelector(state => state.error);

  return (
    <div className={styles.wrapper}>
      <SearchInput />
      {error && <h2 className={styles.error}>Ooops, city not found...</h2>}
      {data !== null && !error && <Weather />}
    </div>
  );
};

export default MainPage;
