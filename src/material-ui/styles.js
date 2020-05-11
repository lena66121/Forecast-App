import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
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
    [theme.breakpoints.up('md')]: {
      backgroundColor: 'red',
    },
    width: '20%',
    height: 40,
    fontWeight: 'bold',
  },
}));

export default useStyles;
