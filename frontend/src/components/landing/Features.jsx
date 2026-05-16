import React from "react";
import { motion } from "framer-motion";
import {
  Music4, PenLine, Mic2, Image as ImageIcon, Layers, Sliders, Globe2, BadgeCheck,
  LineChart, BarChart3, Hash, Instagram,
} from "lucide-react";
import { SectionLabel } from "@/components/landing/MusicGenerator";

const FEATURES = [
  { Icon: Music4, title: "AI Music Generator", desc: "Prompt-to-track in 12+ genres." },
  { Icon: PenLine, title: "AI Lyrics Generator", desc: "Verse, hook, bridge co-writing." },
  { Icon: Mic2, title: "AI Vocal Studio", desc: "Record, clean, tune, harmonize." },
  { Icon: ImageIcon, title: "AI Artwork Generator", desc: "Cover art tuned to your sound." },
  { Icon: Layers, title: "Stem Extractor", desc: "Isolate vocals, drums, bass, other." },
  { Icon: Sliders, title: "Mastering Studio", desc: "One-click release loudness." },
  { Icon: Globe2, title: "Global Distribution", desc: "200+ stores worldwide." },
  { Icon: BadgeCheck, title: "Official Artist Channel", desc: "Spotify & YT verified profile." },
  { Icon: LineChart, title: "Royalty Tracking", desc: "Real-time, per-platform earnings." },
  { Icon: BarChart3, title: "Analytics Dashboard", desc: "Streams, saves, audience insights." },
  { Icon: Hash, title: "Free UPC / ISRC", desc: "Industry-standard codes included." },
  { Icon: Instagram, title: "Instagram Linking", desc: "Auto-link releases to Reels." },
];

export default function Features() {
  return (
    <section id="features" className="relative py-28 sm:py-36" data-testid="features-section">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <SectionLabel icon={<Layers className="w-3.5 h-3.5" />} label="THE FULL STACK" />
            <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-2xl">
              Everything modern <span className="text-gradient-brand">music creators</span> need.
            </h2>
          </div>
          <p className="text-zinc-400 max-w-md text-base sm:text-lg">
            From the first idea to the first stream — twelve studio-grade tools, one cinematic interface.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {FEATURES.map(({ Icon, title, desc }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
              className="group relative rounded-2xl border border-white/[0.06] bg-zinc-950 p-6 overflow-hidden lift hover:border-white/15"
              data-testid={`feature-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
            >
              {/* gradient halo on hover */}
              <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-cyan-500/0 group-hover:bg-cyan-500/10 blur-3xl transition-all duration-700" />
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-5 group-hover:border-cyan-400/40 group-hover:bg-cyan-500/[0.08] transition-colors">
                  <Icon className="w-5 h-5 text-cyan-300" />
                </div>
                <h3 className="text-[17px] font-semibold tracking-tight">{title}</h3>
                <p className="text-sm text-zinc-500 mt-1.5 leading-relaxed">{desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
