import React, { useState, useEffect } from "react";
import "./news-card.scss";

const NewsCard = ({
  title,
  date,
  previewImage,
  previewText,
  fullTextParagraphs = [],
  images = [],
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const allImages = images.length
    ? images
    : previewImage
    ? [previewImage]
    : [];

  const openModal = () => {
    setIsOpen(true);
    setActiveImageIndex(0);
  };

  const closeModal = () => setIsOpen(false);

  // закрытие по ESC
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* превью новости */}
      <article className="news-card" onClick={openModal}>
        {previewImage && (
          <div className="news-card__image-wrapper">
            <img
              src={previewImage}
              alt={title}
              className="news-card__image"
            />
          </div>
        )}

        <div className="news-card__content">
          <div className="news-card__header">
            <h3 className="news-card__title">{title}</h3>
            {date && <span className="news-card__date">{date}</span>}
          </div>

          {previewText && (
            <p className="news-card__preview">{previewText}</p>
          )}

          <button
            type="button"
            className="news-card__read-more"
            onClick={openModal}
          >
            Читать новость
          </button>
        </div>
      </article>

      {/* модальное окно */}
      {isOpen && (
        <div className="news-modal" onClick={closeModal}>
          <div
            className="news-modal__dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="news-modal__close"
              onClick={closeModal}
              aria-label="Закрыть"
            >
              ×
            </button>

            <header className="news-modal__header">
              <h2 className="news-modal__title">{title}</h2>
              {date && <span className="news-modal__date">{date}</span>}
            </header>

            {allImages.length > 0 && (
              <div className="news-modal__gallery">
                <img
                  src={allImages[activeImageIndex]}
                  alt={`${title} фото`}
                  className="news-modal__main-image"
                />

                {allImages.length > 1 && (
                  <div className="news-modal__thumbs">
                    {allImages.map((src, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className={
                          "news-modal__thumb-btn" +
                          (idx === activeImageIndex
                            ? " news-modal__thumb-btn--active"
                            : "")
                        }
                        onClick={() => setActiveImageIndex(idx)}
                      >
                        <img
                          src={src}
                          alt={`${title} фото ${idx + 1}`}
                          className="news-modal__thumb"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="news-modal__body">
              {fullTextParagraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsCard;
