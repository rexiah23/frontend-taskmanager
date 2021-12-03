import React, { useContext } from 'react';
import Main from './components/Main';
import Navigation from './components/Navigation/Navigation';
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
      <Main/>
    </div>
  );
};