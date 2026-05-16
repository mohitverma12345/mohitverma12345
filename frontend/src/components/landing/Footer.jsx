import React from "react";
import { FaInstagram, FaTwitter, FaTiktok, FaYoutube } from "react-icons/fa";
import { LINKS } from "@/lib/links";

const COLUMNS = [
  {
    title: "Platform",
    links: [
      { label: "AI Music Generator", href: LINKS.app },
      { label: "AI Lyrics", href: LINKS.app },
      { label: "AI Studio", href: LINKS.app },
      { label: "Mastering", href: LINKS.app },
      { label: "Distribution", href: LINKS.app },
    ],
  },
  {
    title: "Creators",
    links: [
      { label: "Pricing", href: "#pricing" },
      { label: "Royalties", href: LINKS.app },
      { label: "Analytics", href: LINKS.app },
      { label: "Artist Channels", href: LINKS.app },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Contact", href: "mailto:support@sunodistro.ai" },
      { label: "Terms", href: "#" },
      { label: "Privacy", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black" data-testid="site-footer">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-cyan-400" />
              <span className="font-semibold tracking-tight">SunoDistro<span className="text-cyan-400">AI</span></span>
            </div>
            <p className="mt-4 text-sm text-zinc-500 max-w-sm leading-relaxed">
              The operating system for modern music creators.
              Create. Sing. Distribute — all from one cinematic platform.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[FaInstagram, FaTwitter, FaTiktok, FaYoutube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 transition"
                  data-testid={`social-link-${i}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((c) => (
            <div key={c.title}>
              <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-500 mb-4">{c.title}</div>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-zinc-400 hover:text-white transition-colors">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div className="text-xs text-zinc-600">© {new Date().getFullYear()} SunoDistro AI. All rights reserved.</div>
          <div className="text-xs text-zinc-600">Made for creators. Built for the future of sound.</div>
        </div>
      </div>
    </footer>
  );
}
