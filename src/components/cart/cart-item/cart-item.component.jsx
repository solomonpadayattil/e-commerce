import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
  const { id, price, title, quantity } = cartItem;

  return (
    <div className='cart-item-container'>
      <div className='item-details'>
        <span className='name'>{title}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;