import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Mic2,
  Music4,
  Wand2,
  Radio,
  Image as ImageIcon,
  Scissors,
  Globe2,
  BarChart3,
  Hash,
  Instagram as InstagramIcon,
  Crown,
  Coins,
  Sparkles,
  Play,
  ArrowRight,
  Check,
  Headphones,
  AudioWaveform,
  Disc3,
  ChevronRight,
  Star,
} from "lucide-react";
import {
  SiSpotify,
  SiApplemusic,
  SiYoutubemusic,
  SiTiktok,
  SiInstagram,
} from "react-icons/si";

// Amazon Music inline icon (react-icons/si removed the Amazon mark)
const SiAmazon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.5.13.107.176.043.342-.196.5-.302.215-.692.46-1.17.738-1.453.84-3.077 1.49-4.87 1.95-1.794.46-3.544.69-5.252.69-2.633 0-5.114-.46-7.443-1.382C3.044 21.054 1.97 20.27.984 19.45c-.084-.068-.143-.13-.179-.18-.038-.05-.05-.114-.038-.18.014-.066.04-.118.078-.158.04-.04.085-.06.135-.06.05 0 .1.02.15.05.05.03.092.07.13.117.024.034.046.066.07.097zm6.985-14.622c0-1.234.305-2.252.917-3.054C8.56.542 9.524.04 10.84-.118c.444-.054.948-.07 1.515-.05.566.022 1.13.097 1.687.227.557.13 1.075.318 1.555.567.48.25.86.55 1.14.9.282.35.42.748.42 1.196 0 .295-.073.55-.22.766-.146.215-.34.4-.583.554-.244.155-.498.292-.764.413-.265.12-.49.222-.673.305l-.39.196c-.043.024-.084.04-.124.05-.04.01-.077.013-.11.013-.144 0-.245-.064-.305-.193-.06-.128-.106-.27-.137-.422-.03-.153-.066-.302-.106-.448-.04-.146-.117-.27-.232-.37-.115-.1-.275-.158-.477-.17-.41-.027-.794.057-1.15.252-.357.196-.66.477-.91.844-.25.367-.444.785-.582 1.252-.138.467-.207.95-.207 1.452 0 .57.087 1.085.26 1.547.174.46.42.85.74 1.17.32.32.7.566 1.142.74.44.174.92.26 1.44.26.62 0 1.16-.13 1.62-.39.46-.26.84-.6 1.13-1.02.292-.42.51-.89.65-1.412.14-.522.21-1.05.21-1.58V8.45h-2.16c-.5 0-.86-.105-1.077-.314-.218-.21-.328-.566-.328-1.07v-.01c0-.4.115-.71.348-.93.232-.218.572-.327 1.018-.327h6.4c.45 0 .79.11 1.018.327.232.22.348.53.348.93v.01c0 .505-.11.86-.328 1.07-.218.21-.578.314-1.077.314h-.99v6.39c0 .9-.158 1.717-.474 2.45-.317.733-.748 1.36-1.293 1.88-.546.52-1.184.923-1.916 1.21-.732.286-1.515.43-2.348.43-.9 0-1.74-.18-2.516-.535-.776-.357-1.452-.85-2.028-1.48-.575-.63-1.02-1.378-1.335-2.247-.314-.87-.47-1.81-.47-2.82z" />
  </svg>
);

/* ─────────────────────────────────────────────────────────────────────────
   CONSTANTS
   ───────────────────────────────────────────────────────────────────────── */
const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_835616fc-14ca-4a2f-8251-540eb5ba159b/artifacts/yraxpcza_1774281721689.png";

const LINKS = {
  login: "https://release.sunodistro.com/auth/login",
  register: "https://release.sunodistro.com/auth/register",
  ai: "https://ai.sunodistro.com/login.php",
};

const GENRES = [
  { name: "Pop",       img: "https://static.prod-images.emergentagent.com/jobs/835616fc-14ca-4a2f-8251-540eb5ba159b/images/4057158b6eef32a395e154e62a12297b0d207e772c18bb9bef7c38b571010818.png", bpm: "118 BPM" },
  { name: "Rap",       img: "https://static.prod-images.emergentagent.com/jobs/835616fc-14ca-4a2f-8251-540eb5ba159b/images/270096191a4a99d89f75245dc816134b84e9a9c1dd912fa5186468b9356e9049.png", bpm: "92 BPM" },
  { name: "Bollywood", img: "https://static.prod-images.emergentagent.com/jobs/835616fc-14ca-4a2f-8251-540eb5ba159b/images/22ff2fcdc84edaeb1612452774f9ce9b60537ca4a9bb2f398c81846b91424a6e.png", bpm: "104 BPM" },
  { name: "Punjabi",   img: "https://static.prod-images.emergentagent.com/jobs/835616fc-14ca-4a2f-8251-540eb5ba159b/images/7483c3210be952d9f619c8f9a9f5c6bf9d0a777f2f3c0630acd3a4cd894a670d.png", bpm: "100 BPM" },
  { name: "EDM",       img: "https://static.prod-images.emergentagent.com/jobs/835616fc-14ca-4a2f-8251-540eb5ba159b/images/9fd7036cc65855f9a789b2c2d83a1f999ae0107110d3cfc5279f99980bd72722.png", bpm: "128 BPM" },
  { name: "Lo-fi",     img: "https://static.prod-images.emergentagent.com/jobs/835616fc-14ca-4a2f-8251-540eb5ba159b/images/13e915030986f64dafb0d81cdf8e981eb12f227137bc02abffe69b3369b200f0.png", bpm: "72 BPM" },
  { name: "Rock",      img: "https://static.prod-images.emergentagent.com/jobs/835616fc-14ca-4a2f-8251-540eb5ba159b/images/b719da95fd20d260e90e595648175aee1c156deaff803e851fd2dfbc0239d34f.png", bpm: "140 BPM" },
];

const AI_STUDIO_IMG =
  "https://static.prod-images.emergentagent.com/jobs/835616fc-14ca-4a2f-8251-540eb5ba159b/images/54178b36aa7daf0ebe1d113670ffb7793435f8bd07faf1f760fc9f78f8ea67e4.png";
const DASHBOARD_IMG =
  "https://static.prod-images.emergentagent.com/jobs/835616fc-14ca-4a2f-8251-540eb5ba159b/images/69bcf73fce1b9d89bfa830bcbce6b3a5561c9bd960236ab72b1d1b037dbdf0ca.png";

const FEATURES = [
  { icon: Music4,        title: "AI Music Generator",      desc: "Turn a prompt into a finished song with vocals, instruments and arrangement." },
  { icon: Wand2,         title: "AI Lyrics Generator",     desc: "Verse, hook, bridge — written in your voice, mood, language and rhyme scheme." },
  { icon: Mic2,          title: "AI Studio",               desc: "Record vocals, clean noise and produce with a futuristic in-browser studio." },
  { icon: ImageIcon,     title: "AI Artwork Generator",    desc: "Cinematic cover art generated in seconds, matched to your track’s mood." },
  { icon: Scissors,      title: "Stem Extractor",          desc: "Isolate vocals, drums, bass and melody from any track with one click." },
  { icon: AudioWaveform, title: "Mastering Studio",        desc: "AI mastering tuned for streaming loudness, clarity and depth across platforms." },
  { icon: Globe2,        title: "Global Distribution",     desc: "Release to 150+ stores worldwide — Spotify, Apple Music, YouTube, TikTok and more." },
  { icon: Radio,         title: "Official Artist Channel", desc: "Claim your verified artist profile on Spotify and YouTube straight from your dashboard." },
  { icon: Coins,         title: "Royalty Tracking",        desc: "100% royalties, transparent splits, real-time accounting and instant withdrawals." },
  { icon: BarChart3,     title: "Analytics Dashboard",     desc: "Streams, saves, fans and demographics — beautifully visualised in real time." },
  { icon: Hash,          title: "Free UPC / ISRC",         desc: "Industry-standard codes generated for every release at zero extra cost." },
  { icon: InstagramIcon, title: "Instagram Profile Link",  desc: "Link your music to your Instagram profile so listeners discover you instantly." },
];

const PLANS = [
  {
    name: "Artist",
    price: 20,
    blurb: "Perfect for independent musicians ready to release globally.",
    cta: "Select Artist Plan",
    href: LINKS.register,
    features: [
      "Unlimited Releases",
      "100% royalties",
      "Custom release date",
      "Free UPC / ISRC",
      "Official Artist Channel",
      "Instagram profile linking",
      "Exclusive access to new features",
    ],
  },
  {
    name: "Label",
    price: 50,
    blurb: "For record labels managing multiple artists and extensive catalogs.",
    cta: "Choose Label Plan",
    href: LINKS.register,
    features: [
      "Unlimited Releases",
      "Multiple Artists",
      "100 Credits for AI Studio",
      "100% royalties",
      "Accepts AI Generated Music",
      "Free UPC / ISRC",
      "Official Artist Channel",
      "Instagram profile linking",
    ],
  },
  {
    name: "Ultimate",
    price: 55,
    blurb: "Premium distribution with maximum AI benefits for power users.",
    cta: "Go Ultimate",
    href: LINKS.register,
    highlighted: true,
    features: [
      "Everything in Label Plan",
      "1000 Credits for AI Studio",
      "AI Music Generator",
      "AI Lyrics Generator",
      "Mastering Studio",
      "AI Artwork Generator",
      "Stem Extractor",
    ],
  },
];

const TESTIMONIALS = [
  {
    name: "Arjun Mehra",
    role: "Indie Producer · Mumbai",
    quote:
      "I wrote, sang and shipped my EP from my bedroom in three days. SunoDistro turned my laptop into a record label.",
    img: "https://images.unsplash.com/photo-1760004941335-6feccb7f800a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwyfHxwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMG11c2ljJTIwcHJvZHVjZXIlMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwwfHx8fDE3Nzg5MzQ5NjJ8MA&ixlib=rb-4.1.0&q=85",
    stat: "+412% monthly listeners",
  },
  {
    name: "Lena Park",
    role: "Vocalist · Los Angeles",
    quote:
      "The AI studio cleaned my vocals better than the engineer I was paying $400 a session. And distribution is one click.",
    img: "https://images.unsplash.com/photo-1762290965691-e74072600c03?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMG11c2ljJTIwcHJvZHVjZXIlMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwwfHx8fDE3Nzg5MzQ5NjJ8MA&ixlib=rb-4.1.0&q=85",
    stat: "1.2M Spotify streams",
  },
  {
    name: "Dre Williams",
    role: "Label Owner · Atlanta",
    quote:
      "We manage 38 artists on Ultimate. Royalty splits, UPC codes, analytics — it replaced three tools and a spreadsheet.",
    img: "https://images.unsplash.com/photo-1638983752157-052aa1f15bf1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwzfHxwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMG11c2ljJTIwcHJvZHVjZXIlMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwwfHx8fDE3Nzg5MzQ5NjJ8MA&ixlib=rb-4.1.0&q=85",
    stat: "38 artists distributed",
  },
];

const PLATFORMS = [
  { Icon: SiSpotify,      name: "Spotify",       color: "#1DB954" },
  { Icon: SiApplemusic,   name: "Apple Music",   color: "#FA57C1" },
  { Icon: SiYoutubemusic, name: "YouTube Music", color: "#FF0000" },
  { Icon: SiTiktok,       name: "TikTok",        color: "#ffffff" },
  { Icon: SiInstagram,    name: "Instagram",     color: "#E1306C" },
  { Icon: SiAmazon,       name: "Amazon Music",  color: "#00A8E1" },
  { Icon: Disc3,          name: "SoundCloud",    color: "#FF7700" },
  { Icon: AudioWaveform,  name: "Tidal",         color: "#ffffff" },
  { Icon: Radio,          name: "Pandora",       color: "#3668FF" },
  { Icon: Headphones,     name: "Deezer",        color: "#A238FF" },
];

/* ─────────────────────────────────────────────────────────────────────────
   HERO 3D-ISH CANVAS (CSS + Canvas2D particles + SVG orbital rings)
   ───────────────────────────────────────────────────────────────────────── */
function ParticleCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf, w, h, dpr;
    const particles = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.8);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      particles.length = 0;
      const count = Math.min(140, Math.floor((w * h) / 12000));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: 0.6 + Math.random() * 2.2,
          vx: (Math.random() - 0.5) * 0.25,
          vy: -0.15 - Math.random() * 0.35,
          a: 0.25 + Math.random() * 0.6,
          hue: 18 + Math.random() * 22, // orange→pink range
        });
      }
    };

    let mouse = { x: -9999, y: -9999 };
    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        // mouse repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 12000) {
          const f = (12000 - d2) / 12000;
          p.vx += (dx / Math.sqrt(d2 + 0.001)) * f * 0.06;
          p.vy += (dy / Math.sqrt(d2 + 0.001)) * f * 0.06;
        }
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.985;
        p.vy *= 0.99;
        if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
        grad.addColorStop(0, `hsla(${p.hue}, 100%, 70%, ${p.a})`);
        grad.addColorStop(1, `hsla(${p.hue}, 100%, 60%, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    const ro = new ResizeObserver(() => { resize(); init(); });
    ro.observe(canvas);
    resize();
    init();
    draw();
    window.addEventListener("mousemove", onMove);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      ro.disconnect();
    };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 w-full h-full" />;
}

function HeroOrbital() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Central glow orb */}
      <div className="relative w-[520px] h-[520px] max-w-[80vw] max-h-[80vw]">
        <div
          className="absolute inset-0 rounded-full blur-3xl opacity-70"
          style={{
            background:
              "radial-gradient(circle at 35% 35%, #ffd089, #ff7a18 30%, #ff2d8f 60%, transparent 75%)",
          }}
        />
        <div
          className="absolute inset-[18%] rounded-full"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #ffe7b8, #ff8a3c 35%, #ff2d8f 80%)",
            boxShadow:
              "0 0 80px rgba(255,122,24,0.55), 0 0 160px rgba(255,45,143,0.4) inset",
          }}
        />
        {/* Orbital rings */}
        {[
          { size: 110, dur: "26s", reverse: false, opacity: 0.45 },
          { size: 130, dur: "38s", reverse: true,  opacity: 0.3 },
          { size: 150, dur: "60s", reverse: false, opacity: 0.22 },
        ].map((r, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 rounded-full border slow-spin"
            style={{
              width: `${r.size}%`,
              height: `${r.size}%`,
              marginLeft: `-${r.size / 2}%`,
              marginTop: `-${r.size / 2}%`,
              borderColor: "rgba(255,255,255,0.08)",
              animationDuration: r.dur,
              animationDirection: r.reverse ? "reverse" : "normal",
              opacity: r.opacity,
            }}
          >
            <div
              className="absolute w-3 h-3 rounded-full -translate-x-1/2 -translate-y-1/2"
              style={{
                top: "50%",
                left: "0%",
                background:
                  "radial-gradient(circle, #fff, #ff7a18 60%, transparent)",
                boxShadow: "0 0 16px #ff7a18",
              }}
            />
          </div>
        ))}
        {/* Pulse rings */}
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute inset-[20%] rounded-full border border-orange-400/30 pulse-ring"
            style={{ animationDelay: `${i * 0.8}s` }}
          />
        ))}
      </div>
    </div>
  );
}

function Hero3D() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* base radial bg */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, rgba(255,122,24,0.18), transparent 55%), radial-gradient(ellipse at 30% 70%, rgba(255,45,143,0.15), transparent 55%), #050505",
        }}
      />
      <HeroOrbital />
      <ParticleCanvas />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   SMALL VISUAL COMPONENTS
   ───────────────────────────────────────────────────────────────────────── */
function Equalizer({ bars = 28, className = "" }) {
  return (
    <div className={`flex items-end gap-[3px] h-10 ${className}`}>
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className="eq-bar w-[3px] rounded-full bg-gradient-to-t from-orange-500 to-pink-500"
          style={{
            height: "100%",
            animationDelay: `${(i % 7) * 0.12}s`,
            animationDuration: `${0.9 + (i % 5) * 0.15}s`,
          }}
        />
      ))}
    </div>
  );
}

function WaveformSVG({ className = "" }) {
  // Pre-generated waveform path
  const bars = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 80; i++) {
      const h = 12 + Math.abs(Math.sin(i * 0.42) * 28) + (i % 5 === 0 ? 16 : 0);
      arr.push(h);
    }
    return arr;
  }, []);
  return (
    <svg viewBox="0 0 800 80" className={className} preserveAspectRatio="none">
      <defs>
        <linearGradient id="wfg" x1="0" x2="1">
          <stop offset="0%" stopColor="#ffb347" />
          <stop offset="50%" stopColor="#ff7a18" />
          <stop offset="100%" stopColor="#ff2d8f" />
        </linearGradient>
      </defs>
      {bars.map((h, i) => (
        <rect
          key={i}
          x={i * 10 + 1}
          y={40 - h / 2}
          width={5}
          height={h}
          rx={2.5}
          fill="url(#wfg)"
          opacity={0.85}
        />
      ))}
    </svg>
  );
}

function Badge({ children, icon: Icon }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-[11px] uppercase tracking-[0.18em] font-medium text-white/80">
      {Icon && <Icon className="w-3.5 h-3.5 text-orange-400" />}
      {children}
    </div>
  );
}

function SectionHeading({ eyebrow, title, subtitle, icon, align = "left" }) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <Badge icon={icon}>{eyebrow}</Badge>
      <h2 className="font-display mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base sm:text-lg text-white/60 leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   NAV
   ───────────────────────────────────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div
          className={`flex items-center justify-between rounded-full px-4 sm:px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5 group" data-testid="brand-logo">
            <div className="relative w-9 h-9 rounded-full overflow-hidden">
              <img src={LOGO_URL} alt="SunoDistro" className="w-full h-full object-cover" />
              <div className="absolute inset-0 rounded-full ring-1 ring-white/20" />
            </div>
            <span className="font-display text-lg font-bold tracking-tight">
              suno<span className="gradient-text">distro</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-[13px] text-white/70">
            <a href="#generator" className="hover:text-white transition" data-testid="nav-generator">AI Music</a>
            <a href="#lyrics"    className="hover:text-white transition" data-testid="nav-lyrics">Lyrics</a>
            <a href="#studio"    className="hover:text-white transition" data-testid="nav-studio">Studio</a>
            <a href="#distribution" className="hover:text-white transition" data-testid="nav-distribution">Distribute</a>
            <a href="#pricing"   className="hover:text-white transition" data-testid="nav-pricing">Pricing</a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={LINKS.login}
              data-testid="nav-login"
              className="hidden sm:inline-flex text-[13px] px-4 py-2 rounded-full text-white/80 hover:text-white hover:bg-white/5 transition"
            >
              Log in
            </a>
            <a
              href={LINKS.register}
              data-testid="nav-register"
              className="inline-flex items-center gap-1.5 text-[13px] px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-white/90 transition shine-on-hover"
            >
              Get Started <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   HERO
   ───────────────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* 3D canvas behind */}
      <div className="absolute inset-0 z-0">
        <Hero3D />
      </div>
      {/* Soft sunset glow vignette */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(255,122,24,0.18), transparent 55%), radial-gradient(ellipse at 80% 30%, rgba(255,45,143,0.18), transparent 55%), linear-gradient(180deg, rgba(5,5,5,0) 0%, rgba(5,5,5,0.4) 60%, #050505 100%)",
        }}
      />
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          className="max-w-4xl"
        >
          <Badge icon={Sparkles}>The operating system for modern music creators</Badge>
          <h1 className="font-display mt-7 text-5xl sm:text-7xl lg:text-[96px] leading-[0.95] font-bold tracking-tight">
            Create.
            <br />
            Sing.
            <br />
            <span className="gradient-text">Distribute.</span>
          </h1>
          <p className="mt-7 text-lg sm:text-xl text-white/65 max-w-2xl leading-relaxed">
            Generate AI music, write lyrics, record vocals, master tracks and release
            worldwide — all from one cinematic, creator-first platform.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={LINKS.ai}
              data-testid="hero-cta-create"
              className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-black bg-gradient-to-r from-amber-300 via-orange-400 to-pink-500 sun-glow shine-on-hover overflow-hidden"
            >
              <Play className="w-4 h-4" />
              Start Creating
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={LINKS.register}
              data-testid="hero-cta-distribute"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-white glass hover:bg-white/10 transition"
            >
              <Globe2 className="w-4 h-4" />
              Distribute Music
            </a>
          </div>

          {/* Floating mini-cards */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
            {[
              { k: "150+", v: "Stores worldwide" },
              { k: "100%", v: "Royalties to you" },
              { k: "7", v: "AI music genres" },
              { k: "0$", v: "Setup fee" },
            ].map((s, i) => (
              <motion.div
                key={s.v}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.6 }}
                className="glass rounded-2xl px-4 py-3"
              >
                <div className="font-display text-2xl font-bold gradient-text">{s.k}</div>
                <div className="text-[11px] uppercase tracking-wider text-white/50 mt-1">{s.v}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating album previews on the right (desktop only) */}
        <div className="hidden lg:block absolute right-8 top-32 w-[360px]">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative h-[460px]"
          >
            {GENRES.slice(0, 3).map((g, i) => (
              <motion.div
                key={g.name}
                className="absolute glass-strong rounded-3xl p-3 w-[240px] float-y"
                style={{
                  top: i * 120,
                  right: i * 40,
                  animationDelay: `${i * 0.8}s`,
                  zIndex: 10 - i,
                }}
                whileHover={{ y: -8, scale: 1.03 }}
              >
                <div className="relative rounded-2xl overflow-hidden aspect-square">
                  <img src={g.img} alt={g.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-2 left-3">
                    <div className="text-xs text-white/70">{g.bpm}</div>
                    <div className="font-display font-semibold">{g.name}</div>
                  </div>
                  <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 flex items-center justify-center">
                    <Play className="w-3 h-3 text-black fill-black" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Marquee of platforms */}
      <div className="relative z-20 mt-16">
        <div className="text-center text-[11px] uppercase tracking-[0.3em] text-white/40 mb-6">
          Distributing to
        </div>
        <div
          className="overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
          }}
        >
          <div className="marquee-track inline-flex gap-12 whitespace-nowrap">
            {[...PLATFORMS, ...PLATFORMS].map((p, i) => (
              <div key={i} className="inline-flex items-center gap-2 text-white/40">
                <p.Icon className="w-6 h-6" />
                <span className="text-sm">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   AI MUSIC GENERATOR
   ───────────────────────────────────────────────────────────────────────── */
function MusicGenerator() {
  const [genre, setGenre] = useState("Pop");
  const [mood, setMood] = useState("Euphoric");
  const moods = ["Euphoric", "Melancholic", "Hype", "Romantic", "Dark", "Chill"];
  const [tempo, setTempo] = useState(118);
  const [prompt, setPrompt] = useState(
    "A late-night drive through Mumbai, neon reflections on rain, soft female vocals"
  );

  return (
    <section id="generator" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #ff7a18, transparent 70%)" }} />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="01 · AI Music Generator"
          icon={Music4}
          title={<>Prompt to <span className="gradient-text">finished song</span>.</>}
          subtitle="Type an idea. Pick a genre, mood and tempo. Our model writes the chords, melody, arrangement and vocal performance — and hands you back a master-ready track."
        />

        <div className="mt-14 grid lg:grid-cols-12 gap-6">
          {/* Prompt console */}
          <div className="lg:col-span-7 glass rounded-3xl p-6 sm:p-7 relative overflow-hidden noise">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-white/50">
                <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                LIVE GENERATION · v3.2
              </div>
              <div className="flex items-center gap-2 text-xs text-white/40 font-mono">SESSION #4821</div>
            </div>

            <label className="block mt-6 text-[11px] uppercase tracking-[0.18em] text-white/40">
              Describe your song
            </label>
            <textarea
              data-testid="generator-prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={3}
              className="mt-2 w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-white text-base resize-none focus:outline-none focus:border-orange-500/60 transition"
            />

            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-white/40 mb-2">Mood</div>
                <div className="flex flex-wrap gap-2">
                  {moods.map((m) => (
                    <button
                      key={m}
                      onClick={() => setMood(m)}
                      data-testid={`mood-${m.toLowerCase()}`}
                      className={`px-3 py-1.5 rounded-full text-xs transition border ${
                        mood === m
                          ? "bg-gradient-to-r from-orange-500 to-pink-500 text-black border-transparent"
                          : "border-white/10 text-white/70 hover:bg-white/5"
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-white/40 mb-2">
                  <span>Tempo</span>
                  <span className="font-mono text-orange-400">{tempo} BPM</span>
                </div>
                <input
                  type="range"
                  min={60}
                  max={180}
                  value={tempo}
                  onChange={(e) => setTempo(parseInt(e.target.value))}
                  data-testid="generator-tempo"
                  className="w-full accent-orange-500"
                />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between glass rounded-2xl p-4">
              <div className="flex items-center gap-3">
                <button className="w-11 h-11 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 flex items-center justify-center sun-glow" data-testid="generator-play">
                  <Play className="w-4 h-4 text-black fill-black" />
                </button>
                <div>
                  <div className="text-sm font-medium">midnight_drive_v3.wav</div>
                  <div className="text-xs text-white/40 font-mono">{genre} · {mood} · 2:48</div>
                </div>
              </div>
              <div className="flex-1 mx-4 hidden sm:block">
                <WaveformSVG className="w-full h-10" />
              </div>
              <a href={LINKS.ai} data-testid="generator-generate" className="text-xs px-4 py-2 rounded-full bg-white text-black font-medium shine-on-hover">
                Generate
              </a>
            </div>
          </div>

          {/* Genre selector */}
          <div className="lg:col-span-5 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-3">
            {GENRES.map((g) => {
              const active = genre === g.name;
              return (
                <button
                  key={g.name}
                  onClick={() => setGenre(g.name)}
                  data-testid={`genre-${g.name.toLowerCase()}`}
                  className={`relative aspect-[3/4] rounded-2xl overflow-hidden group transition ${
                    active ? "ring-2 ring-orange-400 sun-glow" : "ring-1 ring-white/10"
                  }`}
                >
                  <img src={g.img} alt={g.name} className="absolute inset-0 w-full h-full object-cover transition group-hover:scale-110 duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-0 p-3 flex flex-col justify-end text-left">
                    <div className="font-display font-semibold">{g.name}</div>
                    <div className="text-[10px] font-mono text-white/60">{g.bpm}</div>
                  </div>
                  {active && (
                    <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-white flex items-center justify-center">
                      <Check className="w-3 h-3 text-black" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   AI LYRICS GENERATOR
   ───────────────────────────────────────────────────────────────────────── */
const LYRICS = [
  { tag: "VERSE 1", text: "Headlights bleeding through the monsoon haze,\nCity lights remembering your name." },
  { tag: "PRE-CHORUS", text: "Every neon sign sings a softer song,\nEvery shadow knows where I belong." },
  { tag: "CHORUS", text: "We were sunlight chasing midnight blue,\nA borrowed melody, a borrowed view —\nCreate, sing, distribute the truth,\nEvery heartbeat starts with you." },
  { tag: "VERSE 2", text: "Coffee cooling on the studio glass,\nA chord progression that refuses to pass." },
  { tag: "BRIDGE", text: "If the radio forgets, the streams will know,\nIf the streams forget, the algorithm will glow." },
];

function LyricsTyping() {
  const [shown, setShown] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  useEffect(() => {
    if (shown >= LYRICS.length) return;
    const current = LYRICS[shown].text;
    if (charIndex < current.length) {
      const t = setTimeout(() => setCharIndex(charIndex + 1), 22);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setShown((s) => (s + 1) % LYRICS.length);
      setCharIndex(0);
    }, 1200);
    return () => clearTimeout(t);
  }, [shown, charIndex]);

  return (
    <div className="font-mono text-sm leading-7 text-white/90 space-y-4">
      {LYRICS.slice(0, shown).map((l, i) => (
        <div key={i}>
          <div className="text-[10px] uppercase tracking-[0.2em] text-orange-400 mb-1">{l.tag}</div>
          <pre className="whitespace-pre-wrap font-mono text-white/85">{l.text}</pre>
        </div>
      ))}
      {shown < LYRICS.length && (
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-orange-400 mb-1">{LYRICS[shown].tag}</div>
          <pre className="whitespace-pre-wrap font-mono text-white/85">
            {LYRICS[shown].text.slice(0, charIndex)}
            <span className="inline-block w-2 h-4 bg-orange-400 align-middle animate-pulse ml-0.5" />
          </pre>
        </div>
      )}
    </div>
  );
}

function LyricsSection() {
  return (
    <section id="lyrics" className="relative py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeading
            eyebrow="02 · AI Lyrics Generator"
            icon={Wand2}
            title={<>Words that <span className="gradient-text">scan, rhyme</span> and stick.</>}
            subtitle="Write a verse, hook or bridge in any language and mood. Edit live, regenerate any line, lock the rhyme scheme — and export ready to record."
          />
          <div className="mt-8 space-y-3">
            {["Verse · Hook · Bridge structure", "Multi-language & cultural context", "Live regeneration per line", "Locks rhyme scheme & syllable count"].map((f) => (
              <div key={f} className="flex items-center gap-3 text-white/80 text-sm">
                <span className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center"><Check className="w-3 h-3 text-black" /></span>
                {f}
              </div>
            ))}
          </div>
          <a href={LINKS.ai} data-testid="lyrics-cta" className="mt-9 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black text-sm font-medium shine-on-hover">
            Write a Song <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="glass-strong rounded-3xl p-2 sun-glow">
          <div className="bg-black/60 rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
              <div className="text-[11px] font-mono text-white/40">midnight_drive.lyrics</div>
              <div className="flex items-center gap-2 text-[10px] text-white/40">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                AI writing
              </div>
            </div>
            <div className="p-6 max-h-[520px] overflow-hidden relative">
              <LyricsTyping />
              <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   AI STUDIO
   ───────────────────────────────────────────────────────────────────────── */
function StudioSection() {
  return (
    <section id="studio" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-60"
        style={{ background: "radial-gradient(ellipse at 20% 30%, rgba(255,45,143,0.12), transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(255,122,24,0.12), transparent 50%)" }} />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="03 · AI Studio"
          icon={Mic2}
          align="center"
          title={<>A studio that <span className="gradient-text">listens back</span>.</>}
          subtitle="Record vocals, isolate stems, clean noise, tune pitch and master your track — inside a single futuristic, AI-assisted recording environment."
        />

        <div className="mt-16 relative">
          {/* Visual + overlays */}
          <div className="relative rounded-[28px] overflow-hidden glass-strong p-2 sun-glow">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden">
              <img src={AI_STUDIO_IMG} alt="AI Studio" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60" />

              {/* Equalizer overlay */}
              <div className="absolute top-6 left-6 glass rounded-2xl p-3 hidden sm:flex items-center gap-3">
                <Headphones className="w-4 h-4 text-orange-400" />
                <Equalizer bars={24} className="w-32" />
                <span className="text-[10px] font-mono text-white/60">−6.2 LUFS</span>
              </div>

              {/* Floating control card */}
              <div className="absolute bottom-6 left-6 glass-strong rounded-2xl p-4 max-w-[280px] hidden sm:block">
                <div className="text-[10px] uppercase tracking-[0.18em] text-white/50">Vocal Isolation</div>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-orange-400 to-pink-500" style={{ width: "82%" }} />
                  </div>
                  <span className="text-xs font-mono text-orange-400">82%</span>
                </div>
                <div className="mt-3 flex gap-2 text-[10px]">
                  <span className="px-2 py-1 rounded-full bg-white/5 text-white/70">De-noise</span>
                  <span className="px-2 py-1 rounded-full bg-white/5 text-white/70">De-reverb</span>
                  <span className="px-2 py-1 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-black">Auto-tune</span>
                </div>
              </div>

              {/* Mastering card */}
              <div className="absolute bottom-6 right-6 glass-strong rounded-2xl p-4 max-w-[260px] hidden md:block">
                <div className="flex items-center justify-between">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-white/50">Mastering Preset</div>
                  <Disc3 className="w-4 h-4 text-orange-400 slow-spin" />
                </div>
                <div className="mt-3 text-sm font-medium">Streaming · Loud</div>
                <div className="mt-3 grid grid-cols-3 gap-1">
                  {[6, 9, 12, 8, 11, 13, 10, 7, 9].map((h, i) => (
                    <div key={i} className="h-6 rounded bg-gradient-to-t from-orange-500/40 to-pink-500/40" style={{ height: h * 2 }} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Workflow row */}
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Mic2, title: "Record Vocals", desc: "One-tap browser recording" },
              { icon: Scissors, title: "Stem Extract", desc: "Separate vocals & instruments" },
              { icon: AudioWaveform, title: "Master Track", desc: "AI tuned for streaming" },
              { icon: ImageIcon, title: "Cover Art", desc: "Cinematic AI artwork" },
            ].map((s) => (
              <div key={s.title} className="glass rounded-2xl p-5 hover:bg-white/10 transition group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/30 to-pink-500/20 flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-orange-300" />
                </div>
                <div className="font-display font-semibold">{s.title}</div>
                <div className="text-sm text-white/55 mt-1">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   DISTRIBUTION + WORLD MAP
   ───────────────────────────────────────────────────────────────────────── */
function WorldMap() {
  // Major city coordinates approximated to a 100x50 grid (lon -180..180 → 0..100, lat 90..-90 → 0..50)
  const dots = useMemo(() => {
    const cities = [
      [-74, 40.7], [-118, 34], [-87, 41], [-46, -23], [-58, -34],
      [0, 51.5], [2.3, 48.8], [13.4, 52.5], [-3.7, 40.4], [12.4, 41.9],
      [28.97, 41], [37.6, 55.7], [55.3, 25.2], [77.2, 28.6], [72.8, 19], [88.3, 22.5], [80.2, 13],
      [121.5, 31.2], [116.4, 39.9], [127, 37.5], [139.7, 35.6], [114.1, 22.3],
      [103.8, 1.3], [106.8, -6.2], [151.2, -33.8], [174.7, -36.8], [18.4, -33.9], [31.2, 30],
    ];
    return cities.map(([lon, lat]) => ({
      x: ((lon + 180) / 360) * 100,
      y: ((90 - lat) / 180) * 100,
    }));
  }, []);

  return (
    <div className="relative w-full aspect-[2/1] rounded-3xl overflow-hidden glass-strong">
      <svg viewBox="0 0 100 50" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <radialGradient id="dotGlow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#ff7a18" stopOpacity="1" />
            <stop offset="100%" stopColor="#ff7a18" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Latitude/longitude grid */}
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`h${i}`} x1="0" x2="100" y1={i * 5} y2={i * 5} stroke="rgba(255,255,255,0.05)" strokeWidth="0.1" />
        ))}
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 5} x2={i * 5} y1="0" y2="50" stroke="rgba(255,255,255,0.05)" strokeWidth="0.1" />
        ))}
        {/* Curved arcs from one origin (London ~50,17) to all dots */}
        {dots.map((d, i) => {
          const ox = 50, oy = 17;
          const mx = (ox + d.x) / 2;
          const my = (oy + d.y) / 2 - 8;
          return (
            <path
              key={`p${i}`}
              d={`M ${ox} ${oy} Q ${mx} ${my} ${d.x} ${d.y}`}
              stroke="url(#wfg)"
              strokeWidth="0.15"
              fill="none"
              opacity="0.55"
              strokeDasharray="0.6 0.6"
            />
          );
        })}
        {/* Dots */}
        {dots.map((d, i) => (
          <g key={`d${i}`}>
            <circle cx={d.x} cy={d.y} r="2" fill="url(#dotGlow)" opacity="0.7" />
            <circle cx={d.x} cy={d.y} r="0.45" fill="#ffb347">
              <animate attributeName="r" values="0.45;0.9;0.45" dur={`${2 + (i % 3)}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
        {/* Origin pulse */}
        <circle cx="50" cy="17" r="1.2" fill="#ff2d8f">
          <animate attributeName="r" values="0.8;1.6;0.8" dur="1.6s" repeatCount="indefinite" />
        </circle>
        <defs>
          <linearGradient id="wfg" x1="0" x2="1">
            <stop offset="0%" stopColor="#ffb347" />
            <stop offset="50%" stopColor="#ff7a18" />
            <stop offset="100%" stopColor="#ff2d8f" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function DistributionSection() {
  return (
    <section id="distribution" className="relative py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="04 · Global Distribution"
          icon={Globe2}
          align="center"
          title={<>Release <span className="gradient-text">everywhere</span>.</>}
          subtitle="Distribute your music globally with 100% royalties. 150+ stores, automatic UPC/ISRC, official artist channel and instant takedowns."
        />

        <div className="mt-14 grid lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7">
            <WorldMap />
          </div>
          <div className="lg:col-span-5">
            <div className="glass rounded-3xl p-6">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/40 mb-4">Release Timeline · Single</div>
              {[
                { label: "Submit master & artwork", done: true },
                { label: "Auto-generate UPC / ISRC", done: true },
                { label: "Quality check & metadata", done: true },
                { label: "Delivery to stores", done: false, active: true },
                { label: "Live worldwide", done: false },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3 py-2.5 border-b border-white/5 last:border-0">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    s.done ? "bg-gradient-to-br from-orange-400 to-pink-500" : s.active ? "ring-2 ring-orange-400/60" : "bg-white/5"
                  }`}>
                    {s.done ? <Check className="w-3 h-3 text-black" /> : s.active ? <div className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" /> : null}
                  </div>
                  <div className={`text-sm ${s.done ? "text-white" : "text-white/60"}`}>{s.label}</div>
                  {s.active && <span className="ml-auto text-[10px] font-mono text-orange-400">2h 14m</span>}
                </div>
              ))}
              <div className="mt-5 pt-5 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-xs text-white/40">Royalty share</div>
                  <div className="font-display text-2xl font-bold gradient-text">100%</div>
                </div>
                <a href={LINKS.register} data-testid="distribution-cta" className="text-xs px-4 py-2 rounded-full bg-white text-black font-medium shine-on-hover">
                  Release a track
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Platform logo strip */}
        <div className="mt-12 grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-10 gap-3">
          {PLATFORMS.map((p) => (
            <div key={p.name} className="glass rounded-2xl aspect-square flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition group">
              <p.Icon className="w-6 h-6 transition group-hover:scale-110" style={{ color: p.color }} />
              <div className="text-[10px] text-white/50 text-center px-2 leading-tight">{p.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   FEATURES GRID
   ───────────────────────────────────────────────────────────────────────── */
function FeaturesGrid() {
  return (
    <section id="features" className="relative py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="05 · Everything you need"
          icon={Sparkles}
          align="center"
          title={<>Twelve tools. <span className="gradient-text">One platform.</span></>}
          subtitle="The complete toolkit for modern music creators — from the first lyric to the last royalty payment."
        />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative glass rounded-2xl p-5 overflow-hidden"
              data-testid={`feature-card-${i}`}
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl"
                style={{ background: "radial-gradient(circle, #ff7a18, transparent 70%)" }} />
              <div className="relative">
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-orange-300" />
                </div>
                <div className="font-display font-semibold">{f.title}</div>
                <div className="text-sm text-white/55 mt-1.5 leading-relaxed">{f.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   DASHBOARD PREVIEW
   ───────────────────────────────────────────────────────────────────────── */
function DashboardPreview() {
  return (
    <section id="dashboard" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="06 · Creator Dashboard"
          icon={BarChart3}
          align="center"
          title={<>Your <span className="gradient-text">music HQ</span>.</>}
          subtitle="Streams, earnings, fans, releases, AI credits — every number that matters, beautifully arranged."
        />

        <div className="relative mt-16">
          {/* Glow */}
          <div className="absolute -inset-20 -z-10 opacity-40 blur-3xl"
            style={{ background: "radial-gradient(ellipse at center, rgba(255,122,24,0.3), transparent 60%)" }} />

          <div className="glass-strong rounded-[28px] p-3 sun-glow">
            <div className="bg-black/60 rounded-3xl overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/5">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <div className="text-[11px] font-mono text-white/40">app.sunodistro.com / dashboard</div>
                <div className="w-12" />
              </div>
              <img src={DASHBOARD_IMG} alt="Creator dashboard" className="w-full" />
            </div>
          </div>

          {/* Floating stat tiles */}
          <div className="hidden md:block">
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="absolute -left-2 top-16 glass-strong rounded-2xl p-4 sun-glow"
            >
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/40">Monthly listeners</div>
              <div className="font-display text-3xl font-bold gradient-text mt-1">412,890</div>
              <div className="text-xs text-emerald-400 mt-1">▲ 18.4% vs last month</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
              className="absolute -right-2 bottom-20 glass-strong rounded-2xl p-4"
            >
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/40">Royalties this month</div>
              <div className="font-display text-3xl font-bold text-white mt-1">$ 8,412.20</div>
              <div className="text-xs text-orange-300 mt-1 flex items-center gap-1.5"><Coins className="w-3 h-3" /> Auto-paid weekly</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   PRICING
   ───────────────────────────────────────────────────────────────────────── */
function Pricing() {
  return (
    <section id="pricing" className="relative py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="07 · Pricing"
          icon={Crown}
          align="center"
          title={<>Premium music. <span className="gradient-text">Indie price.</span></>}
          subtitle="Pick a plan, release for a year, keep 100% of your royalties. Upgrade anytime."
        />

        <div className="mt-16 grid lg:grid-cols-3 gap-6 items-stretch">
          {PLANS.map((p) => {
            const highlighted = p.highlighted;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className={`relative rounded-3xl p-7 lg:p-8 flex flex-col ${
                  highlighted
                    ? "sun-border sun-glow"
                    : "glass"
                }`}
                data-testid={`plan-${p.name.toLowerCase()}`}
              >
                {highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-300 via-orange-400 to-pink-500 text-black text-[10px] uppercase tracking-[0.2em] font-semibold">
                    Most Powerful
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <div className="font-display text-xl font-semibold">{p.name}</div>
                  {highlighted && <Crown className="w-4 h-4 text-orange-300" />}
                </div>
                <p className="text-sm text-white/55 mt-2 min-h-[44px]">{p.blurb}</p>
                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className={`font-display text-5xl font-bold ${highlighted ? "gradient-text" : "text-white"}`}>${p.price}</span>
                  <span className="text-sm text-white/40">/ year</span>
                </div>
                <a
                  href={p.href}
                  data-testid={`plan-${p.name.toLowerCase()}-cta`}
                  className={`mt-6 inline-flex justify-center items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition shine-on-hover ${
                    highlighted
                      ? "bg-gradient-to-r from-amber-300 via-orange-400 to-pink-500 text-black"
                      : "bg-white text-black hover:bg-white/90"
                  }`}
                >
                  {p.cta} <ArrowRight className="w-4 h-4" />
                </a>
                <ul className="mt-7 space-y-3 text-sm text-white/75">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span className={`mt-0.5 w-5 h-5 shrink-0 rounded-full flex items-center justify-center ${
                        highlighted ? "bg-gradient-to-br from-orange-400 to-pink-500" : "bg-white/10"
                      }`}>
                        <Check className={`w-3 h-3 ${highlighted ? "text-black" : "text-white"}`} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center text-xs text-white/40">
          All plans include 100% royalties · cancel anytime · prices in USD
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   TESTIMONIALS
   ───────────────────────────────────────────────────────────────────────── */
function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="08 · Creators"
          icon={Star}
          align="center"
          title={<>Built by creators, <span className="gradient-text">for creators</span>.</>}
        />
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-3xl p-6 flex flex-col"
              data-testid={`testimonial-${i}`}
            >
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-1 ring-white/10">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs text-white/50">{t.role}</div>
                </div>
                <div className="ml-auto flex gap-0.5 text-orange-400">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="mt-5 text-white/80 leading-relaxed text-[15px]">“{t.quote}”</p>
              <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-white/40 uppercase tracking-wider">Result</span>
                <span className="text-sm font-display font-semibold gradient-text">{t.stat}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   FINAL CTA
   ───────────────────────────────────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="relative py-32 lg:py-44 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(255,122,24,0.18), transparent 60%), radial-gradient(ellipse at 30% 80%, rgba(255,45,143,0.12), transparent 50%)" }} />
      {/* particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className="absolute rounded-full bg-white/40 float-y"
            style={{
              width: 2 + (i % 4),
              height: 2 + (i % 4),
              left: `${(i * 37) % 100}%`,
              top: `${(i * 73) % 100}%`,
              animationDelay: `${(i % 6) * 0.6}s`,
              animationDuration: `${5 + (i % 5)}s`,
              opacity: 0.25 + ((i % 5) * 0.1),
            }} />
        ))}
      </div>
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95]">
          The future of music
          <br />
          <span className="gradient-text">starts here.</span>
        </h2>
        <p className="mt-7 text-white/65 text-lg max-w-2xl mx-auto">
          Join thousands of artists generating, recording and distributing on the platform built like an instrument.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={LINKS.register}
            data-testid="final-cta-start"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-medium text-black bg-gradient-to-r from-amber-300 via-orange-400 to-pink-500 sun-glow shine-on-hover"
          >
            Start Free <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={LINKS.ai}
            data-testid="final-cta-studio"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-medium text-white glass hover:bg-white/10 transition"
          >
            Explore AI Studio <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   FOOTER
   ───────────────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="relative pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img src={LOGO_URL} alt="SunoDistro" className="w-full h-full object-cover" />
              </div>
              <span className="font-display text-xl font-bold">
                suno<span className="gradient-text">distro</span>
              </span>
            </a>
            <p className="mt-4 text-sm text-white/55 max-w-sm leading-relaxed">
              The operating system for modern music creators. Generate, sing, master and distribute — from one platform.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[SiInstagram, SiTiktok, SiYoutubemusic, SiSpotify].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-white/10 transition" data-testid={`social-${i}`}>
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          {[
            { title: "Platform", links: [["AI Music", LINKS.ai], ["Lyrics", LINKS.ai], ["Studio", LINKS.ai], ["Distribution", LINKS.register]] },
            { title: "Account", links: [["Log in", LINKS.login], ["Sign up", LINKS.register], ["Pricing", "#pricing"], ["Dashboard", LINKS.login]] },
            { title: "Company", links: [["Support", "#"], ["Terms", "#"], ["Privacy", "#"], ["Contact", "#"]] },
          ].map((col) => (
            <div key={col.title}>
              <div className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-4">{col.title}</div>
              <ul className="space-y-2.5 text-sm text-white/70">
                {col.links.map(([label, href]) => (
                  <li key={label}><a href={href} className="hover:text-white transition">{label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Giant brand wordmark */}
        <div className="mt-16 relative overflow-hidden">
          <div className="font-display text-[18vw] leading-none font-bold tracking-tighter text-transparent select-none"
            style={{
              WebkitTextStroke: "1px rgba(255,255,255,0.06)",
            }}
          >
            SUNODISTRO
          </div>
          <div className="absolute inset-0 flex items-end pointer-events-none">
            <div className="w-full font-display text-[18vw] leading-none font-bold tracking-tighter gradient-text opacity-30"
              style={{ clipPath: "inset(60% 0 0 0)" }}
            >
              SUNODISTRO
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs text-white/40">
          <div>© {new Date().getFullYear()} SunoDistro. Create. Sing. Distribute.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white/70">Terms</a>
            <a href="#" className="hover:text-white/70">Privacy</a>
            <a href="#" className="hover:text-white/70">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   MAIN
   ───────────────────────────────────────────────────────────────────────── */
export default function Landing() {
  return (
    <div className="min-h-screen bg-[#050505] text-white antialiased noise relative" data-testid="landing-root">
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <MusicGenerator />
        <div className="section-divider" />
        <LyricsSection />
        <div className="section-divider" />
        <StudioSection />
        <div className="section-divider" />
        <DistributionSection />
        <div className="section-divider" />
        <FeaturesGrid />
        <div className="section-divider" />
        <DashboardPreview />
        <div className="section-divider" />
        <Pricing />
        <div className="section-divider" />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
