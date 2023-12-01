import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "./index.scss";


const rootElement = document.getElementById('root');
console.log("store"+JSON.stringify(store))

ReactDOM.createRoot(rootElement).render(
  <Provider store= {store}>
    <BrowserRouter>
        <App />    
    </BrowserRouter>
  </Provider>

);
