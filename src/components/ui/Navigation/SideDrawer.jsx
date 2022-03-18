import { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Grow } from '@material-ui/core';
import colors from '../../../colors/colors';
import { ColorsAndImagesContext } from '../../../providers/ColorsAndImagesContext';
import DisplayBox from '../Display/DisplayBox';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: '400px'
  }, 
  menuContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  menu: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  box: {
    width: '45%',
    height: '90px',
    background: 'grey',
    display: 'flex',
    alignItems: 'flex-end',
    borderRadius: '8px',
    marginTop: theme.spacing(2)
  },
  optionsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
}));

const SideDrawer = ({ isOpen, onToggle }) => {
  const classes = useStyles();
  const [isColorsShown, setIsColorsShown] = useState(false);
  const [isImagesShown, setIsImagesShown] = useState(true);
  const { imageUrls, updateSelectedBackground } = useContext(ColorsAndImagesContext);

  return (
    <div>
      <Drawer 
        open={isOpen} 
        anchor='right' 
        onClose={() => onToggle(false)}
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
                setIsImagesShown(true);
                setIsColorsShown(false);
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
                setIsColorsShown(true);
                setIsImagesShown(false);
              }}
              ></div>
          </div>
          {isImagesShown ? 
            <Grow in={isImagesShown}>
              <div className={classes.optionsContainer}>
                {imageUrls.map((image, index) => (
                  <DisplayBox 
                    key={index}
                    onClick={() => updateSelectedBackground(image.urls.full)}
                    background={`url(${image.urls.full})`}
                  />
                ))}
              </div>
            </Grow>
            :<Grow in={isColorsShown}>
                <div className={classes.optionsContainer}>
                  {colors.map((color, index) => (
                    <div
                      key={index} 
                      className={classes.box}
                      style={{
                        background: color
                      }}
                      onClick={() => updateSelectedBackground(color)}
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