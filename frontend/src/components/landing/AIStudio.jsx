import React from "react";
import { motion } from "framer-motion";
import { Mic, Sliders, Waves, Wand2 } from "lucide-react";
import { SectionLabel } from "@/components/landing/MusicGenerator";
import { LINKS } from "@/lib/links";

const STUDIO_BG =
  "https://static.prod-images.emergentagent.com/jobs/9521f1a3-3587-43f2-adea-dfdd4394f3c3/images/7b157144f4a0ed5c3487c859f0d362aa7e5d6226dde34dc765bbefd2c59301ee.png";
const STEM_ART =
  "https://static.prod-images.emergentagent.com/jobs/9521f1a3-3587-43f2-adea-dfdd4394f3c3/images/2de5630043c61577262668adaf000fd5515d98f34af110f9405d5c1294e46af7.png";

const BARS = Array.from({ length: 28 }, (_, i) => ({
  h: 18 + Math.abs(Math.sin(i * 0.7)) * 70,
  d: (i % 7) * 0.08,
}));

export default function AIStudio() {
  return (
    <section id="studio" className="relative py-28 sm:py-36" data-testid="studio-section">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto">
          <SectionLabel icon={<Mic className="w-3.5 h-3.5" />} label="AI VOCAL STUDIO" />
          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            A <span className="text-gradient-brand">recording studio</span><br />in your browser.
          </h2>
          <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
            Record vocals, isolate stems, clean noise, and master your track to industry-loudness —
            with one-click intelligence inspired by real studios.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="relative mt-16 rounded-3xl border border-white/10 overflow-hidden bg-zinc-950"
          data-testid="studio-mock"
        >
          {/* Hero studio image */}
          <div className="relative aspect-[16/8] sm:aspect-[16/7]">
            <img src={STUDIO_BG} alt="AI Studio" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]/30" />

            {/* Floating spectrum */}
            <div className="absolute left-6 sm:left-10 bottom-6 sm:bottom-10 right-6 sm:right-10 flex items-end gap-1 h-28 sm:h-36">
              {BARS.map((b, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm bg-gradient-to-t from-cyan-400/80 via-blue-400/70 to-purple-400/40"
                  style={{
                    height: `${b.h}%`,
                    animation: `eq 1.4s ease-in-out ${b.d}s infinite alternate`,
                    transformOrigin: "bottom",
                    boxShadow: "0 0 12px rgba(34,211,238,0.35)",
                  }}
                />
              ))}
            </div>

            {/* Mixer chip */}
            <div className="hidden sm:flex absolute top-8 left-8 items-center gap-3 px-4 py-3 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md">
              <Sliders className="w-4 h-4 text-cyan-300" />
              <div className="text-xs">
                <div className="uppercase tracking-[0.18em] text-zinc-500 text-[10px]">Mixer</div>
                <div className="text-white font-medium">Vocals · -3.2 dB · Comp 2.4:1</div>
              </div>
            </div>

            <div className="hidden sm:flex absolute top-8 right-8 items-center gap-3 px-4 py-3 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md">
              <Waves className="w-4 h-4 text-purple-300" />
              <div className="text-xs">
                <div className="uppercase tracking-[0.18em] text-zinc-500 text-[10px]">Mastering</div>
                <div className="text-white font-medium">-9 LUFS · True Peak -1.0</div>
              </div>
            </div>
          </div>

          {/* Tools row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-white/5">
            {[
              { Icon: Mic, title: "Vocal Recording", desc: "Browser-native low-latency capture" },
              { Icon: Waves, title: "Stem Extraction", desc: "Isolate vocals, drums, bass, melody" },
              { Icon: Wand2, title: "AI Cleanup", desc: "Remove noise, breath, plosives" },
              { Icon: Sliders, title: "AI Mastering", desc: "Industry-loudness in one click" },
            ].map(({ Icon, title, desc }, i) => (
              <div key={i} className={`p-6 ${i < 3 ? "lg:border-r" : ""} border-white/5 group`}>
                <Icon className="w-5 h-5 text-cyan-300 group-hover:text-white transition" />
                <div className="mt-3 text-white font-semibold">{title}</div>
                <div className="text-sm text-zinc-500 mt-1">{desc}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stem extraction split */}
        <div className="grid lg:grid-cols-2 gap-10 mt-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] lift"
            data-testid="stem-card"
          >
            <img src={STEM_ART} alt="Stem extraction" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="text-[11px] uppercase tracking-[0.22em] text-cyan-300">Stem Extraction</div>
              <div className="text-2xl font-bold mt-1">4-track separation, studio-grade.</div>
              <div className="text-sm text-zinc-300 mt-1.5">Vocals · Drums · Bass · Other — in seconds.</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-white/10 bg-zinc-950 p-8 flex flex-col justify-between lift"
            data-testid="mastering-card"
          >
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-purple-300">AI Mastering</div>
              <div className="text-2xl font-bold mt-1">One click. Release-ready loudness.</div>
              <div className="text-sm text-zinc-400 mt-2 max-w-md">
                Genre-adaptive mastering tuned for Spotify, Apple Music and TikTok.
                Match reference tracks or use our presets.
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { k: "LUFS", v: "-9.1" },
                { k: "TP", v: "-1.0" },
                { k: "DR", v: "8" },
              ].map(({ k, v }) => (
                <div key={k} className="rounded-xl border border-white/5 bg-black/40 p-3 text-center">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">{k}</div>
                  <div className="text-lg font-semibold tabular-nums">{v}</div>
                </div>
              ))}
            </div>

            <a
              href={LINKS.register}
              className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition w-fit"
              data-testid="studio-cta"
            >
              Open AI Studio
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
