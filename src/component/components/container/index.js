import React from "react";
import "./container.scss";
import LeftArrow from "../../../shared/svg/leftArrow";

const Container = ({ children }) => {
  return (
    <>
      <button className="previous">
        <LeftArrow /> <span className="previousbtn">Previous</span>
      </button>
      <div className="container">{children}</div>
    </>
  );
};

export default Container;
