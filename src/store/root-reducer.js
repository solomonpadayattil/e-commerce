import { combineReducers } from 'redux';

import { cartReducer } from './cart/cart.reducer.js';
import { productsReducer } from './products/product.reducer.js';

export const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});