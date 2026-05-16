import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LINKS } from "@/lib/links";
import Waveform from "@/components/landing/Waveform";

export default function FinalCTA() {
  return (
    <section className="relative py-28 sm:py-40 overflow-hidden" data-testid="final-cta-section">
      <div className="absolute inset-0 spotlight" />
      <div className="absolute inset-x-0 -bottom-10 h-[420px] pointer-events-none opacity-80">
        <Waveform height={420} density={3} speed={0.008} />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative max-w-4xl mx-auto px-6 text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/25 bg-cyan-500/[0.06] text-[11px] tracking-[0.22em] uppercase text-cyan-200">
          The Future of Music
        </div>
        <h2 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95]">
          The future of music<br /><span className="text-gradient-brand">starts here.</span>
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-zinc-400 text-lg leading-relaxed">
          Join 80,000+ creators using SunoDistro AI to create, sing and distribute — globally.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={LINKS.register}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[15px] font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition-all shadow-[0_0_40px_rgba(59,130,246,0.4)]"
            data-testid="final-cta-primary"
          >
            Start Free
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={LINKS.app}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[15px] font-semibold bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-white/20 backdrop-blur-sm transition-all"
            data-testid="final-cta-secondary"
          >
            Explore AI Studio
          </a>
        </div>
      </motion.div>
    </section>
  );
}
