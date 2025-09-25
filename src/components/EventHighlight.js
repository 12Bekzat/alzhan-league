import React, { useEffect, useRef, useState } from "react";

// Load YouTube Iframe API once
function loadYouTubeAPI() {
  if (window.YT && window.YT.Player) return Promise.resolve(window.YT);
  if (window.__ytApiPromise) return window.__ytApiPromise;
  window.__ytApiPromise = new Promise((resolve) => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev && prev();
      resolve(window.YT);
    };
  });
  return window.__ytApiPromise;
}

function useInView(ref, { threshold = 0.5, once = false } = {}) {
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setV(true);
          if (once) io.unobserve(el);
        } else if (!once) setV(false);
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, threshold, once]);
  return v;
}

export default function EventHighlight({
  title = "Суперфинал",
  subtitle = "Лучшие моменты",
  videoId = "rrCVtRid1rE",
  previews = [], // array of 5 image urls
  albumUrl = "https://vk.com/album-224328985_307135460",
}) {
  const frameHostRef = useRef(null);
  const playerRef = useRef(null);
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { threshold: 0.6 });

  // Autoplay when in view (muted to pass browser policy). Pause when out.
  useEffect(() => {
    let isMounted = true;
    loadYouTubeAPI().then((YT) => {
      if (!isMounted || !frameHostRef.current) return;
      if (playerRef.current) return; // already built
      playerRef.current = new YT.Player(frameHostRef.current, {
        videoId,
        playerVars: {
          autoplay: 0,
          controls: 1,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          enablejsapi: 1,
        },
        events: {
          onReady: (e) => {
            try {
              e.target.mute();
            } catch {}
            if (
              inView &&
              !window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ) {
              try {
                e.target.playVideo();
              } catch {}
            }
          },
        },
      });
    });
    return () => {
      isMounted = false;
    };
  }, [videoId]);

  // React to view changes
  useEffect(() => {
    const p = playerRef.current;
    if (!p) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return; // respect user preference
    try {
      if (inView) {
        p.mute && p.mute();
        p.playVideo && p.playVideo();
      } else {
        p.pauseVideo && p.pauseVideo();
      }
    } catch {}
  }, [inView]);

  const thumbs = previews.slice(0, 5);

  return (
    <section
      className="eh"
      ref={containerRef}
      aria-label="Прошедшее событие: Суперфинал"
    >
      <div className="eh__head">
        <h2 className="eh__title">{title}</h2>
        {subtitle && <div className="eh__subtitle">{subtitle}</div>}
      </div>

      <div className="eh__video">
        {/* Host element for YT Player */}
        <div className="eh__player" ref={frameHostRef} />
      </div>

      <div className="eh__gallery">
        {thumbs.map((src, i) => (
          <a
            className="eh__thumb"
            href={albumUrl}
            key={i}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={src} alt={`Фото ${i + 1}`} />
          </a>
        ))}
        <a
          className="eh__more"
          href={albumUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Посмотреть полностью
        </a>
      </div>
    </section>
  );
}
