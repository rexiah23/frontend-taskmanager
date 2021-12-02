import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import config from '../config/config'; 

const FetchImagesContext = React.createContext(); 

const FetchImagesProvider = props => {
  const [imageUrls, setImageUrls] = useState([]);

  const page = Math.floor(Math.random() * 50 + 1); 
  console.log("CONFIG IF THIS: ", config)
  const imageApiUrl = 
  `${config.url}search/photos?page=${page}&query=landscapes&client_id=${config.clientKey}`

  useEffect(() => {
    axios.get(imageApiUrl)
    .then((res) => console.log(res.data.results))
  }, [imageApiUrl]); 

  return (
    <FetchImagesContext.Provider value={{imageUrls, setImageUrls}}>
      {props.children}
    </FetchImagesContext.Provider>
  );
};

export {FetchImagesProvider, FetchImagesContext};