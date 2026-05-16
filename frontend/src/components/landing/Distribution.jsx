import React from "react";
import { motion } from "framer-motion";
import { Globe2, CheckCircle2 } from "lucide-react";
import { FaSpotify, FaApple, FaYoutube, FaTiktok, FaInstagram, FaAmazon, FaSoundcloud, FaDeezer } from "react-icons/fa";
import { SiTidal, SiPandora } from "react-icons/si";
import { SectionLabel } from "@/components/landing/MusicGenerator";
import { LINKS } from "@/lib/links";

const MAP_URL =
  "https://static.prod-images.emergentagent.com/jobs/9521f1a3-3587-43f2-adea-dfdd4394f3c3/images/7509661c88408b188a3ed7f52e79187bfa9ea5befbc1284c4a305f29e54c55c9.png";

const PLATFORMS = [
  { Icon: FaSpotify, label: "Spotify" },
  { Icon: FaApple, label: "Apple Music" },
  { Icon: FaYoutube, label: "YouTube Music" },
  { Icon: FaTiktok, label: "TikTok" },
  { Icon: FaInstagram, label: "Instagram / Reels" },
  { Icon: FaAmazon, label: "Amazon Music" },
  { Icon: FaSoundcloud, label: "SoundCloud" },
  { Icon: SiTidal, label: "Tidal" },
  { Icon: FaDeezer, label: "Deezer" },
  { Icon: SiPandora, label: "Pandora" },
];

const PIPELINE = [
  { step: "Upload", state: "done" },
  { step: "Mastered", state: "done" },
  { step: "Metadata", state: "done" },
  { step: "Delivered", state: "active" },
  { step: "Live", state: "pending" },
];

export default function Distribution() {
  return (
    <section id="distribution" className="relative py-28 sm:py-36 overflow-hidden" data-testid="distribution-section">
      {/* Map background */}
      <div className="absolute inset-0 opacity-50">
        <img src={MAP_URL} alt="Global map" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/70 to-[#050505]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto">
          <SectionLabel icon={<Globe2 className="w-3.5 h-3.5" />} label="GLOBAL DISTRIBUTION" />
          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Release <span className="text-gradient-brand">everywhere</span>.<br />Keep 100% of royalties.
          </h2>
          <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
            Distribute your music to 200+ stores and streaming platforms worldwide.
            Free UPC and ISRC codes, official artist channels, real-time analytics.
          </p>
        </div>

        {/* Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 max-w-4xl mx-auto rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl p-6 sm:p-8"
          data-testid="release-pipeline"
        >
          <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-5">
            <span>Release · "Neon Avenue"</span>
            <span>ETA · 24h to live</span>
          </div>

          <div className="grid grid-cols-5 gap-3 sm:gap-6">
            {PIPELINE.map((p, i) => {
              const isDone = p.state === "done";
              const isActive = p.state === "active";
              return (
                <div key={p.step} className="relative">
                  <div className={`h-1 rounded-full ${isDone ? "bg-cyan-400" : isActive ? "bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse" : "bg-white/5"}`} />
                  <div className="mt-3 flex items-center gap-2">
                    {isDone ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    ) : (
                      <span className={`w-2 h-2 rounded-full ${isActive ? "bg-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.9)]" : "bg-zinc-700"}`} />
                    )}
                    <span className={`text-xs ${isDone || isActive ? "text-white" : "text-zinc-500"}`}>{p.step}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Platform grid */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto" data-testid="platforms-grid">
          {PLATFORMS.map(({ Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-white/5 bg-black/50 backdrop-blur-md p-5 flex items-center gap-3 lift hover:border-white/15"
            >
              <Icon className="w-6 h-6 text-zinc-300" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">Platform</div>
                <div className="text-sm font-medium">{label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href={LINKS.app}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm hover:opacity-90 transition shadow-[0_0_30px_rgba(59,130,246,0.35)]"
            data-testid="distribution-cta"
          >
            Distribute My Music
          </a>
        </div>
      </div>
    </section>
  );
}
