import { cartActions } from '../../store/cart';
import classes from './CartButton.module.css';
import { useSelector, useDispatch } from 'react-redux';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.cart.cart);

  const toggleCartHandler = () => {
    dispatch(cartActions.toggleCart());
  };

   const totalQuantity = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
