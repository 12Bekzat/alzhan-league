import React from "react";
import Documents from "./Documents";
import DefaultBroadcast from "../assets/default.avif";

export default function Broadcast({ translations }) {
  return (
    <>
      <div className="container" style={{ margin: "50px 0" }}>
        <div className="title">Онлайн трансляция</div>
        {translations && <Documents docs={translations.map(stream => stream?.title)} />}
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
            {
              translations?.length > 0 ? <iframe
                src="https://www.youtube.com/embed/ВАШ_ID_ТРАНСЛЯЦИИ"
                title="YouTube Live Stream"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ width: "100%", height: "100%" }}
              ></iframe> :
                <div className="no-streams-placeholder">
                  <div className="icon">📺</div>
                  <h3>Пока нет трансляций</h3>
                  <p>Следите за обновлениями — скоро здесь появятся новые матчи!</p>
                </div>
            }
          </div>
        </div>
      </div>
    </>
  );
}
