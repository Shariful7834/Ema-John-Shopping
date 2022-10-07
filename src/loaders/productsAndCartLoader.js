import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
  // get products data
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  // get cart
  const saveCart = getStoredCart();

  return products;
};
