import React from "react";

export default function Skeleton({
  variant = "rect",
  className = "",
  style,
}) {
  return (
    <div
      className={`skeleton skeleton--${variant} ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
}
