import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import config from '../config/config'; 

const ColorsAndImagesContext = React.createContext(); 

const ColorsAndImagesProvider = props => {
  const [imageUrls, setImageUrls] = useState([]);
  const [selectedBackground, setSelectedBackground] = useState('https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'); 

  useEffect(() => {
    const page = Math.floor(Math.random() * 50 + 1); 
    const imageApiUrl = 
    `${config.url}search/photos?page=${page}&query=landscapes&client_id=${config.clientKey}`
    axios.get(imageApiUrl)
    .then(res => {
      setImageUrls(res.data.results); 
    });
  }, []); 

  return (
    <ColorsAndImagesContext.Provider value={{imageUrls, setImageUrls, selectedBackground, setSelectedBackground}}>
      {props.children}
    </ColorsAndImagesContext.Provider>
  );
};

export {ColorsAndImagesProvider, ColorsAndImagesContext};