import React from "react";
import "./Button.css";
function Button({ text }) {
  return (
    <div>
      <button className="bttn">{text}</button>
    </div>
  );
}

export default Button;
