import { useDispatch,useSelector } from 'react-redux';
import { selectCartItems } from '../../../store/cart/cart.selector';
import { addItemToCart } from '../../../store/cart/cart.action';

import Button from '../../button/button.component';

import './product-card.styles.scss';

const ProductCard = ({ product }) => {
  const { title, description, price } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));


  return (
    <div className='product-card-container'>
        <span className='title'>{title}</span>
        <span className='description'>{description}</span>
        <Button buttonType='inverted'  onClick={addProductToCart}>
            Add to cart
        </Button>
        <span className='price'>${price}</span>
    </div>
  );
};

export default ProductCard;