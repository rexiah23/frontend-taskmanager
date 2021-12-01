import React from 'react';
import Main from './components/Main';
import { makeStyles } from '@material-ui/core/styles';
import Navigation from './components/Navigation/Navigation';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor:'green'
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navigation/>
      <Main/>
    </div>
  );
};