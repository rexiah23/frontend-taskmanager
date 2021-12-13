import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import config from '../config/config'; 

const ColorsAndImagesContext = React.createContext(); 

const ColorsAndImagesProvider = props => {
  const [imageUrls, setImageUrls] = useState([]);
  const [selectedBackground, setSelectedBackground] = useState(); 

  useEffect(() => {
    const page = Math.floor(Math.random() * 50 + 1); 
    const imageApiUrl = 
    `${config.url}search/photos?page=${page}&query=landscapes&client_id=${config.clientKey}`
    const backgroundApiUrl = `/api/background`

    const imageApiRequest = axios.get(imageApiUrl); 
    const backgroundApiRequest = axios.get(backgroundApiUrl)
   
    axios.all([imageApiRequest, backgroundApiRequest])
    .then(axios.spread((...responses) => {
      const responseOne = responses[0];
      const responseTwo = responses[1];
      setImageUrls(responseOne.data.results); 
      setSelectedBackground(responseTwo.data.url.url)
    }))
    .catch(err => console.log(err.message))
  }, []);


  const updateSelectedBackground = (backgroundUrl) => {
    const url = `/api/background`;

    axios.put(url, {backgroundUrl})
    .then(() => setSelectedBackground(backgroundUrl))
    .catch(err => console.log(err.message));
  }

  return (
    <ColorsAndImagesContext.Provider value={{imageUrls, setImageUrls, selectedBackground, updateSelectedBackground}}>
      {props.children}
    </ColorsAndImagesContext.Provider>
  );
};

export {ColorsAndImagesProvider, ColorsAndImagesContext};