import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { LINKS } from "@/lib/links";
import Waveform from "@/components/landing/Waveform";

const ORB_URL =
  "https://static.prod-images.emergentagent.com/jobs/9521f1a3-3587-43f2-adea-dfdd4394f3c3/images/976401c0c4ef3f6bbdf00ee722ea7ed4d53d61a1c1f6fb9bc4ca7112d17fa51e.png";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] pt-28 pb-20 overflow-hidden" data-testid="hero-section">
      {/* Background layers */}
      <div className="absolute inset-0 spotlight" />
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 pointer-events-none">
        <Waveform className="absolute inset-0 w-full h-full" height={520} density={4} />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          {/* LEFT: Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/25 bg-cyan-500/[0.06] backdrop-blur-sm"
              data-testid="hero-badge"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs tracking-[0.18em] uppercase text-cyan-200/90">The Music Operating System</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 0.65, 0.32, 1] }}
              className="mt-6 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight"
              data-testid="hero-headline"
            >
              <span className="block text-white">Create.</span>
              <span className="block text-white">Sing.</span>
              <span className="block text-gradient-brand">Distribute.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="mt-6 max-w-xl text-base sm:text-lg text-zinc-400 leading-relaxed"
              data-testid="hero-subheadline"
            >
              Generate AI music, write lyrics, record vocals, master tracks, and release worldwide —
              all from one cinematic platform built for modern creators.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href={LINKS.register}
                data-testid="hero-cta-primary"
                className="group relative inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-[15px] text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all shadow-[0_0_30px_rgba(59,130,246,0.35)] hover:shadow-[0_0_50px_rgba(59,130,246,0.55)]"
              >
                Start Creating
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href={LINKS.app}
                data-testid="hero-cta-secondary"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-[15px] text-white bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-white/20 backdrop-blur-sm transition-all"
              >
                <Play className="w-4 h-4" />
                Distribute Music
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.18em] text-zinc-500"
            >
              <span>100% Royalties</span>
              <span className="w-1 h-1 rounded-full bg-zinc-700" />
              <span>Free UPC / ISRC</span>
              <span className="w-1 h-1 rounded-full bg-zinc-700" />
              <span>200+ Stores</span>
            </motion.div>
          </div>

          {/* RIGHT: Music orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.22, 0.65, 0.32, 1] }}
            className="relative aspect-square max-w-[560px] mx-auto w-full"
          >
            {/* Glow */}
            <div className="absolute inset-8 rounded-full bg-cyan-500/20 blur-3xl pulse-soft" />
            <div className="absolute -inset-2 rounded-full bg-blue-600/10 blur-3xl" />

            {/* Rotating rings */}
            <div className="absolute inset-0 orb-rotate">
              <div className="absolute inset-0 rounded-full border border-white/10" />
              <div className="absolute inset-6 rounded-full border border-white/5" />
              <div className="absolute inset-14 rounded-full border-2 border-dashed border-cyan-500/20" />
            </div>
            <div className="absolute inset-20 orb-rotate-rev">
              <div className="absolute inset-0 rounded-full border border-purple-500/20" />
            </div>

            {/* Orb image */}
            <div className="absolute inset-10 rounded-full overflow-hidden border border-white/10 shadow-[0_30px_120px_rgba(6,182,212,0.18)]">
              <img
                src={ORB_URL}
                alt="Music orb"
                className="w-full h-full object-cover scale-110 float-y"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-transparent to-cyan-500/15 mix-blend-overlay" />
            </div>

            {/* Floating chips */}
            <FloatingChip className="absolute -left-4 sm:-left-6 top-12" label="Generating: Lo-fi · 84 BPM" testId="hero-chip-genre" />
            <FloatingChip className="absolute right-0 sm:-right-4 bottom-20" label="Mastered · -9 LUFS" testId="hero-chip-master" tone="purple" />
            <FloatingChip className="absolute left-10 bottom-2" label="Released · 200+ stores" testId="hero-chip-release" tone="blue" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FloatingChip({ className = "", label, tone = "cyan", testId }) {
  const dot = {
    cyan: "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]",
    blue: "bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.9)]",
    purple: "bg-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.9)]",
  }[tone];
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className={`${className} flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-xs text-zinc-200 float-y`}
      data-testid={testId}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
      {label}
    </motion.div>
  );
}
