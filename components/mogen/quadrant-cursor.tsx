"use client";

import { useEffect, useState } from "react";

export default function QuadrantCursor() {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !window.matchMedia("(pointer: fine)").matches
    )
      return;
    // Defer to avoid synchronous setState in effect body (cascading render)
    queueMicrotask(() => setEnabled(true));
    let raf = 0;
    let pending: { x: number; y: number } | null = null;
    const move = (e: { clientX: number; clientY: number }) => {
      pending = { x: e.clientX, y: e.clientY };
      if (!raf) {
        raf = requestAnimationFrame(() => {
          raf = 0;
          if (pending) setPos(pending);
        });
      }
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;
  const { x, y } = pos;
  return (
    <div
      className="pointer-events-none fixed inset-0 z-90 hidden md:block"
      aria-hidden
    >
      <div
        className="absolute left-0 right-0 h-px bg-volt/20"
        style={{ top: y }}
      />
      <div
        className="absolute top-0 bottom-0 w-px bg-volt/20"
        style={{ left: x }}
      />
      <div
        className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 border border-volt"
        style={{ left: x, top: y }}
      />
      <div
        className="absolute -translate-x-1/2 translate-y-2 font-mono text-[10px] tracking-wider text-volt/80 whitespace-nowrap"
        style={{ left: x, top: y }}
      >
        X{String(Math.round(x)).padStart(4, "0")} · Y
        {String(Math.round(y)).padStart(4, "0")}
      </div>
    </div>
  );
}
