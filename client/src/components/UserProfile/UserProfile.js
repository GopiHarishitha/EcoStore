import React from "react";
import ecofriend from "../../assets/ecofriend.png";
import "./UserProfile.css";
import ProductList from "../ProductList/ProductList";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UserProfile() {
  const { loggedIn } = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      navigate("/");
    }
  }, [loggedIn, navigate]);

  return (
    <div>
      <div className="section1 row">
        <div className="image col-6">
          <img src={ecofriend} alt="eco-friendly" />
        </div>
        <div className="recom col-6">
          You may like...
          <ProductList />
        </div>
      </div>
      <div className="section2"></div>
    </div>
  );
}

export default UserProfile;
