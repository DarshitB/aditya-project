import React from "react";
import "./TextBox.scss";
import { CalenderIcon } from "../icons/Icons";

const TextboxIconRight = ({
  type = "text",
  placeholder = "",
  value,
  size = "md",
  disabled = false,
  ...props
}) => {
  const prenetClasses = `borderWrapper iconRight ${disabled ? "disabled" : ""}`;
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
      <CalenderIcon size={size} className="input-icon" />
    </div>
  );
};

export default TextboxIconRight;
