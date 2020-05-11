import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import DetailedPage from '../DetailedPage/DetailedPage';
import './App.css';

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/:city" component={DetailedPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
