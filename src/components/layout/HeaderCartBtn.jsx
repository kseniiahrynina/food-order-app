import React, { useContext } from "react";
import classes from "./HeaderCartBtn.module.css";
import { FaShoppingCart } from "react-icons/fa";
import CartContext from "../../store/cart-context";

const HeaderCartBtn = ({ onClick }) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <FaShoppingCart />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartBtn;
