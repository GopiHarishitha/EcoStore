import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import ai from "../../assets/ai.png";
import Modal from "../Modal/Modal";
import axios from "axios";

function Product() {
  const [liked, setLiked] = useState(false);
  const [content, setContent] = useState("");
  const [modal, setModal] = useState(false);
  let { state } = useLocation();
  let product = state;
  let navigate = useNavigate();
  // let [switchContextValue, setSwitchContextValue] = useContext(SwitchContext);

  useEffect(() => {
    const getNarrative = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_LLM}/narrative`,
          {
            product: product.name,
            sustainability: product.sustainabilityScore || 3,
          }
        );
        setContent(response.data.response);
      } catch (err) {
        console.log("Error: " + err.message);
      }
    };
    getNarrative();
  }, []);

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
    navigate("/");
  }

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className={`product ${modal && "stop-scroll"}`}>
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
            src={product.images}
            alt="product"
            className="d-block w-50 mx-auto"
          />
        </div>
        <div className="col-6 Col p-4">
          <h4 className="fs-5">Title: </h4>
          <p className="fs-5">{product.name}</p>

          <h4 className="fs-5">Category: </h4>
          <p className="fs-5">{product.category}</p>

          {/* <h4 className="fs-5">Description: </h4>
          <p className="fs-5">{product.description}</p> */}

          <h4>Price: {product.price}</h4>

          <h4>{product.rating}⭐</h4>
          <p className="fs-4 col-6">{product.no_of_ratings} Rated</p>
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
        {/* <button onClick={toggleModal} className="btn-modal">
          Open
        </button> */}

        {modal && (
          <div className="ai-box">
            <div className="ai-content">
              <h1>{product.name} Narrative</h1>
              <p>{content}</p>
              <button
                onClick={toggleModal}
                className="btn btn-danger mx-auto d-block mt-5"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </>
    </div>
  );
}

export default Product;
