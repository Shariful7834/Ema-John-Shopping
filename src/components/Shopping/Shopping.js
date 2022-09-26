import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shopping.css";

const Shopping = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const addCartHandler = (product) => {
    window.scrollTo(0, 1);
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="shopping-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addCartHandler={addCartHandler}
          ></Product>
        ))}
      </div>
      <div className="order-summary">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shopping;
