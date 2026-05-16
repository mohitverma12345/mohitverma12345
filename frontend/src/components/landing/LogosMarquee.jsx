import React from "react";
import { FaSpotify, FaApple, FaYoutube, FaTiktok, FaInstagram, FaAmazon, FaSoundcloud, FaDeezer } from "react-icons/fa";
import { SiTidal } from "react-icons/si";

const logos = [
  { Icon: FaSpotify, label: "Spotify" },
  { Icon: FaApple, label: "Apple Music" },
  { Icon: FaYoutube, label: "YouTube Music" },
  { Icon: FaTiktok, label: "TikTok" },
  { Icon: FaInstagram, label: "Instagram" },
  { Icon: FaAmazon, label: "Amazon Music" },
  { Icon: FaSoundcloud, label: "SoundCloud" },
  { Icon: SiTidal, label: "Tidal" },
  { Icon: FaDeezer, label: "Deezer" },
];

export default function LogosMarquee() {
  const list = [...logos, ...logos];
  return (
    <section className="relative py-12 border-y border-white/5 bg-black/40" data-testid="logos-marquee">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
      <p className="text-center text-[11px] uppercase tracking-[0.32em] text-zinc-500 mb-6">
        Distribute to every major platform
      </p>
      <div className="overflow-hidden">
        <div className="marquee-track flex items-center gap-14 w-max">
          {list.map(({ Icon, label }, i) => (
            <div key={i} className="flex items-center gap-3 text-zinc-500 hover:text-white transition-colors">
              <Icon className="w-7 h-7" />
              <span className="text-sm font-medium tracking-tight">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
