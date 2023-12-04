import { useDispatch,useSelector } from 'react-redux';
import { selectCartItems } from '../../../store/cart/cart.selector';
import { addItemToCart } from '../../../store/cart/cart.action';

import Button , {BUTTON_TYPE_CLASSES} from '../../button/button.component';

import './product-card.styles.scss';

const ProductCard = ({ product }) => {
  const { id,title, image, price,category } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));


  return (
    <div className='product-card-container' key={id}>
      <img src={image} alt={`${title}`} />
      <span className='price'>${price}</span>
      <div className='header'>
        <span className='name'>{title}</span>
      </div>
      <div className='footer'>
        <span className='category'>{category}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;