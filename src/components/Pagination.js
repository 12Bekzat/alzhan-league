import React from "react";

function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => i + start);
}

/**
 * Генерирует массив элементов: числа и "dots"
 */
function getPaginationRange({ currentPage, totalPages, siblingCount = 1, boundaryCount = 1 }) {
  const totalNumbers = boundaryCount * 2 + siblingCount * 2 + 3; // first,last, current
  const totalBlocks = totalNumbers + 2; // + 2 dots

  if (totalPages <= totalBlocks) return range(1, totalPages);

  const leftSibling = Math.max(currentPage - siblingCount, boundaryCount + 2);
  const rightSibling = Math.min(currentPage + siblingCount, totalPages - boundaryCount - 1);

  const showLeftDots = leftSibling > boundaryCount + 2;
  const showRightDots = rightSibling < totalPages - boundaryCount - 1;

  const leftRange = range(1, boundaryCount);
  const rightRange = range(totalPages - boundaryCount + 1, totalPages);
  const middleRange = range(leftSibling, rightSibling);

  if (!showLeftDots && showRightDots) {
    const left = range(1, rightSibling + (siblingCount + 1));
    return [...left, "dots", ...rightRange];
  }
  if (showLeftDots && !showRightDots) {
    const right = range(leftSibling - (siblingCount + 1), totalPages);
    return [...leftRange, "dots", ...right];
  }

  return [...leftRange, "dots", ...middleRange, "dots", ...rightRange];
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  boundaryCount = 1,
  showPrevNext = true,
  showFirstLast = true,
  size = "md", // sm|md|lg
  className = "",
}) {
  const items = getPaginationRange({ currentPage, totalPages, siblingCount, boundaryCount });

  const go = (p) => {
    if (p < 1 || p > totalPages || p === currentPage) return;
    onPageChange?.(p);
  };

  return (
    <nav
      className={`pager pager--${size} ${className}`}
      aria-label="Страницы"
      role="navigation"
    >
      <ul className="pager__list" role="list">
        {showFirstLast && (
          <li className="pager__item">
            <button
              className="pager__btn"
              aria-label="Первая страница"
              disabled={currentPage === 1}
              onClick={() => go(1)}
            >
              «
            </button>
          </li>
        )}
        {showPrevNext && (
          <li className="pager__item">
            <button
              className="pager__btn"
              aria-label="Предыдущая страница"
              disabled={currentPage === 1}
              onClick={() => go(currentPage - 1)}
            >
              ‹
            </button>
          </li>
        )}

        {items.map((it, i) => (
          <li key={`${it}-${i}`} className="pager__item">
            {it === "dots" ? (
              <span className="pager__dots" aria-hidden="true">…</span>
            ) : (
              <button
                className={`pager__btn ${it === currentPage ? "is-active" : ""}`}
                aria-current={it === currentPage ? "page" : undefined}
                onClick={() => go(it)}
              >
                {it}
              </button>
            )}
          </li>
        ))}

        {showPrevNext && (
          <li className="pager__item">
            <button
              className="pager__btn"
              aria-label="Следующая страница"
              disabled={currentPage === totalPages}
              onClick={() => go(currentPage + 1)}
            >
              ›
            </button>
          </li>
        )}
        {showFirstLast && (
          <li className="pager__item">
            <button
              className="pager__btn"
              aria-label="Последняя страница"
              disabled={currentPage === totalPages}
              onClick={() => go(totalPages)}
            >
              »
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
