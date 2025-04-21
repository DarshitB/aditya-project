import React from "react";
import "./TextBox.scss";

const Textbox = ({
  type = "text",
  placeholder = "",
  value,
  size = "md",
  disabled = false,
  ...props
}) => {
  const prenetClasses = `borderWrapper ${disabled ? "disabled" : ""}`;
  const classes = `input borderInner ${size} ${disabled ? "disabled" : ""}`;
  return (
    <div className={prenetClasses}>
      <input
        type={type}
        className={classes}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        {...props}
      />
    </div>
  );
};

export default Textbox;
