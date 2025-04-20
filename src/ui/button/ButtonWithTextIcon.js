import React from "react";
import styles from "./Button.module.scss";
import { DownloadIcon } from "../icons/Icons";

const ButtonWithTextIcon = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  ...props
}) => {
  const prenetClasses = `${styles.borderWrapper} ${
    disabled ? styles.disabled : ""
  }`;
  const classes = `${styles.button} ${styles.withTextIcon} ${styles.borderInner} ${styles[variant]} ${
    styles[size]
  } ${disabled ? styles.disabled : ""}`;

  return (
    <div className={prenetClasses}>
      <button className={classes} disabled={disabled} {...props}>
        <DownloadIcon size={size} className="" />
        {children}
      </button>
    </div>
  );
};

export default ButtonWithTextIcon;
