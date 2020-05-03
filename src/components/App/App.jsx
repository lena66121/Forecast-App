import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import DetailedForecast from '../DetailedForecast/DetailedForecast';
import './App.css';

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/details" component={DetailedForecast} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
