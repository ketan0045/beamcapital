import React from "react";
import "./uploaddocument.scss";

const UploadDocument = ({ title, name,id, onChange, onBlur}) => {
  return (
      <label htmlFor={id} className="uploadDoc">
        {title}
        <input
          type="file"
          accept=".pdf, image/*"
          name={name}
          id={id}
          onChange={onChange}
          onBlur={onBlur}
          className="custom-inputField"
        />
      </label>   
  );
};

export default UploadDocument;  