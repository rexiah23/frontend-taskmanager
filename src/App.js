import React from 'react';
import Main from './components/Main';
import TopBar from './components/Bars/TopBar';
import { makeStyles } from '@material-ui/core/styles';
import SideDrawer from './components/Drawers/SideDrawer';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor:'green'
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TopBar/>
      <SideDrawer/>
      <Main/>
    </div>
  );
};