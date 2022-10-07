import { createBrowserRouter } from "react-router-dom";
import Header from "../components/Header/Header";
import Main from "../Layouts/Main";
import Shopping from "../components/Shopping/Shopping";
import Inventory from "../components/Inventory/Inventory";
import Login from "../components/Login/Login";
import Orders from "../components/Orders/Orders";
import { productsAndCartLoader } from "../loaders/productsAndCartLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () => productsAndCartLoader,
        element: <Shopping></Shopping>,
      },
      {
        path: "/Shopping",
        loader: () => productsAndCartLoader,
        element: <Shopping></Shopping>,
      },
      {
        path: "/orders",
        loader: () => fetch("products.json"),
        element: <Orders></Orders>,
      },
      { path: "/inventory", element: <Inventory></Inventory> },
      { path: "/login", element: <Login></Login> },
    ],
  },
]);
