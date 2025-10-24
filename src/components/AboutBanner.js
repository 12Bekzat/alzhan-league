import React from "react";
import Banner from "../assets/aboutbanenr.jpg";

export default function AboutBanner() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "600px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Переливающийся overlay */}
      <img src={Banner} alt="" className="bg-img" />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.7))",
          zIndex: 1,
        }}
      />

      {/* Контент поверх */}
      <div style={{ zIndex: 2, maxWidth: "800px", padding: "0 20px" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          Alzhan League
        </h2>
        <p
          style={{
            fontSize: "24px",
            maxWidth: "800px",
            margin: "0 auto 3rem",
            color: "#eee",
            lineHeight: "1.6",
          }}
        >
          Школьная лига «Alzhan» — стартовав в 2024 году, уже во втором сезоне объединила свыше 3000 участников, доказывая свою значимость и востребованность.</p>
      </div>
    </div>
  );
}
