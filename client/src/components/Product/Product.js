import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SwitchContext } from "../../context/SwitchContext";
import { useContext } from "react";
import "./Product.css";

function Product() {
  let { state } = useLocation();
  let product = state;
  let navigate = useNavigate();
  let [switchContextValue, setSwitchContextValue] = useContext(SwitchContext);

  if (!product) {
    return <div>No product information available.</div>;
  }

  function handleBack() {
    setSwitchContextValue(false);
    navigate("/home");
  }

  return (
    <div className="product">
      <button className="btn bttn m-3" onClick={handleBack}>
        Back
      </button>
      <div
        className="row prod-div m-5 mt-0 p-5 mx-auto rounded"
        style={{
          width: "80%",
          minHeight: "80vh",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <div className="col-6 Col">
          <img
            src={product.image}
            alt="image"
            className="d-block w-50 mx-auto"
          />
        </div>
        <div className="col-6 Col p-4">
          <h4 className="fs-5">Title: </h4>
          <p className="fs-5">{product.title}</p>

          <h4 className="fs-5">Category: </h4>
          <p className="fs-5">{product.category}</p>

          <h4 className="fs-5">Description: </h4>
          <p className="fs-5">{product.description}</p>

          <h4>Price: {product.price}</h4>

          <h4>Rating</h4>
          <div className="row">
            <p className="fs-4 col-6">Count: {product.rating.count}</p>
            <p className="fs-4 col-6">Rate: {product.rating.rate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
