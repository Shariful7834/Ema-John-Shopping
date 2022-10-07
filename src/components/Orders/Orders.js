import React from "react";
import { useLoaderData } from "react-router-dom";

const Orders = () => {
  const order = useLoaderData();
  return (
    <div>
      <h1>Order page {order.length}</h1>
    </div>
  );
};

export default Orders;
