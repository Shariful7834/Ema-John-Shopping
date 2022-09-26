import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  console.log(cart);
  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = (total * 0.1).toFixed(2);
  const grandTotal = (total + shipping + parseFloat(tax)).toFixed(2);
  return (
    <div className="cart">
      <h2>Order Summary </h2>
      <h4>Selected Items: {cart.length}</h4>
      <h4>Total Price: ${total}</h4>
      <h4>Total Shipping: ${shipping}</h4>
      <h4>Tax: ${tax}</h4>
      <h4>Grand Total:${grandTotal}</h4>
    </div>
  );
};

export default Cart;
