// import React from 'react';

// import './index.css';
// import App from './App';
// // import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import ReactDOM from 'react-dom'






  
// ReactDOM.render(
// <React.StrictMode>
//     <App />
// </React.StrictMode>,
// document.getElementById('root')
// );
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import axios from 'axios';
import './index.css';
import App from './App';
// import {HelmetProvider}  from 'react-helmet-async';
// import { UserContext} from './components/context/UserContext'




ReactDOM.render(
  <BrowserRouter>
  {/* <HelmetProvider> */}
  <App />
  {/* </HelmetProvider> */}
  </BrowserRouter>,
  document.getElementById('root')
  
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
