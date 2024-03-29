import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemToCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import "./checkout-item.styles.scss";
import { CartItem as TCartItem } from "../../store/cart/cart.type";
import { FC, memo } from "react";

type CheckoutItemProps = {
  cartItem: TCartItem;
};

const CheckoutItem: FC<CheckoutItemProps> = memo(({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const allCartItem = useSelector(selectCartItems);

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(allCartItem, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(allCartItem, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemToCart(allCartItem, cartItem));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
});

export default CheckoutItem;
