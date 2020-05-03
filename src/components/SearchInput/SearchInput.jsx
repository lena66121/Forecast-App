import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { getForecastForDay } from '../../services/api';
import styles from './SearchInput.module.css';
import { addCityToHistory } from '../../redux/actions';
import WeatherHistory from '../WeatherHistory/WeatherHistory';

const useStyles = makeStyles(() => ({
  main: {
    '&$focusedLabel': {
      color: 'white',
      backgroundColor: 'transparent',
    },
  },
  focusedLabel: {},
  underline: {
    '&$focusedInput': {
      color: 'white',
      backgroundColor: 'transparent',
    },
    '&:focus': {
      color: 'transparent',
    },
    backgroundColor: 'transparent',
    paddingLeft: 10,
    borderBottom: `2px solid white`,
    color: 'white',
    fontSize: 20,
    '&:after': {
      backgroundColor: 'transparent',
      borderBottom: `2px solid white`,
    },
  },
  button: {
    width: '20%',
    height: 40,
    fontWeight: 'bold',
  },
}));

const SearchInput = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [city, setCity] = useState('');

  const handleChange = e => {
    setCity(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(getForecastForDay(city));
    dispatch(addCityToHistory(city));
    setCity('');
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
        <TextField
          onChange={handleChange}
          value={city}
          type="text"
          className={classes.textField}
          id="standard-full-width"
          color="white"
          style={{ marginRight: 20, color: '#white' }}
          placeholder="City"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            classes: {
              root: classes.underline,
            },
          }}
        />
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          rowsMax={5}
          type="submit"
        >
          Get weather
        </Button>
      </form>
      <WeatherHistory />
    </div>
  );
};

export default SearchInput;
