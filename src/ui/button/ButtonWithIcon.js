import React from "react";
import "./Button.scss";
import { DownloadIcon } from "../icons/Icons";

const ButtonWithIcon = ({
  variant = "primary",
  size = "md",
  disabled = false,
  ...props
}) => {
  const prenetClasses = `borderWrapper ${disabled ? "disabled" : ""}`;
  const classes = `button withIcon borderInner ${variant} ${size} ${
    disabled ? "disabled" : ""
  }`;

  return (
    <div className={prenetClasses}>
      <button className={classes} disabled={disabled} {...props}>
        <DownloadIcon size={size} className="" />
      </button>
    </div>
  );
};

export default ButtonWithIcon;
