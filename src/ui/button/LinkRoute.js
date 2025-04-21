import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

const LinkRoute = ({
  children,
  to = "/",
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
    const prenetClasses = `borderWrapper`;
  const classes = `button borderInner ${variant} ${size} ${className}`;
  return (
    <div className={prenetClasses}>
      <Link className={classes} to={to} {...props}>
        {children}
      </Link>
    </div>
  );
};

export default LinkRoute;
