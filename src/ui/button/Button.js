import React from "react";
import "./Button.scss";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  ...props
}) => {
  const classes = `button borderInner ${variant} ${size} ${
    disabled ? "disabled" : ""
  }`;
  const prenetClasses = `borderWrapper ${disabled ? "disabled" : ""}`;
  return (
    <div className={prenetClasses}>
      <button className={classes} disabled={disabled} {...props}>
        {children}
      </button>
    </div>
  );
};

export default Button;
