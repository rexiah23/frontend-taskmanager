import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SideDrawer from './SideDrawer';
import TopBar from './TopBar';

const useStyles = makeStyles(theme => ({

}));

const Navigation = props => {
  const classes = useStyles();
  const [openSideDrawer, setOpenSideDrawer] = useState(false); 

  return (
    <div>
      <TopBar setOpenSideDrawer={setOpenSideDrawer}/>
      <SideDrawer setOpenSideDrawer={setOpenSideDrawer} openSideDrawer={openSideDrawer}/>
    </div>
  );
};

export default Navigation;