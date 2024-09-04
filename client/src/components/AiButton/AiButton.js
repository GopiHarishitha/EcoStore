import React from "react";
import "./AiButton.css";

function AiButton({ onClick }) {
  return (
    <button className="ai-round-button" onClick={onClick}>
      AI
    </button>
  );
}

export default AiButton;
