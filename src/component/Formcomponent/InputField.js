import React from "react";
import "./InputField.scss";

const InputField = ({
  name,
  value,
  label,
  type,
  placeholder,
  onChange,
  onBlur,
  suggest,
  ...rest
}) => {
  return (
    <div className="responsive-input">
      <label className="responsive-input__label">{label}</label>
      {suggest && <p className="suggestion">{suggest}</p>}
      <input
        className="responsive-input__field"
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete="off"
        onChange={onChange}
        name={name}
        onBlur={onBlur}
        {...rest}
      />
    </div>
  );
};

export default InputField;
