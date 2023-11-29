import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ProductsProvider } from './contexts/products.context';
import "./index.scss";

// import { Provider } from 'react-redux';
// import store from './store';
const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <BrowserRouter>
    <ProductsProvider>
      <App />    
    </ProductsProvider>
  </BrowserRouter>

);
