import React from "react";
import "./Popup.css";
import { useSelector } from "react-redux";

function Popup({ children }) {
  const { user } = useSelector((store) => store.user);

  return (
    <div className="dropdown user-drop">
      <button
        className="btn dropdown-toggle"
        type="button"
        id="drop-button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {children}
      </button>
      <ul className="dropdown-menu">
        <li>
          <button className="dropdown-item btn">{user.username}</button>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <button className="btn btn-danger dropdown-item">Sign Out</button>
        </li>
      </ul>
    </div>
  );
}

export default Popup;
