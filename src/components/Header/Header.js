import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <nav className="header">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <a href="/Shopping">Order</a>
        <a href="/Order">Order Review</a>
        <a href="/Inventory">Manage Inventory</a>
        <a href="/Login">Login</a>
      </div>
    </nav>
  );
};

export default Header;
