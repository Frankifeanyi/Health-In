import { useState, useEffect, useCallback } from "react";

const read = (key, init) => {
  try {
    const v = localStorage.getItem(key);
    return v === null ? init : JSON.parse(v);
  } catch {
    return init;
  }
};

// Like useState, but saved in the browser and kept in sync across components.
export default function useLocalStorage(key, init) {
  const [value, setValue] = useState(() => read(key, init));

  useEffect(() => {
    const sync = (e) => {
      if (!e.detail || e.detail === key) setValue(read(key, init));
    };
    window.addEventListener("hi-storage", sync);
    return () => window.removeEventListener("hi-storage", sync);
  }, [key]);

  const set = useCallback(
    (next) => {
      const prev = read(key, init);
      const v = typeof next === "function" ? next(prev) : next;
      try {
        localStorage.setItem(key, JSON.stringify(v));
      } catch {}
      window.dispatchEvent(new CustomEvent("hi-storage", { detail: key }));
    },
    [key]
  );

  return [value, set];
}
