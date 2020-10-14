import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import ScrollToTopBtn from "./components/ScrollToTop";


ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <ScrollToTopBtn /> */}
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
