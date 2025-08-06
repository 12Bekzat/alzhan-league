import React from "react";
import Documents from "./Documents";

export default function Broadcast() {
  return (
    <>
      <div className="container" style={{ margin: "50px 0" }}>
        <div className="title">Онлайн трансляция</div>
        <Documents docs={['Трансляция 1', 'Трансляция 2', 'Трансляция 3', 'Трансляция 4']}/>
        <div
          id="stream"
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "30px 0",
          }}
          className="broadcast"
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "1300px",
              aspectRatio: "16/9",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/ВАШ_ID_ТРАНСЛЯЦИИ"
              title="YouTube Live Stream"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: "100%", height: "100%" }}
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
