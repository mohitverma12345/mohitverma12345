import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { LINKS } from "@/lib/links";
import { SectionLabel } from "@/components/landing/MusicGenerator";

const PLANS = [
  {
    name: "Starter",
    price: "$0",
    sub: "Free forever",
    desc: "For artists getting started.",
    features: [
      "5 AI generations / month",
      "Basic mastering",
      "1 release to Spotify",
      "Standard analytics",
    ],
    cta: "Start Free",
    highlight: false,
  },
  {
    name: "Artist",
    price: "$9.99",
    sub: "/ month",
    desc: "Distribute and grow.",
    features: [
      "Unlimited AI lyrics & artwork",
      "100 AI tracks / month",
      "Unlimited distribution",
      "Free UPC & ISRC codes",
      "Royalty analytics",
    ],
    cta: "Select Artist Plan",
    highlight: false,
  },
  {
    name: "Ultimate",
    price: "$24.99",
    sub: "/ month",
    desc: "For professional creators.",
    features: [
      "Unlimited AI music generations",
      "Pro AI mastering studio",
      "Stem extraction · unlimited",
      "Official Artist Channel",
      "Priority distribution · 24h",
      "Advanced royalty analytics",
      "Instagram & TikTok linking",
    ],
    cta: "Select Ultimate Plan",
    highlight: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28 sm:py-36" data-testid="pricing-section">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto">
          <SectionLabel icon={<Sparkles className="w-3.5 h-3.5" />} label="PRICING" />
          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            One platform.<br /><span className="text-gradient-brand">Infinite releases.</span>
          </h2>
          <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
            Keep 100% of your royalties. Cancel anytime. No hidden fees.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {PLANS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`relative rounded-2xl p-8 flex flex-col lift ${
                p.highlight
                  ? "bg-gradient-to-b from-cyan-500/[0.08] to-purple-600/[0.06] border border-cyan-400/30 glow-cyan"
                  : "bg-zinc-950 border border-white/[0.06]"
              }`}
              data-testid={`pricing-card-${p.name.toLowerCase()}`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black border border-cyan-400/50 text-[11px] tracking-[0.18em] uppercase text-cyan-200">
                  <Sparkles className="w-3 h-3" /> Most Popular
                </div>
              )}

              <div className="text-sm uppercase tracking-[0.22em] text-zinc-500">{p.name}</div>
              <div className="mt-3 flex items-baseline gap-1.5">
                <span className="text-5xl font-bold tracking-tight">{p.price}</span>
                <span className="text-sm text-zinc-500">{p.sub}</span>
              </div>
              <p className="mt-2 text-sm text-zinc-400">{p.desc}</p>

              <ul className="mt-7 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${p.highlight ? "text-cyan-300" : "text-zinc-500"}`} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={p.name === "Starter" ? LINKS.register : LINKS.app}
                className={`mt-8 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold transition-all ${
                  p.highlight
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 shadow-[0_0_30px_rgba(59,130,246,0.35)]"
                    : "bg-white text-black hover:bg-zinc-200"
                }`}
                data-testid={`pricing-cta-${p.name.toLowerCase()}`}
              >
                {p.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs uppercase tracking-[0.22em] text-zinc-500 mt-10">
          Trusted by 80,000+ creators worldwide · Cancel anytime
        </p>
      </div>
    </section>
  );
}
