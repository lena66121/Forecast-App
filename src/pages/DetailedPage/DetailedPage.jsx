import React from 'react';
import { useSelector } from 'react-redux';
import DetailedForecast from '../../components/DetailedForecast/DetailedForecast';

const DetailedPage = () => {
  const forecast = useSelector(state => state.forecast);

  return <DetailedForecast forecast={forecast} />;
};

export default DetailedPage;
