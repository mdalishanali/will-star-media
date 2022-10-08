import React from "react";
import logo from "../../assets/img/logo.png";
import "./style.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Navbar;
