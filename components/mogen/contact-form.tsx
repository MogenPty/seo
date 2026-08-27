"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <div className="border border-white/10 bg-steel/40 p-8">
      <span className="font-mono text-[10px] tracking-[0.3em] text-volt">
        {"// ENQUIRY"}
      </span>
      {sent ? (
        <div className="mt-8 border border-volt/40 bg-volt/5 p-8 text-center">
          <h3 className="font-heading text-xl font-bold uppercase text-white">
            Request received
          </h3>
          <p className="mt-3 font-body text-sm text-slate-text">
            A Mogen strategist will reach out within one business day. Check
            your inbox for a confirmation.
          </p>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="mt-6 flex flex-col gap-4"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              required
              placeholder="Full name"
              className="border border-white/15 bg-obsidian/60 px-4 py-3 font-body text-sm text-white placeholder:text-slate-text/50 focus:border-volt focus:outline-none"
            />
            <input
              required
              placeholder="Company"
              className="border border-white/15 bg-obsidian/60 px-4 py-3 font-body text-sm text-white placeholder:text-slate-text/50 focus:border-volt focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="email"
              required
              placeholder="Work email"
              className="border border-white/15 bg-obsidian/60 px-4 py-3 font-body text-sm text-white placeholder:text-slate-text/50 focus:border-volt focus:outline-none"
            />
            <input
              placeholder="Phone"
              className="border border-white/15 bg-obsidian/60 px-4 py-3 font-body text-sm text-white placeholder:text-slate-text/50 focus:border-volt focus:outline-none"
            />
          </div>
          <input
            placeholder="Domain (e.g. yoursite.co.za)"
            className="border border-white/15 bg-obsidian/60 px-4 py-3 font-body text-sm text-white placeholder:text-slate-text/50 focus:border-volt focus:outline-none"
          />
          <select className="border border-white/15 bg-obsidian/60 px-4 py-3 font-body text-sm text-white focus:border-volt focus:outline-none">
            <option className="bg-obsidian">
              Preferred tier — Ignition / Scale / Dominance
            </option>
            <option className="bg-obsidian">The Ignition — R8,500/mo</option>
            <option className="bg-obsidian">The Scale — R16,500/mo</option>
            <option className="bg-obsidian">The Dominance — R32,000/mo</option>
            <option className="bg-obsidian">Not sure yet</option>
          </select>
          <textarea
            rows={4}
            placeholder="What are you trying to achieve?"
            className="border border-white/15 bg-obsidian/60 px-4 py-3 font-body text-sm text-white placeholder:text-slate-text/50 focus:border-volt focus:outline-none"
          />
          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center gap-3 bg-volt px-6 py-4 font-mono text-sm font-bold uppercase tracking-wider text-obsidian transition-transform hover:scale-[1.01]"
          >
            Send enquiry
            <span className="h-2 w-2 bg-obsidian" />
          </button>
        </form>
      )}
    </div>
  );
}
