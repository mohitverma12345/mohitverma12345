import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LINKS } from "@/lib/links";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Studio", href: "#studio" },
  { label: "Distribution", href: "#distribution" },
  { label: "Pricing", href: "#pricing" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 0.65, 0.32, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-black/70 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
      data-testid="site-header"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-16 sm:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5" data-testid="logo-link">
          <Logo />
          <span className="font-semibold text-[15px] tracking-tight">SunoDistro<span className="text-cyan-400">AI</span></span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-zinc-400 hover:text-white transition-colors"
              data-testid={`nav-${item.label.toLowerCase()}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={LINKS.login}
            className="text-sm text-zinc-300 hover:text-white transition-colors px-4 py-2"
            data-testid="header-login-btn"
          >
            Log in
          </a>
          <a
            href={LINKS.register}
            className="text-sm font-semibold bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors"
            data-testid="header-register-btn"
          >
            Start free
          </a>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          data-testid="mobile-menu-btn"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/5" data-testid="mobile-menu">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-zinc-300 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <a href={LINKS.login} className="flex-1 text-center border border-white/10 rounded-full py-2.5 text-sm">Log in</a>
              <a href={LINKS.register} className="flex-1 text-center bg-white text-black rounded-full py-2.5 text-sm font-semibold">Start free</a>
            </div>
          </div>
        </div>
      )}
    </motion.header>
  );
}

function Logo() {
  return (
    <div className="relative w-8 h-8">
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-cyan-400 opacity-90" />
      <div className="absolute inset-[3px] rounded-full bg-black flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
      </div>
    </div>
  );
}
