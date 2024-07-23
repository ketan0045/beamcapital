import React from "react";
import "./secondaryBtn.scss";

const ButtonComp = ({ name, type, onClick, style }) => {
  return (
    <div className="responsive-input-btn">
      <button
        className="responsive-input__field-btn"
        type={type}
        onClick={onClick}
        style={style}
      >
        {name}
      </button>
    </div>
  );
};

export default ButtonComp;
