// File: ToastProvider.jsx
import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

const ToastCtx = createContext(null);

let idSeq = 1;
const genId = () => `${Date.now()}_${idSeq++}`;

export function ToastProvider({ children, position = "top-right", limit = 5, duration = 3000 }) {
  const [toasts, setToasts] = useState([]);
  const queueRef = useRef([]);

  const remove = useCallback((id) => {
    setToasts((list) => list.filter((t) => t.id !== id));
  }, []);

  const show = useCallback((opts) => {
    const t = { id: genId(), type: "info", title: "", message: "", duration, ...opts };
    setToasts((list) => {
      if (list.length >= limit) {
        queueRef.current.push(t);
        return list;
      }
      return [...list, t];
    });
    return t.id;
  }, [duration, limit]);

  // When a toast is removed and we have queue, push next
  useEffect(() => {
    if (toasts.length < limit && queueRef.current.length) {
      const next = queueRef.current.shift();
      setToasts((list) => [...list, next]);
    }
  }, [toasts, limit]);

  const api = useMemo(() => ({
    show,
    success: (o) => show({ ...o, type: "success" }),
    error: (o) => show({ ...o, type: "error" }),
    warning: (o) => show({ ...o, type: "warning" }),
    info: (o) => show({ ...o, type: "info" }),
    loading: (o) => show({ ...o, type: "loading", duration: Infinity }),
    remove,
    dismiss: remove,
    promise: async (promise, { loading, success, error }) => {
      const id = show({ type: "loading", ...loading, duration: Infinity });
      try {
        const res = await promise;
        setToasts((list) => list.map((t) => t.id === id ? { ...t, ...success, type: "success", duration } : t));
        return res;
      } catch (e) {
        setToasts((list) => list.map((t) => t.id === id ? { ...t, ...error, type: "error", duration } : t));
        throw e;
      }
    }
  }), [show, remove, duration]);

  return (
    <ToastCtx.Provider value={api}>
      {children}
      <ToastViewport toasts={toasts} remove={remove} position={position} />
    </ToastCtx.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastCtx);
  if (!ctx) throw new Error("useToast must be used inside <ToastProvider>");
  return ctx;
}

function ToastViewport({ toasts, remove, position }) {
  return (
    <div className={"toastViewport toastViewport--" + position} role="region" aria-live="polite" aria-relevant="additions removals">
      {toasts.map((t) => (
        <ToastItem key={t.id} {...t} onClose={() => remove(t.id)} />
      ))}
    </div>
  );
}

function ToastItem({ id, type, title, message, duration, onClose }) {
  const [hover, setHover] = useState(false);
  const [progress, setProgress] = useState(0);
  const startRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!duration || duration === Infinity) return; // sticky or loading
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const total = Math.max(1200, duration);
    startRef.current = performance.now();

    const tick = (now) => {
      if (hover) {
        startRef.current = now - (progress * total);
      } else {
        const elapsed = now - startRef.current;
        const p = Math.min(1, elapsed / total);
        setProgress(p);
        if (p >= 1) return onClose();
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [duration, hover, onClose]);

  return (
    <div
      className={"toast toast--" + type}
      role="status"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="toast__icon" aria-hidden>{iconFor(type)}</div>
      <div className="toast__body">
        {title && <div className="toast__title">{title}</div>}
        {message && <div className="toast__msg">{message}</div>}
      </div>
      <button className="toast__close" aria-label="Закрыть" onClick={onClose}>×</button>
      {/* {duration !== Infinity (
        <div className="toast__progress"><div style={{ width: `${progress * 100}%` }} /></div>
      )} */}
    </div>
  );
}

function iconFor(type) {
  switch (type) {
    case "success":
      return (<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Zm-1.2-6.2 6-6-1.4-1.4-4.6 4.6-2.2-2.2-1.4 1.4 3.6 3.6Z"/></svg>);
    case "error":
      return (<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 14h-2v-2h2v2Zm0-4h-2V6h2v6Z"/></svg>);
    case "warning":
      return (<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M1 21h22L12 2 1 21Zm12-3h-2v-2h2v2Zm0-4h-2v-4h2v4Z"/></svg>);
    case "loading":
      return (<span className="toast__spinner" aria-hidden />);
    default:
      return (<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Zm1-11H7v2h6v-2Zm4-4H7v2h10V7Z"/></svg>);
  }
}

