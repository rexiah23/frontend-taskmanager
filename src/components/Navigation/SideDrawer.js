import { makeStyles } from '@material-ui/core/styles';
import { Drawer } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: '30vw'
  }
}));

const SideDrawer = ({ setOpenSideDrawer, openSideDrawer }) => {
  const classes = useStyles();

  return (
    <div>
      <Drawer open={openSideDrawer} anchor='right' onClose={() => setOpenSideDrawer(false)}>
        <div className={classes.drawer}>
          <h1>Helloo world</h1>
        </div>
      </Drawer>
    </div>
  );
};

export default SideDrawer;