import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './Styles/globles.css'
import ScrollToTop from './Components/Common/ScrollToTop';
import { BrowserRouter } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>


  </React.StrictMode>
);


