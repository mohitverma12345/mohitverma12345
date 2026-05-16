import React, { useState } from "react";
import { motion } from "framer-motion";
import { Music4, Sparkles, Play, Loader2 } from "lucide-react";
import { LINKS } from "@/lib/links";
import Waveform from "@/components/landing/Waveform";

const GENRES = ["Pop", "Rap", "Bollywood", "Punjabi", "EDM", "Lo-fi", "Rock", "R&B"];
const MOODS = ["Euphoric", "Melancholy", "Cinematic", "Dreamy", "Aggressive"];

export default function MusicGenerator() {
  const [genre, setGenre] = useState("Lo-fi");
  const [mood, setMood] = useState("Dreamy");
  const [tempo, setTempo] = useState(86);
  const [gen, setGen] = useState(false);

  const trigger = () => {
    setGen(true);
    setTimeout(() => setGen(false), 2400);
  };

  return (
    <section id="generator" className="relative py-28 sm:py-36" data-testid="music-generator-section">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionLabel icon={<Music4 className="w-3.5 h-3.5" />} label="AI MUSIC GENERATION" />
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              From a prompt<br />to a <span className="text-gradient-brand">full track</span>.
            </h2>
            <p className="mt-6 text-zinc-400 text-lg max-w-lg leading-relaxed">
              Type a vibe. Pick a genre. Set a mood. Our generation engine composes,
              arranges and produces a release-ready track — vocals, stems and artwork included.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Studio-quality instrumentals across 12+ genres",
                "Genre-aware arrangement & dynamic mixing",
                "Stems delivered separately for full creative control",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-300">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <a
              href={LINKS.register}
              className="inline-flex items-center gap-2 mt-10 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors"
              data-testid="generator-cta"
            >
              <Sparkles className="w-4 h-4" />
              Try AI Generator
            </a>
          </motion.div>

          {/* Mock generator UI */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="relative"
            data-testid="generator-mock"
          >
            <div className="absolute -inset-6 bg-cyan-500/10 blur-3xl rounded-full" />
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-950 to-black overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
              {/* Header chrome */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                <span className="text-[11px] tracking-[0.18em] uppercase text-zinc-500">SunoDistro Studio · New Session</span>
                <span className="text-[11px] text-zinc-600">v3.1</span>
              </div>

              <div className="p-6 space-y-5">
                <div>
                  <label className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">Prompt</label>
                  <div className="mt-2 px-4 py-3 rounded-xl bg-black/60 border border-white/5 text-sm text-zinc-200">
                    A rainy night in Mumbai, soft piano keys, mellow vocals, late-night drive vibe…
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">Genre</label>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {GENRES.map((g) => (
                        <button
                          key={g}
                          onClick={() => setGenre(g)}
                          data-testid={`genre-${g.toLowerCase()}`}
                          className={`px-2.5 py-1 rounded-full text-[11px] border transition-all ${
                            genre === g
                              ? "bg-cyan-500/15 border-cyan-400/50 text-cyan-200"
                              : "bg-white/[0.02] border-white/5 text-zinc-400 hover:text-white"
                          }`}
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">Mood</label>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {MOODS.map((m) => (
                        <button
                          key={m}
                          onClick={() => setMood(m)}
                          data-testid={`mood-${m.toLowerCase()}`}
                          className={`px-2.5 py-1 rounded-full text-[11px] border transition-all ${
                            mood === m
                              ? "bg-purple-500/15 border-purple-400/50 text-purple-200"
                              : "bg-white/[0.02] border-white/5 text-zinc-400 hover:text-white"
                          }`}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">Tempo</label>
                    <span className="text-xs text-zinc-300 tabular-nums">{tempo} BPM</span>
                  </div>
                  <input
                    type="range"
                    min={60}
                    max={180}
                    value={tempo}
                    onChange={(e) => setTempo(Number(e.target.value))}
                    className="w-full mt-2 accent-cyan-400"
                    data-testid="tempo-slider"
                  />
                </div>

                {/* Waveform preview */}
                <div className="relative h-32 rounded-xl border border-white/5 bg-black overflow-hidden">
                  <Waveform height={128} density={3} speed={gen ? 0.04 : 0.012} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {gen ? (
                      <div className="flex items-center gap-2 text-cyan-300 text-sm">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Generating · {genre} · {mood} · {tempo} BPM
                      </div>
                    ) : (
                      <div className="text-xs text-zinc-500 tracking-widest uppercase">Preview · 0:32</div>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <button
                    onClick={trigger}
                    data-testid="generate-btn"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold hover:opacity-90 transition"
                  >
                    {gen ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                    {gen ? "Generating…" : "Generate Track"}
                  </button>
                  <button className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-white/10 text-zinc-300 text-sm hover:bg-white/[0.04]">
                    <Play className="w-4 h-4" /> Preview
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ icon, label }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[11px] tracking-[0.22em] uppercase text-zinc-300">
      <span className="text-cyan-400">{icon}</span>
      {label}
    </div>
  );
}
