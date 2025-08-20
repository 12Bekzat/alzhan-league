import { useEffect, useState } from "react";
import { getPhotoByFile } from "../images";

export const Gallery = ({ images }) => {
  const [active, setActive] = useState(images?.[0]);

  useEffect(() => {
    setActive(images?.[0])
  }, [images])

  if (!images || images.length === 0) return null;

  return (
    <div className="project-gallery">
      <h3 className="gallery-title">Фотоотчёт</h3>
      <div className="main-photo">
        <img src={getPhotoByFile(active)} alt="selected" className="main-image" />
      </div>
      <div className="thumbnail-scroll">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={getPhotoByFile(img)}
            alt={`thumb-${idx}`}
            className={`thumbnail ${img === active ? 'active' : ''}`}
            onClick={() => setActive(img)}
          />
        ))}
        <a
          href="https://vk.com/alzhan_league"
          target="_blank"
          className={`thumbnail `} rel="noreferrer"
        > Посмотреть еще</a>
      </div>
    </div>
  );
};
