import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import OrderReview from "../OrderReview/OrderReview";
import "./Orders.css";

const Orders = () => {
  const { products, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);
  // console.log(products);

  const deleteHandler = (id) => {
    const remainingProducts = cart.filter((product) => product.id !== id);
    setCart(remainingProducts);
    removeFromDb(id);
  };

  return (
    <div className="shopping-container">
      <div className="order-container">
        {cart.map((product) => (
          <OrderReview
            key={product.id}
            product={product}
            deleteHandler={deleteHandler}
          ></OrderReview>
        ))}
      </div>
      <div className="order-summary">
        <Cart cart={cart}>
          <Link to="/shipping">
            <button>Proceed Shipping</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
