"use client";
import { useMemo, useState } from "react";

interface Term {
  term: string;
  def: string;
}

interface Props {
  terms: Term[];
}

export default function GlossarySection({ terms }: Readonly<Props>) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(
    () =>
      terms.filter(
        (t) =>
          t.term.toLowerCase().includes(query.toLowerCase()) ||
          t.def.toLowerCase().includes(query.toLowerCase()),
      ),
    [terms, query],
  );

  return (
    <section className="relative bg-obsidian py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search terms…"
          className="w-full border border-white/15 bg-steel/40 px-4 py-3 font-body text-sm text-white placeholder:text-slate-text/50 focus:border-volt focus:outline-none"
        />
        <div className="mt-8 divide-y divide-white/10 border border-white/10">
          {filtered.map((t) => (
            <div
              key={t.term}
              className="grid grid-cols-1 gap-2 p-5 sm:grid-cols-3"
            >
              <h3 className="font-heading text-sm font-semibold uppercase text-volt">
                {t.term}
              </h3>
              <p className="font-body text-sm leading-relaxed text-slate-text sm:col-span-2">
                {t.def}
              </p>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="p-8 text-center font-mono text-xs tracking-wider text-slate-text/60">
              NO TERMS MATCH &ldquo;{query}&rdquo;
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
