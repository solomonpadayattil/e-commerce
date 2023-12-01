import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import { BrowserRouter } from 'react-router-dom';
import {PersistGate} from 'redux-persist/integration/react';
import App from './App';
import "./index.scss";


const rootElement = document.getElementById('root');
console.log("store"+JSON.stringify(store))

ReactDOM.createRoot(rootElement).render(
  <Provider store= {store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
          <App />    
      </BrowserRouter>
    </PersistGate>
  </Provider>

);
