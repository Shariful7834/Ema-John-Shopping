import React from "react";
import "./OrderReview.css";
const OrderReview = ({ product }) => {
  const { name, img, price, quantity } = product;
  return (
    <div className="review-container">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-details-container">
        <div className="product-details">
          <p>
            <small>Name:{name}</small>
          </p>
          <p>
            <small>Price:$ {price}</small>
          </p>
          <p>
            <small>Quantity:{quantity}</small>
          </p>
        </div>
        <div>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
