import React from 'react';
import ReactDOM from 'react-dom/client';
// import App6 from './App6';
// import App2 from './App2';
import App4 from './App4';
// import Counter from './Counter';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import UseRef from './useRef';
// import Data from './Data';
// import App5 from './App5';
// import App1 from './App1';
// import Timer from './Timer';
// import App3 from './App3';

const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
    <App4/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();