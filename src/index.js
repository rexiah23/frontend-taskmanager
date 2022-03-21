import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AllTasksProvider } from './providers/AllTasksContext';
import { ColorsAndImagesProvider } from './providers/ColorsAndImagesContext';
import axios from 'axios'; 
require('dotenv').config()

if (process.env.REACT_APP_API_BASE_URL) {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
} else {
  axios.defaults.baseURL = 'http://localhost:8080'
}

ReactDOM.render(
  <AllTasksProvider>
    <ColorsAndImagesProvider>
      <App />
    </ColorsAndImagesProvider>
  </AllTasksProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
