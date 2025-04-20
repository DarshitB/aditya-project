import React from "react";
import styles from "./Button.module.scss";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  ...props
}) => {
  const classes = `${styles.button} ${styles.borderInner} ${styles[variant]} ${
    styles[size]
  } ${disabled ? styles.disabled : ""}`;
  const prenetClasses = `${styles.borderWrapper} ${
    disabled ? styles.disabled : ""
  }`;
  return (
    <div className={prenetClasses}>
      <button className={classes} disabled={disabled} {...props}>
        {children}
      </button>
    </div>
  );
};

export default Button;
