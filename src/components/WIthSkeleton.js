import React from "react";
import Skeleton from "./Skeleton";

export default function WithSkeleton({
  loading,
  ratio = "16/9",
  placeholder,
  children,
}) {
  return (
    <div
      className={`loader loader--ratio ${!loading ? "loader--ready" : ""}`}
      style={{ aspectRatio: ratio }}
    >
      <div className="loader__placeholder">
        {placeholder ?? <Skeleton variant="rect" style={{ width: "100%", height: "100%" }} />}
      </div>
      <div className="loader__content">{children}</div>
    </div>
  );
}
