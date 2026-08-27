"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/methodology", label: "Methodology" },
    { to: "/case-studies", label: "Case Studies" },
    { to: "/service-details", label: "Service Details" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-obsidian/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center border border-volt font-mono text-xs font-bold text-volt">
            M
          </span>
          <span className="font-heading text-sm font-bold uppercase tracking-[0.25em] text-white">
            Mogen<span className="text-volt">/</span>SEO
          </span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              className="font-mono text-xs tracking-wider text-slate-text transition-colors hover:text-white"
            >
              {l.label.toUpperCase()}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 bg-volt px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-obsidian transition-transform hover:scale-[1.03]"
          >
            Initiate Audit
            <span className="h-1.5 w-1.5 bg-obsidian" />
          </Link>
          <Button
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center border border-white/15 text-white md:hidden"
            aria-label="Menu"
          >
            <span className="text-lg leading-none">{open ? "✕" : "≡"}</span>
          </Button>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-obsidian/95 px-6 py-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              onClick={() => setOpen(false)}
              className="py-2 font-mono text-xs tracking-wider text-slate-text"
            >
              {l.label.toUpperCase()}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
