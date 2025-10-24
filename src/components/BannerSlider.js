import { useEffect, useMemo, useRef, useState } from "react";

/**
 * props:
 *  - images: string[] — массив ссылок на картинки (обязателен)
 *  - intervalMs?: number — пауза между слайдами (по умолчанию 3000)
 *  - className?: string — доп. класс контейнера
 */
export default function BannerSlider({ images = [], intervalMs = 3000, className = '' }) {
  const list = useMemo(() => images.filter(Boolean), [images]);

  const track = useMemo(() => [...list, list[0]], [list]);

  const [index, setIndex] = useState(0);          // 0..track.length-1
  const [animate, setAnimate] = useState(true);   // включать/выключать CSS-transition
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current && clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex(i => i + 1);
      setAnimate(true);
    }, intervalMs);

    return () => timerRef.current && clearInterval(timerRef.current);
  }, [intervalMs, track.length]);

  // Если 0 или 1 картинка — просто показываем её без логики слайдера
  if (list.length <= 1) {
    const only = list[0];
    return (
      <div className={`banner ${className}`}>
        {only && <img className="banner__img" src={only} alt="" />}
      </div>
    );
  }

  // Когда доехали до клона (последний элемент), моментально прыгаем на 0
  const onTransitionEnd = () => {
    if (index === track.length - 1) {
      // Отключаем анимацию, мгновенно ставим 0, затем снова включаем
      setAnimate(false);
      setIndex(0);
      // следующий кадр — вернуть transition, чтобы оставшиеся перелистывания были плавными
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
    }
  };

  const styleTrack = {
    width: `${track.length * 100}%`,
    transform: `translateX(-${index * (100 / track.length)}%)`,
    transition: animate ? 'transform 600ms ease-in-out' : 'none',
  };

  return (
    <div className={`banner ${className}`}>
      <div className="banner__gradient" aria-hidden="true" />
      <div className="banner__track" style={styleTrack} onTransitionEnd={onTransitionEnd}>
        {track.map((src, i) => (
          <div className="banner__slide" key={`${i}-${src}`}>
            <img className="banner__img" src={src} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
