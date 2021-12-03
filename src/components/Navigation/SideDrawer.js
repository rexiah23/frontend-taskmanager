import { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Grow } from '@material-ui/core';
import colors from '../../colors/colors';
import { ColorsAndImagesContext } from '../../providers/ColorsAndImagesContext';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: '400px'
  }, 
  menu: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyConent: 'space-around',
  },
  box: {
    width: '45%', 
    height: '90px',
    backgroundColor: 'blue',
    borderRadius: "9px",
    marginBottom: theme.spacing(2)
  },
  optionsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
}));

const SideDrawer = ({ setOpenSideDrawer, openSideDrawer }) => {
  const classes = useStyles();
  const [showColorOptions, setShowColorOptions] = useState(false);
  const [showImageOptions, setShowImageOptions] = useState(false);
  const { imageUrls, setSelectedBackground } = useContext(ColorsAndImagesContext);

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
              onClick={() => {
              setShowImageOptions(true);
              setShowColorOptions(false);
            }}
              ></div>
            <div 
              className={classes.box}
              style={{
                backgroundImage: 'url(https://htmlcolorcodes.com/assets/images/html-color-codes-color-palette-generators.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
              }}
              onClick={() => {
                setShowColorOptions(true);
                setShowImageOptions(false);
              }}
              ></div>
          </div>
          {showImageOptions ? 
            <Grow in={showImageOptions}>
              <div className={classes.optionsContainer}>
                {imageUrls.map((image, index) => (
                  <div
                    key={index} 
                    className={classes.box}
                    style={{
                      backgroundImage: `url(${image.urls.full})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover'
                    }}
                    onClick={() => setSelectedBackground(image.urls.full)}
                  ></div>
                ))}
              </div>
            </Grow>
            :<Grow in={showColorOptions}>
                <div className={classes.optionsContainer}>
                  {colors.map((color, index) => (
                    <div
                      key={index} 
                      className={classes.box}
                      style={{
                        backgroundColor: color
                      }}
                      onClick={() => setSelectedBackground(color)}
                    ></div>
                  ))}
                </div>
            </Grow>
        }
        </div>
      </Drawer>
    </div>
  );
};

export default SideDrawer;