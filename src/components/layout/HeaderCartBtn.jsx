import React from "react";
import classes from "./HeaderCartBtn.module.css";
import { FaShoppingCart } from "react-icons/fa";

const HeaderCartBtn = () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <FaShoppingCart />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartBtn;
