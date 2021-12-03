import { useState } from 'react';
import SideDrawer from './SideDrawer';
import TopBar from './TopBar';

const Navigation = props => {
 
  const [openSideDrawer, setOpenSideDrawer] = useState(false); 

  return (
    <div>
        <TopBar setOpenSideDrawer={setOpenSideDrawer}/>
        <SideDrawer setOpenSideDrawer={setOpenSideDrawer} openSideDrawer={openSideDrawer}/>
    </div>
  );
};

export default Navigation;