import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { PopupContext } from "../../context/PopupContext";
import "./Popup.css";

const Popup = () => {
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate(); // Initialize navigate function
  let [popupContextValue, setPopupContextValue] = useContext(PopupContext);

  const handleToggleProfile = () => {
    setShowProfile(!showProfile);
  };

  const handleSignOut = () => {
    alert("Signing out...");
    // Add sign-out logic here (e.g., clearing authentication tokens)

    // Navigate to the home page
    navigate("/home");
  };

  return popupContextValue === true ? (
    <div className="popup-container">
      {popupContextValue && (
        <div className="profile-popup">
          <p className="detail">John Doe</p>
          <p className="detail">johndoe@example.com</p>
          <p className="detail">+91 9876543210</p>
          <button onClick={handleSignOut} className="detail buton">
            Sign Out
          </button>
        </div>
      )}
    </div>
  ) : (
    <></>
  );
};

const styles = {
  container: {
    position: "relative",
    display: "inline-block",
  },
  userLogo: {
    cursor: "pointer",
  },
  userImage: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  },
  profilePopup: {
    position: "absolute",
    top: "60px",
    right: 0,
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    padding: "10px",
    zIndex: 1000,
  },
  name: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  email: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "10px",
  },
  signOutButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "4px",
    cursor: "pointer",
    width: "100%",
    textAlign: "center",
  },
};

export default Popup;
