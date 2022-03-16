import React from 'react';
import { AppBar, Button, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  AppBar: {
    background:'None'
  },
  title: {
    flexGrow: 1
  }, 
  button: {
    color:"#fff", 
    backgroundColor: "#000"
  }
}));

const TopBar = ({ setOpenSideDrawer }) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.AppBar} elevation={0}>
        <Toolbar>
          <h1 className={classes.title}>ToDo</h1>
          <Button 
            className={classes.button} 
            onClick={() => setOpenSideDrawer(true)}
            >
            Change Background</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopBar;