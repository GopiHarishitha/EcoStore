import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
function Navbar() {
  return (
    <div className="nav">
      <div className="left"></div>
      <div className="logo">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="nav-home">
        <NavLink className="navlink" to="/">
          Home
        </NavLink>
        <NavLink className="navlink" to="/login-register">
          Login / Register
        </NavLink>
        {/* <p>Home</p>
        <p>Signin</p>
        <p>Signup</p> */}
      </div>
    </div>
  );
}

export default Navbar;
