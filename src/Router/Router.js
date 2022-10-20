import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Shopping from "../components/Shopping/Shopping";
import Inventory from "../components/Inventory/Inventory";
import Login from "../components/Login/Login";
import Orders from "../components/Orders/Orders";
import { productsAndCartLoader } from "../loaders/productsAndCartLoader";
import SignUp from "../components/SignUp/SignUp";
import About from "../components/About/About";
import Shipping from "../components/Shipping/Shipping";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: productsAndCartLoader,
        element: <Shopping></Shopping>,
      },
      {
        path: "/Shopping",
        loader: productsAndCartLoader,
        element: <Shopping></Shopping>,
      },
      {
        path: "/orders",
        loader: productsAndCartLoader,
        element: <Orders></Orders>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      { path: "/inventory", element: <Inventory></Inventory> },
      {
        path: "/shipping",
        element: (
          <PrivateRoute>
            <Shipping></Shipping>
          </PrivateRoute>
        ),
      },

      { path: "/login", element: <Login></Login> },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
