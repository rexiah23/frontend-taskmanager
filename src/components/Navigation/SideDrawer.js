import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer } from '@material-ui/core';
import colors from '../../colors/colors';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: '400px'
  }, 
  menu: {
    margin: theme.spacing(2),
    display: 'flex',
    justifyConent: 'space-around',
  },
  box: {
    margin: theme.spacing(1),
    width: '45%', 
    height: '90px',
    backgroundColor: 'blue',
    borderRadius: "9px",
  },
  optionsContainer: {
    display: 'flex',
    flexWrap: "wrap"
  }
}));

const SideDrawer = ({ setOpenSideDrawer, openSideDrawer }) => {
  const classes = useStyles();
  const [openColorOptions, setOpenColorOptions] = useState(false);

  return (
    <div>
      <Drawer 
        open={openSideDrawer} 
        anchor='right' 
        onClose={() => setOpenSideDrawer(false)}
      >
        <div className={classes.drawer}>
          <div className={classes.menu}>
            <div 
              className={classes.box}
              style={{
                backgroundImage:'url(https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
              }}
              ></div>
            <div 
              className={classes.box}
              style={{
                backgroundImage: 'url(https://htmlcolorcodes.com/assets/images/html-color-codes-color-palette-generators.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
              }}
              ></div>
          </div>
          <div className={classes.optionsContainer}>
            {colors.map((color, index) => (
              <div
                key={index} 
                className={classes.box}
                style={{
                  backgroundColor: color
                }}
              ></div>
            ))}
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default SideDrawer;