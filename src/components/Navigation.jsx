import { useState } from 'react';
import SideDrawer from './ui/Navigation/SideDrawer';
import TopBar from './ui/Navigation/TopBar';

const Navigation = () => {
 
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false); 

  return (
    <div>
        <TopBar onToggle={setIsSideDrawerOpen}/>
        <SideDrawer isOpen={isSideDrawerOpen} onToggle={setIsSideDrawerOpen}/>
    </div>
  );
};

export default Navigation;