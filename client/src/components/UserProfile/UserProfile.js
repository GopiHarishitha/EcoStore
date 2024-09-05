import React from "react";
import ecofriend from "../../assets/ecofriend.png";
import "./UserProfile.css";
import ProductList from "../ProductList/ProductList";

function UserProfile() {
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
