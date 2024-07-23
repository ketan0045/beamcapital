import React from "react";
import "./roundBtn.scss";

const Button = ({ name = "Ok", onClick = () => {}, isActive = false }) => {

  return (
    <button
      className={`rounded_btn ${isActive ? "active" : "inactive"}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
