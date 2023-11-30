

import {
    fetchProductsRequest,
    fetchProductsSuccess,
    fetchProductsFailure,
  } from './actions';
  
  export const fetchProducts = () => {
    return (dispatch) => {
      dispatch(fetchProductsRequest());
  
      fetch('your_api_endpoint')
        .then((response) => response.json())
        .then((data) => dispatch(fetchProductsSuccess(data)))
        .catch((error) => dispatch(fetchProductsFailure(error.message)));
    };
  };
  