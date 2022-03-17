import { useState } from 'react';
import SideDrawer from './ui/Navigation/SideDrawer';
import TopBar from './ui/Navigation/TopBar';

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