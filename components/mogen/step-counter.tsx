"use client";

import { useEffect, useState } from "react";

export default function StepCounter() {
  const [step, setStep] = useState(1);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById("step-visualizer");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const inView = rect.bottom > 0 && rect.top < vh;
      setActive(inView);
      const p = Math.max(0, Math.min(1, (vh - rect.top) / (rect.height + vh)));
      setStep(Math.max(1, Math.min(37, Math.round(p * 36) + 1)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className={`fixed left-4 top-1/2 z-40 -translate-y-1/2 transition-opacity duration-500 lg:left-6 ${
        active ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden
    >
      <div className="flex flex-col items-center gap-3">
        <span className="font-mono text-[9px] tracking-[0.3em] text-slate-text/60 [writing-mode:vertical-rl] rotate-180">
          STEP
        </span>
        <div className="relative h-40 w-px bg-white/10">
          <div
            className="absolute top-0 w-px bg-volt"
            style={{ height: `${(step / 37) * 100}%` }}
          />
        </div>
        <span className="font-mono text-2xl font-bold leading-none text-volt">
          {String(step).padStart(2, "0")}
        </span>
        <span className="font-mono text-[9px] tracking-[0.2em] text-slate-text/50">
          /37
        </span>
      </div>
    </div>
  );
}
