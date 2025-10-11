import React, { useEffect, useState } from "react";
import Documents from "./Documents";
import DefaultBroadcast from "../assets/brodcast-default.jpg";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

export default function Broadcast({ translations }) {
  const [streams, setStreams] = useState([])

  const fetchStreams = async () => {
      const querySnapshot = await getDocs(collection(db, "streams"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStreams(data);
      console.log('data', data);
    };
  
    useEffect(() => {
      fetchStreams();
    }, []);
  
  return (
    <>
      <div className="container" style={{ margin: "50px 0" }}>
        <div className="title">Онлайн трансляция</div>
        {streams.length && <Documents docs={streams.map(stream => stream?.title)} />}
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
              // streams?.length ? <iframe
              //   src="https://www.youtube.com/embed/ВАШ_ID_ТРАНСЛЯЦИИ"
              //   title="YouTube Live Stream"
              //   frameBorder="0"
              //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              //   allowFullScreen
              //   style={{ width: "100%", height: "100%" }}
              // ></iframe> :
                streams?.length ? <div className="no-streams-placeholder">
                  <img src={DefaultBroadcast} alt="" />
                  <div className="icon">📺</div>
                  <h3>Пока нет трансляций</h3>
                  <p>Следите за обновлениями — скоро здесь появятся новые матчи!</p>
                </div> :
                <div className="no-streams-placeholder">
                  <img src={DefaultBroadcast} alt="" />
                  <div className="icon">📺</div>
                  <h3>Пока нет трансляций</h3>
                  <span className="doc-card">Смотреть завершённые трансляции</span>
                </div>
            }
          </div>
        </div>
      </div>
    </>
  );
}
