import { useDispatch, useSelector } from 'react-redux';

import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from '../../../store/cart/cart.action';

import './checkout-item.styles.scss';


import { selectCartItems } from '../../../store/cart/cart.selector';


const CheckoutItem = ({ cartItem }) => {
  const { title, image, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <div className='checkout-item-container'>
        <div className='image-container'>
          <img src={image} alt={`${title}`} />
        </div>
        <span className='name'>{title}</span>
        <span className='quantity'>
          <div className='arrow' onClick={removeItemHandler}>
            &#10094;
          </div>
          <span className='value'>{quantity}</span>
          <div className='arrow' onClick={addItemHandler}>
            &#10095;
          </div>
        </span>
        <span className='price'> {price}</span>
        <div className='remove-button' onClick={clearItemHandler}>
          &#10005;
        </div>
    </div>
  );
};

export default CheckoutItem;