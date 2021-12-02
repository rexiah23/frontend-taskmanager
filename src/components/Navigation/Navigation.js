import { useState } from 'react';
import { FetchImagesProvider } from '../../providers/FetchImagesContext';
import SideDrawer from './SideDrawer';
import TopBar from './TopBar';

const Navigation = props => {
 
  const [openSideDrawer, setOpenSideDrawer] = useState(false); 

  return (
    <div>
      <FetchImagesProvider>
        <TopBar setOpenSideDrawer={setOpenSideDrawer}/>
        <SideDrawer setOpenSideDrawer={setOpenSideDrawer} openSideDrawer={openSideDrawer}/>
      </FetchImagesProvider>
    </div>
  );
};

export default Navigation;