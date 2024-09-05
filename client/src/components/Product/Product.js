import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import ai from "../../assets/ai.png";
import Modal from "../Modal/Modal";

function Product() {
  const [liked, setLiked] = useState(false);
  const [modal, setModal] = useState(false);
  let { state } = useLocation();
  let product = state;
  let navigate = useNavigate();
  // let [switchContextValue, setSwitchContextValue] = useContext(SwitchContext);

  if (!product) {
    return <div>No product information available.</div>;
  }

  const handleLike = () => {
    setLiked(true);
    console.log("You liked this product!");
  };

  const handleDislike = () => {
    setLiked(false);
    console.log("You disliked this product!");
  };

  function handleBack() {
    // setSwitchContextValue(false);
    navigate("/");
  }

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
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

          <h4>{product.rating.rate}⭐</h4>
          <p className="fs-4 col-6">{product.rating.count} Rated</p>
          <div className="row justify-content-between">
            {/* like-dislike */}
            <div className="row col-6">
              <button
                onClick={handleLike}
                className="feedback-button like-button"
              >
                <FontAwesomeIcon icon={faThumbsUp} />
              </button>
              <button
                onClick={handleDislike}
                className="feedback-button dislike-button"
              >
                <FontAwesomeIcon icon={faThumbsDown} />
              </button>
            </div>
            {/* ai-button */}
            <button
              className="ai-button btn-modal nrounded col-2 btn-modal"
              onClick={toggleModal}
            >
              <img src={ai} alt="ai" />
            </button>
          </div>
        </div>
      </div>
      <>
        <button onClick={toggleModal} className="btn-modal">
          Open
        </button>

        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <h2>Hello Modal</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident perferendis suscipit officia recusandae, eveniet
                quaerat assumenda id fugit, dignissimos maxime non natus placeat
                illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur
                possimus quaerat ipsum quos molestiae rem aspernatur dicta
                tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.
              </p>
              <button className="close-modal" onClick={toggleModal}>
                CLOSE
              </button>
            </div>
          </div>
        )}
      </>
    </div>
  );
}

export default Product;
