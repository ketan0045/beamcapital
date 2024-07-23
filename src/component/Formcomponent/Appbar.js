import React, {  useState,createContext, useEffect } from "react";
import "./Appbar.scss";
import Cross from "../../shared/svg/cross";
import { useNavigate } from "react-router-dom";


const Appbar = () => {

  const navigate = useNavigate();
  const [closeModal, setCloseModal] = useState(true);
  
  const getstarted = () => {
    setCloseModal(false);
    navigate("/authentication");
  };
  return (
 
    <div className="navigation">
      <div className="squre">B</div>
      <div className="get-button">
        {closeModal ? (
          <button className="btn" onClick={getstarted}>
            Get started
          </button>
        ) : (
          <p className="close">
            <Cross /> 
          </p>
        )}
      </div>
      </div>
   
  );
};

export default Appbar;


