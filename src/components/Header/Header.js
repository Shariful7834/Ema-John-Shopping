import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <nav className="header">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <Link to="/Shopping">Shop</Link>
        <Link to="/orders">Order Review</Link>
        <Link to="/inventory">Manage Inventory</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">SignUp</Link>
        <span>{user?.email}</span>
      </div>
    </nav>
  );
};

export default Header;
