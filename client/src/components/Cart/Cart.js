import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

const Cart = () => {
  const [isFeedbackVisible, setFeedbackVisible] = useState(true);
  const [liked, setLiked] = useState(false);

  const handleAddToCart = () => {
    setFeedbackVisible(true);
  };

  const handleBuyNow = () => {
    console.log("Product purchased");
  };

  const handleLike = () => {
    setLiked(true);
    console.log("You liked this product!");
    setFeedbackVisible(false);
  };

  const handleDislike = () => {
    setLiked(false);
    console.log("You disliked this product!");
    setFeedbackVisible(false);
  };

  return (
    <div className="container">
      <button onClick={handleBuyNow} className="button buy-now">
        Buy Now
      </button>
      <button onClick={handleAddToCart} className="button add-to-cart">
        Add to Cart
      </button>

      {isFeedbackVisible && (
        <div className="feedback-options">
          <button onClick={handleLike} className="feedback-button like-button">
            <FontAwesomeIcon icon={faThumbsUp} />
          </button>
          <button
            onClick={handleDislike}
            className="feedback-button dislike-button"
          >
            <FontAwesomeIcon icon={faThumbsDown} />
          </button>
        </div>
        // <div className="feedback-options">
        //   <button onClick={handleLike} className={feedback-button like-button ${liked ? 'active' : ''}}>
        //     <FontAwesomeIcon icon={faThumbsUp} />
        //   </button>
        //   <button onClick={handleDislike} className={feedback-button dislike-button ${!liked ? 'active' : ''}}>
        //     <FontAwesomeIcon icon={faThumbsDown} />
        //   </button>
        // </div>
      )}
    </div>
  );
};

export default Cart;
