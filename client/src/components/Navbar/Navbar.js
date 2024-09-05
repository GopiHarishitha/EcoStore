import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";
import cart from "../../assets/cart.png";
import Popup from "../Popup/Popup";
import { useSelector } from "react-redux";

function Navbar() {
  const { loggedIn } = useSelector((store) => store.user);

  return (
    <div className="nav">
      <div className="logo">
        <img className="logo" src={logo} alt="logo" />
      </div>
      {loggedIn === false ? (
        <>
          <div className="left"></div>
          <div className="nav-home">
            <NavLink className="navlink" to="/">
              Home
            </NavLink>
            <NavLink className="navlink" to="/login-register">
              Login / Register
            </NavLink>
          </div>
        </>
      ) : (
        <>
          <div className="left"></div>
          <div className="search">
            <label htmlFor="search-field" hidden>
              Search
            </label>
            <input
              type="search"
              className="search-bar"
              id="search-field"
              placeholder="Search..."
            />
          </div>
          <div className="nav-login">
            <div className="navlink popup pop">
              <Popup>
                <img src={profile} alt="profile" />
              </Popup>
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
