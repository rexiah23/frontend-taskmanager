import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SideDrawer from './SideDrawer';
import TopBar from './TopBar';

const useStyles = makeStyles(theme => ({

}));

const Navigation = props => {
  const classes = useStyles();

  return (
    <div>
      <TopBar/>
      <SideDrawer/>
    </div>
  );
};

export default Navigation;