import React from "react";
import "./OrderReview.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
const OrderReview = ({ product, deleteHandler }) => {
  const { name, img, price, quantity, id } = product;
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
          <button onClick={()=>deleteHandler(id)} className="dltbtn">
            <FontAwesomeIcon className="delete-icon" icon={faTrashCan} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
