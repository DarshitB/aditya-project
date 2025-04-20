import React from "react";
import styles from "./Button.module.scss";
import { DownloadIcon } from "../icons/Icons";

const ButtonWithIcon = ({
  variant = "primary",
  size = "md",
  disabled = false,
  ...props
}) => {
  const prenetClasses = `${styles.borderWrapper} ${
    disabled ? styles.disabled : ""
  }`;
  const classes = `${styles.button} ${styles.withIcon} ${styles.borderInner} ${styles[variant]} ${
    styles[size]
  } ${disabled ? styles.disabled : ""}`;

  return (
    <div className={prenetClasses}>
      <button className={classes} disabled={disabled} {...props}>
        <DownloadIcon size={size} className="" />
      </button>
    </div>
  );
};

export default ButtonWithIcon;
