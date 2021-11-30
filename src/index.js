import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AllTasksProvider } from './providers/AllTasksContext';
import { DragDropContext } from 'react-beautiful-dnd';

ReactDOM.render(
  <React.StrictMode>
    <AllTasksProvider>
      <DragDropContext>
        <App />
      </DragDropContext>
    </AllTasksProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
