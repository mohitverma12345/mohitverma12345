import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionLabel } from "@/components/landing/MusicGenerator";

const AVATARS = [
  "https://images.unsplash.com/photo-1681404141874-633aa2de7c76?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2ODh8MHwxfHNlYXJjaHwyfHxwb3J0cmFpdCUyMGFydGlzdCUyMG11c2ljaWFuJTIwc3R1ZGlvJTIwbGlnaHRpbmd8ZW58MHx8fHwxNzc4OTE1NDc0fDA&ixlib=rb-4.1.0&q=85",
  "https://images.unsplash.com/photo-1513517178-1aca306e52a9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2ODh8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMGFydGlzdCUyMG11c2ljaWFuJTIwc3R1ZGlvJTIwbGlnaHRpbmd8ZW58MHx8fHwxNzc4OTE1NDc0fDA&ixlib=rb-4.1.0&q=85",
  "https://images.unsplash.com/photo-1642140841563-e1c986a07d5a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2ODh8MHwxfHNlYXJjaHw0fHxwb3J0cmFpdCUyMGFydGlzdCUyMG11c2ljaWFuJTIwc3R1ZGlvJTIwbGlnaHRpbmd8ZW58MHx8fHwxNzc4OTE1NDc0fDA&ixlib=rb-4.1.0&q=85",
  "https://images.unsplash.com/photo-1498798821241-1f327af804fe?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2ODh8MHwxfHNlYXJjaHwzfHxwb3J0cmFpdCUyMGFydGlzdCUyMG11c2ljaWFuJTIwc3R1ZGlvJTIwbGlnaHRpbmd8ZW58MHx8fHwxNzc4OTE1NDc0fDA&ixlib=rb-4.1.0&q=85",
];

const QUOTES = [
  {
    name: "Aria Devraj",
    handle: "@ariadevraj",
    stat: "+420K monthly streams",
    quote:
      "I went from bedroom demos to Spotify editorial in three months. The AI mastering alone makes this worth every cent.",
    avatar: AVATARS[0],
  },
  {
    name: "Kai Mensah",
    handle: "@kaimensah",
    stat: "1.2M streams · debut single",
    quote:
      "Lyrics, vocals, distribution — all under one roof. SunoDistro feels like a real label in my pocket.",
    avatar: AVATARS[1],
  },
  {
    name: "Lena Park",
    handle: "@lenapark",
    stat: "Top 50 · K-Indie Rising",
    quote:
      "The stem extractor saved my catalogue. I can now remix every old session I had buried for years.",
    avatar: AVATARS[2],
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-28 sm:py-36" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <SectionLabel icon={<Quote className="w-3.5 h-3.5" />} label="CREATOR STORIES" />
            <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-2xl">
              Built by artists.<br /><span className="text-gradient-brand">Trusted by hitmakers.</span>
            </h2>
          </div>
          <div className="text-zinc-400 max-w-md text-base sm:text-lg">
            From bedroom producers to charting artists — creators ship real careers with SunoDistro AI.
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {QUOTES.map((q, i) => (
            <motion.figure
              key={q.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl border border-white/[0.06] bg-zinc-950 p-7 lift hover:border-white/15 relative"
              data-testid={`testimonial-${i}`}
            >
              <Quote className="absolute top-6 right-6 w-5 h-5 text-cyan-400/40" />
              <blockquote className="text-[15px] leading-relaxed text-zinc-200">
                "{q.quote}"
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3 pt-5 border-t border-white/5">
                <img src={q.avatar} alt={q.name} className="w-11 h-11 rounded-full object-cover" loading="lazy" />
                <div className="flex-1">
                  <div className="text-sm font-semibold">{q.name}</div>
                  <div className="text-[11px] text-zinc-500">{q.handle}</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">Growth</div>
                  <div className="text-xs text-cyan-300 font-medium tabular-nums">{q.stat}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
