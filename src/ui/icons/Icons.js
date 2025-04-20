import React from "react";

// Size mapping
const sizeMap = {
  sm: 12,
  md: 16,
  lg: 20,
  xl: 26,
};

export const DownloadIcon = ({
  size = "md",
  color = "currentColor",
  className = "",
  ...props
}) => {
  // Get the numeric size value from the sizeMap, default to 'md' (16)
  const iconSize = sizeMap[size] || sizeMap.md;

  return (
    <svg
      viewBox="0 0 16 16"
      width={iconSize}
      height={iconSize}
      fill={color}
      className={`icon ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        width="16"
        height="2"
        transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 0 16)"
      />
      <rect
        width="2"
        height="4"
        transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 0 14)"
      />
      <rect
        width="2"
        height="4"
        transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 14 14)"
      />
      <rect
        width="2"
        height="12"
        transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 7 12)"
      />
      <rect
        width="2"
        height="2"
        transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 5 10)"
      />
      <rect
        width="2"
        height="2"
        transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 3 8)"
      />
      <rect
        width="2"
        height="2"
        transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 9 10)"
      />
      <rect
        width="2"
        height="2"
        transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 11 8)"
      />
    </svg>
  );
};
