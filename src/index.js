import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import axios from 'axios';

import {BrowserRouter} from 'react-router-dom';

axios.defaults.baseURL= "https://"+ <Your Firebase Project ID> +".firebaseio.com";
axios.interceptors.request.use(request =>{
  request.headers['Access-Control-Allow-Origin'] =   "*";
  // request.headers['Access-Control-Request-Method'] =   "*";
  return request;
});

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <App />
  </React.StrictMode></BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
