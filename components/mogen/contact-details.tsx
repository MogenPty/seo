"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";

const details = [
  {
    icon: MapPin,
    label: "Studio",
    value: "4th Floor, Lynnwood Bridge, Pretoria, 0081, South Africa",
  },
  { icon: Phone, label: "Phone", value: "+27 12 345 6789" },
  { icon: Mail, label: "Email", value: "hello@mogen.co.za" },
  { icon: Clock, label: "Hours", value: "Mon-Fri · 08:00-17:00 SAST" },
];

export default function ContactDetails() {
  return (
    <div className="flex flex-col gap-6">
      <div className="border border-white/10 bg-steel/40 p-8">
        <span className="font-mono text-[10px] tracking-[0.3em] text-volt">
          {"// BUSINESS DETAILS"}
        </span>
        <ul className="mt-6 space-y-5">
          {details.map((d) => (
            <li key={d.label} className="flex items-start gap-4">
              <span className="grid h-9 w-9 shrink-0 place-items-center border border-volt/40 text-volt">
                <d.icon className="h-4 w-4" />
              </span>
              <div>
                <div className="font-mono text-[10px] tracking-[0.2em] text-slate-text/70">
                  {d.label.toUpperCase()}
                </div>
                <div className="mt-1 font-body text-sm text-white">
                  {d.value}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative h-56 overflow-hidden border border-white/10 bg-steel/40">
        <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <MapPin className="h-6 w-6 text-volt" />
          <span className="font-mono text-[10px] tracking-[0.3em] text-slate-text">
            PRETORIA · -25.7479 · 28.2293
          </span>
          <span className="font-heading text-xs uppercase tracking-wider text-white/70">
            Lynnwood Bridge · 4th Floor
          </span>
        </div>
      </div>
    </div>
  );
}
