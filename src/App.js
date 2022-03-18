import React, { useContext } from 'react';
import AllTaskLists from './components/AllTaskLists';
import Navigation from './components/Navigation';
import { ColorsAndImagesContext } from './providers/ColorsAndImagesContext';

export default function App() {
  const { selectedBackground } = useContext(ColorsAndImagesContext);
  return (
    <div style={{
      backgroundColor: `${selectedBackground}`,
      backgroundImage: `url(${selectedBackground})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <Navigation/>
      <AllTaskLists/>
    </div>
  );
};