import React, { useContext, useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";
import cart from "../../assets/cart.png";
import { PopupContext } from "../../context/PopupContext";
import Popup from "../Popup/Popup";

function Navbar() {
  let [loginState, setLoginState] = useState(true);
  let [popupContextValue, setPopupContextValue] = useContext(PopupContext);
  const handleProfileClick = () => {
    popupContextValue === true
      ? setPopupContextValue(false)
      : setPopupContextValue(true);

    console.log("popup", popupContextValue);
  };
  return (
    <div className="nav">
      <div className="logo">
        <img className="logo" src={logo} alt="logo" />
      </div>
      {loginState === false ? (
        <>
          <div className="left"></div>
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
        </>
      ) : (
        <>
          <div className="left"></div>
          <div className="search">
            <label for="search-field" hidden>
              Search
            </label>
            <input
              type="search"
              class="search-bar"
              id="search-field"
              placeholder="Search..."
            />
          </div>
          <div className="nav-login">
            <div className="navlink popup pop" onClick={handleProfileClick}>
              <img src={profile} alt="profile" />
              <Popup />
            </div>
            <NavLink className="navlink pop" to="cart">
              <img src={cart} alt="cart" />
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
