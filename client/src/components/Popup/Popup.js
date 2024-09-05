import React from "react";
import "./Popup.css";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../redux/slices/userSlice";

function Popup({ children }) {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

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
          <button
            className="btn btn-danger dropdown-item"
            onClick={() => dispatch(reset())}
          >
            Sign Out
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Popup;
