import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  const { product, addCartHandler } = props;
  const { name, img, seller, price, rating } = product;
  return (
    <div className="product-container">
      <img src={img} alt="" />
      <div className="productInfo">
        <h4 className="productName">{name}</h4>
        <p>Price:${price}</p>
        <p>
          <small>Manufacturer: {seller}</small>
        </p>
        <p>
          <small>Rating:{rating} star</small>
        </p>
      </div>
      <button onClick={() => addCartHandler(product)} className="btnCart">
        Add to Cart
        <span style={{ marginLeft: "5px" }}>
          <FontAwesomeIcon icon={faCartPlus} />
        </span>
      </button>
    </div>
  );
};

export default Product;
