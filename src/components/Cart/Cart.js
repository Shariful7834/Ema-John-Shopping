import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  console.log(cart);
  return (
    <div>
      <h2>Order Summary </h2>
      <h4>Selected Items: {cart.length}</h4>
    </div>
  );
};

export default Cart;
