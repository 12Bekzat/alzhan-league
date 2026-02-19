import React, { useCallback, useEffect, useRef, useState } from "react";

export default function TabPanel({ tabs, headerStyle, isSecond }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const headerRef = useRef(null);
  const [isOverflow, setIsOverflow] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const header = headerRef.current;
    if (!header) return;

    const overflow = header.scrollWidth - header.clientWidth > 2;
    const left = header.scrollLeft > 2;
    const right = header.scrollLeft + header.clientWidth < header.scrollWidth - 2;

    setIsOverflow(overflow);
    setCanScrollLeft(overflow && left);
    setCanScrollRight(overflow && right);
  }, []);

  useEffect(() => {
    updateScrollState();

    const onResize = () => updateScrollState();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [tabs?.length, updateScrollState]);

  useEffect(() => {
    if (!tabs?.length) return;
    if (activeIndex <= tabs.length - 1) return;
    setActiveIndex(0);
  }, [activeIndex, tabs?.length]);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const activeTab = header.querySelector(`[data-tab-index="${activeIndex}"]`);
    if (activeTab) {
      activeTab.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }

    const frame = requestAnimationFrame(updateScrollState);
    return () => cancelAnimationFrame(frame);
  }, [activeIndex, updateScrollState]);

  const scrollTabs = (direction) => {
    const header = headerRef.current;
    if (!header) return;

    const step = Math.max(header.clientWidth * 0.7, 140);
    header.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  if (!tabs?.length) return null;

  return (
    <div className="tab-panel">
      <div className={`tab-header-shell ${isOverflow ? "is-overflow" : ""}`}>
        {isOverflow && (
          <>
            <button
              type="button"
              className="tab-scroll tab-scroll--left"
              onClick={() => scrollTabs(-1)}
              disabled={!canScrollLeft}
              aria-label="Прокрутить вкладки влево"
            >
              <span aria-hidden>‹</span>
            </button>
            <button
              type="button"
              className="tab-scroll tab-scroll--right"
              onClick={() => scrollTabs(1)}
              disabled={!canScrollRight}
              aria-label="Прокрутить вкладки вправо"
            >
              <span aria-hidden>›</span>
            </button>
          </>
        )}

        <div
          ref={headerRef}
          className={`tab-header ${canScrollLeft ? "can-left" : ""} ${canScrollRight ? "can-right" : ""}`}
          style={headerStyle}
          onScroll={updateScrollState}
        >
          {tabs.map((tab, index) => (
            <button
              key={index}
              type="button"
              data-tab-index={index}
              className={`${isSecond ? "tab-btn-second" : "tab-btn"} ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="tab-content">{tabs[activeIndex]?.content ?? null}</div>
    </div>
  );
}
